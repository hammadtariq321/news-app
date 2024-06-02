import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const NEWS_API_KEY = '4f7267d36a4d4d408c927f812c372886';

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://newsapi.org/v2/' }),
    endpoints: (builder) => ({
        getTopHeadlines: builder.query({
            query: ({ category = 'general', country = 'us' }) =>
                `top-headlines?category=${category}&country=${country}&apiKey=${NEWS_API_KEY}`,
        }),
        searchNews: builder.query({
            query: (query) =>
                `everything?q=${query}&apiKey=${NEWS_API_KEY}`,
        }),
        getSources: builder.query({
            query: () =>
                `sources?apiKey=${NEWS_API_KEY}`,
        }),
    }),
});

export const { useGetTopHeadlinesQuery, useSearchNewsQuery, useGetSourcesQuery } = newsApi;
