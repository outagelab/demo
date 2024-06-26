import express from "express";

const router = express();

router.get("/api/v1/orders", (_req, res) => {
  res.json({ message: "order-history-service is OK" });
});

export default router;
