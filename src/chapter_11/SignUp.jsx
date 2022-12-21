import React, { useState } from "react";

function SignUp(props) {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("남자");

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const handleChangeGenger = (event) => {
        setGender(event.target.value);
    };

    const handleSubmit = (event) => {
        alert(`이름: ${name}, 성별: ${gender}`);

        // a태그나 submit 태그를 누를 때 href를 통해 이동, 새로고침을 막아줌
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                이름:
                <input type="text" value={name} onChange={handleChangeName} />
            </label>
            <br />
            <label>
                성별:
                <select value={gender} onChange={handleChangeGenger}>
                    <option value={"남자"}>남자</option>
                    <option value={"여자"}>여자</option>
                </select>
            </label>
            <button type="submit">제출</button>
        </form>
    );
}

export default SignUp;
