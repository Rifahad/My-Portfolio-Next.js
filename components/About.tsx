import React from "react";
import { Vortex } from "./ui/Vortex";

export function VortexDemo() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="transparent"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Muhammed Rifahad Mt
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          MERN STACK DEVELOPER
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button className="px-4 py-2  text-white ">Details</button>
        </div>
      </Vortex>
    </div>
  );
}
