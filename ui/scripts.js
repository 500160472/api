




























// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://iopewq.eu.auth0.com/oauth/token",
//     "method": "POST",
//     "headers": {
//       "content-type": "application/json"
//     },
//     "data": "{\"client_id\":\"11zYN4tBPcZ2nhs46LimSIQaghPzvn4b\",\"client_secret\":\"wqgUdT7z5uE9nbW4Fi_eu7bcoFWdPAnzvgdG6nz8e_hw_jBhh7_N95DrVEVcLvJA\",\"audience\":\"https://iopewq.uk/api\",\"grant_type\":\"client_credentials\"}"
//   }
  
//   $.ajax(settings).done(function (response) {
//     console.log(response);
//   });




//   var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "http://iopewq2.com:5000/users",
//     "method": "GET",
//     "headers": {
//       "authorization": "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InY2RUJsOFRXaU1FeElyRjNfMlVWSSJ9.eyJpc3MiOiJodHRwczovL2lvcGV3cS5ldS5hdXRoMC5jb20vIiwic3ViIjoiMTF6WU40dEJQY1oybmhzNDZMaW1TSVFhZ2hQenZuNGJAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vaW9wZXdxLnVrL2FwaSIsImlhdCI6MTYxNjk2OTQwOCwiZXhwIjoxNjE3MDU1ODA4LCJhenAiOiIxMXpZTjR0QlBjWjJuaHM0NkxpbVNJUWFnaFB6dm40YiIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.lMY78tdcNNuOqmkOct91CeuHJx_SMa1Q2AfNQ2W5AsSDDHIuhjfCmXg8xN44oyl-Jv-7P9oozZDFsw7ezdf4psODwW-315u1pj06o9c2HTigLMTV94T4_s36m1BUCuKsFAz7JprvqHclIhllI6yHWLetN0a2VK9m8shn490FkaNv8qCixduEOXBgT2xpAATLKHTl8GXD-Zho-gCX2o4vsiemHfYrCSQZqnsAo2yAkLhb2A2cl02KqBaaH4U5Nbz-LFmliUrkgzFut5FqNqlMncvnIQEF8pgpfz52VklBJ0xMMN5po4uXKR5yC5kyfKZFP8tlku4BClWJNT_F-mz3RA"
//     }
//   }
  
//   $.ajax(settings).done(function (response) {
//     console.log(response);
//   });



const api_url = 
      "http://localhost:5000/users";
    //   "http://161.97.123.112:49160/users";
  
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url, {
        origin: '*',
        method: 'GET',
        // headers: { authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InY2RUJsOFRXaU1FeElyRjNfMlVWSSJ9.eyJpc3MiOiJodHRwczovL2lvcGV3cS5ldS5hdXRoMC5jb20vIiwic3ViIjoiN1VjZndOcGN2TkxZejdnU09iT0V3N2RrMlM3WGpzT0ZAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vaW9wZXdxLmV1LmF1dGgwLmNvbS9hcGkvdjIvIiwiaWF0IjoxNjE2OTU5NDA4LCJleHAiOjE2MTcwNDU4MDgsImF6cCI6IjdVY2Z3TnBjdk5MWXo3Z1NPYk9FdzdkazJTN1hqc09GIiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.CKZUWO9iTCyhYzIKaIVr9iKhcALTl3LNpwKlgXHHZRtw7ujUrd7L87mrequhbpSW0HPc0iP9RdY2KyLt3VI7TAmR1sfKVBGegaMYsWCb2hs15K2K24dOMK2pK5_REbpRbMnoQH0wk6P3m39L6pAweKGYU-nZfmuEvfW8Vt0ygx5ahrmB-ZBygYl-HpVgheHoJM9la6mzCMtzwZZbaYyAVQmf7JStfxifY23jmddKWEEmbYNC-zOneZN7nzXSjwwuhchx7ND8zMTFqAQia6iFZyNp_H1VscHP-CXNJDfQbne3JgmC2FolPN1wrkQ7A8oBVhSDQ5Jl2UTv6s4TapO1UQ' }
    });
    
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
          <th>Personal Phone</th>
          <th>Personal E-mail</th>
          </tr>`;
    
    // Loop to access all rows 
    for (let r of data) {
        tab += `<tr> 
    <td>${r.firstName}</td>
    <td>${r.lastName}</td>
    <td>${r.age}</td> 
    <td>${r.emoji}</td>          
    <td>${r.contactInformation.personalMobile}</td>          
    <td>${r.contactInformation.personalEmail}</td>   
    <td>${r.currentAddress.streetName}</td>          
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("users").innerHTML = tab;
}