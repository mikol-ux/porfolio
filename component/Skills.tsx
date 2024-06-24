import React from "react";
import { HoverEffect } from "./ui/HoverEffect";
import { Skills } from "@/data";
// Transform Skills array to match the expected items structure
const skillItems = Skills.map((skill) => ({
  title: skill.title,
  description: `Learn more about ${skill.title}`,
  link: "/skills/" + skill.title.toLowerCase(),
  image: skill.image,
}));

// Usage of HoverEffect with the transformed skills array
const Skill = () => {
  return (
    <div className="py-20 ">
      <div className="max-w-75xl mx-auto">
        <h1 className="heading">
          My {""}
          <span className="text-purple">Skills</span>
        </h1>
        <HoverEffect items={skillItems} className="my-custom-class" />
      </div>
    </div>
  );
};

export default Skill;
