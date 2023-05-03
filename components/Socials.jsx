import Link from "next/link";
import React from "react";
import { FiYoutube } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { FacebookProvider, EmbeddedPost } from "react-facebook";
import Script from "next/script";
import {
  InstagramEmbed,
  EmbedToggler,
  FacebookEmbed,
  TwitterEmbed,
  LinkedInEmbed,
} from "react-social-media-embed";

function Socials(props) {
  const handles = [
    {
      url: "https://twitter.com/ShootingKe?t=MMmh1rt-8zCKCIx6P5JLJQ&s=09",
      platform: TwitterEmbed,
    },
    {
      url: "https://twitter.com/PixelAndBracket/status/1356633038717923333",
      platform: TwitterEmbed,
    },
    {
      url: "https://twitter.com/PixelAndBracket/status/1356633038717923333",
      platform: TwitterEmbed,
    },
  ];

  const bgPhotoStyles = {
    width: "100%",
    height: "100%",
    // borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    // backgroundImage: `url(${slides[currentIndex].url})`,//disabled tester
  };
  return (
    <>
      <div className="flex flex-row gap-2 mb-2 ">
        <div className="flex flex-col w-full ">
          <div className="flex justify-between  bg-customGreen p-1">
            <h2 className=" text-customBG font-poppins font-bold text-xl ">
              Follow our social handles
            </h2>
          </div>
          <div className="bg-customGreenFaded grid grid-cols-2 gap-1  flex-wrap">
            {/* show the social handles here */}

            <div className={"m-1 bg-gray-200 col-span-2  "}>
              <div
                style={{
                  width: "100%",
                  // height: "50%",
                  // borderRadius: "10px",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  // backgroundImage: `url(${photo.url})`,
                }}
              >
                <LinkedInEmbed
                  height={570}
                  postUrl="https://www.linkedin.com/posts/peterdiamandis_5-discoveries-the-james-webb-telescope-will-activity-6898694773406875648-z-D7"
                  url="https://www.linkedin.com/embed/feed/update/urn:li:share:6898694772484112384"
                  width="100%"
                />
              </div>
            </div>
            <div className={"m-1 bg-gray-200 "}>
              <div
                style={{
                  width: "100%",
                  // height: "50%",
                  // borderRadius: "10px",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  // backgroundImage: `url(${photo.url})`,
                }}
              >
                <TwitterEmbed
                  url="https://twitter.com/PixelAndBracket/status/1356633038717923333"
                  width="100%"
                />
              </div>
            </div>
            <div className={"m-1 bg-gray-200 "}>
              <div
                style={{
                  width: "100%",
                  // height: "50%",
                  // borderRadius: "10px",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  // backgroundImage: `url(${photo.url})`,
                }}
              >
                <FacebookEmbed
                  url="https://www.facebook.com/andrewismusic/posts/451971596293956"
                  width={"100%"}
                />
              </div>
            </div>

            {/* {handles.map((handle, index) => (
             "m-1 bg-gray-200  "
            ))} */}
          </div>
        </div>
        {/* <div className="flex flex-col w-2/5">
          <div className="bg-customGreen p-1">
            <h2 className=" text-customBG font-poppins font-bold text-xl ">
              KSSF Broadcasts
            </h2>
          </div>
          <div className="bg-customGreenFaded h-[42rem]  flex flex-col justify-center items-center	">
            <InstagramEmbed
              url="https://www.instagram.com/p/CUbHfhpswxt/"
              width={"100%"}
            />
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Socials;
