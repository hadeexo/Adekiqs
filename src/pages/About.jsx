import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={" US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
            assumenda ad quis iusto beatae maiores, voluptates corrupti
            perspiciatis quod facilis quibusdam, amet debitis ea eveniet neque
            sapiente? Obcaecati, provident quasi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione at
            fuga sed ipsa, aperiam libero numquam provident inventore facere
            recusandae rerum similique, illo voluptatum iure neque quam odit
            quasi adipisci?
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
            eveniet doloremque enim id, fugiat ea officiis qui, corrupti
            nesciunt blanditiis, maiores libero! Magnam eaque voluptate neque
            aspernatur accusantium, eveniet delectus!
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={" CHOOSE US"} />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus,
            recusandae veniam. Voluptatibus animi numquam at quod, accusantium
            harum quis consequuntur repellendus magnam odit asperiores
            reprehenderit maxime doloremque sapiente nesciunt sunt?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus,
            recusandae veniam. Voluptatibus animi numquam at quod, accusantium
            harum quis consequuntur repellendus magnam odit asperiores
            reprehenderit maxime doloremque sapiente nesciunt sunt?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus,
            recusandae veniam. Voluptatibus animi numquam at quod, accusantium
            harum quis consequuntur repellendus magnam odit asperiores
            reprehenderit maxime doloremque sapiente nesciunt sunt?
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
