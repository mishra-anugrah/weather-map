import React, { useState } from "react";
import { TextField, IconButton } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";

interface ISearchProps {
  handleSearch: (searchQuery: string) => void;
}

function Search(props: ISearchProps) {
  const { handleSearch } = props;
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };

  const searchHandler = (e: any) => {
    handleSearch(searchQuery);
  };

  const handleKeyPress = (event: any) => {
    if (event.charCode === 13) {
      handleSearch(searchQuery);
    }
  };

  return (
    <div className="search-container">
      <TextField
        variant="outlined"
        placeholder="Search here"
        value={searchQuery}
        onChange={handleSearchQueryChange}
        onKeyPress={handleKeyPress}
        InputProps={{
          endAdornment: (
            <IconButton onClick={searchHandler}>
              <SearchOutlined />
            </IconButton>
          ),
        }}
      />
    </div>
  );
}

export default Search;
