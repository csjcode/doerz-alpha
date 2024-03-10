import React from "react";
import AvatarUser from "./AvatarUser";
import { DropdownMenuUser as DropdownUser } from "./DropdownUser";

const NavAvatarMenu = () => {
  return (
    <DropdownUser>
      <AvatarUser />
    </DropdownUser>
  );
};

export default NavAvatarMenu;
