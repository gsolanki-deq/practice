var technologies = [];
var employeeData = [];
var index;
function validateForm() {
  var empName = document.getElementById("emp_name").value;
  if (empName == "") {
    alert("Employee name required!");
    return false
  }
  var email = document.getElementById("email").value;
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (email == "") {
    alert("Email Address required");
    return false
  } else if (!reg.test(email)) {
    alert("Invalid Email Address");
    return false
  }
  var contact = document.getElementById("contact").value;
  if (contact == "") {
    alert("Enter contact Details");
    return false
  } else if (contact.length != 10) {
    alert("Enter Valid Phone Number");
    return false
  }
  if (document.getElementById('male').checked) {
    var gender = document.getElementById('male').value;
  } else if (document.getElementById('female').checked) {
    var gender = document.getElementById('female').value;
  }
  var e = document.getElementById("department");
  var department = e.options[e.selectedIndex].value;
  if (document.getElementById("react").checked) {
    technologies.push(document.getElementById("react").value);
  }
  if (document.getElementById("node").checked) {
    technologies.push(document.getElementById("node").value);
  }
  if (document.getElementById("ruby").checked) {
    technologies.push(document.getElementById("ruby").value);
  }
  if (document.getElementById("photoshop").checked) {
    technologies.push(document.getElementById("photoshop").value);
  }
  if (document.getElementById("excel").checked) {
    technologies.push(document.getElementById("excel").value);
  }
  if (technologies.length == 0) {
    alert("Select atleast one Technology");
    return false
  }
  employeeData.push({
    emp: empName,
    empEmail: email,
    empContact: contact,
    empGender: gender,
    empDepartment: department,
    empTechnologies: technologies
  })
  employeeDetails();
}

function employeeDetails() {
  var html = "<table border='1' align='center'>";
  html += "<tr><th>NAME</th><th>EMAIL</th><th>CONTACT</th><th>GENDER</th><th>DEPARTMENT</th><th>TECHNOLOGY</th><th>EDIT</th><th>DELETE</th></tr>";
  for (var i = 0; i < employeeData.length; i++) {
    html += "<tr>";
    html += "<td>" + employeeData[i].emp + "</td>";
    html += "<td>" + employeeData[i].empEmail + "</td>";
    html += "<td>" + employeeData[i].empContact + "</td>";
    html += "<td>" + employeeData[i].empGender + "</td>";
    html += "<td>" + employeeData[i].empDepartment + "</td>";
    html += "<td>" + employeeData[i].empTechnologies + "</td>";
    html += "<td><form><input type= 'button' value='Edit' onclick=editForm(" + i + ")></form></td>";
    html += "<td><form><input type= 'button' value='Delete' onclick=deleteEntry(" + i + ")></form></td>";
    html += "</tr>";

  }
  html += "</table>";
  document.getElementById('employeeDetails').innerHTML = html;
}

function deleteEntry(i) {
  employeeData.splice(i, 1)
  employeeDetails();
}

function editForm(i) {
  document.getElementById('emp_name').value = employeeData[i].emp;
  document.getElementById('email').value = employeeData[i].empEmail;
  document.getElementById('contact').value = employeeData[i].empContact
  document.getElementById('department').value = employeeData[i].empDepartment
  index = i;
}

function updateForm() {
  employeeData[index].emp = document.getElementById('emp_name').value;
  employeeData[index].empEmail = document.getElementById('email').value;
  employeeData[index].empContact = document.getElementById('contact').value;
  employeeData[index].empDepartment = document.getElementById('department').value;
  employeeDetails();
}
