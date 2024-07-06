import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const AvatarUser = () => {
  return (
    <Avatar>
      <AvatarImage asChild src="https://pbs.twimg.com/profile_images/1632362292326047744/z8NiZyBF_400x400.jpg">
        <Image
          width={40}
          height={40}
          src="https://pbs.twimg.com/profile_images/1632362292326047744/z8NiZyBF_400x400.jpg"
          alt="@shadcn"
        />
      </AvatarImage>
      <AvatarFallback>CS</AvatarFallback>
    </Avatar>
  );
};

export default AvatarUser;
