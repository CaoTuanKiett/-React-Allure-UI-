import "./ListSideBar.scss";
import React from "react";
import { Link } from "react-router-dom";

interface ILink {
  name: string;
  link: string;
}

interface IList {
  title: string;
  links: ILink[];
}

const ListSideBar: React.FC<IList> = (props) => {
  return (
    <div className="listSideBar">
      <h3 className="title">{props.title}</h3>
      <div className="list">
        {props.links.map((item) => (
          <Link key={item.name} className="link" to={item.link}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListSideBar;
