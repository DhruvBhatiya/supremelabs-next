export const FormHeroSection = () => {
  return (
    <div className="flex flex-col gap-[10px]">
      <div>
        <label
          htmlFor="last_name"
          className="block mb-1 text-base font-medium text-gray-800 ml-0"
        >
          Name
        </label>
        <input
          type="text"
          id="last_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  h-12"
          placeholder="Enter your Name"
          required
        />
      </div>
      <div>
        <label
          htmlFor="Mobile_No"
          className="block mb-1 text-base font-medium text-gray-800 ml-0"
        >
          Mobile No.
        </label>
        <input
          type="text"
          id="Mobile_No"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  h-12"
          placeholder="Enter phone number"
          required
        />
      </div>
      <div>
        <label
          htmlFor="Querry"
          className="block mb-1 text-base font-medium text-gray-800 ml-0"
        >
          Querry
        </label>
        <textarea
          id="Querry"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          placeholder="Message"
          required
          rows={3}
        />
      </div>
    </div>
  );
};
