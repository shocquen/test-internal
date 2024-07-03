import { UserController } from "../controllers";
import express from "express";
import { validateApiAccess } from "../middleware";

const router = express.Router();
const userController = new UserController();

// * To implement this routes, I sould implement an admin role
// router.get("/", validateApiAccess, userController.getUsers);
// router.get("/:id", userController.getUserById);
// router.put("/:id", userController.updateUser);

// * Would require a ratelimit
router.post("/", userController.addUser);
router.post("/:id/otp", userController.generateOTP);
router.get("/:id/otp", userController.verifyOTP);

router.get("/me", validateApiAccess, userController.getMe);
router.patch("/me", validateApiAccess, userController.updateMe);

export { router as userRouter };
