import React, { useEffect, useState } from "react";
import useCounter from "./useCounter";

// 최대 카운트 개수
const MAX_CAPACITY = 10;

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    // 의존성 배열이 없는 Hook : 컴포넌트 마운트될 때, 컴포넌트가 업데이트 될 때마다 호출
    useEffect(() => {
        console.log("================");
        console.log("useEffect() is called");
        console.log(`isFull: ${isFull}`);
    });

    // 의존성 배열이 있는 Hook : 컴포넌트 마운트될 때, 카운트 값이 바뀔 때마다 호출
    useEffect(() => {
        setIsFull(count >= MAX_CAPACITY); // count가 10을 넘는 조건식에 해당되면 true를 반환하게됨!
        console.log(`Current count value: ${count}`);
    }, [count]);

    // disabled=true가 되면 버튼이 disabled됨
    return (
        <div style={{ padding: 16 }}>
            <p>{`총 ${count}명 수용했습니다.`}</p>
            <button onClick={increaseCount} disabled={isFull}>
                입장
            </button>
            <button onClick={decreaseCount}>퇴장</button>
            {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default Accommodate;
