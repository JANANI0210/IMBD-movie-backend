const express = require("express");
const router = express.Router();
const movieModel = require("../models/movie");
const {
  getAllMovies,
  addMovie,
  getMovieById,
  deleteMovie,
  updateMovie,
  getMovie,
} = require("../controllers/movie");

router.route("/").get(getAllMovies).post(addMovie);

router
  .route("/:id")
  .get(getMovie, getMovieById)
  .patch(getMovie, updateMovie)
  .delete(getMovie, deleteMovie);

module.exports = router;
