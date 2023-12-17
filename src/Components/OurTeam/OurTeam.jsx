import React from "react";
import "./OurTeam.css";
import customer_img_6 from "../../assets/customer_img_6.jpg";
import customer_img_2 from "../../assets/customer_img_2.jpg";
import customer_img_4 from "../../assets/customer_img_4.jpg";
import team1 from "../../assets/team1.jpg";
import team2 from "../../assets/team2.jpg";
import team3 from "../../assets/team3.jpg";

const testimonials = [
  {
    id: 1,
    name: "Marie Jordan",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    image: customer_img_4,
  },
  {
    id: 2,
    name: "Ann Brown",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    image: customer_img_2,
  },
  {
    id: 3,
    name: "Andrew Bill",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    image: customer_img_6,
  },
  {
    id: 4,
    name: "Jason Stawer",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    image: team1,
  },
  {
    id: 5,
    name: "Lisa Green",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    image: team2,
  },
  {
    id: 6,
    name: "Anna Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing.",
    image: team3,
  },
];
const OurTeam = () => {
 

  return (
    <section className="testimonials section-p " id="testimonials">
      <div className="container">
        <div className="testimonials-content">
          <div className="section-t text-center">
            <h3>Our Team</h3>
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              alias voluptatum, tempore dignissimos perferendis ea.
            </p>
          </div>

          <div className="item-list grid text-white text-center">
            {testimonials.map((testimonial) => {
              return (
                <div
                  className="item translate-effect bg-dark"
                  key={testimonial.id}
                >
                  <div className="item-img">
                    <img src={testimonial.image} alt="" />
                  </div>
                  <h4 className="item-name">{testimonial.name}</h4>
                  <p className="item-text text">{testimonial.text}</p>
                  <ul className="flex item-rating flex-center">
                   
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
