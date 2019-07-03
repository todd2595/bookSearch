const router = require("express").Router();
const booksController = require("../../controllers/booksController");


router.route("/books/:id")
  .post(booksController.create);

router.route("/saved")
.get(booksController.findAll)

// Matches with "/api/books/:id"
router
  .route("/saved/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
