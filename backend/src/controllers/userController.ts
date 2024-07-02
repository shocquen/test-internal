import { Request, Response } from "express";
import { UserService } from "../services";
import { IUser } from "models";
import jwt from "jsonwebtoken";
import { RequestWithUser } from "../middleware";

export class UserController {
	private service: UserService;

	constructor() {
		this.service = new UserService();
	}

	getMe = async (req: RequestWithUser, res: Response) => {
		try {
			const userId = req.jwt.userId; // Get the user ID from the authenticated user
			const user = await this.service.getUserById(userId);
			if (user) {
				res.json(user);
			} else {
				res.status(404).json({ error: "User not found." });
			}
		} catch (error: any) {
			res.status(500).json({ error: error.message });
		}
	};

	updateMe = async (req: RequestWithUser, res: Response) => {
		try {
			const userId = req.jwt.userId; // Get the user ID from the authenticated user
			const userData: IUser = req.body; // The updated user data is sent in the request body
			const updatedUser = await this.service.updateUser(userId, userData);
			res.json(updatedUser);
		} catch (error: any) {
			res.status(500).json({ error: error.message });
		}
	};

	getUsers = async (req: Request, res: Response) => {
		console.log(req.params.userId);

		try {
			const users = await this.service.getUsers();
			res.json(users);
			// errors should be typed
		} catch (error: any) {
			res.status(500).json({ error: error.message });
		}
	};

	getUserById = async (req: Request, res: Response) => {
		try {
			const userId: string = req.params.id; // User ID is passed as a route parameter
			const user = await this.service.getUserById(userId);
			if (user) {
				res.json(user);
			} else {
				res.status(404).json({ error: "User not found." });
			}
		} catch (error: any) {
			res.status(500).json({ error: error.message });
		}
	};

	addUser = async (req: Request, res: Response) => {
		try {
			const userData: IUser = req.body; // The user data is sent in the request body
			const newUser = await this.service.addUser(userData);
			res.status(201).json(newUser);
		} catch (error: any) {
			res.status(500).json({ error: error.message });
		}
	};

	updateUser = async (req: Request, res: Response) => {
		try {
			const userId: string = req.params.id; // User ID is passed as a route parameter
			const userData: IUser = req.body; // The updated user data is sent in the request body
			const updatedUser = await this.service.updateUser(userId, userData);
			res.json(updatedUser);
		} catch (error: any) {
			res.status(500).json({ error: error.message });
		}
	};

	// OTP
	verifyOTP = async (req: Request, res: Response) => {
		try {
			const userId: string = req.params.id; // User ID is passed as a route parameter
			const otp: string | undefined = req.query.otp as string; // Cast req.query.otp to string
			if (!otp) {
				res.status(400).json({ error: "OTP is required." });
				return;
			}
			const isValid = await this.service.verifyOTP(userId, otp || "");
			if (isValid) {
				// Generate JWT token
				const token = jwt.sign(
					{ userId }, // Payload
					process.env.JWT_SECRET as string,
					{ expiresIn: "1h" }
				);
				res.json({ message: "OTP verified successfully.", token });
			} else {
				res.status(400).json({ error: "Invalid OTP." });
			}
		} catch (error: any) {
			res.status(500).json({ error: error.message });
		}
	};

	generateOTP = async (req: Request, res: Response) => {
		try {
			const userId: string = req.params.id; // User ID is passed as a route parameter
			const otp = await this.service.generateOTP(userId);
			res.json({ otp }); //! Never respond OTP in prod, I'm doing it here for dev only
		} catch (error: any) {
			res.status(500).json({ error: error.message });
		}
	};
}
