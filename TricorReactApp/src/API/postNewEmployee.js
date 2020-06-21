const postNewEmployeeURI = 'https://localhost:5001/api/Employee';

export const postNewEmployee = (employee) => {
    fetch(postNewEmployeeURI, {
        method: 'post',
        body: JSON.stringify(employee),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(()=>{window.location='/employee/list'});
};
