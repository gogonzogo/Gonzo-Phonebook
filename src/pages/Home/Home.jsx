import css from "./Home.module.css";

const Home = () => {
  return (
    <div className={css.homeText}>
      <h1 className={css.title}>Gonzo Phonebook</h1>
      <p className={css.welcome}>
        Welcome to my intuitive and efficient phonebook application! Say goodbye
        to the hassle of managing your contacts manually and embrace a seamless
        digital experience. With my user-friendly interface, organizing and
        accessing your contacts has never been easier. Simplify your life and
        stay connected effortlessly with my powerful phonebook solution.
      </p>
    </div>
  );
};

export default Home;
