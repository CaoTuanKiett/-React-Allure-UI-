import * as React from "react";
import {
  Stack,
  Dropdown,
  IDropdownStyles,
  IDropdownOption,
} from "@gui/fluent-ui-allure";

interface ISelect {
  options: { text: string; key: string }[];
  handleOnChange: (key: string) => void;
}

const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: "280px !important" },
};

export const Select: React.FC<ISelect> = (props) => {
  const handleDropdownChange = (
    event: React.FormEvent<HTMLDivElement>,
    option?: IDropdownOption<any>
  ) => {
    if (option) {
      props.handleOnChange(option.key as string);
    }
  };

  return (
    <Stack horizontal tokens={{ childrenGap: 16 }}>
      <Dropdown
        options={props.options}
        styles={dropdownStyles}
        placeholder={props.options[0].text}
        onChange={handleDropdownChange}
      />
    </Stack>
  );
};
