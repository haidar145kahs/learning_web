// 1.0 fetch('https://reqres.in/api/users') is a function that returns a promise 

fetch('https://reqres.in/api/users')
.then(response => {
  // 2.0 the data comes in json format and we can't use it directly
  // 2.1 so we need to convert it to a javascript object by using the (.json()) method
  if(!response.ok){
    console.log('Error');
    return; 
    // 2.2 if the response is not ok, we return and the function will stop here and we can throw an error
    //2.3 thats called (GUARD CLAUSE)
  }
  return response.json()
})
// 3.0 and in here the full data in javascript object
.then(data => {
  console.log(data.data[2].first_name)
})
.catch(error=>{
  console.log(error)
})

