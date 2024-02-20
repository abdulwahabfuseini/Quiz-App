import GetStarted from '@/components/GetStarted'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz App | Get Started",
  description: "Quiz Time...",
};

const StartPage = () => {
  return (
    <div>
      <GetStarted />
    </div>
  )
}

export default StartPage