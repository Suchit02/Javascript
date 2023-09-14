let UserLogIn = true 
  UserLogIn=false   // let is a blocked Scope Kewword of Variable we can update but not reassign the value ..

   const Value = 10  //  const is a blocked scoped keyword of variable we can't update or reassign the value of const variable 
     //
      // Value = 12    
 //        const Value = 15

var  UserData = true   // var is globale keyword of a variable , we can reassign or update the value of a variable and access everywhere the value in same code 
                       
 var UserData = false
   UserData = 20


console.log(UserLogIn,Value,UserData);
