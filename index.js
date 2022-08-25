function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name, 
            email
          }),

    })
    .then(function (response) {
        return response.json();
      })
      .then(function (object) {
        return object;
      })
      .catch(error => {document.body.innerHTML = `Error: ${error}`;
        console.error('Unauthorised Access', error);
    });
}
submitData()




  
//  let data = fetch("http://localhost:3000/users")
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (user) {
//       return data
//     });

  
//   //const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//     body: JSON.stringify(submitData),
//   };
  
//   fetch("http://localhost:3000/users", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     });
