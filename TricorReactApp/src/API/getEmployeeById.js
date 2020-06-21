const getEmployeeByIdURI = 'https://localhost:5001/api/Employee';

export const getEmployeeById = (empId) => {
    console.log('fetching employee by Id::' + empId);
    return fetch(`${getEmployeeByIdURI}/${empId}`, {
        method: 'GET'
    }).then((res) => res.json());
};
