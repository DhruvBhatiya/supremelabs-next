import React from "react";
import Gridcard from "./Gridcard";
import { Container } from "@/components/container";
import Image from "next/image";
import Booktest from "@/assets/images/book-test.jpg";
import DrConsultation from "@/assets/images/DrConsultation.jpg";
import LabReport from "@/assets/images/LabReport.jpg";
import UploadPrescription from "@/assets/images/Prescription.jpg";
import reportsconsultation from "@/assets/images/consultation.jpg";
import HomeCollection from "@/assets/images/home-collection.jpg";

const GridBook = () => {
  const GridList = [
    {
      title: "Home Collection",
      image: HomeCollection,
      off: "Up to 70% off",
    },
    {
      title: "Book a test",
      image: Booktest,
      off: "Up to 70% off",
    },
    {
      title: "Dr. Consultation",
      image: DrConsultation,
      off: "Up to 70% off",
    },
    {
      title: "Lab Report",
      image: LabReport,
      off: "Up to 70% off",
    },
    {
      title: "Upload Prescription",
      image: UploadPrescription,
      off: "Up to 70% off",
    },
    {
      title: "Free Reports Consultation",
      image: reportsconsultation,
      off: "Up to 70% off",
    },
  ];
  return (
    <div className="bg-gray-50 py-16 xs:pt-6 sm:pt-6 xs:pb-6 sm:pb-6">
      <Container>
        <div className="grid grid-cols-6 md:grid-cols-4 gap-6 xs:gap-3 sm:gap-4 sm:grid-cols-3 xs:grid-cols-3  ">
          {GridList.map((db) => (
            <div className="flex flex-col xs:gap-2 sm:gap-2 gap-3 items-center w-full">
              <div className="relative bg-secondory-400 11p-6 rounded-[12px] h-24 lg:h-[120px] w-full flex items-center justify-center ">
                {/* <MdCollections className="h-[48px] w-[48px]" /> */}
                <Image src={db.image} alt="hero-image" className="w-20 lg:w-28 mb-5" />
                <p className="text-[#00a0a8] w-[80%] text-center py-1 px-4 sm:px-1 xs:px-1 bg-[#EBFCFD] rounded-[30px]  text-[10px] absolute bottom-0 font-normal">
                 {db.off}
                </p>
              </div>
              <div className="flex flex-col gap-4 text-left ">
                <h4 className="text-gray-950 xs:text-xs  text-sm text-center font-light">
                  {db.title}
                </h4>
              </div>
            </div>
          ))}
          
        </div>
      </Container>
    </div>
  );
};

export default GridBook;
