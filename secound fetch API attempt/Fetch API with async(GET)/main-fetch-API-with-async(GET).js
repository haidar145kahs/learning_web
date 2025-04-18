const btnEl = document.getElementById('getUsers');
//const  clickHandler=()=> {
    // 1.0 the normal way to use fetchAPI
      // fetch('https://reqres.in/api/users')
      //   .then(res => res.json())
      //   .then(data=>console.log(data.data[3].first_name))
      //   .catch(err=> alert('Error fetching data'))
    
    //}
    // 2.0 the async/await way to use fetchAPI
      //2.1 the assintial deferance is we must use async in the function whene we use await  
      const  clickHandler= async ()=> {
        // 2.2 imagen there is a promise after any await 
        try{
          //2.3try and catch is the await mithod for error handling
          const res = await fetch('https://reqres.in/api/users');
          const data = await res.json();
          /* 2.4 if the requist sicile steel completed whene we try to get the data from sorce isn't exist the (ok) proprty will be false and then we need to use if statement and use return to stop the lodaing from the sorce*/
          // if(!res.ok){
          //   alert(data.description);
          //   return;
          // }
          console.log(data.data[3].first_name)
        }
        //2.5 if the promises rejected we transfare from try block to catch block and run what is in it
        catch(err){
          //2.6 note:: we can't get the data description in the catch block because the data is not defined in the catch block 
          //alert(data.description)
          //2.7 note:: we can get the error message from the err object
          alert(err.message)
        }
      
    
    
      }
btnEl.addEventListener('click',clickHandler);

