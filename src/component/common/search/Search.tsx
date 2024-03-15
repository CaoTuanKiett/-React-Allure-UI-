import { ISearchBoxStyles, SearchBox, Stack } from "@gui/fluent-ui-allure";
import * as React from "react";

import { useTranslation } from "react-i18next";

import "./Search.scss";
import { Link } from "react-router-dom";

interface IDataFetch {
  name: string;
  link: string;
}

export const Search: React.FC = () => {
  const { t } = useTranslation();
  const searchBoxStyles: Partial<ISearchBoxStyles> = {
    root: { height: 32 },
    box: { width: 240 },
    iconButton: { top: 4 },
  };

  const [active, setActive] = React.useState<boolean>(false);
  const [firstSearchValue, setFirstSearchValue] = React.useState<string>("");
  const [data, setData] = React.useState<IDataFetch[]>([]);

  const dataFetch = [
    { name: "Button", link: "/button" },
    { name: "Input", link: "/input" },
    { name: "Introduction", link: "/intro" },
    { name: "Dialog", link: "/dialog" },
    { name: "Search", link: "/search" },
    { name: "Icon", link: "/icon" },
    { name: "Modal", link: "/modal" },
    { name: "Panel", link: "/panel" },
  ];

  const [searchResults, setSearchResults] = React.useState<IDataFetch[]>([]);

  const handleSearch = (value: string) => {
    setData(dataFetch);
    const filteredData = data.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setSearchResults(value === "" ? [] : filteredData);

    setActive(value !== "");
    setFirstSearchValue(value);
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement> | undefined,
    newValue?: string
  ) => {
    if (event) {
      handleSearch(newValue || "");
    }
  };

  return (
    <Stack tokens={{ childrenGap: 20 }}>
      <Stack>
        <SearchBox
          styles={searchBoxStyles}
          showIcon
          placeholder={t("search")}
          value={firstSearchValue}
          onSearch={(v) => handleSearch(v)}
          onChange={(event, newValue) => handleChange(event, newValue)}
        />
      </Stack>

      {active && (
        <div className="search-data">
          <Stack>
            {searchResults.length === 0 ? (
              <p className="link">No results found</p>
            ) : (
              searchResults.map((item, index) => (
                <Link className="link" to={item.link} key={index}>
                  {item.name}
                </Link>
              ))
            )}
          </Stack>
        </div>
      )}
    </Stack>
  );
};
