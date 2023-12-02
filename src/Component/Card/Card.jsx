import { Link } from "react-router-dom";

const Card = () => {
  const brandInfo = [
    {
      img: "https://i.ibb.co/pnrrRCx/christina-telep-IS6-Csl-WJrj-Y-unsplash.jpg",
      name: "Toyota",
    },
    {
      img: "https://i.ibb.co/kMxvW1Y/artiom-vallat-f-N5c-Vlpa-Jf-A-unsplash.jpg",
      name: "BMW",
    },
    {
      img: "https://i.ibb.co/tPBztnP/sebastian-pociecha-Pj-We-Ufd-Ici-Q-unsplash.jpg",
      name: "Mercedes-benz",
    },
    {
      img: "https://i.ibb.co/PgfRw5S/lucho-renolfi-9p-W-u2wynx0-unsplash.jpg",
      name: "Audi",
    },
    {
      img: "https://i.ibb.co/djcxjN1/emrecan-arik-dgqu-Dmlh-RAI-unsplash.jpg",
      name: "Honda",
    },
    {
      img: "https://i.ibb.co/f8qv4LF/austin-ramsey-9-X3-Dmo-EM64k-unsplash.jpg",
      name: "Tesla",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 max-w-6xl  my-20 mx-auto">
      {/* card1 */}
      {brandInfo?.map((brand, index) => {
        return (
          <Link key={index} to={`/cars/${brand.name}`}>
            <div className="relative flex flex-col text-black bg-white dark:bg-gray-900 hover:shadow-xl shadow-md   rounded-xl bg-clip-border">
              <div className="relative mx-4 mt-4 overflow-hidden dark:text-white text-black dark:bg-gray-900  bg-white shadow-lg dark:shadow-sm dark:shadow-white/20  rounded-xl bg-clip-border">
                <img src={brand.img} alt="profile-picture" />
              </div>
              <div className="p-6 text-center">
                <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-black dark:text-white">
                  {brand.name}
                </h4>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Card;
