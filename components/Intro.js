import React from "react";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";

import Property from "./Property";
import {
  getLatestPosts,
  getFiltredPosts,
  getFiltredPostsCount,
} from "../lib/api";

const marks = [
  {
    value: 40,
    label: "40 $",
  },
  {
    value: 1000,
    label: "1000 $",
  },
  {
    value: 2000,
    label: "2000 $",
  },
  {
    value: 3000,
    label: "3000 $",
  },
  {
    value: 4000,
    label: "4000 $",
  },
  {
    value: 5000,
    label: "5000 $",
  },
];

function valuetext(value) {
  return `${value} $`;
}

const TYPES = ["Appartement", "Maison", "Studio", "Bureau", "Villa"];
const CATEGORIES = ["Vente", "Location"];
const COMMUNES = [
  "Bandalungwa",
  "Barumbu",
  "Bumbu",
  "Gombe",
  "Kalamu",
  "Kasa-Vubu",
  "Kimbanseke",
  "Kinshasa",
  "Kintambo",
  "Kisenso",
  "Lemba",
  "Limete",
  "Lingwala",
  "Makala",
  "Maluku",
  "Masina",
  "Matete",
  "Mont-Ngafula",
  "Ndjili",
  "Ngaba",
  "Ngaliema",
  "Ngiri-Ngiri",
  "Nsele",
  "Selembao",
];
const PROVINCES = [
  "Bas-Uele",
  "Équateur",
  "Haut-Katanga",
  "Haut-Lomami",
  "Haut-Uele",
  "Ituri",
  "Kasaï",
  "Kasaï central",
  "Kasaï oriental",
  "Kinshasa",
  "Kongo-Central",
  "Kwango",
  "Kwilu",
  "Lomami",
  "Lualaba",
  "Mai-Ndombe",
  "Maniema",
  "Mongala",
  "Nord-Kivu",
  "Nord-Ubangi",
  "Sankuru",
  "Sud-Kivu",
  "Sud-Ubangi",
  "Tanganyika",
  "Tshopo",
  "Tshuapa",
];
export default function Intro() {
  const [prix, setPrix] = React.useState([20, 1000]);
  const [type, setType] = React.useState("*");
  const [categorie, setCategorie] = React.useState("*");
  const [commune, setCommune] = React.useState("*");
  const [province, setProvince] = React.useState("*");
  const [quartier, setQuartier] = React.useState("");
  const [allPosts, setAllPosts] = React.useState([]);
  const [latestPosts, setLatestPosts] = React.useState([]);
  const [allPostsCount, setAllPostsCount] = React.useState(1);
  const [loading, setLoading] = React.useState(true);
  const [searching, setSearching] = React.useState(false);
  const [page, setPage] = React.useState(1);

  const postRange = React.useMemo(() => {
    const start = page * 6 - 6;
    const end = page * 6;
    setLoading(true);
    return [start, end];
  }, [page]);

  // React.useEffect(() => {
  //   const getData = async () => {
  //     const latestPosts = await getLatestPosts(6);
  //     setLatestPosts(latestPosts);
  //   };
  //   getData();
  // }, []);

  React.useEffect(() => {
    const getData = async () => {
      if (loading || searching) {
        const data = {
          prix,
          type,
          categorie,
          commune,
          province,
          quartier: quartier.trim(),
        };
        const allPostsCount = await getFiltredPostsCount(data);
        const pageCount =
          allPostsCount % 6 === 0
            ? allPostsCount / 6
            : allPostsCount < 6
            ? 1
            : Math.floor(allPostsCount / 6) + (allPostsCount % 6);
        const allPosts = await getFiltredPosts(data, postRange);
        setAllPosts(allPosts);
        setAllPostsCount(pageCount);
        setSearching(false);
        setLoading(false);
      }
    };
    getData();
  }, [
    searching,
    postRange,
    prix,
    type,
    categorie,
    commune,
    province,
    quartier,
  ]);

  const handlePrixChange = (event, newValue) => {
    setPrix(newValue);
  };
  return (
    <>
      <div className="search-container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h2 className="section-title">Recherche par propriétés</h2>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-xs-12">
                <div className="search-category-container">
                  <label className="styled-select">
                    <select
                      className="classic"
                      value={categorie}
                      onChange={(e) => setCategorie(e.target.value)}
                    >
                      <option selected value="*">
                        Toutes les categories
                      </option>
                      {CATEGORIES.map((c, idx) => (
                        <option key={`${idx.toString()}-${c}`} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-xs-12">
                <div className="search-category-container">
                  <label className="styled-select">
                    <select
                      className="classic"
                      value={type}
                      onChange={(e) => setType(e.target.value)}
                    >
                      <option selected value="*">
                        Tous les types
                      </option>
                      {TYPES.map((type, idx) => (
                        <option key={`${idx.toString()}-${type}`} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-xs-12">
                <div className="search-category-container">
                  <label className="styled-select">
                    <select
                      className="classic"
                      value={commune}
                      onChange={(e) => setCommune(e.target.value)}
                    >
                      <option selected value="*">
                        Toutes les communes
                      </option>
                      {COMMUNES.map((c, idx) => (
                        <option key={`${idx.toString()}-${c}`} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-xs-12">
                <div className="text-right btn-section">
                  <button
                    type="button"
                    className="btn btn-common"
                    onClick={() => setSearching(true)}
                  >
                    <i className="lni-search"></i> Recherchez
                  </button>
                </div>
              </div>
            </div>
            <div
              className="row range-slider option-hide"
              style={{ display: "none" }}
            >
              <div className="col-lg-3 col-md-6 col-xs-12">
                <div className="search-category-container">
                  <label className="styled-select">
                    <select
                      className="classic"
                      value={province}
                      onChange={(e) => setProvince(e.target.value)}
                    >
                      <option selected value="*">
                        Toutes les provinces
                      </option>
                      {PROVINCES.map((p, idx) => (
                        <option key={`${idx.toString()}-${p}`} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-xs-12">
                <div className="search-category-container">
                  <label className="styled-select">
                    <input
                      className="classic select w-100"
                      placeholder="Quartier"
                      type="text"
                      value={quartier}
                      onChange={(e) => setQuartier(e.target.value)}
                    />
                  </label>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-xs-12">
                {/* <input
                type="text"
                id="range"
                value=""
                name="range"
                data-type="double"
                data-min="0"
                data-max="1000"
                data-from="200"
                data-to="500"
                data-grid="true"
                onChange={console.log}
              /> */}
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  sx={{ paddingTop: 1 }}
                >
                  <Slider
                    aria-label="Always visible"
                    min={10}
                    max={5000}
                    value={prix}
                    onChange={handlePrixChange}
                    getAriaValueText={valuetext}
                    valueLabelFormat={valuetext}
                    step={10}
                    marks={marks}
                    size="small"
                    valueLabelDisplay="on"
                  />
                </Stack>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 text-left">
                <span className="show-options">Plus d{"'"}options</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Property
        loading={loading || searching}
        posts={allPosts}
        page={page}
        pageCount={allPostsCount}
        onPageChange={(e, value) => setPage(value)}
      />
    </>
  );
}
