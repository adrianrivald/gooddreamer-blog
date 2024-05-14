import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className="max-w-[120rem] mx-auto">
      <Navbar />
      <div className="pt-[60px]">
        <Component {...pageProps} />
      </div>
      <Footer />
    </main>
  );
}
