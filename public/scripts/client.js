//Global Variables to store the index of each row and the starting Monthly total.
let currentIndex = 1;
let totalMonthly = 0;

// Create an empty array for temp data
const totalSalary = [];


//Form submission function
function addEmp(event) {
    event.preventDefault();
    //console.log('test');


    // Add The employee Data to the page
    let employeeTable = document.querySelector('#employeeData');
    let firstVal = document.querySelector('#firstNameInput').value;
    let lastVal = document.querySelector('#lastNameInput').value;
    let idVal = document.querySelector('#idInput').value;
    let titleVal = document.querySelector('#titleInput').value;
    let salaryVal = document.querySelector('#annualSalaryInput').value;
    let totalIncomeMonthly = document.querySelector('#total_monthly').value;
    var form = document.getElementById("myForm");

       employeeTable.innerHTML += `
            <tr>
                <td>${firstVal}</td>
                <td>${lastVal}</td>
                <td>${idVal}</td>
                <td>${titleVal}</td>
                <td>$${salaryVal}</td>
                <td><button onclick="this.closest('tr').remove()">Delete</button></td>
            </tr>
        `;
        currentIndex += 1;

        console.log(`Current Index: ${currentIndex}`)
        form.reset();

        //take total salary from first index divide by 12 and return
       //as next salary at new index is added, add two togther and return
       //loop through data in table via index

}

