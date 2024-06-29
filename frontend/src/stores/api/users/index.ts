import api from "../api";
import { UserBase, UserBasePatch } from "./users";

const ENDPOINT = "users";

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query<UserBase[], void>({
      query: () => ENDPOINT,
    }),
    getUserById: builder.query<UserBase, string>({
      query: (id) => `${ENDPOINT}/${id}`,
    }),
    updateUser: builder.mutation<UserBase, object>({
      query: ({
        _id,
        ...formData
      }: UserBasePatch) => ({
        url: `${ENDPOINT}/${_id}`,
        method: "PATCH",
        body: formData
      })
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery, useUpdateUserMutation } = userApi;
