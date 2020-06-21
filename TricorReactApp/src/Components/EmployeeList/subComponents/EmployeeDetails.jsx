import React, {useState, useEffect} from 'react';

import {getEmployeeById} from '../../../API/getEmployeeById';

export default function (props) {
    const {empId, setAction} = props;

    const [employee, setEmployee] = useState(null);

    useEffect(() => {
        getEmployeeById(empId).then((resultEmp) => {
            setEmployee(resultEmp);
        });
    }, []);

    return employee ? (
        <div>
            <br />
            <h2>Employee Details:</h2>
            <p>
                {employee.firstName} {employee.lastName} ({employee.gender}, aged: {employee.age}
                yrs.) have been part of the Company since {employee.joinedDate}
            </p>
            <br />
            <input type='button' onClick={() => setAction('')} value='CLOSE' />
        </div>
    ) : null;
}
