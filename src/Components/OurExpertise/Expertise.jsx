import React from "react";
import { FaCss3, FaHtml5, FaNode, FaPython, FaReact } from "react-icons/fa";
import "./Expertise.scss";
const Expertise = () => {
  return (
    <section className="Expertise ">
      <div className="container">
        <div
          className="text-div flex flex-col"
          style={{
            
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2 className="mb-20">Our Expertise</h2>
          <p style={
            {width:"60%", marginBottom:"20px"}
          }>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
            voluptate omnis porro, vitae corrupti perspiciatis autem deleniti
            eos nam voluptates, aliquid doloremque culpa illo iure quam eligendi
            temporibus nostrum odio?
          </p>
        </div>
        <div className="icon-div">
          <div className="list-card-div">
            <li className="li">
              <FaReact className="icon react" />
            </li>
          </div>

          <div className="list-card-div">
            <li>
              <FaPython className="icon python" />
            </li>
          </div>

          <div className="list-card-div">
            <li>
              <FaNode className="icon node" />
            </li>
          </div>

          <div className="list-card-div">
            <li>
              <FaHtml5 className="icon html" />
            </li>
          </div>

          <div className="list-card-div">
            <li>
              <FaCss3 className="icon css" />
            </li>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
