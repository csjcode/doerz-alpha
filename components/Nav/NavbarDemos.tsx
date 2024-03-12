import Link from "next/link";
import React from "react";

type Props = {};

function NavbarDemos({}: Props) {
  return (
    <div>
      <div className="w-full mb-8 py-2 bg-zinc-300 dark:bg-zinc-900 border-bottom border-zinc-600">
        <div className="w-full flex flex-row space-x-2 justify-center items-center">
          <Link href="/cards/">
          <div className="min-w-24 px-6 py-2 mx-2 border border-zinc-800 rounded-lg dark:hover:border-slate-700 hover:border-slate-500">
            Cards
          </div>
          </Link>
          <Link href="/transactions/">
          <div className="min-w-24 px-6 py-2 mx-2 border border-zinc-800 rounded-lg dark:hover:border-slate-700 hover:border-slate-500">
            Transactions
          </div>
          </Link>
          <Link href="/inbox/">
          <div className="min-w-24 px-6 py-2 mx-2 border border-zinc-800 rounded-lg dark:hover:border-slate-700 hover:border-slate-500">
            Inbox
          </div>
          </Link>
          <Link href="/wallet/">
          <div className="px-6 py-2 mx-2 border border-zinc-800 rounded-lg dark:hover:border-slate-700 hover:border-slate-500">
            Wallet
          </div>
          </Link>
          <Link href="/market/">
          <div className="px-6 py-2 mx-2 border border-zinc-800 rounded-lg dark:hover:border-slate-700 hover:border-slate-500">
            Market Dashboard
          </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavbarDemos;
