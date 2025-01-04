import { Container } from "@/components/container"
import { Text16, Text20, Text24, Text32, TextSky } from "@/components/shared/Text"
import { BorderBox, Card } from "@/components/shared/card"
import Image from "next/image"
import Cities from "@/assets/images/benefits/Cities.svg"
import Ontime from "@/assets/images/benefits/On-time.svg"
import Reports24 from "@/assets/images/benefits/Reports24.svg"
import affordable from "@/assets/images/benefits/affordable.svg"
import certifiedLabs from "@/assets/images/benefits/certifiedLabs.svg"
import consultation from "@/assets/images/benefits/consultation.svg"
import dot from "@/assets/svg/dot.svg"
import { FaqSection } from "@/components/BookHome/FaqSection"
import { AccordionGroup } from "@/components/shared/AccordionGroup"

const Reports = () => {

    const TestCriteriaArray = [
        {
            title: "Q. Who all are eligible for this test?",
            content:
                "People with the following symptoms: mood change, frequent gastric troubles, fatigue, change in vision, excessive hair fall, dry skin, cold hands, mental fogging, weight changes, etc.",
        },
        {
            title: "Q. Why take thyroid test?",
            content:
                "People with the following symptoms: mood change, frequent gastric troubles, fatigue, change in vision, excessive hair fall, dry skin, cold hands, mental fogging, weight changes, etc.",
        },
        {
            title: "Q. What are the benefits of this test?",
            content:
                "People with the following symptoms: mood change, frequent gastric troubles, fatigue, change in vision, excessive hair fall, dry skin, cold hands, mental fogging, weight changes, etc.",
        },
    ];
    const TestFaqaArray = [
        {
            title: "Q. How can I book my test?",
            content:
                "A. If you are planning to book diagnostic tests with Redcliffe Labs, then it is quite a simple and smooth process. All you have to do is just call us and our well trained and patient-friendly representatives will book an appointment for you. Also, you can book the test online by visiting our website and as soon as we get your query within no time we will make sure to book the appointment for you.",
        },
        {
            title: "Q. In how much time will I get my test report?",
            content:
                "A. If you are planning to book diagnostic tests with Redcliffe Labs, then it is quite a simple and smooth process. All you have to do is just call us and our well trained and patient-friendly representatives will book an appointment for you. Also, you can book the test online by visiting our website and as soon as we get your query within no time we will make sure to book the appointment for you.",
        },
        {
            title: "Q. Where can I see or get my test results?",
            content:
                "A. If you are planning to book diagnostic tests with Redcliffe Labs, then it is quite a simple and smooth process. All you have to do is just call us and our well trained and patient-friendly representatives will book an appointment for you. Also, you can book the test online by visiting our website and as soon as we get your query within no time we will make sure to book the appointment for you.",
        },
        {
            title: "Q. Is home sample collection available for Thyroid test?",
            content:
                "A. If you are planning to book diagnostic tests with Redcliffe Labs, then it is quite a simple and smooth process. All you have to do is just call us and our well trained and patient-friendly representatives will book an appointment for you. Also, you can book the test online by visiting our website and as soon as we get your query within no time we will make sure to book the appointment for you.",
        },
    ];

    return (
        <>
            {/* Reports in */}
            <Card className="lg:pt-[0]">
                <Container>
                    <BorderBox className="!border-[#42BAE8] bg-[#DFF3FB] p-4 lg:py-4 lg:px-6 rounded-lg flex flex-wrap items-center gap-2 lg:gap-8 mb-6">
                        <Text24 className="xs:text-base w-full lg:w-fit">Reports in <span className="text-[#030712] font-medium">18 hrs</span></Text24>
                        <Text24 className="xs:text-base w-full lg:w-fit">Tests <span className="text-[#030712] font-medium">10</span></Text24>
                    </BorderBox>

                    <div className="grid lg:grid-cols-3 gap-6">
                        {[{ title: 'Fasting', detail: 'Not Required' }, { title: 'Get reports in', detail: '12 hrs' }, { title: 'Home visit', detail: 'Sample pick-up' },].map((el, key) => (
                            <BorderBox className="border-[#E5E7EB] bg-[#F9FAFB] p-4 lg:py-4 lg:px-6 rounded-lg flex flex-col gap-[10px]">
                                <Text16>{el.title}</Text16>
                                <Text32 className=" text-turnary-800">{el.detail}</Text32>
                            </BorderBox>
                        ))}
                    </div>
                </Container>
            </Card>
            {/* What is it for ? */}
            <Card className="bg-grey-deafult">
                <Container>
                    <div className="flex flex-col gap-16">
                        <div>
                            <Text32 className="mb-3">What is it for ?</Text32>
                            <Text24 className="mb-4 lg:mb-0">The test assesses the thyroid gland's functioning and helps to diagnose hyperthyroidism or hypothyroidism.</Text24>
                            <Text24><TextSky className="font-semibold">Also known as:</TextSky> Thyroid Function Test, Thyroid Panel Test, TFT Test, Thyroid Hormone Test, Thyroid Blood Test</Text24>
                        </div>
                        <div>
                            <Text32 className="mb-3">Test Instructions</Text32>
                            <Text24><TextSky className="font-semibold">Age Group: </TextSky>All Ages</Text24>
                        </div>
                    </div>
                </Container>
            </Card>
            {/* Benefits */}
            <Card className="">
                <Container>
                    <Text32 className="mb-2">Benefits</Text32>
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        {[{ title: 'Most affordable Pricing', image: affordable }, { title: 'Free Reports Consultation', image: consultation }, { title: 'Smart Reports in 24 hours*', image: Reports24 }, { title: 'On-time Sample collection', image: Ontime }, { title: 'Government certified Labs', image: certifiedLabs }, { title: 'Presence in 220+ Cities', image: Cities },].map((el, key) => (
                            <BorderBox className="border-grey-200 bg-grey-deafult rounded-2xl  p-4 lg:p-7 flex items-center gap-7">
                                <Image src={el.image} alt={el.title} />
                                <Text20 className="font-bold" color={"text-gray-800"}>{el.title}</Text20>
                            </BorderBox>
                        ))}
                    </div>
                </Container>
            </Card>
            {/* Included Tests */}
            <Card className="bg5">
                <Container>
                    <Text32 color={"text-gray-950"}>Included Tests</Text32>
                    <Text24 className="mb-10 text-2xl sm:text-xl md:text-xl text-gray-500 ">Package includes following parameters</Text24>
                    <Text24 className="text-turnary-800 font-semibold mb-3 md:text-xl sm:text-xl">Thyroid Profile</Text24>
                    <div className="grid lg:grid-cols-3 gap-3">
                        {['T3, Total Tri Iodothyronine', 'T4, Total Thyroxine', 'TSH Ultra - sensitive'].map((el, key) => (
                            <BorderBox className="rounded-lg bg-white h-14 flex items-center gap-6 p-3" key={key}>
                                <Image src={dot} alt={el} />
                                <Text20 color="text-grey-950" className="font-medium">{el}</Text20>
                            </BorderBox>
                        ))}
                    </div>
                </Container>
            </Card>
            {/* Test Criteria */}
            <Card>
                <Container>
                    <div className="pt-0 md:py-6 flex flex-col gap-10 xs:gap-6 sm:gap-6 pb-16 xs:pt-6 sm:pt-6 xs:pb-6 sm:pb-6">
                        <AccordionGroup
                            title="Test Criteria"
                            subTitle="Helps you know your test better"
                            accordionData={TestCriteriaArray}
                        />
                    </div>
                </Container>
                <Container>
                    <div className="pt-0 md:py-6 flex flex-col gap-10 xs:gap-6 sm:gap-6 xs:pt-6 sm:pt-6 xs:pb-6 sm:pb-6">
                        <AccordionGroup
                            title="FAQ"
                            subTitle="Helps you know your test better"
                            accordionData={TestFaqaArray}
                        />
                    </div>
                </Container>
            </Card>
        </>
    )
}

export default Reports