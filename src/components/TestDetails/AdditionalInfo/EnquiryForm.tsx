import { Text14, Text16, Text18, Text24 } from "@/components/shared/Text";
import React, { useState } from "react";
import fileImg from "@/assets/images/icon/file-text.svg";
import Image from "next/image";
import { BorderBox } from "@/components/shared/card";
import CustomButton from "@/components/CustomButton";
import Input from "@/components/shared/Input";
import { SelectBox } from "@/components/shared/SelectBox";
import OTPInput from "@/components/shared/OtpInput";
import { CheckBox } from "@/components/shared/CheckBox";

const EnquiryForm = () => {
  const [select, setSelect] = useState<any>();
  const option = [{ name: "A" }];
  const [otp, setOtp] = useState<number>();

  return (
    <div className="border-[1px] border-solid p-4 lg:p-6 bg-grey-deafult rounded-3xl w-full">
      <BorderBox className="p-5 flex items-center gap-3 bg-white rounded-2xl justify-center mb-6">
        <Image src={fileImg} alt={""} />
        <Text24 color="text-[#030712] font-bold">Enquiry Form</Text24>
      </BorderBox>

      <form>
        <Input
          label={"Customer Name"}
          type={"type"}
          placeholder={"Jerome B."}
        />
        <div className="mb-4">
          <SelectBox
            label="Test"
            palaceHolder="Select Test"
            option={option}
            selected={select}
            setSelected={setSelect}
            className={'bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-black focus:border-black block w-full py-[14px] px-4 '}
            classNamePHolder={'text-red'}
          />
        </div>
        <Input
          label={"Phone Number"}
          type={"tel"}
        />
        <div className="flex justify-between items-center mb-4">
          <Text18 className="font-[600]" color="text-[#1F2937]">Enter OTP</Text18>
          <div className="flex gap-2 items-center">
            <CheckBox />
            <Text14 color="text-[#1F2937]" className=" font-medium">Verified Number</Text14>
          </div>
        </div>
        <div className="mb-4">
          <OTPInput className="bg-transparent" numInputs={4} setOtp={setOtp} />
        </div>
      </form>

      <Text18 className="font-semibold mb-6" color="text-[#4B5563]">Time Remainning :- 03 : 20s</Text18>
      <CustomButton className="w-full h-12 text-[16px]"><Text16 className="text-white font-[500]">Submit</Text16></CustomButton>

    </div>
  );
};

export default EnquiryForm;
