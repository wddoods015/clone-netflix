import BackGround from "./components/BackGround";
import Header from "./components/Header";
import PromotionContainer from "./components/PromotionContainer";
import MainContainer from "./components/MainContainer";
import Footer from "./components/Footer";
import PostList from "./components/PosterList";
import Notice from "./components/Notice";

export default function Home() {
  return (
    <div className="w-full h-full bg-black">
      <div className="flex">
        <BackGround>
          <Header />
          <div className=" relative w-full h-[700px]">
            <PromotionContainer />
            <MainContainer />
            <div className="w-full absolute top-[90%] flex justify-center gap-2 z-20">
              <input
                className="w-[412px] h-[56px] bg-transparent border border-[#ffffffb3] p-4 text-white rounded-full"
                placeholder="이메일 주소"
              />
              <button className="w-[140px] h-[56px] bg-[red] text-white text-xl rounded-full">
                시작하기
              </button>
            </div>
          </div>

          <div className="w-full h-auto bg-black flex flex-col gap-24 items-center">
            <PostList />
            <Notice />
            <Footer />
          </div>
        </BackGround>
      </div>
    </div>
  );
}
