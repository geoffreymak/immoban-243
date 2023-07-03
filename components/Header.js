import React from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";

import { styled, alpha } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: 40,
  width: 40,
  marginLeft: 5,
  position: "absolute",
  // pointerEvents: "none",
  zIndex: 10,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Header() {
  const router = useRouter();
  const [search, setSearch] = React.useState("");

  const onSearchClick = () => {
    if (!!search) {
      router.push(`/search/${search}`);
    }
  };

  const onSearchClose = () => {
    setSearch("");
    router.push(`/`);
  };

  return (
    <header id="header-wrap">
      <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-8 col-xs-12">
              <ul className="links clearfix">
                <li>
                  <i className="lni-phone-handset"></i>+243 999 992 118
                </li>
                <li>
                  <i className="lni-envelope"></i> blaisembombo@gmail.com
                </li>
                <li>
                  <a href="#">
                    <i className="lni-map-marker"></i> Gombe, Kinshasa, RDC
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-5 col-md-4 col-xs-12">
              <div className="roof-social float-right">
                <Link href="https://m.facebook.com/baningbusinsess/?refid=46&__xts__%5B0%5D=12.AboJucMIokq_x-IhtLaiI6-TRa-uZJZyWN2RTBOh3bdXtfSpT5NbMja6E8is_da1mB2h9ZjjgW3OFdmIWCkuZ0mazD7rm9FA3jQlzYvttm5fQkptJdTZJgS9k5Pv4avipIP4wMjtZcoRxIj8WINaVC4af0DzZHwdr4LCCGNt92UCZnUCoFlovWPOeHRxEdD0WK9eZSsjpsdOnczEtiuqsAQDyOZkY4WySD8h2CratRxAnoEqCal9aHezso-c-tbjQ640Mr8fpeETPRrfhmCuUP4guscoZ5eo5Q_se6M73tdbmRW0nBzpksVe9T2Z0jzREPFwZqBZqgLwIANrw52SwsOtgxDGghvCEj8IJ5RPMFCZPDRpvxOEJIoIDw3bfb3rmw9rEn9KzN5xKr7L1eHqULEJqhFi0o8ug28f45Zg7J82chECtp6zLlc7nVDtmaaUKVvR1iLrVTPR1rEPc1blwxcKDWmiTUrALJPFQAO09zzWQPkJbAjhmn65h8UgvJcrd9YN4Z98hFxaEgBF8Rqen6owVRnTaeaU9BtR622OwpN7dmjRf8-SYBOlAALNv61LxYQ&_rdr">
                  <a className="facekbook" target="_blank">
                    <i className="lni-facebook-filled"></i>
                  </a>
                  {/* <a className="twitter" href="#">
                  <i className="lni-twitter-filled"></i>
                </a>
                <a className="instagram" href="#">
                  <i className="lni-instagram-filled"></i>
                </a>
                <a className="linkedin" href="#">
                  <i className="lni-linkedin-filled"></i>
                </a> */}
                </Link>
              </div>
              {/* <div className="header-top-right float-right">
                  <a href="login.html" className="header-top-button">
                    <i className="lni-lock"></i> Log In
                  </a>{" "}
                  |
                  <a href="register.html" className="header-top-button">
                    <i className="lni-pencil"></i> Register
                  </a>
                </div> */}
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white sticky top-0 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 pb-0">
          <Link href="/">
            <a className="flex items-center">
              <img src="/img/logo.png" alt="" />
            </a>
          </Link>

          <div className="flex md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="relative hidden md:block">
              <div class="flex items-center">
                <label for="simple-search" class="sr-only">
                  Search
                </label>
                {!!search && (
                  <button
                    onClick={onSearchClose}
                    type="button"
                    className=" text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
                  >
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                )}
                <div class="relative w-full">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    id="simple-search"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#ed5437] focus:border-[#ed5437] block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ed5437] dark:focus:border-[#ed5437]"
                    placeholder="Recherche"
                  />
                </div>

                <button
                  onClick={onSearchClick}
                  class="p-2.5 ml-2 text-sm font-medium text-white bg-[#ed5437] rounded-lg border border-[#ed5437] hover:bg-[#dc3545] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#ed5437] dark:focus:ring-[#dc3545]"
                >
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                  <span class="sr-only">Search</span>
                </button>
              </div>
            </div>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div className="relative mt-3 md:hidden pb-4">
              <div className="relative">
                <div class="flex items-center">
                  <label for="simple-search" class="sr-only">
                    Search
                  </label>
                  {!!search && (
                    <button
                      onClick={onSearchClose}
                      type="button"
                      className=" text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
                    >
                      <svg
                        class="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 14"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                        />
                      </svg>
                      <span className="sr-only">Search</span>
                    </button>
                  )}
                  <div class="relative w-full">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        class="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      id="simple-search"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#ed5437] focus:border-[#ed5437] block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#ed5437] dark:focus:border-[#ed5437]"
                      placeholder="Recherche"
                    />
                  </div>

                  <button
                    onClick={onSearchClick}
                    class="p-2.5 ml-2 text-sm font-medium text-white bg-[#ed5437] rounded-lg border border-[#ed5437] hover:bg-[#dc3545] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-[#ed5437] dark:focus:ring-[#dc3545]"
                  >
                    <svg
                      class="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                    <span class="sr-only">Search</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
