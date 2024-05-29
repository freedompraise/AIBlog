import React from "react";

const About = () => {
    document.title = `About - Elite AI Blog`;

    return (
        <div className="container mx-auto px-4 lg:px-40 text-center bg-white overflow-auto mb-4 text-black"
        >
            <h1 className="text-3xl font-bold mt-6 mb-4">About Elite Global AI</h1>
            <div className="space-y-4 px-16 justify-center">
            <p >
            Elite Global AI empowers youth by demystifying artificial intelligence (AI) and fostering financial empowerment. Through workshops, mentorship, and resources, we make AI accessible, relatable, and beneficial for personal and professional growth.
            </p>
            <p>
            Our mission is to equip individuals with the skills and insights needed to navigate the AI landscape confidently. We believe in leveraging AI as a tool for positive change and opportunity, ensuring that every individual can thrive in an AI-driven world.
            </p>
            <p>
            Join us in exploring the transformative potential of AI and shaping a future where technology enhances lives and creates meaningful opportunities for all.
            </p>
            </div>
        </div>
    );
    }

export default About;