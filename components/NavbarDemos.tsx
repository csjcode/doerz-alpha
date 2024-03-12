import React from "react";

type Props = {};

function NavbarDemos({}: Props) {
  return (
    <div>
      <div className="w-full  py-2 bg-zinc-300 dark:bg-zinc-900 border-bottom border-zinc-600">
        <div className="w-full flex flex-row space-x-2 justify-center items-center">
          <div className="min-w-24 px-6 py-2 mx-2 border border-zinc-800 rounded-lg">
            Cards
          </div>
          <div className="min-w-24 px-6 py-2 mx-2 border border-zinc-800 rounded-lg">
            Transactions
          </div>
          <div className="min-w-24 px-6 py-2 mx-2 border border-zinc-800 rounded-lg">
            Inbox
          </div>
          <div className="px-6 py-2 mx-2 border border-zinc-800 rounded-lg">
            Wallet
          </div>
          <div className="px-6 py-2 mx-2 border border-zinc-800 rounded-lg">
            Market Dashboard
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarDemos;
