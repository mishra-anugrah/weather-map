import { Card, CardContent } from "@mui/material";

export const SearchResults = (props: any) => {
  const { results, onSelectOption } = props;

  return (
    <>
      {results
        ? results.map((location: any, index: number) => {
            return (
              <Card sx={{ width: 200, my: 1, marginLeft: 3 }} onClick={() => onSelectOption(results[index])}>
                <CardContent>{location.display_name}</CardContent>
              </Card>
            );
          })
        : ""}
    </>
  );
};
