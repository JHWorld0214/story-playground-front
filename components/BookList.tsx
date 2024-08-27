import { useState } from 'react';
import Book, { BookProps } from '@/components/Book';
import { IconNext, IconPrev } from '@/public/icons';

interface BookListProps{
  title: string;
  contents: BookProps[];
}

const BookList = ({ title, contents }: BookListProps) => {
  const [visibleIdx, setVisibileIdx] = useState(0);

  const booksPerPage = 4;

  const visibleBooks = contents.slice(visibleIdx, visibleIdx + booksPerPage);

  const handleNext = ()=>{
    if(visibleIdx + booksPerPage < contents.length) {
      setVisibileIdx(visibleIdx + booksPerPage);
    }
  };

  const handlePrev = () => {
    if(visibleIdx - booksPerPage >= 0){
      setVisibileIdx(visibleIdx - booksPerPage);
    }
  }

  return (
    <>
      <h2 className="text-[20px] font-bold text-gray-400 mb-6">{title}</h2>
      <div className="flex flex-row gap-5 items-center px-2">
        {visibleIdx > 0 && (
          <IconPrev
            alt="prev icon"
            className="cursor-pointer"
            onClick={handlePrev} />
        )}

        <div className="flex flex-row gap-10 items-start">
        {visibleBooks.map((book, index) => (
          <Book
            key={index}
            coverImg={book.coverImg}
            title={book.title}
            writer={book.writer}
            date={book.date}
          />
        ))}
        </div>

        {visibleIdx + booksPerPage < contents.length &&
          <IconNext
          alt="next icon"
          className="cursor-pointer"
          onClick={handleNext}/>
        }

      </div>
    </>
  );
};

export default BookList;