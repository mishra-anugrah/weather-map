export const searchLocation = (searchQuery: string): any => {
  const searchUrl = `https://nominatim.openstreetmap.org/search?q=${searchQuery}&format=json&polygon_geojson=1`;

  return fetch(searchUrl)
    .then((res: any) => {
      if (res.status === 200) return res.json();
    })
    .catch((e) => console.log(e));
};
