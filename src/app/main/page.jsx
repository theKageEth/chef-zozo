import MenuCards from "@/components/cards/MenuCards";
import { BASE_URL } from "@/utils/constants/constants";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const getData = async () => {
  try {
    const res = await fetch(`${BASE_URL}/api/dish`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const dishes = await res.json();
    return dishes;
  } catch (error) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
};

const Main = async () => {
  const data = await getData();
  if (!BASE_URL && !data) return notFound();
  return (
    <div className="mt-20 flex items-center justify-center">
      <section className=" gap-4 grid grid-cols-2 sm:grid-cols-3">
        {data.map((item) => (
          <MenuCards
            key={item.id}
            id={item.id}
            title={item.title}
            img={item.img}
            price={item.price}
            desc={item.desc}
          />
        ))}
      </section>
    </div>
  );
};
export default Main;
