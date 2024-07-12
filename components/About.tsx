import Globe from "@/components/magicui/globe";

import IconCloud from "@/components/magicui/icon-cloud";
export function About() {
  return (
    <>
      {/* <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Globe
      </span>
      <Globe className="top-28" />
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
    </div> */}
      {/* here it start */}
      {/* <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div> */}

      <div className="w-full h-[500px] flex">
        <div className="w-[50%] h-full flex items-center justify-center md:flex-row ">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-red-500 to-blue-300/80 bg-clip-text text-center md:text-8xl font-semibold leading-none text-transparent">
            My Skills
          </span>
        </div>
        <div className="w-[50%] h-full flex items-center justify-center max-w-[32rem] ">
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </>
  );
}

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodejs",
  "express",
  "amazonaws",
  "nginx",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
  "wordpress",
  "expo",
  "mongodb",
  "postman",
  "trello",
  "razorpay",
  "twilio",
  "swagger",
  "stackoverflow",
];
