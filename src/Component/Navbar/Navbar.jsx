import React, { useContext } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
  ButtonGroup,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        className="p-1 dark:text-white text-black font-normal"
      >
        <Link to="/" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 dark:text-white text-black font-normal"
      >
        <Link to="/addProduct" className="flex items-center">
          Add Product
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 dark:text-white text-black font-normal"
      >
        <Link to="/myCart" className="flex items-center">
          My Cart
        </Link>
      </Typography>
    </ul>
  );

  const { user, logOut } = useContext(AuthContext);

  return (
    <div className="">
      <Navbar className="bg-white dark:bg-gray-800  max-w-full border-none  rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center  mx-auto max-w-6xl  justify-between dark:text-white text-black">
          <Typography
            as="a"
            href="#"
            className="mr-4 text-2xl flex items-center gap-1  dark:text-white cursor-pointer py-1.5 font-bold"
          >
            <img
              src="https://i.ibb.co/nsmvY3b/blue-car-logo-png.webp"
              alt="blue-car-logo-png"
              width={50}
            />{" "}
            Canno
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            {user ? (
              <div className="flex items-center gap-2">
                <div className="border-l-2 border-black ps-2 flex items-center  gap-1">
                  {user?.displayName}
                  <img
                    src={user?.photoURL}
                    className={`${
                      user
                        ? "w-[40px] h-[40px] rounded-full border-2 border-black"
                        : "w-0 h-0 border-none"
                    }`}
                    alt=""
                  />
                </div>

                <Link to="/login">
                  <Button
                    onClick={() => logOut().then().catch()}
                    size="sm"
                    className="hidden  dark:bg-white  dark:text-black lg:inline-block"
                  >
                    <span>Logout</span>
                  </Button>
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <Button
                  size="sm"
                  className="hidden  dark:bg-white  dark:text-black lg:inline-block"
                >
                  <span>Login</span>
                </Button>
              </Link>
            )}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          {user ? (
            <div>
              <div className="border-l-2 border-black ps-2 flex items-center  gap-1">
                {user?.displayName}
                <img
                  src={user?.photoURL}
                  className={`${
                    user
                      ? "w-[40px] h-[40px] rounded-full border-2 border-black"
                      : "w-0 h-0 border-none"
                  }`}
                  alt=""
                />
              </div>
              <Link to="/login">
                <Button
                  onClick={() => logOut().then().catch()}
                  className="dark:bg-white  dark:text-black mb-2"
                  size="sm"
                  fullWidth
                >
                  <span>Logout</span>
                </Button>
              </Link>
            </div>
          ) : (
            <Link to="/login">
              <Button
                className="dark:bg-white  dark:text-black mb-2"
                size="sm"
                fullWidth
              >
                <span>Login</span>
              </Button>
            </Link>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
}
