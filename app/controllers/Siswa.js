// Import model Product
import Siswa from "../models/Siswa.js"; // Get semua product

export const getSiswa = async (req, res) => {
  try {
    const siswa = await Siswa.findAll();
    res.send(siswa);
  } catch (err) {
    console.log(err);
  }
};

// // Get product berdasarkan id
// export const getProductById = async (req, res) => {
//   try {
//     const product = await Product.findAll({
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.send(product[0]);
//   } catch (err) {
//     console.log(err);
//   }
// };

// Create product baru
export const createSiswa = async (req, res) => {
  try {
    await Siswa.create(req.body);
    res.json({
      message: "Siswa Created",
    });
  } catch (err) {
    console.log(err);
  }
};

// // Update product berdasarkan id
// export const updateProduct = async (req, res) => {
//   try {
//     await Product.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.json({
//       message: "Product Updated",
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };

// // Delete product berdasarkan id
// export const deleteProduct = async (req, res) => {
//   try {
//     await Product.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.json({
//       message: "Product Deleted",
//     });
//   } catch (err) {
//     console.log(err);
//   }
// };
