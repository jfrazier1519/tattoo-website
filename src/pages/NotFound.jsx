import React from "react";
import Button from "../components/shared/Button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-[#214045] to-white text-center px-6">
      <h1 className="text-6xl font-bold text-white mb-4 uppercase tracking-wider">
        404
      </h1>
      <p className="text-xl text-gray-200 mb-6 max-w-md">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Button to="/" size="lg">
        Go Home
      </Button>
    </div>
  );
};

export default NotFound;
