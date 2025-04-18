const newUser = {
  name:'cabhero',
  job: 'taxi driver'
}
// 1.0 the essential deferance is we need to pass the second argument as an object
fetch('https://reqres.in/api/users',{
  // 1.1 and in this object we need to pass the method as POST (the defult is GET)
  method: 'POST',
  // 1.2 and in this object we need to let the server know what the data format will be with the headers
  headers: {
    // 1.3 the proparty name is Content-Type and the value is application/json eclare as a json format 
    'Content-Type': 'application/json'
    // 1.4 and in the body  the actual data that we want to send to the server(submit) and it is the 
  },
  //1.5 (json.stringify) is a method that converts a javascript object to a json string(the languges the computers talks) 
  body: JSON.stringify(newUser)



})
.then(response => {
  if(!response.ok){
    console.log('Error');
    return; 

  }
  return response.json()
})
.then(data => {
  console.log('Successfully created user')
})
.catch(error=>{
  console.log(error)
})

