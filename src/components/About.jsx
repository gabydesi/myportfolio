import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#18434e] text-[#a1bdd0] ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#d8ddea]">
              About me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-2xl font-bold">
            <p>
              Hi! I'm Gabriela, nice to meet you.
            </p>
          </div>
          <div>
            <p>
              {" "}
              I am a junior full-stack web developer with experience in key
              technologies such as JavaScript, ReactJS, CSS, and HTML. My previous
              experience as a customer success specialist in web hosting has
              given me a unique perspective on development work. My focus on
              user experience ensures that I always keep the user's needs in
              mind. I am eager to gain new experiences and continue learning on
              innovative projects in the web development field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
