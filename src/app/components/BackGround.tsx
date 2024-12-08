// components/BackGround.tsx
import { ReactNode } from "react";
import TrailerImage from "./TrailerImage";

interface BackGroundProps {
  children: ReactNode;
}

export default function BackGround({ children }: BackGroundProps) {
  return (
    <div className="relative  w-full h-[1200px]">
      {/* 배경 이미지와 그라디언트 */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black z-0">
        <TrailerImage />
        <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-md z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#6C1246] to-black opacity-50"></div>
        </div>
      </div>

      {children}
    </div>
  );
}
