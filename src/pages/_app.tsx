import React from "react";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider, HydrationBoundary } from '@tanstack/react-query'
import { MainLayout } from "@/layouts/MainLayout";
import "@/styles/globals.css";

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        retry: 3,
      },
    },
  })
}

export default function App({ Component, pageProps }: AppProps) {
    const [queryClient] = React.useState(() => makeQueryClient())

    return (
      <QueryClientProvider client={queryClient}>
          <HydrationBoundary state={pageProps.dehydratedState}>
              <MainLayout>
                  <Component {...pageProps} />
              </MainLayout>
          </HydrationBoundary>
      </QueryClientProvider>
    )
}
