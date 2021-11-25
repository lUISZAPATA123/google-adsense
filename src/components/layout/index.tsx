import React, { FunctionComponent } from "react";
import Navbar from "../navbar/index";

// we can use children even though we haven't defined them in our CardProps
export const Layout: FunctionComponent = ({ children }) => (
  <div>
    <Navbar />
    {children}
  </div>
);
