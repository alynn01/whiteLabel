export const role = {
    programOwner: "programOwner",
    cardHolder: "cardHolder",
    admin: "admin",
    unknown: "unknown"
  };
  
  export const registrationStatus = {
    finished: "unverified",
    ongoing: "pending",
    future: "verified",
  };
  
  export const stagingUsers = [
    {
      role: role.programOwner,
      email: "amatest@yopmail.com",
      password: "P@$sw0rd",
      url: "https://stagingcompanyadmin-safex.essolo.com/",
      
    },
    {
      role: role.cardHolder,
      email: "autouser@qa.team",
      password: "P@$sw0rd",
    },
    
    {
      role: role.unknown,
      name: "Unknown User",
      email: "unknown_user@morressier.com",
    },
    
  
  ];
  
  export const productionUsers = [
    
    {
        role: role.programOwner,
        email: "damiuser001@yopmail.com",
        password: "Password@1",
        name: "",
      },
      {
        role: role.cardHolder,
        email: "",
        password: "",
      },
      
      {
        role: role.unknown,
        name: "Unknown User",
        email: "unknown_user@morressier.com",
      },
        
    
          
  ];
  