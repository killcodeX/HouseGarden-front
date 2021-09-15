import React, { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import { Form, Select, Tooltip } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getProductSorted, getSearchData, clearSearchData } from "../../redux/actions/postactions";
import {
  FlexWrapper,
  FormLabel,
  SearchWrapper,
  SearchBar,
  SearchIcon,
  SearchSuggestion,
  SearchSuggestionItem,
} from "./style";

export default function Searchform() {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.products.allProducts);
  const searchP = useSelector((state) => state.products.searchP);

  const handleFilter = (data) => {
    dispatch(getProductSorted(data));
  };

  const handleChange = (e) => {
    const value = e.target.value;
    let matches = [];
    if (value.length >= 1) {
      const regex = new RegExp(`${value}`, "gi");
      matches = allProducts.filter((item) => regex.test(item.title));
    }
    setSuggestions(matches);
    setSearchValue(value);
  };

  const handleSelect = (item) => {
    setSearchValue(item.title);
    dispatch(getSearchData(item))
    setSuggestions([]);
  };

  const clearSearch = () => {
    dispatch(clearSearchData())
    setSearchValue("")
  }

  return (
    <FlexWrapper>
      {/* search input */}
      <SearchWrapper>
        <SearchIcon onClick={clearSearch}>{searchP ? 
        <Tooltip title="clear search"><FiX /></Tooltip> : <FiSearch />}</SearchIcon>
        <SearchBar
          placeholder="Search plants.."
          value={searchValue}
          onChange={handleChange}
          onBlur={() => {
            setTimeout(() => {
              setSuggestions([]);
            }, 500);
          }}
        />
        {suggestions?.length > 1 ? (
          <SearchSuggestion>
            {suggestions.map((item) => {
              return (
                <SearchSuggestionItem
                  key={item._id}
                  onClick={() => handleSelect(item)}
                >
                  {item.title}
                </SearchSuggestionItem>
              );
            })}
          </SearchSuggestion>
        ) : null}
      </SearchWrapper>

      {/* for sorting */}
      <div>
        <FormLabel>Sort By</FormLabel>
        <Form.Item style={{ width: "200px" }}>
          <Select
            placeholder="All Products"
            onChange={(data) => handleFilter(data)}
          >
            <Select.Option value="ah">All Products</Select.Option>
            <Select.Option value="plh">Price - Low to High</Select.Option>
            <Select.Option value="phl">Price - High to low</Select.Option>
            <Select.Option value="rlh">Rating - Low to High</Select.Option>
            <Select.Option value="rhl">Rating - High to Low</Select.Option>
          </Select>
        </Form.Item>
      </div>
    </FlexWrapper>
  );
}

// matches = allProducts.filter((item) => {
//   const regex = new RegExp(`${value}`, "gi");
//   return item.title.match(regex);
// });

//{item.title}

//onClick={() => handleSelect(item)}

{
  /* <SearchSuggestion key={item._id}>
                  <SearchSuggestionItem>
                    {item}
                  </SearchSuggestionItem>
                </SearchSuggestion> */
}
