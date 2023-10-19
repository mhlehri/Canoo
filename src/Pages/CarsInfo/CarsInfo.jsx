import { Button, Rating } from "@material-tailwind/react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const CarsInfo = () => {
  const loadedCar = useLoaderData();

  const { photo, name, brand, price, rating, des, type } = loadedCar;

  const newCar = {
    photo,
    name,
    brand,
    price,
    rating,
    des,
    type,
  };
  const handleAddCart = () => {
    fetch("https://automotive-server-indol.vercel.app/cars-info/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCar),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success(`${name} successfully added!`, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      });
  };
  return (
    <section className="  dark:bg-gray-900 ">
      <div className="max-w-screen-xl mx-auto py-8 sm:py-16">
        <div className="gap-8 items-center  px-4 xl:gap-16 md:grid md:grid-cols-2 lg:px-6 mb-4">
          <img src={photo} />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              {name}
            </h2>
            <p className="mb-3 font-bold border-b-2 border-black dark:border-white pb-2 text-black md:text-2xl dark:text-gray-400">
              Specification
            </p>
            <p className="mb-3 font-normal text-black dark:text-white">
              <span className="font-semibold">Brand:</span> {brand}
            </p>
            <p className="mb-3 font-normal text-black dark:text-white">
              <span className="font-semibold">Type:</span> {type}
            </p>
            <p className="mb-3 font-normal text-black dark:text-white">
              <span className="font-semibold">Price:</span> ${price}
            </p>
            <Rating value={parseInt(rating)} readonly />
            <br />

            <Button
              className="mt-4 dark:text-black dark:bg-white"
              onClick={handleAddCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>
        <div className="dark:text-white">
          <h1 className="text-4xl  font-semibold mb-3">More Detail</h1>
          <p className="dark:text-gray-400">{des}</p>
        </div>
      </div>
    </section>
  );
};

export default CarsInfo;
