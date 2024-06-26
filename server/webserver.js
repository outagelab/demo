import express from "express";
import proxy from "express-http-proxy";
import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

import recommendations from "./microservices/recommendations.js";
import orderHistory from "./microservices/order-history.js";
import productDetails from "./microservices/product-details.js";
import productSearch from "./microservices/product-search.js";
import shoppingCart from "./microservices/shopping-cart.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = process.env.PORT || 4000;
const defaultHost = `http://localhost:${port}`;
const recHost = process.env.RECOMMENDATIONS_HOST || defaultHost;
const cartHost = process.env.SHOPPING_CART_HOST || defaultHost;
const searchHost = process.env.PRODUCT_SEARCH_HOST || defaultHost;
const detailsHost = process.env.PRODUCT_DETAILS_HOST || defaultHost;
const ordersHost = process.env.ORDER_HISTORY_HOST || defaultHost;

const app = express();

// web API
app.get("/webapi/recommendations", pathProxy(recHost, "/products/recommended"));
app.get("/webapi/shopping-cart", pathProxy(cartHost, "/cart/items"));
app.get("/webapi/product-search", pathProxy(searchHost, "/search"));
app.get("/webapi/product-details", pathProxy(detailsHost, "/products/id"));
app.get("/webapi/orders", pathProxy(ordersHost, "/orders"));

// microservices
app.use("/", recommendations);
app.use("/", shoppingCart);
app.use("/", productSearch);
app.use("/", productDetails);
app.use("/", orderHistory);

// SPA support
app.use(express.static(__dirname + "/../dist"));
app.get("*", function (request, response) {
  if (request.url.includes("api/")) {
    response.sendStatus(404);
  }
  response.sendFile(path.resolve(__dirname + "/../dist", "index.html"));
});

export default {
  start() {
    app.listen(port, () => {
      console.log("Server listening at http://localhost:4000");
    });
  },
};

function pathProxy(host, path) {
  return proxy(host, {
    proxyReqPathResolver() {
      return "/api/v1" + path;
    },
  });
}
