import { MapContainer, TileLayer, useMap } from "react-leaflet";
import MapDrawing from "./MapDrawing";

const MyMap = (props: any) => {
  const { center, zoom, scrollWheelZoom, polygonPositions, boundingBox } = props;
  const ChangeView = (properties: any) => {
    const { center, zoom } = properties;
    const map = useMap();
    map.setView(center, zoom);
    boundingBox &&
      map.fitBounds([
        [boundingBox[0], boundingBox[2]],
        [boundingBox[1], boundingBox[3]],
      ]);
    return null;
  };

  return (
    <MapContainer center={center} zoom={!boundingBox ? zoom : undefined} scrollWheelZoom={scrollWheelZoom}>
      <ChangeView center={center} zoom={zoom} />
      <MapDrawing polygonPositions={polygonPositions} />
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
};

export default MyMap;
