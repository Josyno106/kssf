import Link from "next/link";
import React from "react";
import { FiYoutube } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

function Galleries(props) {
  const photos = [
    {
      url: "http://kssfkenya.org/wp-content/uploads/2023/05/IMG_2096-min-scaled.jpg",
      description: "Here goes some description for this specific photo",
    },
    {
      url: "http://kssfkenya.org/wp-content/uploads/2023/05/IMG_2059-min-scaled.jpg",
      description: "Here goes some description",
    },
  ];

  const bgPhotoStyles = {
    width: "100%",
    height: "100%",
    // borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    // backgroundImage: `url(${slides[currentIndex].url})`,
  };
  return (
    <>
      <div className="flex flex-row gap-2 mt-2 mb-2 ">
        <div className="flex flex-col w-3/5 ">
          <div className="flex justify-between  bg-customGreen p-1">
            <h2 className=" text-customBG font-poppins font-bold text-xl ">
              Photo Galleries
            </h2>
            <Link href={"/gallery"}>
              <h5 className="flex items-center gap-1 text-customBG hover:font-bold ">
                view all
                <BsArrowRight />
              </h5>
            </Link>
          </div>
          <div className="bg-customGreenFaded flex justify-between h-[18rem]">
            {/* show the required photos here */}
            {photos.map((photo, index) => (
              <div key={index} className="w-1/2 grow m-1 bg-gray-200">
                <div
                  style={{
                    width: "100%",
                    height: "80%",
                    // borderRadius: "10px",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundImage: `url(${photo.url})`,
                  }}
                >
                  {" "}
                </div>
                <div>
                  <Link href={photo.url}>
                    <p className="p-1 text-sm">{photo.description}</p>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-2/5 ">
          <div className="bg-customGreen p-1">
            <h2 className=" text-customBG font-poppins font-bold text-xl ">
              KSSF Broadcasts
            </h2>
          </div>
          <div className="bg-customGreenFaded h-[18rem]  flex flex-col justify-center items-center	">
            <h3 className=" text-2xl text-customGreen ">
              Catch our broadcast here,
            </h3>
            <Link href={"https://www.youtube.com/"}>
              <FiYoutube className="text-8xl text-red-600" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Galleries;
