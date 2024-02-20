import type { Metadata } from "next";
import "./globals.css";

import AuthProvider from "@/contexts/AuthProvider";
import QuizProvider from "@/contexts/QuizProvider";
import ToastContext from "@/contexts/ToastContext";

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
        <AuthProvider>
          <QuizProvider>
            <ToastContext />
            {children}
          </QuizProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
