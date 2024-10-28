import My3DModel from "@/components/AvatarModel";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex mt-20 w-screen justify-center items-center h-full md:flex-row flex-col">
      <div className="flex flex-col justify-center items-center lg:items-start lg:pl-[10vw] w-full">
        <h4 className="text-2xl  font-['MyWebFont']  md:text-[1.5vw] ">
          Hey there, I&apos;m
        </h4>
        <h1 className="text-4xl md:text-[5vw] xl:text-[8vw] leading-[1] font-['MyWebFont'] ">
          Nagendra Allam
        </h1>
        <div className="flex flex-col">
          <h2>Full-Stack Developer</h2>
        </div>
      </div>
      <div className="flex h-[50vh] md:w-[50vw] flex-col">
        <My3DModel url="/assets/idle_model.glb" />
      </div>
    </div>
  );
}
