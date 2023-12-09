import Image from "next/image";
import Link from "next/link";
import React from "react";

const MenuLinks = () => {
  return (
    <section>
      <Link href="/main">
        <div>
          <h1 className="text-center">Check whats cooking</h1>

          <Image
            src={"/pixel/cooking.gif"}
            priority={true}
            width={200}
            height={200}
            className=" mx-auto"
          />
        </div>
      </Link>
      <Link href={"/desert"}>
        <div>
          <h2 className="text-center">Deserts</h2>
          <Image
            src={"/pixel/desert.gif"}
            priority={true}
            width={200}
            height={200}
            className=" mx-auto"
          />
        </div>
      </Link>
    </section>
  );
};

export default MenuLinks;
