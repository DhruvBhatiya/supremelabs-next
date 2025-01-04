import { Card } from "@/components/shared/card";
import { Container } from "@/components/container";
import { Accordion } from "@/components/shared/Accordion";
import EnquiryForm from "./EnquiryForm";
import { Text14, Text18 } from "@/components/shared/Text";

const AdditionalInfo = () => {


  const accordionData = [
    {
      accordion: "Additional information",
      data: [
        { title: "Sample Type", desc: "Lourem ipsum" },
        { title: "Sample Description", desc: "Lourem ipsum" },
        { title: "Method", desc: "Lourem ipsum" },
        { title: "Report Timing", desc: "2 Houres" },
        { title: "Number of Parameters", desc: "7" },
        { title: "Availability", desc: "Centre Name, Days,Time" },
        { title: "Speciality", desc: "Lourem ipsum" },
        { title: "Condition/Disease", desc: "Lourem ipsum" },
        { title: "Organ", desc: "Lourem ipsum" },
        { title: "Habit", desc: "Lourem ipsum" },
        { title: "Lifestyle", desc: "Lourem ipsum" },
        { title: "Available For", desc: "Gender + Age group" },
        { title: "Sample Report", desc: "Lourem ipsum" },
      ],
    },
  ];



  const TestsParameterlist = [
    {
      accordion: "Glucose Fasting",
      defaultOpen: true,
      data: [
        { desc: "Glucose Fasting / Blood Sugar Fasting" },
      ],
    },
    {
      accordion: "(KFT / RFT )",
      defaultOpen: false,
      data: [
        { desc: "(KFT / RFT )" },
      ],
    },
    {
      accordion: "Lipid Profile",
      defaultOpen: false,
      data: [
        { desc: "Lipid Profile" },
      ],
    },
    {
      accordion: "Liver Function Test (LFT)",
      defaultOpen: false,
      data: [
        { desc: "Liver Function Test (LFT)" },
      ],
    },
    {
      accordion: "CBC With Esr",
      defaultOpen: false,
      data: [
        { desc: "CBC With Esr" },
      ],
    },
    {
      accordion: "Thyroid Profile",
      defaultOpen: false,
      data: [
        { desc: "Thyroid Profile" },
      ],
    },
  ];


  return (
    <Card className="xs:pb-0">
      <Container>
        <div className="grid grid-cols-12 gap-6">
          {/* - */}
          <div className="col-span-12 lg:col-span-7 w-full">

            {/* 1. Additional information */}
            {accordionData.map((item, key) => {
              return (
                <Accordion
                  key={key}
                  className="w-full mb-6"
                  classNameHead="flex w-full items-center justify-between bg-[#F9FAFB] px-6 py-2 border-[1px] border-solid border-b-0 text-left rounded-t-xl font-[600]"
                  classNameBody="text-sm"
                  title={item.accordion}
                >
                  {item.data.map((d, key) => (
                    <div key={key} className="relative overflow-x-auto">
                      <table className=" border-[1px] border-solid w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <tbody>
                          <tr className="bg-white border-b ">
                            <th
                              scope="row"
                              className="font-medium text-[#1F2937] whitespace-nowrap w-1/2 lg:w-56 border-r-[0.5px] border-solid px-3 py-2 lg:px-6 lg:py-3 text-wrap"
                            >
                              {d.title}
                            </th>
                            <td className="px-3 py-2 lg:px-6 lg:py-3 ">
                              <Text14 color={'text-[#6B7280]'}>{d.desc}</Text14>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  ))}
                </Accordion>
              );
            })}

            {/* 2. Tests parameter list*/}
            <div className="border-b-[1px] border-solid bottom-1">
              <div className="flex items-center justify-between bg-[#F9FAFB] w-full px-6 py-2 border-[1px] border-solid border-b-0 text-left rounded-t-xl ">
                <Text18 color="text-[#1F2937]" className="font-[600]">Tests parameter list</Text18>
              </div>
              <div>
                {/* Body */}
                {TestsParameterlist.map((item, key) => {
                  return (
                    <Accordion
                      key={key}
                      className="w-full"
                      classNameHead="flex w-full items-center justify-between px-6 py-2 border-[1px] border-solid border-b-0 text-base text-left"
                      classNameBody="text-sm"
                      title={item.accordion}
                      defaultOpen={item.defaultOpen}
                    >
                      {item.data.map((d, key) => (
                        <div key={key} className="relative overflow-x-auto">
                          <table className=" border-[1px] border-solid w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <tbody>
                              <tr className="bg-white border-b ">
                                <td className="px-6 py-3 ">
                                  <Text14 color={'text-[#6B7280]'}>{d.desc}</Text14>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      ))}
                    </Accordion>
                  );
                })}

              </div>
            </div>
          </div>
          {/* + */}
          <div className="col-span-12 lg:col-span-5 w-full">
            <EnquiryForm />
          </div>
        </div>
      </Container>
    </Card>
  );
};

export default AdditionalInfo;
