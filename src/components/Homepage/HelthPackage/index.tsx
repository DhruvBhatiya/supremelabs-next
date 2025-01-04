import { Container } from "@/components/container";
import { HelthCard } from "./HelthCard";
import { CustomSlickSlider } from "@/components/SlickSlider";

const HelthPackage = () => {
  const sliderArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className="bg-gray-50">
      <Container>
        <div className="pt-16 flex flex-col gap-10 md:py-6 sm:gap-6 xs:gap-6 pb-16  xs:pt-6 sm:pt-6 xs:pb-6 sm:pb-6">
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-5xl sm:text-2xl xs:text-2xl text-gray-950 font-bold">
              Top Health{" "}
              <span className="text-turnary-800 font-bold"> Packages</span>
            </h2>
            <span className="text-based text-gray-500 font-normal sm:text-xs xs:text-xs">
              The best-in-class laboratories from across India Reliable
              Diagnostics to bring the latest technology and techniques
              <br />
              within the reach of every individuals.
            </span>
          </div>
          <CustomSlickSlider>
            {sliderArr?.map((sl) => {
              return (
                <HelthCard
                  title="Test of the Lipid Profile"
                  description="It assesses your risks for potential health diseases and helps in health monitoring."
                  reportTime="16 hrs"
                  totalTest={5}
                  discount="15%"
                  sellingPrice={299}
                  purchasePrice={349}
                />
              );
            })}
          </CustomSlickSlider>
        </div>
      </Container>
    </div>
  );
};
export default HelthPackage;
