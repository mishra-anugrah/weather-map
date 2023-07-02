import { useState } from "react";
import "../style/App.css";
import Search from "./Search";
import { searchLocation } from "../api/searchApi";
import { SearchResults } from "./SearchResults";
import { Grid, Typography } from "@mui/material";
import MyMap from "./MyMap";

function Dashboard() {
  const [data, setData] = useState(null);
  const [center, setCenter] = useState({
    lat: 42.361145,
    lng: -71.057083,
  });
  const [polygon, setPolygon] = useState([]);
  const [boundingBox, setBoundingBox] = useState(null);

  const handleSearch = (searchQuery: string) => {
    searchLocation(searchQuery).then((results: any) => {
      console.log(results);
      const filteredData = results.filter(
        (item: any) => item.type === "administrative"
      );
      setData(filteredData);
    });
  };

  const onSelectOption = (selectedOption: any) => {
    setCenter({
      lat: selectedOption.lat,
      lng: selectedOption.lon,
    });

    setPolygon(selectedOption.geojson);
    setBoundingBox(selectedOption.boundingbox);
  };

  return (
    <>
      <Grid container className="dashboard">
        <Grid item xs={12} className="navigation-bar">
          <Typography
            variant="h4"
            sx={{ display: "flex", justifyContent: "center" }}
            color="primary"
          ></Typography>
        </Grid>
        <Grid item xs={12} className="search-bar">
          <Search handleSearch={handleSearch} />
        </Grid>

        <Grid
          container
          justifyContent="space-between"
          className="map-container"
        >
          <Grid item className="search-results">
            <SearchResults results={data} onSelectOption={onSelectOption} />
          </Grid>
          <Grid item className="map">
            <MyMap
              center={[center.lat, center.lng]}
              zoom={13}
              scrollWheelZoom={false}
              polygonPositions={polygon}
              boundingBox={boundingBox}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
