import express from "express";

const router = express();

router.get("/api/v1/products/recommended", (_req, res) => {
  res.json({ message: "recommendations-service is OK" });
});

export default router;
