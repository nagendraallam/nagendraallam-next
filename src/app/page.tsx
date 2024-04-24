import Image from "next/image";

export default function Home() {
  return (
    <div className="flex mt-20 w-screen justify-center items-center h-full flex-col">
      <h4 className="text-2xl font-['MyWebFont']  md:text-[1.5vw] w-full pl-[25vw]">
        Hey There👋, &nbsp; I&apos;m
      </h4>
      <h1 className="text-4xl md:text-[9vw] leading-[1] font-['MyWebFont'] ">
        Nagendra Allam
      </h1>
      <div className="text-2xl font-['MyWebFont']  md:text-[1.5vw] mt-2 md:mt-0 md:pl-[50vw] w-full text-center flex flex-col">
        <h2>Full-Stack</h2>
        <h3>Developer</h3>
      </div>
    </div>
  );
}
