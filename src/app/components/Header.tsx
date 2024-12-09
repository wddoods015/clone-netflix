import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="w-[95%] h-auto container mx-auto pt-[10px] flex justify-between items-center relative z-20">
      <Image
        src="/images/Netflix_Logo_PMS.png"
        alt="Netflix_Logo"
        width={150}
        height={75}
      />
      <div className="flex gap-2">
        <select
          name="LanguageSelect"
          className="bg-transparent w-[100px] h-[35px] rounded-full border border-2 text-white text-center"
        >
          {/* <Image src='/translate_icon.svg' alt='translate_icon' width={40} height={0} layout="intrinsic"/> */}
          <option className="text-black text-center">한국어</option>
          <option className="text-black text-center">English</option>
        </select>
        <Link href="/login">
          <button className="w-[85px] h-[35px] bg-white rounded-full">
            로그인
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
