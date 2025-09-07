let employees = JSON.parse(localStorage.getItem("employees")) || [];
const form = document.getElementById("employeeForm");
const tableBody = document.getElementById("employeeTableBody");
const searchInput = document.getElementById("searchInput");

// Function to display employees
function displayEmployees(empList) {
    tableBody.innerHTML = "";
    empList.forEach((emp, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td data-label="ID">${index + 1}</td>
            <td data-label="Name">${emp.name}</td>
            <td data-label="Email">${emp.email}</td>
            <td data-label="Department">${emp.department}</td>
            <td data-label="Position">${emp.position}</td>
            <td data-label="Salary">${emp.salary}</td>
            <td data-label="Actions">
                <button class="delete-btn" onclick="deleteEmployee(${index})">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Add Employee
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const employee = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        position: document.getElementById("position").value,
        department: document.getElementById("department").value,
        salary: document.getElementById("salary").value
    };

    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));
    displayEmployees(employees);
    form.reset();
});

// Delete Employee
function deleteEmployee(index) {
    employees.splice(index, 1);
    localStorage.setItem("employees", JSON.stringify(employees));
    displayEmployees(employees);
}

// Search Employees
searchInput.addEventListener("input", function() {
    const term = searchInput.value.toLowerCase();
    const filtered = employees.filter(emp => 
        emp.name.toLowerCase().includes(term) ||
        emp.department.toLowerCase().includes(term) ||
        emp.position.toLowerCase().includes(term)
    );
    displayEmployees(filtered);
});

// Initial display
displayEmployees(employees);