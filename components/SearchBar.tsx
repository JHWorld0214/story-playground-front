import { IconArrowDown, IconSearch } from '@/public/icons';

const SearchBar = ()=>{
  return (
    <div
      className="w-4/5 h-[60px] flex flex-row items-center gap-3 border-2 border-gray-200 rounded-3xl drop-shadow-sm">
      <div className="flex flex-row items-center justify-evenly w-[125px]  bg-gray-100 rounded-l-3xl">
        <div className="text-xl pt-2 pb-2 pl-5">
          All
        </div>
        <IconArrowDown
          alt="arrow down icon"
          width={20}
          height={11}
          className="top-10 cursor-pointer"
          onClick={() => {
            alert('검색 더보기 클릭!');
          }}
        ></IconArrowDown>
      </div>
      <div className="flex flex-row items-center justify-between pl-2 pr-2">
        <input type="text" placeholder="Search"
               className="text text-xl h-full w-[470px] outline-0 no-underline placeholder-gray-300">
        </input>
        <IconSearch
          alt="search icon"
          width={20}
          height={20}
          className="fixed right-5 cursor-pointer"
          onClick={() => {
            alert('검색 돋보기 클릭!');
          }}
        ></IconSearch>
      </div>
    </div>


  );
}

export default SearchBar;