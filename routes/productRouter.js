const productController = require("../controllers/productController");
const reviewController = require("../controllers/reviewController");

const router = require("express").Router();

router.post("/addProduct", productController.addProduct);
router.get("/getAllProducts", productController.getAllProducts);
router.get("/:id", productController.getOneProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);
router.get("/getPublishedProduct", productController.getPublishedProduct);
router.get("/getProductReviews",productController.getProductReviews)

router.post("/addReview", reviewController.addReview);
router.post("/getReviews",reviewController.AllReviews)

module.exports = router;
