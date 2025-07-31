import React from "react";
const Theme = ({themeState}) => {

  
  return (
    <button className="theme" id="theme" onClick={themeState}></button>
  );
};

export default Theme