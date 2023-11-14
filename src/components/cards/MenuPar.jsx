import MenuCards from "@/components/cards/MenuCards";
import ParallaxHero from "@/components/hero/ParallaxHero";
const url = "/cake.png";
const list = [
  {
    id: 1,
    title: "Orange",
    img: url,
    price: "$5.50",
  },
  { id: 2, title: "Tangerine", img: url, price: "$3.00" },
  { id: 3, title: "Raspberry", img: url, price: "$10.00" },
  { id: 4, title: "Lemon", img: url, price: "$5.30" },
  { id: 5, title: "Avocado", img: url, price: "$15.70" },
  { id: 6, title: "Lemon 2", img: url, price: "$8.00" },
  { id: 7, title: "Banana", img: url, price: "$7.50" },
  { id: 8, title: "Watermelon", img: url, price: "$12.20" },
];

const MenuPar = () => {
  return (
    <div>
      <section>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
            {list.map((item) => (
              <MenuCards
                key={item.id}
                id={item.id}
                title={item.title}
                img={item.img}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default MenuPar;
