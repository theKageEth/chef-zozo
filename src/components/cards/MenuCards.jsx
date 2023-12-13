"use client";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import NextImage from "next/image";
import { Image } from "@nextui-org/image";

const MenuCards = ({ id, title, img, price }) => {
  return (
    <Card shadow="sm">
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={title}
          className=" object-cover h-[140px] w-full "
          src={img}
        />
      </CardBody>
      <p>
        <strong>
          {id}.{title}
        </strong>
      </p>
      <p className="text-default-500">{price}</p>
      <CardFooter className="text-small justify-between"></CardFooter>
    </Card>
  );
};

export default MenuCards;
