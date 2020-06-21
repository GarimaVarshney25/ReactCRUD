import React from 'react';
import EmployeeForm from '../../SharedComponents/EmployeeForm';

import {postNewEmployee} from '../../API/postNewEmployee';

export default function (props) {
    return (
        <div>
            <h2>Please enter the details for the New Employee</h2>
            <br />
            <EmployeeForm
                submitLabel='SUBMIT'
                onSubmit={postNewEmployee}
                displayViewButton={true}
            />
            <br />
        </div>
    );
}
