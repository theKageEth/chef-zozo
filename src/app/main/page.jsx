import MenuCards from "@/components/cards/MenuCards";
import ParallaxHero from "@/components/hero/ParallaxHero";
import ParallaxMenu from "@/components/hero/ParallaxMenu";
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

const Main = () => {
  return (
    <div>
      <section>
        <ParallaxMenu />
      </section>
    </div>
  );
};
export default Main;
