import express from "express";

const router = express();

router.get("/api/v1/cart/items", (_req, res) => {
  res.json({ message: "shopping-cart-service is OK" });
});

export default router;
