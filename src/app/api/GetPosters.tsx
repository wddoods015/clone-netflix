import { GetServerSideProps } from "next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Props {
  posters: string[];
}

const GetPosters = ({ posters }: Props) => {
  return (
    <div>
      <h1>Posters</h1>
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
      >
        {posters.map((poster, index) => (
          <div key={index}>
            <img
              src={poster}
              alt={`Poster ${index + 1}`}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const postList: string[] = Array.from(
    { length: 20 },
    (_, index) => `/images/poster_${index + 1}.webp`
  );

  // 데이터 확인
  console.log("Post List:", postList);

  return {
    props: {
      posters: postList,
    },
  };
};

export default GetPosters;
