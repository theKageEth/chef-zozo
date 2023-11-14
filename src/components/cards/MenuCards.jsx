"use client";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import NextImage from "next/image";
import { Image } from "@nextui-org/image";

const MenuCards = ({ id, title, img, price }) => {
  return (
    <div className="mx-auto max-w-md">
      <Card shadow="sm" isPressable onPress={() => console.log("item pressed")}>
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={title}
            className="w-full object-cover h-[140px]"
            src={img}
          />
        </CardBody>
        <p>
          <strong>{title}</strong>
        </p>
        <p className="text-default-500">{price}</p>
        <CardFooter className="text-small justify-between"></CardFooter>
      </Card>
    </div>
  );
};

export default MenuCards;
