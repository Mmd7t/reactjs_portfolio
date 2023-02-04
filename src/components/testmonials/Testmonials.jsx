import React from "react";
import "./testmonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
const data = [
  {
    id: 1,
    avatar: AVTR1,
    name: "John Doe",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elitIste aliquid, quas temporibus sapiente, earum nisi non cum ut, soluta excepturi qui vitae quis.",
  },
  {
    id: 2,
    avatar: AVTR2,
    name: "Jane Doe",
    review:
      "Ad expedita cum quis voluptates dignissimos quasi? Iste aliquid, quas temporibus sapiente, earum nisi non cum ut, soluta excepturi qui vitae quis.",
  },
  {
    id: 3,
    avatar: AVTR3,
    name: "Jane Doe",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad expedita cum quis voluptates dignissimos quasi? Iste aliquid",
  },
  {
    id: 4,
    avatar: AVTR4,
    name: "Jane Doe",
    review:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad expedita cum quis voluptates dignissimos quasi? Iste aliquid, quas temporibus sapiente, earum nisi non cum ut",
  },
];

const Testmonials = () => {
  return (
    <section id="testmonials">
      <h5>Review From Clients</h5>
      <h2>Testmonials</h2>

      <Swiper
        className="container testmonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }) => {
          return (
            <SwiperSlide className="testmonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testmonials;
