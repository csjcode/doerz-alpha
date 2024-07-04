"use client";
import WalletAdapter from "@/components/WalletAdapter";
import { useWallet } from "@solana/wallet-adapter-react";
import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import LoginWalletAdapter from "./LoginWalletAdapter";
import { FaRegUser, FaUserAstronaut, FaUserEdit } from "react-icons/fa";
import Link from "next/link";
import FormLabel from "../forms/makerz/task/create/FormLabel";
import { TbSquareNumber1Filled,TbSquareNumber2Filled, TbSquareNumber3Filled } from "react-icons/tb";


type LoginStepperProps = {};

const LoginStepper = (props: LoginStepperProps) => {
  const { connected } = useWallet();

  const router = useRouter();
  const searchParams = useSearchParams();
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [settings, setSettings] = React.useState(false);
  const step = searchParams.get("step");

  // console.log('params', params);
  // const params = useParams<{ step: string }>()

  // const { loggedIn}  = isLoggedIn

  useEffect(() => {
    !connected && router.push("/login?step=1");
    connected && !loggedIn && !settings && router.push("/login?step=2");
    connected && loggedIn && !settings && router.push("/login?step=3");
    connected && loggedIn && settings && router.push("/doerz/inbox");
  }, [connected, loggedIn, settings]);

  const handleSimulateLoggedIn = () => {
    alert("Login successful!");
    setLoggedIn(true);
  };

  const handleSimulateSettings = () => {
    alert("Settings");
    setSettings(true);
  };

  // const connectStyle = connected
  //   ? "bg-emerald-500 dark:bg-emerald-800"
  //   : "bg-zinc-700 dark:bg-zinc-200 text-white";

  // const loggedInStyle =
  //   connected && loggedIn
  //     ? "bg-emerald-200 dark:bg-emerald-800"
  //     : connected && !loggedIn && step === "2"
  //       ? "bg-zinc-700 text-white"
  //       : "bg-zinc-200 bg-zinc-200 dark:bg-emerald-600";

  // const preferencesStyle =
  //   connected && loggedIn && settings
  //     ? "bg-emerald-200 dark:bg-emerald-600"
  //     : "bg-zinc-200 bg-zinc-200 dark:bg-emerald-600";

  return (
    <div
      className="my-2 flex max-w-[320px] flex-col rounded-xl border
    border-zinc-100 p-4 dark:border-zinc-800 sm:max-w-[600px] md:max-w-[800px]"
    >
      <div className="flex flex-col ">
        <p className="text-xl">
          {step === "1" && <div className="flex flex-row justify-start items-center"><TbSquareNumber1Filled size={24} className="mr-2 text-blue-400" />Connect Wallet</div>}
          {step === "2" && <div className="flex flex-row justify-start items-center"><TbSquareNumber2Filled size={24} className="mr-2 text-blue-400" />Create New Account & Login</div>}
          {step === "3" && "3. Save Preferences"}
        </p>

        {step === "1" && (
          <div className="flex flex-row justify-start">
            <hr className="mt-2 h-[2px] w-1/3 bg-emerald-300" />
            <hr className="mt-2 h-[2px] w-2/3 bg-zinc-100 dark:bg-zinc-900" />
          </div>
        )}
        {step === "2" && <hr className="mt-2 h-[2px] w-2/3 bg-emerald-300" />}
        {step === "3" && <hr className="mt-2 h-[2px] w-full bg-emerald-300" />}

        <div className="mt-2 text-xs dark:text-zinc-400">
          {step === "1" && "Step 1 of 3"}
          {step === "2" && "Step 2 of 3 - login or create user account"}
          {step === "3" && "3. Save Preferences"}
        </div>

        {/* <hr className="" /> */}
      </div>
      <div className="flex w-full flex-col border-0 py-4 md:flex-row">


        {/* LEFT COLUMN */}

        <div className="flex w-full md:w-1/2">
          {step === "1" && (
            <div className="2  flex w-full flex-col items-start justify-start border-0 text-center">
              <div className="mt-4 flex flex-col items-start justify-start text-center">
                {/* <div className="">Step 1</div> */}
                {/* {!connected && <p></p>} */}
                {!connected && (
                  <div>
                    <div className="mt-0 text-lg">
                      Choose you Solana wallet:
                    </div>
                    <div className="my-6 ml-4 flex justify-center">
                      <LoginWalletAdapter />
                    </div>

                    <div className="text-center text-sm font-light text-zinc-800 dark:text-zinc-300">
                      <div className="mt-4 text-sm font-light">
                        If you do not have a wallet, get:
                      </div>

                      <ul className="list-inside text-left">
                        <li className="mt-2 list-disc hover:font-bold">
                          <a href="https://phantom.app" target="_blank">
                            Phantom wallet
                          </a>
                        </li>
                        <li className="mt-2 list-disc">
                          <a
                            className="hover:font-bold"
                            href="https://www.backpack.app/"
                            target="_blank"
                          >
                            Backpack wallet
                          </a>
                        </li>
                        <li className="mt-2 list-disc">
                          <a
                            className="hover:font-bold"
                            href="https://www.kucoin.com/es/learn/web3/the-best-solana-wallets-list"
                            target="_blank"
                          >
                            List of Best Solana Wallets
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>{" "}
            </div>
          )}

          {step === "2" && (
            <div className=" flex min-w-[150px] flex-col items-start justify-start min-w-[300px] md:min-w-[400px]">
              <div className="flex h-full flex-col items-start justify-start">
                <div className="mt-4 flex flex-row items-center justify-center">
                  <div className="flex flex-row items-start justify-start mr-4">
                    <FaUserEdit
                      size={30}
                      className="font-extralight text-zinc-400"
                    />
                  </div>
                  <div className="mt-2">
                    <h3 className="text-lg font-bold">New users</h3>
                    <p className="text-xs">Register for a new account</p>
                  </div>
                </div>

                <div className="flex w-full flex-col text-left text-left">
                  {" "}
                  <div className="mt-4 flex w-full flex-row text-left">
                    <Input type="email" placeholder="Email" />
                  </div>
                  <div className="mt-4 flex w-full flex-row text-left">
                    <Input type="email" placeholder="Username" />
                  </div>
                  {/* <div className="mt-4 flex w-full flex-row text-left">
                    <Input type="email" placeholder="Email" />
                  </div> */}
                </div>
                <Button className="mt-4 w-48 bg-blue-500 hover:bg-blue-600 text-white" onClick={handleSimulateLoggedIn}>
                  Create New Account
                </Button>
              </div>
            </div>
          )}

          {step === "3" && (
            <div className="mt-4 flex flex-col items-center justify-center">
              <div className="mt-4 flex flex-col items-center justify-center">
                <div className="">Step 3</div>
                <div className="">Setup Preferences</div>
                <Button className="mt-4" onClick={handleSimulateSettings}>
                  Save Settings
                </Button>
              </div>{" "}
            </div>
          )}
        </div>

        {/* RIGHT COLUMN */}

        <div className="flex w-full flex-col items-center justify-start border-0 md:w-1/2 min-w-[300px] md:min-w-[400px]">
          {step === "1" && (
            <div className="flex flex-col items-center justify-start">
              <div className="text-md ml-2 font-light leading-loose">
                <div className="flex flex-row items-center justify-center">
                  <div className="mr-4 ">
                    <FaUserAstronaut size={40} className="text-zinc-400" />
                  </div>
                  <div className="mt-4">
                    <span className="font-bold">Current users: </span>Connect
                    the wallet associated with your Doerz user account.
                  </div>
                </div>
                <div className="mt-2">
                  <div className="flex flex-row items-center justify-center">
                    <div className="mr-4 ">
                      {/* <FaUserAstronaut size={48} className="text-zinc-400"/> */}
                      <FaUserEdit
                        size={40}
                        className="font-extralight text-zinc-400"
                      />
                    </div>
                    <div className="mt-2">
                      <span className="font-bold">New users:</span> if not
                      registered, a wallet is needed for a new account.
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="flex flex-row items-center justify-center">
                    <div className="mr-4 ">
                      {/* <FaUserAstronaut size={48} className="text-zinc-400"/> */}
                      <FaRegUser
                        size={40}
                        className="font-extralight text-zinc-400"
                      />
                    </div>
                    <div className="mt-2">
                      <span className="font-bold">Change wallet:</span> Entering
                      an unregistered wallet will create a new account.
                    </div>
                  </div>
                </div>
                {/* <li>.</li> */}
              </div>
            </div>
          )}

          {step === "2" && (
            <div className="flex h-full w-full flex-col items-start justify-start border-0">
              <div className="text-md ml-2 flex flex-col font-light leading-loose">
                <div className="mt-4 flex flex-row items-center justify-start">
                  <div className="mr-4 ">
                    <FaUserAstronaut
                      size={26}
                      className="font-extralight text-zinc-400"
                    />
                  </div>
                  <div className="mt-2">
                    <h3 className="text-lg font-bold">Login</h3>
                    <p className="text-xs">Login current users</p>
                  </div>
                </div>

                <div className=" flex flex-col items-start justify-start">
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex w-full flex-row text-left text-left">
                      {" "}
                      <div className="mt-4 flex w-full flex-row text-left">
                        <Input type="email" placeholder="Email" />
                      </div>
                    </div>
                    <Button className="mt-4 w-44 bg-emerald-500 hover:bg-emerald-600 text-white" onClick={handleSimulateLoggedIn}>
                      Login
                    </Button>
                  </div>
                </div>

                {/* <div className="mt-2">
                  <div className="flex flex-row items-center justify-center">
                    <div className="mr-4 ">
                      <FaUserEdit
                        size={40}
                        className="font-extralight text-zinc-400"
                      />
                    </div>
                    <div className="mt-2">
                      <span className="font-bold">New users:</span> if not
                      registered, a wallet is needed for a new account.
                    </div>
                  </div>
                </div> */}
                {/* <div className="mt-2">
                  <div className="flex flex-row items-center justify-center">
                    <div className="mr-4 ">
                      <FaRegUser
                        size={40}
                        className="font-extralight text-zinc-400"
                      />
                    </div>
                    <div className="mt-2">
                      <span className="font-bold">Change wallet:</span> Entering
                      an unregistered wallet will create a new account.
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          )}
        </div>
      </div>
      {step === "1" && (
        <div className="">
          <div className="mt-4 text-zinc-700 dark:text-zinc-300">
            <hr className="my-2 h-[2px] w-full bg-zinc-100" />
            <h3 className="text-md text-emerald-700 dark:text-emerald-400">Why connect a Solana wallet?</h3>
            <div className="ml-1 mt-2"></div>
            <p className="font-light leading-relaxed">
              For Doerz, to receive rewards, validate tasks, and keep your
              account info.
            </p>
            <p className="font-light">
              For Makerz, to fund tasks, publish tasks, and keep your account
              history.
            </p>
            <p className="font-light">
              For everybody, to keep your account history,
              authorization/authentication, .
            </p>
          </div>
          <div className="mt-4 text-zinc-700 dark:text-zinc-300">
            <hr className="my-2 h-[2px] w-full bg-zinc-100" />
            <h3 className="text-md text-emerald-700 dark:text-emerald-400">
              How do I choose my wallet? Can I change it later?
            </h3>
            <div className="ml-1 mt-2"></div>
            <p className="font-light leading-relaxed">
              We recommend creating a new wallet for Doerz.fun activities. This
              is a good practice in general for using apps in the Solana
              ecosystem.
            </p>
            <p className="font-light">
              You can change later, although you will have to verify your
              account again with your email.
            </p>
          </div>
        </div>
      )}
      {/*
{step === "2" && (
        <div className="">
          <div className="mt-4 text-zinc-700 dark:text-zinc-300">
            <hr className="my-2 h-[2px] w-full bg-zinc-100" />
            <h3 className="text-md">Why connect a Solana wallet?</h3>
            <div className="ml-1 mt-2"></div>
            <p className="font-light leading-relaxed">
              For Doerz, to receive rewards, validate tasks, and keep your
              account info.
            </p>
            <p className="font-light">
              For Makerz, to fund tasks, publish tasks, and keep your account
              history.
            </p>
            <p className="font-light">
              For everybody, to keep your account history,
              authorization/authentication, .
            </p>
          </div>
          <div className="mt-4 text-zinc-700 dark:text-zinc-300">
            <hr className="my-2 h-[2px] w-full bg-zinc-100" />
            <h3 className="text-md">
              How do I choose my wallet? Can I change it later?
            </h3>
            <div className="ml-1 mt-2"></div>
            <p className="font-light leading-relaxed">
              We recommend creating a new wallet for Doerz.fun activities. This
              is a good practice in general for using apps in the Solana
              ecosystem.
            </p>
            <p className="font-light">
              You can change later, although you will have to verify your
              account again with your email.
            </p>
          </div>
        </div>
      )}
 */}
    </div>
  );
};

export default LoginStepper;
