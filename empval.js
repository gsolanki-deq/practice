var technologies = [];
var employeeData = [];
function validate_form() {
  var empName = document.getElementById("emp_name").value;
  if (empName == "") {
    alert("Employee name required!");
    return false
  }
  var email = document.getElementById("email").value;
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if ( email == "" ) {
    alert("Email Address required");
    return false
  } 
  else if( !reg.test(email) ){
    alert("Invalid Email Address");
    return false
  }
  var contact = document.getElementById("contact").value;
  if(contact == ""){
    alert("Enter contact Details");
    return false
  } 
  else if (contact.length != 10) {
    alert("Enter Valid Phone Number");
    return false
  }
  if (document.getElementById('male').checked) {
    var gender = document.getElementById('male').value;
  } 
  else if (document.getElementById('female').checked) {
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
  if(technologies.length == 0){
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
  var html = "<table border='1' align='center'>";
      html+="<tr><th>NAME</th><th>EMAIL</th><th>CONTACT</th><th>GENDER</th><th>DEPARTMENT</th><th>TECHNOLOGY</th></tr>";
    for (var i = 0; i < employeeData.length; i++) {
        html+="<tr>";
        html+="<td>"+employeeData[i].emp+"</td>";
        html+="<td>"+employeeData[i].empEmail+"</td>";
        html+="<td>"+employeeData[i].empContact+"</td>";
        html+="<td>"+employeeData[i].empGender+"</td>";
        html+="<td>"+employeeData[i].empDepartment+"</td>";
        html+="<td>"+employeeData[i].empTechnologies+"</td>";
        
        html+="</tr>";

    }
    html+="</table>";
    document.getElementById('employeeDetails').innerHTML = html;
  
}
