import React, {useState} from 'react';

export default function (props) {
    const [firstName, setFirstName] = useState((props.employee && props.employee.firstName) || '');
    const [lastName, setLastName] = useState((props.employee && props.employee.lastName) || '');
    const [gender, setGender] = useState((props.employee && props.employee.gender) || 'Male');
    const [age, setAge] = useState((props.employee && props.employee.age) || '');
    const [joinedDate, setJoinedDate] = useState(
        (props.employee && props.employee.joinedDate) || ''
    );

    const {onSubmit, submitLabel, displayViewButton} = props;

    const updatedEmpData = {
        firstName,
        lastName,
        gender,
        age,
        joinedDate
    };

    return (
        <form>
            <div className='row'>
                <label className='w-150'>First Name</label>
                <input
                    type='text'
                    id='firstName'
                    name='firstName'
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                />
            </div>

            <div className='row'>
                <label className='w-150'>Last Name</label>
                <input
                    type='text'
                    id='lastName'
                    name='lastName'
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                />
            </div>
            <div className='row'>
                <label className='w-150'>Gender</label>
                <input
                    type='radio'
                    id='gender'
                    name='gender'
                    value='Male'
                    onClick={() => setGender('Male')}
                    checked={gender === 'Male' ? 'checked' : ''}
                />
                Male
                <input
                    type='radio'
                    id='female'
                    name='gender'
                    value='Female'
                    onClick={() => setGender('Female')}
                    checked={gender === 'Female' ? 'checked' : ''}
                />
                Female
            </div>
            <div className='row'>
                <label className='w-150'>Age</label>
                <input
                    id='age'
                    name='age'
                    type='number'
                    value={age}
                    onChange={(event) => setAge(event.target.valueAsNumber)}
                />
            </div>
            <div className='row'>
                <label className='w-150'>Joined Date</label>
                <input
                    id='joinedDate'
                    name='joinedDate'
                    type='date'
                    value={joinedDate}
                    onChange={(event) => setJoinedDate(event.target.value)}
                />
            </div>
            <br />

            <input
                className='ml-150'
                type='button'
                onClick={() => onSubmit(updatedEmpData)}
                value={submitLabel || 'Submit'}
            />

            {displayViewButton && (
                <input
                    className='ml-10'
                    type='button'
                    onClick={() => (window.location = '/employee/list')}
                    value='View Employee List'
                />
            )}
        </form>
    );
}
