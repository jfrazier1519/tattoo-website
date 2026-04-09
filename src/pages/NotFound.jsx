import React from "react";
import Button from "../components/shared/Button";
import { useSiteContent } from "../hooks/useSiteContent.js";

const NotFound = () => {
  const { notFound } = useSiteContent();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-black via-[#214045] to-white text-center px-6">
      <h1 className="text-6xl font-bold text-white mb-4 uppercase tracking-wider">
        {notFound.code}
      </h1>
      <p className="text-xl text-gray-200 mb-6 max-w-md">{notFound.message}</p>
      <Button to="/" size="lg">
        {notFound.goHome}
      </Button>
    </div>
  );
};

export default NotFound;
