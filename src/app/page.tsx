import React, { useCallback } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import CardComponents from "./components/CardComponent";
import "../app/styles/globals.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between stars-box">
      <Header />
      {/* <CardComponents /> */}
      <Footer />
    </main>
  );
}
