import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
  Select,
  Option,
} from "@material-tailwind/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function AddProduct() {
  const [selection, setSelection] = useState(null);
  const navigate = useNavigate();
  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const des = form.des.value;
    const brand = selection;

    if (!name || !photo || !type || !price || !rating || !des || !brand) {
      toast.error("please fill up every field!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      const carInfo = {
        name,
        des,
        photo,
        type,
        price,
        rating,
        brand,
      };

      fetch("http://localhost:5000/addProducts", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(carInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success("Product added successfully!", {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });

            form.reset();
          }
        });
    }
  };
  return (
    <div className="mx-3">
      <div className="mx-auto max-w-2xl my-20  px-2 py-1  md:px-6 md:py-5 dark:bg-blue-gray-100 rounded-lg">
        <Card color="transparent" shadow={false} className="text-black">
          <Typography variant="h4" color="blue-gray">
            Add Product
          </Typography>
          <Typography color="gray" className="mt-1 font-normal text-orange-800">
            Carefully fill up every field{" "}
          </Typography>
          <form onSubmit={handleAdd} className="mt-8 mb-2 max-w-screen-lg ">
            <div className="mb-4 flex flex-col gap-6">
              <Input type="text" size="lg" name="photo" label="Photo URL" />
              <Input type="text" size="lg" name="name" label="Name" />
              <Select
                size="md"
                value={selection}
                onChange={(value) => setSelection(value)}
                name="brand"
                label="Select Brand"
              >
                <Option value="Toyota">Toyota</Option>
                <Option value="BMW">BMW</Option>
                <Option value="Mercedes-benz">Mercedes-benz</Option>
                <Option value="Audi">Audi</Option>
                <Option value="Tesla">Tesla</Option>
                <Option value="Honda">Honda</Option>
                <Option value="Others">Others</Option>
              </Select>
              <Input type="text" size="lg" name="type" label="Type" />
              <Input type="number" size="lg" name="price" label="Price" />
              <Textarea
                type="email"
                size="lg"
                rows={6}
                name="des"
                label="Short Description"
              />

              <Input type="number" size="lg" name="rating" label="Rating" />
            </div>
            <Button type="submit" className="mt-6 dark:bg-gray-800" fullWidth>
              Add
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
