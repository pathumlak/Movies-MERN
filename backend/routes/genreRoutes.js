import express from "express";
const router = express.Router();

// Controllers
import {
  createGenre,
  updateGenre,
  removeGenre,
  listGenres,
  readGenre,
} from "../controllers/genreControllers.js";

// Middlewares
import {
  authenticate,
  authorizedAdmin,
} from "../middlewares/authMiddleware.js";

router.route("/").post(authenticate, authorizedAdmin, createGenre);
router.route("/:id").put(authenticate, authorizedAdmin, updateGenre);
router.route("/:id").delete(authenticate, authorizedAdmin, removeGenre);

// Corrected order of routes
router.route("/genres").get(listGenres); // Moved up
router.route("/:id").get(readGenre); // Moved down

export default router;
