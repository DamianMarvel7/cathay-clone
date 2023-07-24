import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";

const Home = () => {
  return (
    <div className="home">
      {/* <Menu /> */}
      <Navigation />
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default Home;
