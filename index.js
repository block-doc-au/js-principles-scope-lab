/*

customerName = 'bob';
const leastFavoriteCustomer = `Fred`;


function upperCaseCustomerName(theName){
    let convertedName = (theName.toUpperCase());
       return convertedName;
   
};


function setBestCustomer(theName){
 bestCustomer = 'not bob';
 return bestCustomer;
};

function overwriteBestCustomer(theName){
bestCustomer = theName;
return bestCustomer;
};

function changeLeastFavoriteCustomer(theName){
    leastFavoriteCustomer = theName;
return leastFavoriteCustomer; 
};


// Neil's test for node...

let thisName = upperCaseCustomerName(customerName);
console.log(`Finally... ${thisName}.`);
*/
customerName = 'bob';
const leastFavoriteCustomer = `Fred`;

function setBestCustomer(){
    bestCustomer = 'not bob';
    return bestCustomer;
   };


   function upperCaseCustomerName(){
    //let convertedName = (customerName.toUpperCase());
     //  return convertedName;
       customerName = customerName.toUpperCase();
       return customerName;
   
};

function overwriteBestCustomer(theName){
    bestCustomer = theName;
    return bestCustomer;
    };
    
    function changeLeastFavoriteCustomer(theName){
        leastFavoriteCustomer = theName;
    return leastFavoriteCustomer; 
    };

