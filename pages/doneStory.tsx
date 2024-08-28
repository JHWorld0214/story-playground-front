import SideNavigationBar from '@/components/NavigationBar';
import SearchBar from '@/components/SearchBar';
import { useState } from 'react';
import { doneBooks, writingBooks } from '@/components/dummyBookList';
import BookList from '@/components/BookList';
import { IconNext, IconPrev } from '@/public/icons';
import SortingToggle from '@/components/SortingToggle';

const DoneStory = () => {
  const [currPage, setCurrPage] = useState(0);
  const [selected, setSelected] = useState('recent');

  const visible = 8;

  const handleNext = () => {
    if ((currPage + 1) * visible < writingBooks.length) {
      setCurrPage(currPage + 1);
    }
  };

  const handlePrev = () => {
    if (currPage > 0) {
      setCurrPage(currPage - 1);
    }
  };

  const handleToggle = (selection: string) => {
    setSelected(selection);
  };

  return (
    <main className="w-full h-[100vh] flex flex-col items-center justify-center pl-[280px]">
      <SideNavigationBar />
      <div className="w-5/6 h-[100vh] flex flex-col pt-12 gap-10 items-center justify-start">
        {/*검색창*/}
        <SearchBar />

        {/*정렬 토글 버튼*/}
        <div className="w-full flex flex-row items-center justify-end px-[140px]">
          <SortingToggle selected={selected} onToggle={handleToggle} />
        </div>

        {/*책리스트*/}
        <div className="relative w-full pb-12 mt-12 flex items-center justify-center">
          {currPage > 0 && (
            <IconPrev
              alt="prev icon"
              className="cursor-pointer absolute left-4"
              onClick={handlePrev}
            />
          )}

          <div className="flex items-center justify-center w-3/4">
            <BookList visible={visible} currPage={currPage} contents={doneBooks} />
          </div>

          {(currPage + 1) * visible < doneBooks.length && (
            <IconNext
              alt="next icon"
              className="cursor-pointer absolute right-4"
              onClick={handleNext}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default DoneStory;
