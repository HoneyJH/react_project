import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import DiaryItem from './DiaryItem';
import MyButton from './MyButton';



const sortOptionList = [
  { value: 'latest', name: '최신 순' },
  { value: 'oldest', name: '오래된 순' },
];

const filterOptionList = [
    { value: "all", name: "전부 다" },
    { value: "good", name: "좋은 감정만" },
    { value: "bad", name: "나쁜 감정만" },
  ];
const ControlMenu = ({ value, onChange, optionList }) => {
    return (
      <select className='ControlMenu'
       value={value} onChange={(e) => onChange(e.target.value)}>
        {optionList.map((it, idx) => (
          <option key={idx} value={it.value}>
            {it.name}
          </option>
        ))}
      </select>
    );
  };



const DiaryList = ({ diaryList }) => {
    const navigate = useNavigate();
    const [sortType, setSortType] = useState("latest");
    const [filter, setFilter] = useState("all");
    const getProcessDiaryList = () => {
        const filterCallback = (item) => {
            if (filter === "good") {
              return parseInt(item.emotion) <= 2;
            } else if (filter === "bad") {
              return parseInt(item.emotion) >= 4;
            }
          };
      
        
        const compare = (a, b) => {
          if (sortType === "latest") {
            return parseInt(b.date) - parseInt(a.date);
            // 문자열이 들어올 수도 있기 때문에 parseInt를 해주어야 함 (숫자로 바꾸어 줌)
          } else {
            return parseInt(a.date) - parseInt(b.date);
          }
        };
        const copyList = JSON.parse(JSON.stringify(diaryList));
        const filteredList =
        filter === "all" ? copyList : copyList.filter((it) => filterCallback(it));
        const sortedList = filteredList.sort(compare);
        //const sortedList = copyList.sort(compare);
        return sortedList;
     };

    return (
        <div className='DiaryList' >
      <div className="menu_wrapper">
        <div className='left_col'>
            <ControlMenu
            value={sortType}
            onChange={setSortType}
            optionList={sortOptionList}
        />
            <ControlMenu
            value={filter}
            onChange={setFilter}
            optionList={filterOptionList}
        />
        </div>
        <div className='right_col'>
            <MyButton
                type={"positive"}
                text={"새로운 일기쓰기"}
                onClick={() => {
                navigate("/new");
                }}
            />
        </div>
        </div>
        {getProcessDiaryList().map((it) => (
          <DiaryItem key={it.id} {...it}/>
        ))}
      
      </div>  
    );
  };
  
  export default DiaryList;