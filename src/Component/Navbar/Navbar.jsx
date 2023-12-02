import React, { useContext, useState } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import makeDark from "../../..";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const [dark, setDark] = useState(true);
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
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-2 p-1" : ""
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 dark:text-white text-black font-normal"
      >
        <NavLink
          to="/addProduct"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-2 p-1" : ""
          }
        >
          Add Product
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="p-1 dark:text-white text-black font-normal"
      >
        <NavLink
          to="/myCart"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-2 p-1" : ""
          }
        >
          My Cart
        </NavLink>
      </Typography>
    </ul>
  );

  const { user, logOut } = useContext(AuthContext);

  return (
    <div>
      <Navbar className="bg-white dark:bg-gray-900  max-w-full border-none  rounded-none py-2 px-4 lg:px-8 lg:py-4">
        <div className="flex items-center  mx-auto max-w-6xl  justify-between dark:text-white text-black">
          <Typography
            as="a"
            className="mr-4 text-2xl flex items-center gap-1  dark:text-white cursor-pointer py-1.5 font-bold"
          >
            <img
              src="https://i.ibb.co/b5X2g75/Mustang-Car-Illustration.png"
              alt="blue-car-logo-png"
              width={80}
            />
            CANOO
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>

            <Button
              onClick={() => {
                makeDark();
                setDark(!dark);
              }}
              type="button"
              className="text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 focus:outline-none  rounded-lg text-sm p-2.5"
            >
              {dark ? (
                <svg
                  id="theme-toggle-dark-icon"
                  className="w-5 h-5 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                </svg>
              ) : (
                <svg
                  id="theme-toggle-light-icon"
                  className="w-5 h-5 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              )}
            </Button>
            {user ? (
              <div className="flex items-center gap-2 text-sm">
                <div className="hidden lg:inline-block">
                  <div className=" ps-2 flex items-center  gap-1">
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
                </div>

                <Link>
                  <Button
                    onClick={() => logOut().then().catch()}
                    size="sm"
                    className="hidden dark:bg-gray-800   lg:inline-block"
                  >
                    <span>Logout</span>
                  </Button>
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <Button
                  size="sm"
                  className="hidden   dark:bg-gray-800 lg:inline-block"
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
              <div className=" text-black my-2   flex items-center  gap-1">
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

              <Button
                onClick={() => logOut().then().catch()}
                className="dark:bg-gray-700  mb-2"
                size="sm"
                fullWidth
              >
                <span>Logout</span>
              </Button>
            </div>
          ) : (
            <Link to="/login">
              <Button className="dark:bg-gray-700  mb-2" size="sm" fullWidth>
                <span>Login</span>
              </Button>
            </Link>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
}
