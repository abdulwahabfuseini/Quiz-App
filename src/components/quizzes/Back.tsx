"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaChevronLeft } from "react-icons/fa";
import { PiSealWarningFill  } from "react-icons/pi";

const Back = () => {
  const router = useRouter();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const {data: session} = useSession()

  const handleButtonClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    setShowConfirmation(false);
    router.push("/categories");
    toast.success("You Confirmed quitting the quiz")
  };

  const handleCancel = () => {
    setShowConfirmation(false);
    toast.error("Continue with the quiz")
  };

  return (
    <div className="relative w-full sm:w-96">
      <button
        onClick={handleButtonClick}
        className="aqua-background shadow-lg text-white rounded-full p-2 mb-1"
      >
        <FaChevronLeft className="text-2xl" />
      </button>
      {showConfirmation && (
        <div className="rounded-lg bg-white p-4 shadow-2xl absolute -top-2 left-0 right-0 z-50">
          <h1 className="text-lg pb-2 font-bold">{session?.user?.name}</h1>
          <span className="text-lg sm:text-xl text-center font-bold flex items-cente gap-1 text-red-600">
          <PiSealWarningFill  className="w-8 h-7 font-extrabold" />
            Are you sure you want to quit quiz
          </span>

          <div className="mt-4 flex gap-2">
            <button
              type="button"
              onClick={handleConfirm}
              className="rounded bg-green-200 p-1.5 text-lg font-medium text-green-700"
            >
              Yes, Quit
            </button>

            <button
              type="button"
              onClick={handleCancel}
              className="rounded bg-red-200 p-1.5 text-lg font-medium text-red-600"
            >
              No, Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Back;
