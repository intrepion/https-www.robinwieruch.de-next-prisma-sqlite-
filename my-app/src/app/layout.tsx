import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const appNav = (
    <>
      <li>
        <Link href="/">LOGO</Link>
      </li>
      <li>
        <Link href="/dashboard">Dashboard</Link>
      </li>
    </>
  );

  const authNav = (
    <>
      <li>
        <Link href="/sign-up">Sign Up</Link>
      </li>
      <li>
        <Link href="/sign-in">Sign In</Link>
      </li>
      <li>
        <button>Sign Out</button>
      </li>
    </>
  );

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="p-4 flex justify-between">
          <ul className="flex gap-x-4 items-center">{appNav}</ul>
          <ul className="flex gap-x-4 items-center">{authNav}</ul>
        </nav>

        <hr />

        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
