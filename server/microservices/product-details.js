import express from "express";

const router = express();

router.get("/api/v1/products/id", (_req, res) => {
  res.json({ message: "product-details-service is OK" });
});

export default router;
