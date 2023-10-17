const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 max-w-6xl mx-auto">
      {/* card1 */}
      <div className="relative flex flex-col text-black bg-white shadow-md  rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-black   bg-white shadow-lg  rounded-xl bg-clip-border">
          <img
            src="https://i.ibb.co/pnrrRCx/christina-telep-IS6-Csl-WJrj-Y-unsplash.jpg"
            alt="profile-picture"
          />
        </div>
        <div className="p-6 text-center">
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Toyota
          </h4>
        </div>
      </div>
      {/* card2 */}
      <div className="relative flex flex-col text-black bg-white shadow-md  rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-black   bg-white shadow-lg  rounded-xl bg-clip-border">
          <img
            src="https://i.ibb.co/kMxvW1Y/artiom-vallat-f-N5c-Vlpa-Jf-A-unsplash.jpg"
            alt="profile-picture"
          />
        </div>
        <div className="p-6 text-center">
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            BMW
          </h4>
        </div>
      </div>
      {/* card3 */}
      <div className="relative flex flex-col text-black bg-white shadow-md  rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-black   bg-white shadow-lg  rounded-xl bg-clip-border">
          <img
            src="https://i.ibb.co/tPBztnP/sebastian-pociecha-Pj-We-Ufd-Ici-Q-unsplash.jpg   "
            alt="profile-picture"
          />
        </div>
        <div className="p-6 text-center">
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Mercedes-benz
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
