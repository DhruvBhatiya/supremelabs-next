import { Container } from "@/components/container";
import { TestFilter } from "./Filter";
import { FilterHeader } from "./FilterHeader";
import { HelthCard } from "@/components/Homepage/HelthPackage/HelthCard";

import { useState } from "react";
import { Pagination } from "@/components/shared/Pagination";

export const Packages = () => {
  const ArrayData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2];
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = 10;
  return (
    <Container>
      <div className="pt-16 md:py-6 flex flex-col gap-10 xs:gap-6 sm:gap-6 pb-16 xs:pt-6 sm:pt-6 xs:pb-6 sm:pb-6">
        <div className="flex gap-12 sm:gap-5 xs:gap-5 sm:flex xs:flex sm:flex-col xs:flex-col">
          <TestFilter />
          <div className="min-h-[1120px] rounded-2xl  w-[77%] sm:w-full xs:w-full flex flex-col gap-12">
            <div>
              <FilterHeader />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-2xl font-semibold text-black">
                Health Packages
              </span>
              <span className="text-base font-normal text-gray-500">
                Don’t let your health take a back seat in today’s fast-paced
                world. Leave all your health worries to us. Book our health
                checkups and experience the most hassle-free testing!
              </span>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-6 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
                {ArrayData?.map((sl: any) => {
                  return (
                    <HelthCard
                      title="Test of the Lipid Profile"
                      description="It assesses your risks for potential health diseases and helps in health monitoring."
                      reportTime="16 hrs"
                      totalTest={5}
                      discount="15%"
                      sellingPrice={299}
                      purchasePrice={349}
                      className="xs:mr-0 sm:mr-0 md:mr-0"
                    />
                  );
                })}
              </div>
            </div>
            <div>
              <Pagination
                currentPage={currentPage}
                totalPages={10}
                onPageChange={handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
