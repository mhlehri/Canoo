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
import { Link } from "react-router-dom";

export function AddProduct() {
  const [selection, setSelection] = useState(null);
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
    const carInfo = {
      name,
      des,
      photo,
      type,
      price,
      rating,
      brand,
    };
    console.log(carInfo);
  };
  return (
    <div className="mx-3">
      <div className="mx-auto max-w-2xl my-20  px-2 py-1  md:px-6 md:py-5 dark:bg-blue-gray-100 rounded-lg">
        <Card color="transparent" shadow={false} className="text-black">
          <Typography variant="h4" color="blue-gray">
            Add Product
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Carefully fill up the form
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
            <Button type="submit" className="mt-6" fullWidth>
              Add
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
