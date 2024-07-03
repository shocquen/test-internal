import api from "../api";
import { UserBase } from "./users";

const ENDPOINT = "users";

export const userApi = api.injectEndpoints({
	endpoints: (builder) => ({
		createUser: builder.mutation<UserBase, Partial<UserBase>>({
			query: (user: Partial<UserBase>) => ({
				url: ENDPOINT,
				method: "POST",
				body: user,
			}),
		}),
		generateUserOTP: builder.mutation<{ otp: string }, string>({
			query: (id: string) => ({
				url: `${ENDPOINT}/${id}/otp`,
				method: "POST",
			}),
		}),
		verifyUserOTP: builder.query<
			{ message: string; token: string },
			{ id: string; otp: string }
		>({
			query: ({ id, otp }) => `${ENDPOINT}/${id}/otp?otp=${otp}`,
		}),
		getMe: builder.query<Partial<UserBase>, void>({
			query: () => `${ENDPOINT}/me`,
		}),
		updateMe: builder.mutation<Partial<UserBase>, Partial<UserBase>>({
			query: (user: Partial<UserBase>) => ({
				url: `${ENDPOINT}/me`,
				method: "PATCH",
				body: user,
			}),
		}),
	}),
});

export const {
	useCreateUserMutation,
	useGenerateUserOTPMutation,
	useVerifyUserOTPQuery,
	useGetMeQuery,
	useUpdateMeMutation,
} = userApi;
