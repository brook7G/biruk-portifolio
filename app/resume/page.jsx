"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. necessitatibus laborum dicta ullam ut placeat!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Biruk Fekadu",
    },

    {
      fieldName: "Phone",
      fieldValue: "(+251) 938 741 514",
    },

    {
      fieldName: "Experience",
      fieldValue: "1+ Years",
    },

    {
      fieldName: "Email",
      fieldValue: "birukefekadu632@gmail.com",
    },

    {
      fieldName: "Freelance",
      fieldValue: "Biruk Fekadu",
    },

    {
      fieldName: "LinkedIn",
      fieldValue: "birukfekadu",
    },

    {
      fieldName: "Languages",
      fieldValue: "English, Afan-Oromo, Amharic",
    },
  ],
};

//experience data
const experience = {
  icon: "/assets/",
  title: "My Experience",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae",
  item: [
    {
      company: "Freelance",
      position: "Software Engineer",
      duration: "2024- Present",
    },

    {
      company: "Jimma University AI center",
      position: "Fullstack Engineer Intern",
      duration: "Summer of 2023",
    },

    {
      company: "Wallet software Incubation center",
      position: "Junior Software Engineer, Remote",
      duration: "4 months",
    },

    {
      company: "Ayyoo Printing PLC",
      position: "Graphics Designer",
      duration: "17 Months",
    },
  ],
};

//experience data
const education = {
  icon: "/assets/",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae",
  item: [
    {
      institution: "Jimma University",
      degree: "Computer Science, BSc",
      duration: "4.6 Years (55 months)",
    },

    {
      institution: "Alison",
      degree: " Diploma Software Project Management",
      duration: "2024",
    },

    {
      institution: "Udemy",
      degree: "",
      duration:"",
    }
  ],
};

const Resume = () => {
  return <div>resume page</div>;
};

export default Resume;
