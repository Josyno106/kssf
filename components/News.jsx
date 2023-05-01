import ImageSlider from "./ImageSlider";
import { Pane, Dialog, Button } from "evergreen-ui";
import { useState } from "react";

const NewsSection = () => {
  const slides = [
    {
      caption: "This was fun",
      url: "http://kssfkenya.org/wp-content/uploads/2023/05/IMG_2030-min-scaled.jpg",
    },
    {
      caption: "Training hard...",
      url: "http://kssfkenya.org/wp-content/uploads/2023/05/IMG_2041-min-scaled.jpg",
    },
    {
      caption: "Gotta wear some protective gear",
      url: "http://kssfkenya.org/wp-content/uploads/2023/05/IMG_2065-min-scaled.jpg",
    },
    {
      caption: "Aim and shoot...",
      url: "http://kssfkenya.org/wp-content/uploads/2023/05/IMG_2096-min-scaled.jpg",
    },
  ];

  const eventsList = [
    {
      title: "Range of dates",
      dates: new Date(),
      events: [
        { title: "Here is event 1", day: "Monday", time: "time" },
        { title: "Here is event 1", day: "Monday", time: "time" },
        { title: "Here is event 1", day: "Monday", time: "time" },
        { title: "Here is event 1", day: "Monday", time: "time" },
        { title: "Here is event 1", day: "Monday", time: "time" },
        { title: "Here is event 1", day: "Monday", time: "time" },
      ],
    },
    {
      title: "Range of dates 2",
      dates: new Date(),
      events: [
        { title: "Here is event 1", day: "Monday", time: "time" },
        { title: "Here is event 1", day: "Monday", time: "time" },
        { title: "Here is event 1", day: "Monday", time: "time" },
        { title: "Here is event 1", day: "Monday", time: "time" },
        { title: "Here is event 1", day: "Monday", time: "time" },
        { title: "Here is event 1", day: "Monday", time: "time" },
      ],
    },
    {
      title: "Range of dates 3",
      dates: new Date(),
      events: [
        { title: "Here is event 1", day: "Monday", time: "time" },
        { title: "Here is event 1", day: "Monday", time: "time" },
        { title: "Here is event 1", day: "Monday", time: "time" },
        { title: "Here is event 1", day: "Monday", time: "time" },
        { title: "Here is event 1", day: "Monday", time: "time" },
        { title: "Here is event 1", day: "Monday", time: "time" },
      ],
    },
  ];

  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <Pane>
        <Dialog
          isShown={isShown}
          title="No events found!"
          onCloseComplete={() => setIsShown(false)}
          hasFooter={false}
        >
          Oops, we couldn't find any more events at this time!
        </Dialog>
      </Pane>
      <div className=" flex mt-2 gap-2 ">
        <div className="bg-customGreen w-3/5 ">
          <div>
            <h2 className="text-customBG font-poppins font-bold text-xl p-1">
              Latest News
            </h2>
          </div>
          <div className="bg-customGreenFaded h-[30rem] p-1">
            <ImageSlider slides={slides} isCaption={true} />
          </div>
        </div>
        <div className="w-2/5 ">
          <div className="bg-white p-1 w-full shadow-lg flex items-center">
            <h2 className="text-customGreen  font-bold text-xl font-alkatra grow">
              Next Events
            </h2>
            <h3 className=" cursor-pointer " onClick={() => setIsShown(true)}>
              view all
            </h3>
          </div>
          <div className="bg-gray-100 p-1 h-[30rem] overflow-y-scroll ">
            <div className="m-1">
              {eventsList.map((event, index) => (
                <div>
                  <h4 key={index} className="font-bold">
                    {event.title}
                  </h4>
                  <ul>
                    {event.events.map((ev, i) => (
                      <li key={i}>{ev.title}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsSection;
