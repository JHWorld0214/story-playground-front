import SideNavigationBar from '@/components/NavigationBar';
import { IconArrowDown, IconNextTriangle, IconSearch } from '@/public/icons';
import Logo from '@/public/images/small-logo.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import BookList from '@/components/BookList';
import SearchBar from '@/components/SearchBar';

// 더미 데이터
const writingBooks = [
  {
    coverImg: '/path/to/cover1.png',
    title: 'Don\'t Make Me Think',
    writer: 'Steve Krug',
    date: '2024-08-16',
  },
  {
    coverImg: '/path/to/cover2.png',
    title: 'The Design of Everyday Things',
    writer: 'Don Norman',
    date: '2024-08-20',
  },
  {
    coverImg: '/path/to/cover3.png',
    title: 'Sprint: How to solve big problems...',
    writer: 'Jake Knapp',
    date: '2024-08-22',
  },
  {
    coverImg: '/path/to/cover4.png',
    title: 'Lean UX: Design Great Products',
    writer: 'Jeff Gothelf',
    date: '2024-08-23',
  },
  {
    coverImg: '/path/to/cover1.png',
    title: 'Don\'t Make Me Think',
    writer: 'Steve Krug',
    date: '2024-08-23',
  },
  {
    coverImg: '/path/to/cover2.png',
    title: 'The Design of Everyday Things',
    writer: 'Don Norman',
    date: '2024-08-24',
  },
  {
    coverImg: '/path/to/cover3.png',
    title: 'Sprint: How to solve big problems...',
    writer: 'Jake Knapp',
    date: '2024-08-25',
  },
];

const doneBooks = [
  {
    coverImg: '/path/to/cover1.png',
    title: 'Don\'t Make Me Think',
    writer: 'Steve Krug',
    date: '2000',
  },
  {
    coverImg: '/path/to/cover2.png',
    title: 'The Design of Everyday Things',
    writer: 'Don Norman',
    date: '1988',
  },
  {
    coverImg: '/path/to/cover3.png',
    title: 'Sprint: How to solve big problems...',
    writer: 'Jake Knapp',
    date: '2000',
  },
  {
    coverImg: '/path/to/cover4.png',
    title: 'Lean UX: Design Great Products',
    writer: 'Jeff Gothelf',
    date: '2016',
  },
  {
    coverImg: '/path/to/cover1.png',
    title: 'Don\'t Make Me Think',
    writer: 'Steve Krug',
    date: '2000',
  },
  {
    coverImg: '/path/to/cover2.png',
    title: 'The Design of Everyday Things',
    writer: 'Don Norman',
    date: '1988',
  },
  {
    coverImg: '/path/to/cover3.png',
    title: 'Sprint: How to solve big problems...',
    writer: 'Jake Knapp',
    date: '2000',
  },
];


function Home() {
  const router = useRouter();

  return (
    <div className="w-full h-[100vh] flex flex-col items-center justify-center pl-[280px]">
      <SideNavigationBar></SideNavigationBar>

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
        <div className="w-4/5 p-4 pb-12">
          <BookList title="만들던 이야기" contents={writingBooks} />
        </div>

        {/*완성된 이야기 리스트*/}
        <div className="w-4/5 p-4 pb-12">
          <BookList title="완성한 이야기" contents={doneBooks} />
        </div>

      </div>
    </div>
  );
}

export default Home;
