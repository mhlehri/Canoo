import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const MyCart = () => {
  const loaded = useLoaderData();
  const handledelete = () => {
    console.log("succ");
    fetch("http://localhost:5000/remove", {
      method: "DELETE",
    });
  };
  const [total, setTotal] = useState(null);
  useEffect(() => {
    let total = 0;
    loaded.map((value) => {
      total += parseInt(value.price);
    });
    setTotal(total);
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto flex my-16 justify-between items-start">
      <div className="relative overflow-x-auto  shadow-md sm:rounded-lg  ">
        <table className="w-full text-sm text-left  text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Car name
              </th>
              <th scope="col" className="px-6 py-3">
                Brand
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Remove</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {loaded?.map((car, i) => {
              return (
                <tr
                  key={i}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {car.name}
                  </th>
                  <td className="px-6 py-4">{car.brand}</td>
                  <td className="px-6 py-4">{car.type}</td>
                  <td className="px-6 py-4">${car.price}</td>
                  <td className="px-6 py-4 text-right">
                    <Link
                      onClick={handledelete}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Remove
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="shadow-md  p-4 rounded-lg space-y-2 dark:text-white w-1/3">
        <h1 className="text-3xl">Total</h1>
        <p className="text-2xl">${total}</p>
        <Button>Make Purchase</Button>
      </div>
    </div>
  );
};

export default MyCart;
