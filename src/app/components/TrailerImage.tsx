import React from 'react';
import trailerImage from './image/KR-ko-20241028-TRIFECTA-perspective_04979008-cd40-4790-980b-a0e7f1a35198_large.jpg'; // 경로 수정

const TrailerImage: React.FC = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${trailerImage.src})`, // Next.js 이미지 가져오기
        aspectRatio: '2000 / 1125',  //원본비율
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* 여기서 추가적인 콘텐츠를 삽입할 수 있습니다 */}
    </div>
  );
};

export default TrailerImage;
