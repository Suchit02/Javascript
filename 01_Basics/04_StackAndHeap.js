// expmple of a Stack memory 
let ProfileName= "React-js";

 let UpdateProfile=ProfileName;
     UpdateProfile="Javadevloper"

 console.log(ProfileName,UpdateProfile);

// now we can see Heap Memory Concept 

  let UserData =
  {
     email : "sdk@451",
     phone: 45125
  }

  let UserData2 =UserData;

 // console.log(UserData)
 // console.log(UserData2);
      UserData2.email="sdk@4555"
      
  console.log(UserData)
 console.log(UserData2);