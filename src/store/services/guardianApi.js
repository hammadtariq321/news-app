import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = 'af2d6da9-5324-4b18-9e02-b3214fa0af7c';
const BASE_URL = 'https://content.guardianapis.com';

export const guardianApi = createApi({
    reducerPath: 'guardianApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        fetchArticles: builder.query({
            query: ({ keyword, fromDate, toDate, section, page = 1, pageSize = 10 }) => {
                const params = new URLSearchParams({
                    'api-key': API_KEY,
                    'show-fields': 'headline,byline,thumbnail'
                });

                if (keyword) params.append('q', keyword);
                if (fromDate) params.append('from-date', fromDate);
                if (toDate) params.append('to-date', toDate);
                if (section) params.append('section', section);
                params.append('page', page);
                params.append('page-size', pageSize);

                return `search?${params.toString()}`;
            }
        }),
        fetchSections: builder.query({
            query: () => `sections?api-key=${API_KEY}`
        }),
        fetchAuthors: builder.query({
            query: () => `tags?type=contributor&api-key=${API_KEY}`
        })
    })
});

export const { useFetchArticlesQuery, useFetchSectionsQuery, useFetchAuthorsQuery } = guardianApi;
