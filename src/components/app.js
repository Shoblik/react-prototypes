import React from 'react';
import Table from './table';

const App = () => {
    const students = [{student: 'Jessie', course: 'English', grade: 94}, {student: 'Tereza', course: 'immunology', grade: 95}, {student: 'David', course: 'civil engineering', grade: 92}];
    return(<Table data={students}/>)
}


export default App;
