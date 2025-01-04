export const BookForm = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <div className="flex w-full gap-4">
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
          className="text-white md:hidden lg:hidden xl:hidden 2xl:hidden 3xl:hidden bg-primary-300 hover:bg-primary-300 font-medium rounded-full xs:w-3/4 sm:w-3/4 w-32  text-center h-12 text-base"
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
  );
};
