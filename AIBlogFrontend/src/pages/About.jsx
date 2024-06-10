import React from "react";
import adminSupport from "../assets/team/admin-support.jpg";
import brandDirector from "../assets/team/brand_strategy-director.jpg";
import creativeDirector from "../assets/team/creative-director.jpg";
import ethicist from "../assets/team/ethicist_editor.jpg";
import leadInstructor from "../assets/team/lead-instructor.jpg";
import leadITsupport from "../assets/team/lead-it-support.jpg";
import marketingDirector from "../assets/team/marketing-director.jpg";
import socialMediaDirector from "../assets/team/sm-director.jpg";

function TeamMemberCard({ name, position, photo }) {
  return (
    <div className="flex flex-row items-center justify-center my-8">
      <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
        <img
          src={photo}
          alt={name}
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-xs">{position}</p>
      </div>
    </div>
  );
}

const About = () => {
  document.title = `About - Elite AI Blog`;

  return (
    <div className="container mx-auto px-2 lg:px-40 bg-white overflow-auto mb-4 text-black">
      <h1 className="text-3xl font-bold mt-6 mb-4">About Elite Global AI</h1>
      <div className="space-y-4 px-0 lg:px-16 justify-center">
        <p>
          Elite Global AI empowers youth by demystifying artificial intelligence
          (AI) and fostering financial empowerment. Through workshops,
          mentorship, and resources, we make AI accessible, relatable, and
          beneficial for personal and professional growth.
        </p>
        <p>
          Our mission is to equip individuals with the skills and insights
          needed to navigate the AI landscape confidently. We believe in
          leveraging AI as a tool for positive change and opportunity, ensuring
          that every individual can thrive in an AI-driven world.
        </p>
        <p>
          Join us in exploring the transformative potential of AI and shaping a
          future where technology enhances lives and creates meaningful
          opportunities for all.
        </p>
      </div>
      <section className="space-y-4 px-0 lg:px-16 justify-center">
        <h2 className="text-2xl font-bold mt-6 mb-4">Our Team</h2>
        <p>
          Our team is composed of passionate and dedicated individuals who are
          committed to making AI accessible and beneficial for all. We are
          educators, researchers, and professionals who share a common vision of
          empowering individuals to thrive in an AI-driven world.
        </p>
        <div className="flex flex-wrap mt-8">
          <TeamMemberCard
            name="Ukamaka Ugbor"
            position="Admin Support"
            photo={adminSupport}
          />
          <TeamMemberCard
            name="Emmanuel Agida"
            position="Brand and Strategy Director"
            photo={brandDirector}
          />
          <TeamMemberCard
            name="Ebuka Egbunike"
            position="Creative Director"
            photo={creativeDirector}
          />
          <TeamMemberCard
            name="Rukevwe Omoro"
            position="AI Ethicist and Editor"
            photo={ethicist}
          />
          <TeamMemberCard
            name="Ogagaoghene Atova"
            position="Lead Instructor"
            photo={leadInstructor}
          />
          <TeamMemberCard
            name="Uyoyou Uwuseba"
            position="Lead IT Support"
            photo={leadITsupport}
          />
          <TeamMemberCard
            name="Blessing Ikpia"
            position="Marketing Director"
            photo={marketingDirector}
          />
          <TeamMemberCard
            name="Anuoluwakpo Ilesanmi"
            position="Social Media Director"
            photo={socialMediaDirector}
          />
        </div>
      </section>
    </div>
  );
};

export default About;
