import React from 'react';

interface SortingToggleProps {
  selected: string;
  onToggle: (selected: string) => void;
}

const SortingToggle = ({ selected, onToggle }: SortingToggleProps) => {
  return (
    <div className="w-[340px] h-[40px] flex flex-row rounded-3xl bg-[#EEEEEE]">
      <div
        className={`flex flex-1 h-full items-center justify-center rounded-3xl cursor-pointer transition-colors duration-300 ${
          selected === 'recent' ? 'bg-[#2E2E2E]' : 'bg-[#EEEEEE]'
        }`}
        onClick={() => onToggle('recent')}
      >
        <h5
          className={`text-[16px] transition-colors duration-300 ${
            selected === 'recent' ? 'font-semibold text-[#EEEEEE]' : 'font-normal text-[#2E2E2E]'
          }`}
        >
          최신순
        </h5>
      </div>

      <div
        className={`flex flex-1 h-full items-center justify-center rounded-3xl cursor-pointer transition-colors duration-300 ${
          selected === 'name' ? 'bg-[#2E2E2E]' : 'bg-[#EEEEEE]'
        }`}
        onClick={() => onToggle('name')}
      >
        <h5
          className={`text-[16px] transition-colors duration-300 ${
            selected === 'name' ? 'font-semibold text-[#EEEEEE]' : 'font-normal text-[#2E2E2E]'
          }`}
        >
          이름순
        </h5>
      </div>
    </div>
  );
};

export default SortingToggle;
