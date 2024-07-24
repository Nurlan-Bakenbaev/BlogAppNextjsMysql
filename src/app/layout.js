import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { AuthContextProvider } from "@/context/authContext";
import { PostContextProvider } from "@/context/postsContext";

import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MySQL Blog App",
  description: "Blog app with mysql database",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
          <PostContextProvider>
            <NavBar />
            <div className="w-full md:w-[80%] mx-auto">{children}</div>
            <Footer />
          </PostContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}
