import React, {useEffect, useState} from 'react';
import EmployeeActions from './subComponents/EmployeeActions';
import EmployeeDetails from './subComponents/EmployeeDetails';
import UpdateEmployee from './subComponents/UpdateEmployee';

import {getEmployeeList} from '../../API/getEmployeeList';
import {getSortSymbol} from '../../Util/EmployeeListUtil';

import './user-list.css';

export default function (props) {
    const [employees, setEmployees] = useState([]);
    const [sortInfo, setSortInfo] = useState({sortingField: '', sortingMethod: false}); // sortingMethod : 1(Ascending) / 2(Descending)
    const [page, setPage] = useState(1);
    const [action, setAction] = useState('');
    const [actionId, setActionId] = useState('');

    const fetchEmployeesList = () => getEmployeeList().then((res) => setEmployees(res));

    useEffect(() => {
        fetchEmployeesList();
    }, []);

    const sortByField = (fieldName) => {
        console.log('sortMethod', sortInfo.sortingMethod);
        if (sortInfo.sortingMethod) {
            employees.sort((obj1, obj2) => (obj1[fieldName] < obj2[fieldName] ? -1 : 1));
        } else {
            employees.sort((obj1, obj2) => (obj1[fieldName] > obj2[fieldName] ? -1 : 1));
        }
        setSortInfo({
            sortingField: fieldName,
            sortingMethod: !sortInfo.sortingMethod
        });
    };
    const totalPages = (employees && employees.length > 0 && Math.ceil(employees.length / 10)) || 1;
    const pageNumbers = new Array(totalPages).fill('');

    document.title = 'List of Employees';
    return (
        <div className='employee-list'>
            <h2>Employee List</h2>
            <table>
                <thead>
                    <tr>
                        <th onClick={() => sortByField('firstName')} className='clickable'>
                            First Name {getSortSymbol('firstName', sortInfo)}
                        </th>
                        <th onClick={() => sortByField('lastName')} className='clickable'>
                            Last Name {getSortSymbol('lastName', sortInfo)}
                        </th>
                        <th onClick={() => sortByField('gender')} className='clickable'>
                            Gender {getSortSymbol('gender', sortInfo)}
                        </th>
                        <th onClick={() => sortByField('age')} className='clickable'>
                            Age {getSortSymbol('age', sortInfo)}
                        </th>
                        <th onClick={() => sortByField('joinedDate')} className='clickable'>
                            Joined Date {getSortSymbol('joinedDate', sortInfo)}
                        </th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {employees &&
                        employees.slice((page - 1) * 10, page * 10).map((employee) => {
                            return (
                                <tr key={employee.empId}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.gender}</td>
                                    <td>{employee.age}</td>
                                    <td>{employee.joinedDate}</td>
                                    <td>
                                        <EmployeeActions
                                            empId={employee.empId}
                                            setAction={setAction}
                                            setActionId={setActionId}
                                            fetchEmployeesList={fetchEmployeesList}
                                        />
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
            <div className='paging display'>
                <div>
                    <button onClick={() => (window.location = '/employee/new')}>
                        Add new employee
                    </button>
                </div>
                <div>
                    Page:
                    {pageNumbers.map((num, indx) => {
                        return page === indx + 1 ? (
                            <span key={indx} className='mx-2'>
                                {indx + 1}
                            </span>
                        ) : (
                            <span
                                key={indx}
                                className='mx-2 clickable underline'
                                onClick={() => setPage(indx + 1)}>
                                [{indx + 1}]
                            </span>
                        );
                    })}
                </div>
            </div>

            {action === 'view' && (
                <EmployeeDetails employees={employees} empId={actionId} setAction={setAction} />
            )}
            {action === 'update' && (
                <UpdateEmployee
                    employees={employees}
                    empId={actionId}
                    setAction={setAction}
                    fetchEmployeesList={fetchEmployeesList}
                />
            )}
        </div>
    );
}
