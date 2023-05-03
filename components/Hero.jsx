import { Carousel } from "react-responsive-carousel";
import ImageSlider from "./ImageSlider";

const HeroSection = () => {
  const slides = [
    {
      caption: "Hello from Ascension 3",
      url: "http://kssfkenya.org/wp-content/uploads/2023/05/IMG_2094-min-scaled.jpg",
    },
    {
      caption: "Hello from Ascension 4",
      url: "http://kssfkenya.org/wp-content/uploads/2023/05/IMG_2145-min-scaled.jpg",
    },
    {
      caption: "Hello from Ascension 4",
      url: "http://kssfkenya.org/wp-content/uploads/2023/05/IMG_1969-min-scaled.jpg",
    },
    {
      caption: "Hello from Ascension 4",
      url: "http://kssfkenya.org/wp-content/uploads/2023/05/IMG_2059-min-scaled.jpg",
    },
  ];
  return (
    <div className="h-[20rem] bg-red-300 w-full">
      <ImageSlider slides={slides} isCaption={false} timer={10000} />
    </div>
  );
};

export default HeroSection;

//   <Carousel>
//     <div>
//       <img
//         src="https://images.indianexpress.com/2023/01/openai-logo-featured.jpg"
//         alt="image1"
//       />
//       <p className="legend">Image 1</p>
//     </div>
//     <div>
//       <img
//         src="https://images.indianexpress.com/2023/01/openai-logo-featured.jpg"
//         alt="image1"
//       />
//       <p className="legend">Image 1</p>
//     </div>
//     <div>
//       <img
//         src="https://images.indianexpress.com/2023/01/openai-logo-featured.jpg"
//         alt="image1"
//       />
//       <p className="legend">Image 1</p>
//     </div>
//     <div>
//       <img
//         src="https://images.indianexpress.com/2023/01/openai-logo-featured.jpg"
//         alt="image2"
//       />
//       <p className="legend">Image 2</p>
//     </div>
//   </Carousel>
