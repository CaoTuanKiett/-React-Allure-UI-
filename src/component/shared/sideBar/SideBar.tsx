import React from "react";
import ListSideBar from "../../common/listSideBar/ListSideBar";
import "./SideBar.scss";

const SideBar = () => {
  const categories = [
    {
      title: "Allure Design System",
      links: [
        { name: "Introduction", link: "/intro" },
        { name: "Design principle", link: "/Design principle" },
        { name: "Design standard", link: "/Design standard" },
        { name: "Change log", link: "/Change log" },
      ],
    },
    {
      title: "Basic",
      links: [
        { name: "Button", link: "/Button" },
        { name: "Icon Gallery", link: "/Icon Gallery" },
        { name: "Icon", link: "/Icon" },
        { name: "Common I18N Terms", link: "/Common I18N Terms" },
        { name: "Common Product", link: "/Common Product" },
        { name: "Typography", link: "/Typography" },
      ],
    },
    {
      title: "Navigation",
      links: [
        { name: "Breadcrumb", link: "/Breadcrumb" },
        { name: "Navigation Menu", link: "/Navigation Menu" },
        { name: "Tab", link: "/Tab" },
        { name: "Tree", link: "/Tree" },
        { name: "Wizard", link: "/Wizard" },
      ],
    },
    {
      title: "Form",
      links: [
        { name: "AutoComplete", link: "/AutoComplete" },
        { name: "Avatar", link: "/Avatar" },
        { name: "Checkbox", link: "/Checkbox" },
        { name: "DatePicker", link: "/DatePicker" },
        { name: "Expander", link: "/Expander" },
        { name: "FileUploader", link: "/FileUploader" },
        { name: "Input", link: "/Input" },
        { name: "Rich textbox", link: "/RichTextbox" },
        { name: "PeoplePicker", link: "/PeoplePicker" },
        { name: "Radio button", link: "/RadioButton" },
        { name: "Select", link: "/Select" },
        { name: "Switch", link: "/Switch" },
        { name: "TimePicker", link: "/TimePicker" },
      ],
    },
    {
      title: "Feedback",
      links: [
        { name: "Message", link: "/Message" },
        { name: "Notification", link: "/Notification" },
      ],
    },
    {
      title: "Other",
      links: [
        { name: "Dialog", link: "/dialog" },
        { name: "Modal", link: "/Modal" },
        { name: "Loading", link: "/Loading" },
        { name: "Panel", link: "/Panel" },
        { name: "Popover", link: "/Popover" },
        { name: "Progress", link: "/Progress" },
        { name: "Waffle", link: "/Waffle" },
        { name: "Activity timeline", link: "/Activity timeline" },
      ],
    },
  ];

  return (
    <div className="sideBar">
      {categories.map((category, index) => (
        <ListSideBar
          key={index}
          title={category.title}
          links={category.links}
        />
      ))}
    </div>
  );
};

export default SideBar;
