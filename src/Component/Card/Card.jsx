const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 max-w-6xl  my-20 mx-auto">
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
      {/* card4 */}
      <div className="relative flex flex-col text-black bg-white shadow-md  rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-black   bg-white shadow-lg  rounded-xl bg-clip-border">
          <img
            src="https://i.ibb.co/PgfRw5S/lucho-renolfi-9p-W-u2wynx0-unsplash.jpg"
            alt="profile-picture"
          />
        </div>
        <div className="p-6 text-center">
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Audi
          </h4>
        </div>
      </div>
      {/* card5 */}
      <div className="relative flex flex-col text-black bg-white shadow-md  rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-black   bg-white shadow-lg  rounded-xl bg-clip-border">
          <img
            src="https://i.ibb.co/djcxjN1/emrecan-arik-dgqu-Dmlh-RAI-unsplash.jpg"
            alt="profile-picture"
          />
        </div>
        <div className="p-6 text-center">
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Honda
          </h4>
        </div>
      </div>
      {/* card6 */}
      <div className="relative flex flex-col text-black bg-white shadow-md  rounded-xl bg-clip-border">
        <div className="relative mx-4 mt-4 overflow-hidden text-black   bg-white shadow-lg  rounded-xl bg-clip-border">
          <img
            src="https://i.ibb.co/f8qv4LF/austin-ramsey-9-X3-Dmo-EM64k-unsplash.jpg"
            alt="profile-picture"
          />
        </div>
        <div className="p-6 text-center">
          <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            Tesla
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
