const btnEl = document.getElementById('getUsers');
//1.0 if we need to sent the newUser bject we must use POST method
const newUser = {
  name : 'john',
  job : 'carpenter'
}
      const  clickHandler= async ()=> { 
        try{
          const res = await fetch('https://reqres.in/api/users',
            //2.0 we need a secound arrgument s an object contane the method and we want to let the server know what the data will be so the second arrgument is the headers  
            {
              method : 'POST',
              headers : {
                'Content-Type' : 'application/json'
              },
              //3.0 the body is the data that we want to send to the server
              //3.1 we need to convert the newUser object to a JSON format(string) because the body need a string
              body : JSON.stringify(newUser)
            }
          );
          const data = await res.json();
          console.log(data)
        }
        catch(err){
          alert(err.message)
        }
      }
btnEl.addEventListener('click',clickHandler);

/*the PUT method is used to update the data and the second arrgument is the same as the POST method and the body is the data that we want to update and in my example i want to update the user with any user is exist in the server*/

/*the DELETE method is used to delete the data and we can remove the body and the headers(the second arrgument is just the method DELETE */ 
