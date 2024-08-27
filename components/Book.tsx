import BookCover from '@/public/images/book-cover.png';
import Image from 'next/image';

export interface BookProps{
  coverImg: string,
  title: string,
  writer?: string,
  date: string;
}

const Book = ({coverImg, title, writer, date}:BookProps)=>{

  const handleClick = ()=> {
    alert(`${title}클릭! + 페이지 이동하기`);
  }

  return (
    <div className="w-[150px] flex flex-col items-center justify-center gap-2 cursor-pointer" onClick={handleClick}>
      <Image src={BookCover} width={150} height={180} alt="logo"></Image>
      <h4 className="w-full text-base text-center truncate">{title}</h4>
      {writer && <h5 className="text-sm">{writer}</h5>}
      <h5 className="text-xs">{date}</h5>
    </div>

  );
}

export default Book;