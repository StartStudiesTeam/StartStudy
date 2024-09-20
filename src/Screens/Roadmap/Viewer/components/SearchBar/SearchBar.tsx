import React from "react";
import { Box, Button, Input } from "native-base";
import { Search } from "lucide-react-native";
import styleSearchBar from "./style";

export const SearchBar = () => {
  return (
    <Box style={styleSearchBar.content}>
      <Button
        variant={"outline"}
        size={"md"}
        style={styleSearchBar.buttonSearch}
      >
        <Search size={20} color="#549DB4" />
      </Button>
      <Input
        placeholder="Input"
        flex={1}
        borderRadius={8}
        style={styleSearchBar.inputSearch}
      />
    </Box>
  );
};
