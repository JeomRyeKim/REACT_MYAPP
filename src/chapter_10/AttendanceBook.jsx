import React from "react";

const stuents = [
    {
        id: 1,
        name: "Inje",
    },
    {
        id: 2,
        name: "Steve",
    },
    {
        id: 3,
        name: "Bill",
    },
    {
        id: 4,
        name: "Jeff",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {stuents.map((student) => {
                return <li key={student.id}>{student.name}</li>;
            })}
            {stuents.map((student) => {
                return <li key={`student-id-${student.id}`}>{student.name}</li>;
            })}
            {stuents.map((student, index) => {
                return <li key={index}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;
