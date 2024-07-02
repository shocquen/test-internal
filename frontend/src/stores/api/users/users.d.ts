interface NewType {
	_id: string;
	first_name: string;
	last_name: string;
	email: string;
	number: string;
	expiration: Date;
	otp: string;
	createdAt: Date;
	updatedAt: Date;
}

// import { Metadata } from "../global.types";

export type UserBase = NewType;

export type UserBasePatch = Partial<UserBase>;

export interface UserResponse {
	data: Omit<UserBase, "password">; // TIPS: remove password field if backend sends it
}
