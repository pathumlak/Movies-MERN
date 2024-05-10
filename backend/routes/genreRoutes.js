import express from "express";

const router = express.Router();

// Controllers
import {
  createGenre,
  updateGenre,
  deleteGenre,
  listGenres,
  readGenre,
} from "../controllers/genreControllers.js";

// Middlewares
import {
  authenticate,
  authorizedAdmin,
} from "../middlewares/authMiddleware.js"; // Corrected import statement
router.route("/").post(authenticate, authorizedAdmin, createGenre);
router.route("/:id").put(authenticate, authorizedAdmin, updateGenre);
router.route("/:id").delete(authenticate, authorizedAdmin, deleteGenre);
router.route("/all").get(listGenres);
router.route("/:id").get(readGenre);

export default router;
