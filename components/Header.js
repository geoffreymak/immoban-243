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
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Link href="/">
              <a className="navbar-brand">
                <img src="/img/logo.png" alt="" />
              </a>
            </Link>
          <Search>
                <SearchIconWrapper onClick={onSearchClick} size="small">
                 <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Recherche..."
                  inputProps={{ "aria-label": "search" }}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                     {!!search &&  <SearchIconWrapper onClick={onSearchClose} size="small">
                          <CloseIcon />  
                      </SearchIconWrapper>
                    } 
              </Search>
        </Toolbar>
      </AppBar>
    </Box>
    
      <div className="clearfix"></div>
    </header>
  );
}
