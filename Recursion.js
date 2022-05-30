function add(number){
    if(number<=0){
        return 0;
    }
    else{
        return number+add(number-1)  // in return type this function is call again but with a condition
    }
}

var result = add(3);
console.log(result);