import React from 'react';
import '../../dist/style.css';
import './app';

var tableRows;
const Table = (props) => {
    tableRows = props.data.map((item, index) => {
        return(
            <tr key={index}>
                <td>{item.student}</td>
                <td>{item.course}</td>
                <td>{item.grade}</td>
            </tr>
        )
    });
    return(
    <div>
        <div><h1>Student Grade Table</h1></div>
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Course</th>
                <th>Grade</th>
            </tr>
            </thead>
            <tbody>
            {tableRows}
            </tbody>
        </table>
    </div>
    )
};



    export default Table;

