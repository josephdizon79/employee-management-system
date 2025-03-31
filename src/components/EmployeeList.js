import React from 'react';
import './EmployeeForm.css';

function EmployeeList() {
  const savedEmployees = localStorage.getItem('employees');
  const employees = savedEmployees ? JSON.parse(savedEmployees) : [];

  return (
    <div className="employee-list">
      <h1>Employee List</h1>
      <ul>
        {employees.length === 0 ? (
          <li>No employees found.</li>
        ) : (
          employees.map((employee, index) => (
            <li key={index}>
              <strong>{employee.name}</strong> – {employee.title}, {employee.department} ({employee.email})
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default EmployeeList;
