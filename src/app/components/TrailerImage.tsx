import Image from 'next/image';

const TrailerImage: React.FC = () => {
  return (
    <div className="">
      <Image
        src="/image/KR-ko-20241028-TRIFECTA-perspective_04979008-cd40-4790-980b-a0e7f1a35198_large.jpg" // public/images/ 경로로 접근
        alt="Trailer Image"
        width={2000}  // 이미지 원본 크기에서 width 설정
        height={1125}  // 이미지 원본 크기에서 height 설정
      />
    </div>
  );
};

export default TrailerImage;
