import Image from "next/image";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/Homepage/heroSection";
import FrequentlyBook from "@/components/Homepage/FrequentlyBooked";
import { ReportSearch } from "@/components/Homepage/ReportSearch";
import OurServices from "@/components/Homepage/OurServices";
import HelthPackage from "@/components/Homepage/HelthPackage";
import BookNow from "@/components/Homepage/BookNow";
import Testimonials from "@/components/Homepage/Testomonial";
import Counter from "@/components/Homepage/Counter";
import { Footer } from "@/components/footer";
import { useState, useEffect } from "react";
import MyModal from "@/components/shared/MyModal";
import close from "@/assets/images/close-squre.svg";
import GridBook from "@/components/Homepage/GridItem";
import PurposeofMedicalLab from "@/components/Homepage/heroSection/PurposeofMedicalLab";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <Header />
      <HeroSection />
      <GridBook />
      {/* <ReportSearch /> */}
      <FrequentlyBook />
      <HelthPackage />
      <div className="xs:block sm:block hidden bg-gray-50 pt-6 pb-10">
        <PurposeofMedicalLab />
      </div>
      <OurServices />
      <Testimonials />
      <Counter />
      <BookNow />
      {isMobileView && (
        <div className="md:hidden sm:block fixed bottom-0 w-full">
          <div className="w-full px-3 py-[6px] rounded-t-lg 11bg-secondory-400 11border bg-primary-300 shadow-2xl ">
            <label className="block mb-1 text-sm text-center font-medium text-white ml-0">
              Get a call back from our Health Advisor
            </label>
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 py-1 h-10"
              placeholder="Enter your 10 digit mobile number"
              onClick={openModal}
            />
          </div>
        </div>
      )}
      <Footer />
      {isMobileView && (
        <MyModal
          isOpen={isModalOpen}
          closeModal={closeModal}
          className={`w-[450px] max-w-full py-5 px-5`}
        >
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between">
                <h3 className="text-2xl">Book Now</h3>
                <Image
                  src={close}
                  alt={""}
                  onClick={closeModal}
                  className="w-6"
                />
              </div>
              <div className="flex flex-col w-full gap-4">
                <div className="w-full">
                  <label
                    htmlFor="last_name"
                    className="block mb-1 text-base font-medium text-black ml-0"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  h-12"
                    placeholder="Enter your Name"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="Mobile_No"
                    className="block mb-1 text-base font-medium text-black ml-0"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="Mobile_No"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  h-12"
                    placeholder="Enter phone number"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="Querry"
                  className="block mb-1 text-base font-medium text-gray-800 ml-0"
                >
                  Message
                </label>
                <textarea
                  id="Querry"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="Type your message...."
                  required
                  rows={4}
                />
              </div>
            </div>
            <div className="flex items-center gap-4 sm:flex-col-reverse xs:items-start sm:items-start xs:flex-col-reverse">
              <button
                type="submit"
                className="text-white md:hidden lg:hidden xl:hidden 2xl:hidden 3xl:hidden bg-primary-300 hover:bg-primary-300 font-medium rounded-full xs:w-full sm:w-full w-32  text-center h-12 text-base"
              >
                Book An Appointment
              </button>
              <button
                type="submit"
                className="text-white sm:hidden xs:hidden bg-primary-300 hover:bg-primary-300 font-medium rounded-full w-[170px] sm:w-auto text-center h-12 text-base"
              >
                Contact Us
              </button>
              <span className="text-base font-normal text-gray-500">
                Get Your Qute or Call: (080) 5332-253-184
              </span>
            </div>
          </div>
        </MyModal>
      )}
    </div>
  );
}
