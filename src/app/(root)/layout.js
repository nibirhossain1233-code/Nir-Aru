import Header from "@/components/ui/Header";
import React, { Children } from "react";

const layout = ({children}) => {
  return <div>
    <Header/>
    {children}
    </div>;
};

export default layout;
