"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const posters_array1 = [
  "/images/poster_1.webp",
  "/images/poster_2.webp",
  "/images/poster_3.webp",
  "/images/poster_4.webp",
  "/images/poster_5.webp",
  "/images/poster_6.webp",
  "/images/poster_7.webp",
  "/images/poster_8.webp",
  "/images/poster_9.webp",
  "/images/poster_10.webp",
];

const posters_array2 = [
  "/images/poster_11.webp",
  "/images/poster_12.webp",
  "/images/poster_13.webp",
  "/images/poster_14.webp",
  "/images/poster_15.webp",
  "/images/poster_16.webp",
  "/images/poster_17.webp",
  "/images/poster_18.webp",
  "/images/poster_19.webp",
  "/images/poster_20.webp",
];

const PostList = () => {
  const settings = {
    dots: true, // 아래 점으로 네비게이션
    infinite: true, // 무한 스크롤
    speed: 500, // 슬라이드 전환 속도
    slidesToShow: 5, // 한 번에 보여줄 슬라이드 개수
    slidesToScroll: 1, // 한 번에 스크롤할 슬라이드 개수
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5, // 화면 크기에 맞춰 슬라이드 개수 조정
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3, // 화면 크기에 맞춰 슬라이드 개수 조정
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // 화면 크기에 맞춰 슬라이드 개수 조정
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-[80%] flex flex-col gap-8">
      <h1>Posters</h1>
      <Slider {...settings}>
        {posters_array1.map((poster, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={poster}
              alt={`Poster ${index + 1}`}
              style={{ width: "90%", height: "auto", objectFit: "cover" }}
              className="rounded-md"
            />
          </div>
        ))}
      </Slider>
      <Slider {...settings}>
        {posters_array2.map((poster, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={poster}
              alt={`Poster ${index + 1}`}
              style={{ width: "90%", height: "auto", objectFit: "cover" }}
              className="rounded-md"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PostList;
