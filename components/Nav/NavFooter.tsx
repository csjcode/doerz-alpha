import React from "react";
import TestingReminder from "../messages/TestingReminder";

type Props = {};

const NavFooter = (props: Props) => {
  return (
    <div>
      <hr className="my-4 h-[2px] border-t-0 bg-neutral-200 dark:bg-white/10" />
      <TestingReminder />
    </div>
  );
};

export default NavFooter;
