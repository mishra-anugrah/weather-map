import { useState, useEffect } from "react";
import { Polygon } from "react-leaflet";

const MapDrawing = (props: any) => {
  const { polygonPositions } = props;
  const [positionCoords, setPositionCoords] = useState([]);

  const reverseCoords = (coords: any): any => {
    return coords.map(function reverse(item: any): any {
      return Array.isArray(item) && Array.isArray(item[0])
        ? item.map(reverse)
        : item.reverse();
    });
  };

  useEffect(() => {
    switch (polygonPositions.type) {
      case "Polygon":
        setPositionCoords(
          polygonPositions.coordinates[0].map((item: any) => item.reverse())
        );
        break;
      case "MultiPolygon":
        const coords = reverseCoords(polygonPositions.coordinates);
        setPositionCoords(coords);
        break;
      default:
        console.log("unsupported type coordinates");
    }
  }, [polygonPositions]);

  return (
    <Polygon positions={positionCoords} pathOptions={{ color: "green" }} />
  );
};

export default MapDrawing;
