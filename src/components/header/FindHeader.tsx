import Dropdown from "@/assets/svg/dropdown.svg";
import Location from "@/assets/svg/location.svg";
import Image from "next/image";
import { Container } from "../container";
import { SearchHeader } from "../shared/SearchInput";
import { Text12, Text14 } from "../shared/Text";
export const FindHeader = () => {
  return (
    <div className="bg-grey-deafult">
      <div className="bg-secondory-400 lg:hidden">
        <Container>
          <div className="flex justify-end">
            <Text12>
              Call us:{" "}
              <a className="text-primary-300 " href="tel:9898740000">
                9898740000
              </a>
            </Text12>
          </div>
        </Container>
      </div>
      <Container>
        <div className="flex items-center justify-between w-full h-16 xs:flex-col-reverse sm:flex-col-reverse sm:px-0 xs:px-0 sm:py-2 xs:py-2 sm:gap-3 xs:gap-3 sm:h-full xs:h-full">
          <SearchHeader />
          <div className="hidden lg:block">
            <div className="flex gap-5 xs:justify-end xs:w-full sm:justify-end sm:w-full">
              <div className="text-base text-gray-500 font-medium">
                Contact: <a href="tel:9898740000">9898740000</a>
              </div>
              <div className="text-base text-primary-300 font-medium flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Image
                    src={Location}
                    alt=""
                    width={16}
                    height={19}
                    className="mt-[-1.5px]"
                  />
                  Surat
                </div>
                <Image src={Dropdown} alt="" width={14} height={7} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
