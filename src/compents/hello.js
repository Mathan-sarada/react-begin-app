/* With JSX */

import React from "react";

const Hello = () => {
  /* With JSX */
  // return (
  //   <div>
  //     <h3>Hello</h3>
  //   </div>
  // );
  /* Without JSX */
  return React.createElement(
    "div",
    { id: "welcome", className: "wev" },
    "hello"
  );
};

export default Hello;
