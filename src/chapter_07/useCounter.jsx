import React, { useState } from "react";

function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);

    const increaseCount = () => setCount((count) => count + 1);
    /* Maht 함수를 사용하여  count 값을 0 이하로 못 내려가도록 설정
        Math.max(a, b) / Math.min(a, b) : a와 b의 값이 바뀔 때마다 a와 b의 값을 비교하면서 최대/최저 값을 반환함*/
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));

    return [count, increaseCount, decreaseCount];
}

export default useCounter;
