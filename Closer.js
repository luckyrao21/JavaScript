function parent(){

    var obj={name:"varsha"}; // Property of parent function

    return function(){     // Inner function (Child function)
        console.log("hello "+ obj.name)  // code of child function
    }


}

var intializeClosure= parent(); // CHild function came in this variable cause its return a child function
intializeClosure();