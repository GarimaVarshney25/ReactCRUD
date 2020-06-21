import React from 'react';
import EmployeeForm from '../../../SharedComponents/EmployeeForm';
import {putUpdateEmployee} from '../../../API/putUpdateEmployee';

export default function (props) {
    const {employees, empId, setAction, fetchEmployeesList} = props;
    const employee = employees.find((el) => el.empId === empId);

    const updateEmployee = (updatedEmp) => {
        updatedEmp['empId'] = empId;
        putUpdateEmployee(updatedEmp)
            .then(() => setAction(''))
            .then(() => fetchEmployeesList());
    };

    return (
        <div>
            <br />
            <h2>Update Employee Details:</h2>
            <EmployeeForm employee={employee} submitLabel='SUBMIT' onSubmit={updateEmployee} />
        </div>
    );
}
