import Book, { BookProps } from '@/components/Book';

interface BookListProps {
  visible: number;
  currPage: number;
  contents: BookProps[];
}

const BookList = ({ visible, currPage, contents }: BookListProps) => {
  const visibleBooks = contents.slice(currPage * visible, (currPage + 1) * visible);

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
