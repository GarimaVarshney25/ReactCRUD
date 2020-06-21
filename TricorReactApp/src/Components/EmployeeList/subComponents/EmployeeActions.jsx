import React from 'react';
import {deleteEmployee} from '../../../API/deleteEmployee';

export default function EmployeeActions(props) {
    const {empId, setAction, setActionId, fetchEmployeesList} = props;

    const handleDeleteEmployee = () => {
        const confirmation = window.confirm('You are about to delete the employee');
        if (confirmation) {
            deleteEmployee(empId).then(() => fetchEmployeesList());
        }
    };

    return (
        <>
            <span
                className='clickable'
                onClick={() => {
                    setAction('view');
                    setActionId(empId);
                }}>
                View
            </span>
            {' | '}
            <span
                className='clickable'
                onClick={() => {
                    setAction('update');
                    setActionId(empId);
                }}>
                Edit
            </span>
            {' | '}
            <span className='clickable' onClick={handleDeleteEmployee}>
                Delete
            </span>
        </>
    );
}
