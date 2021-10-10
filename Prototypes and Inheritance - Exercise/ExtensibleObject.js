function extensibleObject() { 
    
} 
const myObj = extensibleObject(); 
     
const template = { 
extensionMethod: function () {}, 
    extensionProperty: 'someString' 
} 
myObj.extend(template); 
    