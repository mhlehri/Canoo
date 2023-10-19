import { Button, Rating } from "@material-tailwind/react";
import { useLoaderData } from "react-router-dom";

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
    fetch("http://localhost:5000/cars-info/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCar),
    })
      .then((res) => res.json())
      .then((data) => console.log(data.insertedId));
  };
  return (
    <section className="bg-white max-w-screen-xl mx-auto dark:bg-gray-900 py-8 sm:py-16">
      <div className="gap-8 items-center  px-4 xl:gap-16 md:grid md:grid-cols-2 lg:px-6 mb-4">
        <img src={photo} />
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {name}
          </h2>
          <p className="mb-3 font-bold border-b-2 border-black pb-2 text-black md:text-2xl dark:text-gray-400">
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

          <Button className="mt-4" onClick={handleAddCart}>
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="dark:text-white">
        <h1 className="text-4xl  font-semibold mb-3">More Detail</h1>
        <p>{des}</p>
      </div>
    </section>
  );
};

export default CarsInfo;
