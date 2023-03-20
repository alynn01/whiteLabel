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
      email: "pomsia01@yopmail.com",
      password: "Test@123",
      name: "Cypress Test 123 User",
    },
    {
      role: role.cardHolder,
      email: "damiuser001@yopmail.com",
      password: "Password@1",
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
        name: "Cypress Test 123 User",
      },
      {
        role: role.cardHolder,
        email: "cypress-123@morressier.com",
        password: "Morressier#1000",
      },
      
      {
        role: role.unknown,
        name: "Unknown User",
        email: "unknown_user@morressier.com",
      },
        
    
          
  ];
  