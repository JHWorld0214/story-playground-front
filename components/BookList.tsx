import Book, { BookProps } from '@/components/Book';

interface BookListProps {
  visibleBookCount: number;
  currPage: number;
  contents: BookProps[];
}

const BookList = ({ visibleBookCount, currPage, contents }: BookListProps) => {
  const visibleBooks = contents.slice(currPage * visibleBookCount, (currPage + 1) * visibleBookCount);

  return (
    <div className="grid grid-cols-4 gap-10 mx-8">
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
  );
};

export default BookList;
