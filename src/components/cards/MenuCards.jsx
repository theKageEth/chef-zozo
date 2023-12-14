"use client";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image"; // Import Image without curly braces
import { useState } from "react";

const MenuCards = ({ id, title, img, price, desc }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Card
      shadow="sm"
      isPressable
      className={`flippable-card ${isFlipped ? "flipped" : ""}`}
      onClick={handleClick}
    >
      <div className="card-inner">
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt={title}
            className="object-cover h-[140px] w-full"
            src={img}
          />

          {isFlipped && (
            <p className=" text-center whitespace-normal break-words ">
              {desc}
            </p>
          )}
        </CardBody>
        <p>
          <strong>
            {isFlipped ? null : `${id}.`}
            {isFlipped ? null : title}
          </strong>
        </p>
        <p className="text-default-500">{isFlipped ? null : price}</p>
        <CardFooter className="text-small justify-between"></CardFooter>
      </div>
    </Card>
  );
};

export default MenuCards;
