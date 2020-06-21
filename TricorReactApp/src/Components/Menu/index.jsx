import React from 'react';

export default function (props) {
    return (
        <div>
            <ul>
                <li>
                    <a href='/employee/new'>
                        <h3>New Employee</h3>
                    </a>
                </li>
                <li>
                    <a href='/employee/list'>
                        <h3>Employee List</h3>
                    </a>
                </li>
            </ul>
        </div>
    );
}
