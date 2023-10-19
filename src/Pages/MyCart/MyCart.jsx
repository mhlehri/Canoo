import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MyCart = () => {
  const loaded = useLoaderData();
  const [remaining, setRemaining] = useState(loaded);
  const handledelete = (_id, name) => {
    Swal.fire({
      title: `Are you sure to remove ${name}?`,
      icon: "warning",
      color: "white",
      showCancelButton: true,
      cancelButtonText: "No",
      confirmButtonText: "Yes",
      confirmButtonColor: "orange",
      background: "teal",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/remove/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remained = remaining.filter((remain) => remain._id !== _id);
              setRemaining(remained);
              toast.success("Successfully removed!", {
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
      }
    });
  };
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let total = 0;
    remaining.map((value) => {
      total += parseInt(value.price);
    });
    setTotal(total);
  }, [remaining]);

  return (
    <div className="max-w-screen-xl mx-auto flex my-16 min-h-[50vh] justify-between items-start">
      <div className="relative overflow-x-auto  shadow-md sm:rounded-lg  ">
        <table className="w-full text-sm text-left  text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-100">
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
            {remaining?.map((car, i) => {
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
                    <Button
                      onClick={() => {
                        handledelete(car._id, car.name);
                      }}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="shadow-md  p-4 rounded-lg space-y-2 dark:bg-gray-800 dark:text-white w-1/3">
        <h1 className="text-3xl">Total</h1>
        <p className="text-2xl">${total}</p>
        <Button>Make Purchase</Button>
      </div>
    </div>
  );
};

export default MyCart;
