import express from "express";
const router = express.Router();

import {
  getProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty,
  getFeaturedForSale,
  getFeaturedForRent,
} from "../controllers/PropertyController.js";

import { protect, authorize } from "../middlewares/authMiddleware.js";

router
  .route("/")
  .get(getProperties)
  .post(protect, authorize("realtor", "admin"), createProperty);

router.route("/featuredforsale").get(getFeaturedForSale);
router.route("/featuredforrent").get(getFeaturedForRent);

router
  .route("/:id")
  .get(getPropertyById)
  .put(protect, authorize("realtor", "admin"), updateProperty)
  .delete(protect, authorize("realtor", "admin"), deleteProperty);

export default router;
