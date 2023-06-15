import CountryItem from "@components/CountryItem";
import ListCountries from "@components/ListCountries";

/**
 * Jokes home page
 * @returns Node to render home Page
 */
const Home = async () => {
  return (
    <section className="w-full flex-center flex-col mb-24">
      <h1 className="head_text text-center">
        <br className="max-md:hidden" />
      </h1>

      <ListCountries />
    </section>
  );
};

export default Home;
