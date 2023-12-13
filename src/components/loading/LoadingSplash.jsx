import Image from "next/image";

const LoadingSplash = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Image src="/pixel/zozo.gif" height={100} width={100}></Image>
    </div>
  );
};

export default LoadingSplash;
