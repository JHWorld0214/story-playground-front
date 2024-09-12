import SideNavigationBar from '@/components/NavigationBar';
import { IconArrowDown, IconNext, IconNextTriangle, IconPrev, IconSearch } from '@/public/icons';
import Logo from '@/public/images/small-logo.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import BookList from '@/components/BookList';
import SearchBar from '@/components/SearchBar';
import { useState } from 'react';
import { doneBooks, writingBooks } from '@/constant/dummyBookList';

function Home() {
  const router = useRouter();
  const [ingCurrPage, setIngCurrPage] = useState(0);
  const [doneCurrPage, setDoneCurrPage] = useState(0);

  const VISIBLE = 4;

  const handleNext = (category: string)=>{
    if(category === 'ing'){
      if((ingCurrPage+1)*VISIBLE < writingBooks.length){
        setIngCurrPage(ingCurrPage+1);
      }
    }else if(category === 'done'){
      if((doneCurrPage + 1)*VISIBLE < doneBooks.length){
        setDoneCurrPage(doneCurrPage+1);
      }
    }
  };

  const handlePrev = (category: string) => {
    if (category === 'ing') {
      if (ingCurrPage > 0) {
        setIngCurrPage(ingCurrPage - 1);
      }
    } else if (category === 'done') {
      if (doneCurrPage > 0) {
        setDoneCurrPage(doneCurrPage - 1);
      }
    }
  };

  return (
    <main className="w-full h-[100vh] flex flex-col items-center justify-center pl-[280px]">
      <SideNavigationBar />
      <div className="w-5/6 h-[100vh] flex flex-col pt-12 items-center justify-start">
        {/*검색창*/}
        <SearchBar />

        {/*이야기 만들기 베너*/}
        <div className="flex flex-row w-full h-[300px] items-center justify-evenly bg-[#CDCDCD]/10 mt-16 mb-16 pt-8 pb-8">
          <div className="flex flex-col gap-14 items-center justify-center">
            <h1 className="text-3xl font-semibold">
              안녕! 오늘도 새로운 이야기를 만들어볼까?
            </h1>
            <div
              className="flex flex-row items-center justify-center w-2/3 h-[60px] gap-3 bg-[#DE8A2A] rounded-3xl cursor-pointer"
              onClick={() => {
                router.push('/storychat');
                // navigationbar에 있는 currPage의 state를 변경해줘야해서 상태관리를 써야할 듯합니다
              }}>
              <IconNextTriangle />
              <h3 className="text-white text-2xl font-semibold">이야기 만들기</h3>
            </div>
          </div>
          <Image src={Logo} width={150} height={150} alt="logo"></Image>
        </div>

        {/*만들던 이야기 리스트*/}
        <div className="w-5/6 pb-12">
          <h2 className="text-[20px] font-bold text-gray-400 mb-6">만들던 이야기</h2>
          <div className="flex flex-row items-center">
            {ingCurrPage > 0 && (
              <IconPrev
                alt="prev icon"
                className="cursor-pointer"
                onClick={() => handlePrev('ing')}
              />
            )}
            <BookList visibleBookCount={VISIBLE} currPage={ingCurrPage} contents={writingBooks} />
            {(ingCurrPage + 1) * VISIBLE < writingBooks.length && (
              <IconNext
                alt="next icon"
                className="cursor-pointer"
                onClick={() => handleNext('ing')}
              />
            )}
          </div>
        </div>

        {/*완성한 이야기 리스트*/}
        <div className="w-5/6 pb-12">
          <h2 className="text-[20px] font-bold text-gray-400 mb-6">완성한 이야기</h2>
          <div className="flex flex-row items-center">
            {doneCurrPage > 0 && (
              <IconPrev
                alt="prev icon"
                className="cursor-pointer"
                onClick={() => handlePrev('done')}
              />
            )}
            <BookList visibleBookCount={VISIBLE} currPage={doneCurrPage} contents={doneBooks} />
            {(doneCurrPage + 1) * VISIBLE < doneBooks.length && (
              <IconNext
                alt="next icon"
                className="cursor-pointer"
                onClick={() => handleNext('done')}
              />
            )}
          </div>
        </div>

      </div>
    </main>
  );
}

export default Home;
