import adminSupport from "../assets/team/admin-support.jpg";
import brandDirector from "../assets/team/brand_strategy-director.jpg";
import creativeDirector from "../assets/team/creative-director.jpg";
import ethicist from "../assets/team/ethicist_editor.jpg";
import leadInstructor from "../assets/team/lead-instructor.jpg";
import leadITsupport from "../assets/team/lead-it-support.jpg";
import marketingDirector from "../assets/team/marketing-director.jpg";
import socialMediaDirector from "../assets/team/sm-director.jpg";
import ceo from "../assets/team/ceo.jpg";

function TeamMemberCard({ name, position, photo }) {
  return (
    <div className="flex flex-row mx-0 lg:mx-4 items-center justify-center my-8">
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
    <div className="container mx-auto px-2 bg-white overflow-auto mb-4 text-black">
      <div className="space-y-4 px-0 justify-center">
        <h1 className="text-3xl font-bold mt-6 mb-4">About Elite Global AI</h1>

        <p>
          At Elite Global AI, we empower individuals and organizations across
          Africa to leverage the vast potential of Artificial Intelligence (AI)
          to drive innovation, improve productivity, and enhance daily life. We
          demystify AI and make it accessible to everyone, from students to
          entrepreneurs, by providing comprehensive education and training
          programs that equip learners with the skills and knowledge needed to
          harness AI's power. As an arm of Elite Global Intelligence
          Technologies, our mission is also to empower youth by providing
          workshops, mentorship programs, and accessible resources that foster
          financial empowerment.
        </p>

        <h2 className="text-2xl">Our Vision</h2>
        <p>
          We recognize that AI is rapidly shaping the future, and individuals,
          especially youth, need to be equipped with the necessary skills and
          insights to navigate this landscape effectively. Our vision is to
          bridge the gap between AI's potential and the needs of the African
          populace by providing accessible and relatable resources, workshops,
          and mentorship programs.
        </p>

        <h2 className="text-2xl">Our Mission</h2>
        <p>
          Our mission is to empower Africans by demystifying AI, fostering
          financial empowerment, and creating opportunities for personal and
          professional growth in an AI-driven world. We achieve this through a
          range of initiatives that focus on AI education, financial literacy,
          and career development.
        </p>

        <h2 className="text-2xl">Our Approach</h2>
        <p>
          We go beyond AI education and financial literacy by developing
          practical AI tools and solutions that improve lives and productivity.
          We create AI-powered applications addressing real-world challenges,
          empower people to work smarter, and provide comprehensive training and
          resources. Our workshops and mentorship programs offer hands-on
          experience and personalized guidance, allowing participants to apply
          AI concepts to real-world problems and develop practical skills. We
          are also developing AI tools such as AI-powered learning assistants,
          health and wellness apps, financial management tools, and productivity
          assistants. By making these tools accessible to everyone, regardless
          of education or technical expertise, we aim to democratize AI and
          empower individuals to thrive in an AI-driven world.
        </p>

        <h2 className="text-2xl">Our Impact</h2>
        <p>
          Our programs and initiatives are designed to create meaningful
          opportunities for individuals to succeed in the evolving landscape of
          technology. We believe that AI can be a powerful tool for driving
          socioeconomic development and addressing key challenges in Africa,
          such as access to quality healthcare, food security, financial
          inclusion, and education.
        </p>

        <h2 className="text-2xl">Our Commitment</h2>
        <p>
          {" "}
          We are committed to ensuring that our AI initiatives are ethical,
          inclusive, and transparent. We recognize the importance of addressing
          ethical considerations and ensuring that AI is developed and deployed
          in a way that prioritizes transparency, fairness, and accountability.
        </p>

        <h2 className="text-2xl">Our Partnerships</h2>
        <p>
          We collaborate with various stakeholders, including governments,
          educational institutions, and private sector organizations, to develop
          AI talent and drive innovation. We also engage in knowledge sharing
          and research partnerships to stay at the forefront of AI developments
          and best practices.
        </p>

        <h2 className="text-2xl">Our Future</h2>
        <p>
          {" "}
          As AI continues to shape the future of Africa, we remain committed to
          empowering the next generation of leaders and innovators. We believe
          that by working together, we can harness the transformative power of
          AI to create a brighter and more prosperous future for all Africans.
        </p>

        <h2 className="text-2xl">Join Us</h2>
        <p>
          {" "}
          We invite individuals, organizations, and stakeholders across Africa
          to join us in shaping the future of AI. Together, we can create a more
          inclusive and prosperous Africa for all.
        </p>
      </div>

      <section className="space-y-4 px-0 justify-center">
        <h2 className="text-2xl font-bold mt-6 mb-4">Our Team</h2>
        <p>
          Our team is composed of passionate and dedicated individuals who are
          committed to making AI accessible and beneficial for all. We are
          educators, researchers, and professionals who share a common vision of
          empowering individuals to thrive in an AI-driven world.
        </p>
        <div className="flex flex-wrap mt-8">
          <TeamMemberCard
            name="Vwakpor Efuetanu"
            position="Chief Executive Officer"
            photo={ceo}
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
          <TeamMemberCard
            name="Ukamaka Ugbor"
            position="Admin Support"
            photo={adminSupport}
          />
        </div>
      </section>
    </div>
  );
};

export default About;
