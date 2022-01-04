import React from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

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
    if (search) {
      router.push(`/search/${search}`);
    }
  };

  return (
    <header id="header-wrap">
      <div class="top-bar">
        <div class="container">
          <div class="row">
            <div class="col-lg-7 col-md-8 col-xs-12">
              <ul class="links clearfix">
                <li>
                  <i class="lni-phone-handset"></i>+243 999 992 118
                </li>
                <li>
                  <i class="lni-envelope"></i> blaisembombo@gmail.com
                </li>
                <li>
                  <a href="#">
                    <i class="lni-map-marker"></i> Gombe, Kinshasa, RDC
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-lg-5 col-md-4 col-xs-12">
              <div class="roof-social float-right">
                <Link href="https://m.facebook.com/baningbusinsess/?refid=46&__xts__%5B0%5D=12.AboJucMIokq_x-IhtLaiI6-TRa-uZJZyWN2RTBOh3bdXtfSpT5NbMja6E8is_da1mB2h9ZjjgW3OFdmIWCkuZ0mazD7rm9FA3jQlzYvttm5fQkptJdTZJgS9k5Pv4avipIP4wMjtZcoRxIj8WINaVC4af0DzZHwdr4LCCGNt92UCZnUCoFlovWPOeHRxEdD0WK9eZSsjpsdOnczEtiuqsAQDyOZkY4WySD8h2CratRxAnoEqCal9aHezso-c-tbjQ640Mr8fpeETPRrfhmCuUP4guscoZ5eo5Q_se6M73tdbmRW0nBzpksVe9T2Z0jzREPFwZqBZqgLwIANrw52SwsOtgxDGghvCEj8IJ5RPMFCZPDRpvxOEJIoIDw3bfb3rmw9rEn9KzN5xKr7L1eHqULEJqhFi0o8ug28f45Zg7J82chECtp6zLlc7nVDtmaaUKVvR1iLrVTPR1rEPc1blwxcKDWmiTUrALJPFQAO09zzWQPkJbAjhmn65h8UgvJcrd9YN4Z98hFxaEgBF8Rqen6owVRnTaeaU9BtR622OwpN7dmjRf8-SYBOlAALNv61LxYQ&_rdr">
                  <a class="facekbook" target="_blank">
                    <i class="lni-facebook-filled"></i>
                  </a>
                  {/* <a class="twitter" href="#">
                  <i class="lni-twitter-filled"></i>
                </a>
                <a class="instagram" href="#">
                  <i class="lni-instagram-filled"></i>
                </a>
                <a class="linkedin" href="#">
                  <i class="lni-linkedin-filled"></i>
                </a> */}
                </Link>
              </div>
              {/* <div class="header-top-right float-right">
                  <a href="login.html" class="header-top-button">
                    <i class="lni-lock"></i> Log In
                  </a>{" "}
                  |
                  <a href="register.html" class="header-top-button">
                    <i class="lni-pencil"></i> Register
                  </a>
                </div> */}
            </div>
          </div>
        </div>
      </div>

      <nav
        class="navbar navbar-expand-lg navbar-light bg-white"
        data-toggle="sticky-onscroll"
      >
        <div class="container">
          <div class="navbar-header">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#main-navbar"
              aria-controls="main-navbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
              <span class="lin-menu"></span>
            </button>
            <Link href="/">
              <a class="navbar-brand">
                <img src="/img/logo.png" alt="" />
              </a>
            </Link>
          </div>

          <div class="collapse navbar-collapse" id="main-navbar">
            <ul class="navbar-nav mr-auto w-100 justify-content-center"></ul>
            <div class="search-add float-right">
              <Search>
                <SearchIconWrapper onClick={onSearchClick} size="small">
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </Search>
              {/* <form method="post">
                <div class="form-group">
                  <input
                    type="search"
                    name="field-name"
                    value=""
                    placeholder="Search Here"
                  />
                  <button type="submit" class="search-btn">
                    <span class="lni-search"></span>
                  </button>
                </div>
              </form> */}
            </div>
          </div>
        </div>

        <ul class="mobile-menu">
          {/* <li> */}
          <Stack sx={{ width: "100%", paddingX: 1, paddingBottom: 2 }}>
            {/* <div class="search-add"> */}
            <Search>
              {/* <SearchIconWrapper onClick={onSearchClick} size="small">
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  fullWidth
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                /> */}
              <FormControl sx={{ m: 1 }} variant="outlined">
                <OutlinedInput
                  size="small"
                  fullWidth
                  id="outlined-adornment-password"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={onSearchClick}
                        edge="end"
                      >
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </Search>
            {/* </div> */}
          </Stack>
          {/* </li> */}
        </ul>
      </nav>
      <div class="clearfix"></div>
    </header>
  );
}
