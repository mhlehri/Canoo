import { Button, Rating } from "@material-tailwind/react";
import { Link, useLoaderData } from "react-router-dom";

const BrandDetails = () => {
  const loaded = useLoaderData();

  return (
    <div className="max-w-6xl mx-auto px-4 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {loaded?.map((car, i) => {
          return (
            <div
              key={i}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <img className="rounded-t-lg" src={car.photo} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {car.name}
                  </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-white">
                  <span className="font-semibold">Brand:</span> {car.brand}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-white">
                  <span className="font-semibold">Type:</span> {car.type}
                </p>
                <p className="mb-3 font-normal text-gray-700 dark:text-white">
                  <span className="font-semibold">Price:</span> ${car.price}
                </p>

                <Rating value={parseInt(car.rating)} readonly />
                <br />
                <div className="flex  gap-6">
                  <Link to={`/cars-info/${car.name}`}>
                    <Button type="submit" className="mt-2">
                      Details
                    </Button>
                  </Link>
                  <Link to={`/cars-edit/${car.name}`}>
                    <Button type="submit" className="mt-2">
                      Update
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BrandDetails;
