import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "홍길동",
        comment: "안녕하세요, 홍길동입니다.",
    },
    {
        name: "유재석",
        comment: "리액트 재미있어요~!",
    },
    {
        name: "강민경",
        comment: "저도 리액트 배워보고 싶어요!!",
    },
    {
        name: "이순신",
        comment: "감기 조심하세요~!",
    },
    {
        name: "강감찬",
        comment: "날이 많이 춥네요~",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((c) => {
                return <Comment name={c.name} comment={c.comment} />;
            })}
        </div>
    );
}

export default CommentList;
