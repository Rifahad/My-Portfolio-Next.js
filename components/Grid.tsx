import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import { projects } from "@/Data";

const Grid = () => {
  return (
    <section id="about" className="h-screen w-full">
      <HoverEffect
        items={projects}
      />
    </section>
  );
};

export default Grid;

