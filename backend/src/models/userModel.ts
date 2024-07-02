import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
	first_name: string;
	last_name: string;
	email: string;
	number: string;
	createdAt: Date;
	updatedAt: Date;
}

const userSchema: mongoose.Schema<IUser> = new mongoose.Schema(
	{
		first_name: {
			type: String,
			default: null,
		},
		last_name: {
			type: String,
			default: null,
		},
	},
	{ timestamps: true, versionKey: false }
);

export const UserModel = mongoose.model<IUser>("User", userSchema);
