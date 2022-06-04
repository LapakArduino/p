// Import express
import express from "express";
// Import Controller Product
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  latihan,
} from "../controllers/Product.js";
import { createSiswa, getSiswa } from "../controllers/Siswa.js";

// Init express router
const router = express.Router();

router.get("/eko", latihan);
// Route get semua product
router.get("/products", getProducts);
// Route get product by id
router.get("/products/:id", getProductById);
// Route create product baru
router.post("/products", createProduct);
// Route update product by id
router.put("/products/:id", updateProduct);
// Route delete product by id
router.delete("/products/:id", deleteProduct);

router.get("/siswa", getSiswa);
router.post("/siswa", createSiswa);

// export router
export default router;
