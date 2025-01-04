import React from "react";
import Image from "next/image";
import heart from "@/assets/svg/heart.svg";
import arrow from "@/assets/svg/right-arrow.svg";
import body from "@/assets/svg/body.svg";
import cancer from "@/assets/svg/cancer.svg";
import allergy from "@/assets/svg/allergy.svg";
import { Container } from "@/components/container";
import { FrequentlyCard } from "./FrequentlyCard";

const FrequentlyBook = () => {
  return (
    <Container>
      <div className="text-center md:py-6 pt-16 flex flex-col gap-10 sm:gap-5 xs:gap-5 pb-16 xs:pt-6 sm:pt-6 xs:pb-6 sm:pb-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-5xl sm:text-2xl xs:text-2xl text-gray-950 font-bold">
            Frequently{" "}
            <span className="text-turnary-800 font-bold"> Booked</span>
          </h2>
          <span className="text-based sm:text-xs xs:text-sm text-gray-500 font-normal">
            Reliable Diagnostic service center has been the diagnostic center
            for all your healthcare needs as we have been assisting <br />
            medical professionals by providing Zero error reports.
          </span>
        </div>
        <div className="grid xs:grid-cols-2 sm:grid-cols-2 grid-cols-4 md:grid-cols-2 gap-6 xs:gap-4 sm:gap-4 11xs:flex sm:flex 11xs:flex-col 11sm:flex-col">
          <FrequentlyCard icon={heart} title="Heart" subTitle="Book a test" />
          <FrequentlyCard
            icon={body}
            title="Full body"
            subTitle="Book a test"
          />
          <FrequentlyCard icon={cancer} title="Cancer" subTitle="Book a test" />
          <FrequentlyCard
            icon={allergy}
            title="Allergy"
            subTitle="Book a test"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="text-white bg-primary-300 hover:bg-primary-300 font-medium rounded-full w-40 sm:w-auto px-5 py-2.5 text-center h-12 text-base"
          >
            Find Your Test
          </button>
        </div>
      </div>
    </Container>
  );
};
export default FrequentlyBook;
