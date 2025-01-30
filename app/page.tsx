import Demo from "@/components/demo";
import Footer from "@/components/footer";
import NavBar from "@/components/navbar";
import React from "react";
export default function Home() {
  return (
    <>
      <NavBar />
      <main className="relative w-full min-h-screen flex items-start md:items-center justify-center px-4 py-10">
        <div className="relative gap-5 flex flex-col items-center justify-center">
          hi
          {/* <Demo /> */}
        </div>
      </main>
      <Footer />
    </>
  );
}





