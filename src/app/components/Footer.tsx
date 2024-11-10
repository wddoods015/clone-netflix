import React from "react";

const Footer: React.FC = () => {
    return (
        <footer className="absolute bottom-0 left-0 w-full h-auto pb-[96px] bg-black flex flex-col gap-12 ml-[10%]">
            <span className="text-[#ffffffb3] w-[100%]">질문이 있으신가요? 문의 전화: 00-308-321-0161 (수신자 부담)</span>
            <div className="h-full w-[70%] grid grid-cols-2 md:grid-cols-4 gap-4">
            <span className="text-[#ffffffb3] underline decoration-white-100">자주 묻는 질문</span>
            <span className="text-[#ffffffb3] underline decoration-white-100">고객 센터</span>
            <span className="text-[#ffffffb3] underline decoration-white-100">계정</span>
            <span className="text-[#ffffffb3] underline decoration-white-100">미디어센터</span>
            <span className="text-[#ffffffb3] underline decoration-white-100">투자정보(IR)</span>
            <span className="text-[#ffffffb3] underline decoration-white-100">입사정보</span>
            <span className="text-[#ffffffb3] underline decoration-white-100">넷플릭스 지원 디바이스</span>
            <span className="text-[#ffffffb3] underline decoration-white-100">이용 약관</span>
            <span className="text-[#ffffffb3] underline decoration-white-100">개인정보 처리방침</span>
            <span className="text-[#ffffffb3] underline decoration-white-100">쿠키설정</span>
            <span className="text-[#ffffffb3] underline decoration-white-100">회사정보</span>
            <span className="text-[#ffffffb3] underline decoration-white-100">문의하기</span>
            <span className="text-[#ffffffb3] underline decoration-white-100">속도테스트</span>
            <span className="text-[#ffffffb3] underline decoration-white-100">법적고지</span>
            <span className="text-[#ffffffb3] underline decoration-white-100">오직 넷플릭스에서</span>
            </div>
            <span className="text-[#ffffffb3]">넷플릭스 대한민국</span>
            <div>
                <p className="text-[#ffffffb3] text-[10pt]">넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 00-308-321-0161 (수신자 부담)<br/>
대표: 레지널드 숀 톰프슨<br/>
이메일 주소: korea@netflix.com<br/>
주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161<br/>
사업자등록번호: 165-87-00119<br/>
클라우드 호스팅: Amazon Web Services Inc.<br/>
공정거래위원회 웹사이트</p>
            </div>
        </footer>
    );
};

export default Footer;