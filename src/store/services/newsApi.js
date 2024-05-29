import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApi = createApi({
    reducerPath: "news",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com",
    }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => "/posts",
        }),
        addPost: builder.mutation({
            query: (newPost) => ({
                url: "/posts",
                method: "POST",
                body: newPost,
            }),
        }),
    }),
});

export const { useGetPostsQuery, useAddPostMutation } = newsApi;