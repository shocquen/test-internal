import { UserModel, IUser } from "../models";

export class UserService {
	private model: typeof UserModel;

	constructor() {
		this.model = UserModel;
	}

	async getUsers() {
		return this.model.find();
	}

	async getUserById(userId: string) {
		return this.model.findById(userId);
	}

	async addUser(user: IUser) {
		const newUser = new this.model(user);
		return newUser.save();
	}

	async updateUser(userId: string, updatedUser: IUser) {
		return this.model.findByIdAndUpdate(userId, updatedUser, { new: true });
	}

	// OTP
	async verifyOTP(userId: string, otp: string): Promise<boolean> {
		// Assuming there's a method to find the OTP associated with the user
		const userOtp = await this.model
			.findById(userId)
			.select(["+otp", "expiration"]);

		if (!userOtp) {
			throw new Error("User not found.");
		}

		console.log("hello: ", userOtp);
		const isOtpValid = userOtp.otp === otp;
		const isOtpExpired = new Date() > userOtp.expiration; // Assuming expiration is a Date object

		if (isOtpValid && !isOtpExpired) {
			// Optionally, invalidate the OTP after successful verification
			await this.model.findByIdAndUpdate(userId, {
				otp: null,
				expiration: null,
			});
			return true;
		} else {
			return false;
		}
	}

	async generateOTP(userId: string): Promise<string> {
		const OTP = Math.floor(10000 + Math.random() * 90000).toString(); // 5 digits string
		const expiration = () => new Date(Date.now() + 15 * 60 * 1000);
		try {
			await this.model.findByIdAndUpdate(userId, <Partial<IUser>>{
				otp: OTP,
				expiration: expiration(), // 15 minutes in future
			});
			return OTP;
		} catch (error) {
			throw new Error("Failed to generate OTP.");
		}
	}
}
