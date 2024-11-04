import Image from "next/image";

import TrailerImage from "./components/TrailerImage";

export default function Home() {
  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-black min-h-screen overflow-hidden">
      {/* 배경 TrailerImage 컴포넌트 */}
      <TrailerImage className="absolute inset-0 object-cover z-0" />

      {/* 블러 효과와 그라데이션 배경 */}
      <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-md z-10">
        <div className="absolute  inset-0 bg-gradient-to-b from-[#6C1246] to-black opacity-60"></div>
        <div className="absolute top-[40px] inset-0 border-2 border-white w-[90%] h-[300px]  mx-auto my-20 relative z-20 rounded-xl overflow-hidden">
        <TrailerImage  />
      </div>
      </div>

     
     
    </div>
  );
}
