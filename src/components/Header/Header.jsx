import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  let links = [
    {
      link: "/",
      id: 1,
      title: "Home page",
    },
    {
      link: "/add",
      id: 2,
      title: "Add page",
    },
  ];
  return (
    <div>
      {/* {links.map((link) => (
        <Link style={{ margin: "10px" }} key={link.id} to={link.link}>
          {link.title}
        </Link>
      ))} */}

      <Link to="/" style={{ margin: "10px" }}>
        Home page
      </Link>
      <Link to="/add" style={{ margin: "10px" }}>
        Add page
      </Link>
    </div>
  );
};

export default Header;
