import Image from "next/image";
import arrow from "@/assets/svg/right-arrow.svg";
import Link from "next/link";
export const HelthCard = ({
  description,
  discount,
  purchasePrice,
  reportTime,
  sellingPrice,
  title,
  totalTest,
  className,
}: IHelthcard) => {
  return (
    <div
      className={`border border-gray-200 rounded-2xl bg-white flex flex-col gap-4 mr-3 ${className}`}
    >
      <div className="pt-3 pr-4 pb-3 pl-4 border-b border-gray-200 flex  justify-between items-center">
        <span className="text-lg font-semibold text-gray-800">{title}</span>
        <div className="arrow-border w-8 h-8">
          <Link href={"/test-details"}>
            <Image src={arrow} alt="arrow-icon" width={25} height={24} />
          </Link>
        </div>
      </div>
      {description ? (
        <div className="text-basew font-normal text-gray-500 pt-0 pr-4 pb-0 pl-4">
          {description}
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-col gap-3">
        <div className="flex gap-6 pr-4 pl-4">
          <div className="flex gap-2">
            <span className="text-base font-normal text-gray-500">
              Reports in
            </span>
            <b>{reportTime}</b>
          </div>
          <div className="flex gap-2">
            <span className="text-base font-normal text-gray-500">Tests</span>
            <b>{totalTest}</b>
          </div>
        </div>
        <div className="flex gap-3 pr-4 pl-4 items-center">
          <div className="flex gap-[6px] items-center">
            <span className="text-xl text-gray-950 font-semibold">
              ₹{sellingPrice}
            </span>
            <span className="text-base text-gray-400 font-semibold line-through">
              ₹{purchasePrice}
            </span>
          </div>
          <div className="text-base font-semibold text-turnary-800">
            {discount} off
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 border-t border-gray-200">
        <Link
          href={"/checkout"}
          className="p-3 bg-secondory-400 text-primary-300 text-center text-base font-medium rounded-bl-2xl"
        >
          <button>Buy</button>
        </Link>
        <Link
          href={"/checkout"}
          className="p-3 bg-gray-50 text-gray-800 font-medium text-center rounded-br-2xl"
        >
          <button>Add to cart</button>
        </Link>
      </div>
    </div>
  );
};
