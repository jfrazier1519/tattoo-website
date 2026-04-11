import React from "react";
import Button from "../components/shared/Button";
import { useSiteContent } from "../hooks/useSiteContent.js";
import { homeBody, homeSectionTitle } from "../components/home/homeTypography.js";

const NotFound = () => {
  const { notFound } = useSiteContent();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-stone-950 px-6 pb-16 pt-28 text-center md:pt-24">
      <h1 className={`${homeSectionTitle} mb-4 tabular-nums`}>
        {notFound.code}
      </h1>
      <p className={`${homeBody} mb-8 max-w-md`}>{notFound.message}</p>
      <Button to="/" variant="primary" size="lg">
        {notFound.goHome}
      </Button>
    </div>
  );
};

export default NotFound;
