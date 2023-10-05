import DiaryItem from "./DiaryItem";

const DiaryList = ({onEdit,onRemove, diaryList}) => {
    console.log(diaryList);
    return (
        <div className="DiaryList">
            <h2>일기 리스트</h2>
            <h4>{diaryList.length}개의 일기가 있습니다.</h4>
            <div>
                {diaryList.map((it)=>
                <DiaryItem key={it.id} {...it} onRemove={onRemove} onEdit={onEdit}/> // it 속성들을 모두 DiaryItem 컴포넌트에 전달
                // <div key={it.id}>
                //     <div>작성자: {it.author}</div>
                //     <div>일기: {it.content}</div>
                //     <div>감정: {it.emotion}</div>
                //     <div>날짜: {it.created_date}</div>
                // </div>
                )}
            </div>
        </div>
    );
};

DiaryList.defaultProps = {
    dummyList: [],
  };
export default DiaryList;