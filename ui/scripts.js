// api url
const api_url = 
      "http://localhost:5000/users";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);
  
// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab = 
        `<tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Emoji</th>
         </tr>`;
    
    // Loop to access all rows 
    for (let r of data) {
        tab += `<tr> 
    <td>${r.firstName} </td>
    <td>${r.lastName}</td>
    <td>${r.age}</td> 
    <td>${r.emoji}</td>          
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("users").innerHTML = tab;
}