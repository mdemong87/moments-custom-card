import Category from "../componnent/Category";
import Cta from "../componnent/Cta";
import Deckgame from "../componnent/Deckgame";
import Hero from "../componnent/Hero";
import Info from "../componnent/Info";
import Trading from "../componnent/Trading";
import Tradition from "../componnent/Tradition";

const Homepage = () => {


  console.log(process.env.NEXT_PUBLIC_API_BASE_URL);


  return (
    <main className="h-fit">
      <Hero />
      <Category />
      <Info />
      <Tradition />
      <Deckgame />
      <Trading />
      <Cta />
    </main>
  );
};

export default Homepage;
