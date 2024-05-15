import React from "react";
import type { AppProps } from "next/app";
import {  QueryClientProvider, HydrationBoundary } from '@tanstack/react-query'
import { MainLayout } from "@/layouts/MainLayout";
import { queryClient as makeQueryClient} from "@/constants/query-client";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
    const [queryClient] = React.useState(()=>makeQueryClient)

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
