"use client";
import React, { useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export default function ReactQueryProvider({ children }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
}
