import { Metadata } from "next";
import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardPageProps = {};
export const metadata: Metadata = {
  title: "Cards - Solana app",
  description: "Cards Demo for my Solana app",
};
const CardPage = (props: CardPageProps) => {
  return (
    <div>
      <Card className="w-[220px]">
        <CardHeader>
          <CardTitle>Solana</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col">
            <div className="mb-4">
            <Image
              src="https://placehold.co/400x300png"
              width={400}
              height={300}
              alt="card"
            />
            </div>
            <div>Card content</div>
          </div>
        </CardContent>
        <CardFooter className="">
          <p className="dark:text-zinc-700 text-zinc-300">Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardPage;
