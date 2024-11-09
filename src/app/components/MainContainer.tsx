import React from "react";
import TrailerImage from "./TrailerImage";
const MainContainer: React.FC = () => {
    return(
        <div className="absolute top-[-25%] container mx-auto border-2 w-[95%] max-h-[450px]  relative z-10 rounded-xl overflow-hidden ">
          <div className="absolute top-[15%] left-[0%] inset-0 z-30">
          <h1 className=" text-5xl text-white text-center font-[1000] mb-[10px]">이곳은 끝없는 즐거움의 세계.<br/>5,500원으로 시작하세요.</h1>
          <h2 className="text-[#ffffffb3] text-center">언제든지 멤버십을 해지 또는 전환할 수 있습니다.</h2>
          </div>
          <div className="absolute bg-black opacity-70 inset-0 z-04"></div>
          
          <TrailerImage />
        </div>
    );
};

export default MainContainer;