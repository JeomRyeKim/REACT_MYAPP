import React, { useState } from "react";

function ConfirmButton(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handlerConfirm = () => {
        setIsConfirmed((p) => !p);
    };

    return (
        <button onClick={handlerConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}
export default ConfirmButton;
