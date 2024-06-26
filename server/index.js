import webserver from "./webserver.js";
import OutageLabClient from "@outagelab/sdk";

new OutageLabClient({
  application: "nile-web-backend",
  environment: process.env.ENVIRONMENT_NAME,
  apiKey: process.env.OUTAGELAB_API_KEY,
  enabled: (ctx) => ctx.environment !== "production",
});

webserver.start();

if (!process.env.OUTAGELAB_API_KEY) {
  console.error("OUTAGELAB_API_KEY env var is required");
  process.exit();
}
