import { Card } from "@/components/shared/card";
import { Container } from "@/components/container";
import Image from "next/image";
import thyroidPro from "@/assets/images/test/Thyroid-Profile-Test.png";
import check from "@/assets/images/check-green.svg";
import {
  Text16,
  Text20,
  Text24,
  Text32,
  TextSky,
} from "@/components/shared/Text";
import TitleSection from "@/components/titleSection";
import CustomButton from "@/components/CustomButton";
import Link from "next/link";
const HeroTestDetails = () => {
  return (
    <Card className="bg4">
      <Container>
        <div className="grid grid-cols-12">
          {/* - */}
          <div className="col-span-12 md:col-span-6 lg:col-span-6">
            <Image
              src={thyroidPro}
              alt={""}
              width={500}
              height={400}
              className="11w-[500px]"
            />
          </div>
          {/* + */}
          <div className="col-span-12 md:col-span-6 lg:col-span-6">
            <div className="mx-auto w-fit">

              <div className="flex gap-2 items-center bg-[#EBFAF2] border-2 border-solid border-[#1A8952] p-2 rounded-xl w-fit mb-[18px] xs:mt-2">
                <Image src={check} alt={""} />
                <Text16 className="font-medium !text-[#1A8952]">
                  Government approved provider
                </Text16>
              </div>
              <TitleSection
                className="lg:text-[40px]"
                pink={"Thyroid Profile "}
                black={""}
                blue={"Test"}
              />
              {/* Amount */}
              <div className="flex items-center gap-2 mb-6">
                <Text32>₹299</Text32>
                <Text24 className="line-through">₹349</Text24>
                <Text20>
                  <TextSky>(15% OFF)</TextSky>
                </Text20>
              </div>
              <Text16 className="hidden lg:block mb-6">
                Thyroid tests tell your healthcare provider how well your thyroid
                gland works. These tests can help diagnose conditions like
                hyperthyroidism, hypothyroidism, Graves’ disease, Hashimoto’s
                disease and thyroid cancer. Types of thyroid tests include blood
                tests, imaging tests and nuclear medicine tests.
              </Text16>
              <div className="flex flex-wrap gap-3">
                {" "}
                <CustomButton href={"/checkout"} className="w-full lg:w-[314px] h-14">
                  Add to cart
                </CustomButton>
                {" "}
                <CustomButton href={"/checkout"} className="w-full lg:w-[314px] h-14 bg-turnary-800 border-turnary-800">
                  Buy it now
                </CustomButton>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Card>
  );
};

export default HeroTestDetails;
