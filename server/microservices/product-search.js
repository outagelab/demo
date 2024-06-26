import express from "express";

const router = express();

router.get("/api/v1/search", (_req, res) => {
  res.json({ message: "product-search-service is OK" });
});

export default router;
