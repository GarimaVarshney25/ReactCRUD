const deleteEmployeeURI = 'https://localhost:5001/api/Employee';

export const deleteEmployee = (empId) => {
    console.log(`Employee with ID#${empId} deleted`);
    return fetch(`${deleteEmployeeURI}/${empId}`, {
         method: 'DELETE'
     });
};
