import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { TextInputProps } from "react-native";
import { ClearButton, Container, SearchBar, SearchButton, SearchInput } from "./styles"

type SearchProps = TextInputProps & {
  onSearch: () => Promise<void>;
  onClearSearch: () => Promise<void>;
}

export const Search = ({ onSearch, onClearSearch, ...rest }: SearchProps) => {

  return (
    <Container>
      <SearchBar>
        <SearchInput 
          autoCorrect={false}
          {...rest}
        />
         <ClearButton  
            onPress={onClearSearch}
          >
            <Feather name="x" color="#000" size={16} />
          </ClearButton> 
      </SearchBar>

      <SearchButton
        activeOpacity={0.8} 
        onPress={onSearch}
      >
       <Feather name="search" color="#FFF" size={20} />
      </SearchButton>
    </Container>
  )
}