import React from "react";
import "./../scss/components/header.scss";

const Header = () => {
  const navItems = ["home", "about", "testimonials", "contact"];

  return (
    <header className="desktopHeader">
      <a className="digital-agency" href="/">
        Digital Agency
      </a>
      <nav>
        <ul className="headerList">
          {navItems.map((listItem, index) => (
            <li key={index} className={`navItems-${index}`}>
              {listItem}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
