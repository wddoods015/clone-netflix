"use client";
import React, { useState } from "react";

const Notice: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<string | null>(null);

  const toggleDropdown = (id: string) => {
    // 클릭한 드롭다운이 이미 열려있으면 닫고, 아니면 열기
    setIsExpanded(isExpanded === id ? null : id);
  };

  return (
    <div className="w-full h-auto flex flex-col container z-20">
      <div className=" w-full">
        <h1 className=" w-full text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-[10px]">
          가입해야 하는 또 다른 이유
        </h1>
        <div className="w-full flex gap-2 sm:flex-col lg:flex-row ">
          <div className="bg-[#272727] w-full sm:w-[100%] sm:h-[100px] md:w-[100%] md:h-[100px] lg:w-[25%] lg:h-[200px] border border-[#333333] rounded-xl flex flex-wrap justify-between p-4">
            <h1 className="text-white">취향에 딱 맞는 이야기</h1>
            <div className="w-full flex justify-end">
              <img
                src="/icon/handstar.svg"
                alt="Hand Star Icon"
                width={72}
                height={72}
              />
            </div>
          </div>
          <div className="bg-[#272727] w-[100%] sm:w-[100%] sm:h-[100px] md:w-[100%] md:h-[100px] lg:w-[25%] lg:h-[200px] border border-[#333333] rounded-xl flex flex-wrap justify-between p-4">
            <h1 className="text-white">
              언제든지 해지 또는 전환 가능한 멤버십
            </h1>
            <div className="w-full flex justify-end">
              <img
                src="/icon/handshake.svg"
                alt="Hand Star Icon"
                width={72}
                height={72}
              />
            </div>
          </div>
          <div className="bg-[#272727] w-[100%] sm:w-[100%] sm:h-[100px] md:w-[100%] md:h-[100px] lg:w-[25%] lg:h-[200px] border border-[#333333] rounded-xl flex flex-wrap justify-between p-4">
            <h1 className="text-white">아이들만을 위한 공간</h1>
            <div className="w-full flex justify-end">
              <img
                src="/icon/heart.svg"
                alt="Hand Star Icon"
                width={72}
                height={72}
              />
            </div>
          </div>
          <div className="bg-[#272727] w-[100%] sm:w-[100%] sm:h-[100px] md:w-[100%] md:h-[100px] lg:w-[25%] lg:h-[200px] border border-[#333333] rounded-xl flex flex-wrap justify-between p-4">
            <h1 className="text-white">
              스마트폰, 태블릿, 노트북, TV에서 이용 가능
            </h1>
            <div className="w-full flex justify-end">
              <img
                src="/icon/monitor.svg"
                alt="Hand Star Icon"
                width={72}
                height={72}
              />
            </div>
          </div>
        </div>
        {/*FAQ*/}
        <div className=" w-full flex flex-col items-center mt-8">
          <h1 className=" w-full text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mb-[10px]">
            자주 묻는 질문
          </h1>
          {/* button 1 */}
          <button
            className="w-full h-[80px] flex justify-between items-center bg-[#272727] hover:bg-[#333333] border border-[#333333] text-white rounded-xl pl-8 pr-8"
            onClick={() => {
              toggleDropdown("dropdown-1");
            }}
          >
            넷플릭스에서 어떤 콘텐츠를 시청할 수 있나요?
            <img
              className={isExpanded === "dropdown-1" ? "rotate-45" : ""}
              src="/icon/svgexport-11.svg"
              alt="Hand Star Icon"
              width={28}
              height={28}
            />
          </button>
          <div
            className={`w-full h-[200px] mt-2 p-4 items-center bg-[#272727]  border border-[#333333] text-white rounded-xl pl-8 pr-8 transition-all duration-1000 ${
              isExpanded === "dropdown-1" ? "block" : "hidden"
            }`}
            id="dropdown-1"
          >
            <p>
              넷플릭스는 장편 영화, 다큐멘터리, 시리즈, 에니메이션, 각종 상을
              수상한 넷플릭스 오리지널 등 수많은 콘텐츠를 확보하고 있습니다.
              마음에 드는 콘텐츠를 원하는 시간에 원하는 만큼 시청하실 수
              있습니다.
            </p>
            <p className="mt-4 underline decoration-white-100">
              넷플릭스 콘텐츠를 한번 살펴보세요.
            </p>
          </div>
          {/* button 2 */}
          <button
            className="w-full h-[80px] mt-2 flex justify-between items-center bg-[#272727] hover:bg-[#333333] border border-[#333333] text-white rounded-xl pl-8 pr-8"
            onClick={() => {
              toggleDropdown("dropdown-2");
            }}
          >
            넷플릭스란 무엇인가요?
            <img
              className={isExpanded === "dropdown-2" ? "rotate-45" : ""}
              src="/icon/svgexport-11.svg"
              alt="Hand Star Icon"
              width={28}
              height={28}
            />
          </button>
          <div
            className={`w-full h-[200px] mt-2 p-4 items-center bg-[#272727]  border border-[#333333] text-white rounded-xl pl-8 pr-8 transition-all duration-1000 ${
              isExpanded === "dropdown-2" ? "block" : "hidden"
            }`}
            id="dropdown-2"
          >
            <p>
              넷플릭스는 각종 수상 경력에 빛나는 시리즈, 영화, 애니메이션,
              다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의
              디바이스에서 시청할 수 있는 스트리밍 서비스입니다.
            </p>
            <p className="mt-4  decoration-white-100">
              저렴한 월 요금으로 원하는 시간에 원하는 만큼 즐길 수 있습니다.
              무긍무진한 콘텐츠가 준비되어 있으며 매주 새로운 시리즈와 영화가
              제공됩니다.
            </p>
          </div>

          {/* button 3 */}
          <button
            className="w-full h-[80px] mt-2 flex justify-between items-center bg-[#272727] hover:bg-[#333333] border border-[#333333] text-white rounded-xl pl-8 pr-8"
            onClick={() => {
              toggleDropdown("dropdown-3");
            }}
          >
            넷플릭스 요금은 얼마인가요?
            <img
              className={isExpanded === "dropdown-3" ? "rotate-45" : ""}
              src="/icon/svgexport-11.svg"
              alt="Hand Star Icon"
              width={28}
              height={28}
            />
          </button>
          <div
            className={`w-full h-[200px] mt-2 p-4 items-center bg-[#272727]  border border-[#333333] text-white rounded-xl pl-8 pr-8 transition-all duration-1000 ${
              isExpanded === "dropdown-3" ? "block" : "hidden"
            }`}
            id="dropdown-3"
          >
            <p>
              스마트폰,태블릿,스마트 TV,노트북,스트리밍 디바이스 등 다양한
              디바이스에서 월정액 요금 하나로 넷플릭스를 시청하세요. 멤버십
              요금은 월 5,500원 부터 17,000원까지 다양합니다. 추가 비용이나
              약정이 없습니다.
            </p>
          </div>

          {/* button 4 */}
          <button
            className="w-full h-[80px] mt-2 flex justify-between items-center bg-[#272727] hover:bg-[#333333] border border-[#333333] text-white rounded-xl pl-8 pr-8"
            onClick={() => {
              toggleDropdown("dropdown-4");
            }}
          >
            어디에서 시청할 수 있나요?
            <img
              className={isExpanded === "dropdown-4" ? "rotate-45" : ""}
              src="/icon/svgexport-11.svg"
              alt="Hand Star Icon"
              width={28}
              height={28}
            />
          </button>
          <div
            className={`w-full h-[200px] mt-2 p-4 items-center bg-[#272727]  border border-[#333333] text-white rounded-xl pl-8 pr-8 transition-all duration-1000 ${
              isExpanded === "dropdown-4" ? "block" : "hidden"
            }`}
            id="dropdown-4"
          >
            <p>
              언제 어디서나 시청할 수 있습니다. 넷플릭스 계정으로 로그인하면
              PC에서 netflix.com을 통해 바로 시청할 수 있으며, 인터넷이 연결되어
              있고 넷플릭스 앱을 지원하는 디바이스(스마트 TV,
              스마트폰,태블릿,스트리밍 미디어 플레이어, 게임 콘솔 등)에서도
              언제든지 시청할 수 있습니다.
            </p>
            <p className="mt-4  decoration-white-100">
              iOS 또는 Android용 앱에서는 좋아하는 시리즈를 저장할 수도
              있습니다. 저장 기능을 이용해 이동 중이나 인터넷에 연결할 수 없는
              곳에서도 시청하세요. 넷플릭스는 어디서든 함께니까요.
            </p>
          </div>

          {/* button 5 */}
          <button
            className="w-full h-[80px] mt-2 flex justify-between items-center bg-[#272727] hover:bg-[#333333] border border-[#333333] text-white rounded-xl pl-8 pr-8"
            onClick={() => {
              toggleDropdown("dropdown-5");
            }}
          >
            멤버십을 해지하려면 어떻게 하나요?
            <img
              className={isExpanded === "dropdown-5" ? "rotate-45" : ""}
              src="/icon/svgexport-11.svg"
              alt="Hand Star Icon"
              width={28}
              height={28}
            />
          </button>
          <div
            className={`w-full h-[200px] mt-2 p-4 items-center bg-[#272727]  border border-[#333333] text-white rounded-xl pl-8 pr-8 transition-all duration-1000 ${
              isExpanded === "dropdown-5" ? "block" : "hidden"
            }`}
            id="dropdown-5"
          >
            <p>
              넷플릭스는 부담 없이 간편합니다. 성가신 계약도, 약정도 없으니까요.
              멤버십 해지도 온라인에서 클릭 두 번이면 완료할 수 있습니다. 해지
              수수료도 없으니 원할 때 언제든 계정을 시작하거나 종료하세요.
            </p>
          </div>

          {/* button 6 */}
          <button
            className="w-full h-[80px] mt-2 flex justify-between items-center bg-[#272727] hover:bg-[#333333] border border-[#333333] text-white rounded-xl pl-8 pr-8"
            onClick={() => {
              toggleDropdown("dropdown-6");
            }}
          >
            아이들이 넷플릭스를 봐도 될까요?
            <img
              className={isExpanded === "dropdown-4" ? "rotate-45" : ""}
              src="/icon/svgexport-11.svg"
              alt="Hand Star Icon"
              width={28}
              height={28}
            />
          </button>
          <div
            className={`w-full h-[200px] mt-2 p-4 items-center bg-[#272727]  border border-[#333333] text-white rounded-xl pl-8 pr-8 transition-all duration-1000 ${
              isExpanded === "dropdown-6" ? "block" : "hidden"
            }`}
            id="dropdown-6"
          >
            <p>
              멤버십에 넷플릭스 키즈 환경이 포함되어 있어 자녀가 자기만의
              공간에서 가족용 시리즈와 영화를 즐기는 동안 부모가 이를 관리할 수
              있습니다.
            </p>
            <p className="mt-4  decoration-white-100">
              키즈 프로필과 더불어 PIN 번호를 이용한 자녀 보호 기능도 있어,
              자녀가 시청할 수 있는 콘텐츠의 관람등급을 제한하고 자녀의 시청을
              원치 않는 특정 작품을 차단할 수 있습니다.
            </p>
          </div>
        </div>
        <div className="w-full h-48 flex flex-col gap-2 justify-center items-center">
          <button className="w-[140px] h-[44px] bg-[red] text-white text-xl rounded-full">
            시작하기
          </button>
          <p className="text-white text-[10pt]">
            멤버십을 생성하거나 재시작하세요
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notice;
