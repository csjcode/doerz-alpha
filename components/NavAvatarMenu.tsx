import React from "react";
import AvatarUser from "./AvatarUser";
import { DropdownMenuUser } from "./DropdownMenuUser";

const NavProfileMenu = () => {
  return (
    <DropdownMenuUser><AvatarUser /></DropdownMenuUser>
  );
};

export default NavProfileMenu;
