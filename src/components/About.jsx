import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 md:mt-[100px]">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-green-500">
            About
          </p>
        </div>

        <p className=" mb-[50px]">
          Hello! I'm Shiva Kumar , a final-year Computer Science Enigineering student at SRM Institue of Science and Technology , Chennai <span className="text-green-500">having a cgpa of 9.72</span>. Pursuing my schooling at Brindavan Public School for 10th and Holy Innocent School & Junior College for 12th. I undertook the challenging  <span className="text-green-500">ICSE & ISC Syllabus</span>, which further helped me by enhancing my analytical and critical thinking abilities.

About my academic pursuits, I've excelled in school and I was the school topper in <span className="text-green-500">12th grade with 86.6%</span>, and I got <span className="text-green-500">82.17% at 10th grade.</span>

Moreover, my love for strategic games extends to chess, where I've demonstrated a keen understanding of tactics and planning, fostering a deep appreciation for strategic decision-making in various aspects of life.
<br/><br/>

My experiences have equipped me with a robust skill set in web development and machine learning. Proficient in HTML, CSS, Tailwind, JavaScript, C++, MySQL, Express Js , Node Js, Python and React Js. I ensure a holistic approach to projects. Notably, I led the development of the <span className="text-green-500">"Trendeyy"</span> a full stack web development e-commerce website using MERN and also <span className="text-green-500">"LungVison In Humans"</span>, it is an ensembled based deep learning algorithm using CNN and Vision Transformer used to classify whether lung cancer is present or not and this project has been published in the IEEE Expolre website and also received the <span className="text-green-500"> "Best Paper"</span> award for this project in the EASCT-23 <span className="text-green-500">IEEE Conference.</span> 
<br/>
<br/>


Driven by a passion for collaboration and innovation, I am eager to apply my diverse skill set and experiences to contribute meaningfully to your projects. Let's connect and explore the best possibilities for creating impactful solutions together.
</p>
      </div>
    </div>
  );
};

export default About;