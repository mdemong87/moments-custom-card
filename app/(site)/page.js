import Category from "../componnent/Category";
import Hero from "../componnent/Hero";
import Info from "../componnent/Info";

const Homepage = () => {

  return (
    <main className="h-fit">
      <Hero />
      <Category />
      <Info />
    </main>
  );
};

export default Homepage;
