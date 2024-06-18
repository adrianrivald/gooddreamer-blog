import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import "react-loading-skeleton/dist/skeleton.css";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="max-w-[120rem] mx-auto">
        <Navbar />
        <div className="pt-[60px]">
          <Component {...pageProps} />
        </div>
        <Footer />
      </main>
      <Toaster />
    </QueryClientProvider>
  );
}
