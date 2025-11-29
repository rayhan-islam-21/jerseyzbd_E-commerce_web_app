import { Bebas_Neue, Poppins,Fira_Sans_Condensed } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/authprovider/Authprovider";

const firasans = Fira_Sans_Condensed({
  subsets: ["latin"],
  weight: ["400","600","700","900"],
})


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${firasans.className} antialiased`}>
       <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
