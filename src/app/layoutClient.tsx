"use client";

import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

type ChildrenProps = {
  children: React.ReactNode;
};
const layoutClient = ({ children }: ChildrenProps) => {
  const qr = new QueryClient();
  return (
    <QueryClientProvider client={qr}>
      <div className="layout">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
};

export default layoutClient;
