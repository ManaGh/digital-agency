import React from "react";

import "./../scss/components/companies.scss";

const Companies = () => {
  const logoItems = ["spotify", "slack", "Dropbox", "Zoom"];
  return (
    <nav>
      <a className="Trust">Trusted by 4,000+ companies</a>

      <ul className="Logos">
        {logoItems.map((listIem, index) => (
          <li key={index} className={`Logos-${index}`}>
            {listIem}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Companies;