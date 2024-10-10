import React from "react";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <div className="w-full  p-3 shadow-sm flex justify-between items-center px-5 bg-white">
      <img src="/logo.svg" alt="logo" />
      <div>
        <Button>Sign In</Button>
      </div>
    </div>
  );
};

export default Header;
