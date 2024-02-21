import type { Metadata } from "next";
import "./globals.css";

import AuthProvider from "@/contexts/AuthProvider";
import QuizProvider from "@/contexts/QuizProvider";
import ToastContext from "@/contexts/ToastContext";
import Loading from "./loading";

export const metadata: Metadata = {
  title: "Quiz App",
  description: "Choose a category to start playing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-100 w-full">
        <Loading>
          <AuthProvider>
            <QuizProvider>
              <ToastContext />
              {children}
            </QuizProvider>
          </AuthProvider>
        </Loading>
      </body>
    </html>
  );
}
