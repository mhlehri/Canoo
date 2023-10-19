import { Button, Carousel, Rating } from "@material-tailwind/react";
import { Link, useLoaderData } from "react-router-dom";

const BrandDetails = () => {
  const loaded = useLoaderData();

  return (
    <>
      <Carousel
        className="h-[70vh]"
        autoplay="true"
        autoplayDelay="3000"
        loop="true"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <img
          src="https://i.ibb.co/bzzqgT2/joshua-yu-2-IKm0a-Yk-HPk-unsplash.jpg"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src="https://i.ibb.co/CwkNyFF/rodan-can-6cq-JPe-TIuls-unsplash.jpg"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src="https://i.ibb.co/nn7Lgsv/oguz-yagiz-kara-I-Q9k-Kf2-Mv-U-unsplash.jpg"
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>

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
    </>
  );
};

export default BrandDetails;
