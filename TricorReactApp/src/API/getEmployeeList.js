const getEmployeeListURI = 'https://localhost:5001/api/Employee';

export const getEmployeeList = () => {
    console.log('Fetching Employee List');
    return fetch(getEmployeeListURI).then((res) => res.json());
};
