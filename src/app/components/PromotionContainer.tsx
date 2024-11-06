import React from "react";

const PromotionContainer: React.FC = () => {
    return (
        <div className="absolute top-[30%] left-[15%] w-[90%] h-auto gap-2 flex relative z-30">
            <div className="w-[25%] h-[230px] bg-gradient-to-tr from-[#162540] to-[#120C1F] p-8 flex flex-col border border-[purple] rounded-2xl">
                <h1 className="text-white">광고형 스탠다드</h1>
                <span className="text-[#ffffffb3]">1080p</span>
                <span className="text-[#ffffffb3]">✓ 좋은 화질</span>
                <span className="text-[#ffffffb3]">✓ 생각보다 적은 수의 광고</span>
                <h1 className="text-[#ffffffb3]">월 5,500원</h1>
            </div>
            <div className="w-[25%] h-[230px] bg-gradient-to-tr from-[#59216E] to-[#120C1F] p-8 flex flex-col border border-[purple] rounded-2xl">
                <h1 className="text-white">광고형 스탠다드</h1>
                <span className="text-[#ffffffb3]">1080p</span>
                <span className="text-[#ffffffb3]">✓ 좋은 화질</span>
                <span className="text-[#ffffffb3]">✓ 생각보다 적은 수의 광고</span>
                <h1 className="text-[#ffffffb3]">월 13,500원</h1>
            </div>
            <div className="w-[25%] h-[230px] bg-gradient-to-tr from-[#6C1E41] to-[#120C1F] p-8 flex flex-col border border-[purple] rounded-2xl">
                <h1 className="text-white">광고형 스탠다드</h1>
                <span className="text-[#ffffffb3]">1080p</span>
                <span className="text-[#ffffffb3]">✓ 좋은 화질</span>
                <span className="text-[#ffffffb3]">✓ 생각보다 적은 수의 광고</span>
                <h1 className="text-[#ffffffb3]">월 17,000원</h1>
            </div>
        </div>
    );
};

export default PromotionContainer;