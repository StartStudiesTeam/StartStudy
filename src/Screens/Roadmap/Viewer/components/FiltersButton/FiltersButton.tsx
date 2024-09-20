import React from "react";
import { Button } from "native-base";
import styleFiltersButton from "./style";

export const FiltersButton = () => {
  const pagesFilters: string[] = ["Meus", "Salvos", "Seguidos", "Seguidos"];
  return (
    <Button.Group
      mx={{
        base: "auto",
        md: 0,
      }}
      size="sm"
    >
      {pagesFilters.map((page, index) => (
        <Button
          key={index}
          _text={{
            lineHeight: 12,
          }}
          variant="outline"
          style={[styleFiltersButton.buttonFilter]}
        >
          {page}
        </Button>
      ))}
    </Button.Group>
  );
};
