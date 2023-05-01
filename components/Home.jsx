import Embedder from "./Embedder";
import Galleries from "./Galleries";
import HeroSection from "./Hero";
import International from "./International";
import Navbar from "./Navbar";
import NewsSection from "./News";
import Socials from "./Socials";

const HomePage = () => {
  return (
    <>
      <div className="w-full h-full bg-customBG ">
        <div className="flex flex-col bg-customBG min-h-screen max-w-5xl mr-auto ml-auto ">
          <NewsSection />
          <Galleries />
          <Socials />
          <Embedder />
          <International />
        </div>
      </div>
    </>
  );
};

export default HomePage;
