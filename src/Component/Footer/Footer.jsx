import { Typography } from "@material-tailwind/react";

export function FooterWithLogo() {
  return (
    <footer className="w-full p-8 bg-gray-100  dark:bg-gray-800">
      <div className="flex max-w-6xl mx-auto flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-transparent text-center md:justify-between">
        <Typography
          as="a"
          href="#"
          className="mr-4 text-2xl flex items-center gap-1 text-black dark:text-white   cursor-pointer py-1.5 font-bold"
        >
          <img
            src="https://i.ibb.co/nsmvY3b/blue-car-logo-png.webp"
            alt="blue-car-logo-png"
            width={50}
          />{" "}
          Canno
        </Typography>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              className="font-normal text-black dark:text-white transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              className="font-normal text-black dark:text-white transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              className="font-normal text-black dark:text-white transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              className="font-normal text-black dark:text-white transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-black dark:border-white" />
      <Typography
        color="blue-gray"
        className="text-center font-normal text-black dark:text-white"
      >
        &copy; 2023 Canoo AutoMotive
      </Typography>
    </footer>
  );
}
