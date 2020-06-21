const putUpdateEmployeeURI = 'https://localhost:5001/api/Employee';

export const putUpdateEmployee = (employee) => {
    return fetch(putUpdateEmployeeURI, {
        method: 'PUT',
        body: JSON.stringify(employee),
        headers: {
            'Content-Type': 'application/json'
        }
    });
};
