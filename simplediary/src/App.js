import './App.css';
import { useState, useRef } from "react";
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

// const dummyList = [
//   {
//     id : 1,
//     author : "Hong",
//     content : "hi~",
//     emotion : 5,
//     created_date : new Date().getTime()
//   },
//   {
//     id : 2,
//     author : "Hong",
//     content : "haha~",
//     emotion : 4,
//     created_date : new Date().getTime()
//   },
//   {
//     id : 3,
//     author : "Hong",
//     content : "MAMA~",
//     emotion : 3,
//     created_date : new Date().getTime()
//   }
// ]

function App() {

const [data, setData] = useState([]);
const dataId = useRef(0);
const onCreate = (author, content, emotion) => {
  const created_date = new Date().getTime();
  const newItem= {
    author,
    content,
    emotion,
    created_date,
    id: dataId.current,
  };
  dataId.current += 1;
  setData([newItem, ...data]);
  // newItem이 앞에 있으면 데이터가 위로 쌓이고
  // data가 앞에 있으면 데이터가 밑으로 쌓임 => [data, ...newItem]
}
const onRemove = (targetId)=> {
  console.log(`${targetId}가 삭제되었습니다.`);
  const newDiaryList = data.filter((it)=> it.id !== targetId);
  setData(newDiaryList);
}

const onEdit = (targetId, newContent) => {
  setData(
    data.map((it) =>
    it.id === targetId ? {...it,content : newContent} : it 
    )
  );
};

  return (
   <div className='App'>
    <DiaryEditor onCreate={onCreate} />
    <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data}/>
    {/* <DiaryList diaryList={dummyList}/> */}
   </div>
  );
}

export default App;
