// import { Metadata } from "../global.types";

export type UserBase = {
  _id: string;
  email: string;
  fistname: string;
  lastname: string;
  number: string;
  createdAt: Date;
  updatedAt: Date;
};

export type UserBasePatch = Partial<UserBase>;

export interface UserResponse {
  data: Omit<UserBase, "password">; // TIPS: remove password field if backend sends it
}
