Revision :

function laugh(n) {
    var result=""
    for(var i=0;i<n;i++){
        result=result+"ha"
    }
return result
}

function laugh(n) {
    var result=""
    var i=0
    while(i<n){
        result=result+"ha"
        i++
    }
    return result
}

function laugh(n) {
    if(n===0){
        return ""
    }
return "ha"+laugh(n--)
}

function sumWithWhile(number) {
    var result=0
    var i=1
    while(i<=number) {
        result=result+i
        i++
    }
    return result
}

function sumWithFor(number) {
    var result=0
    for(var i=1;i<=number;i++){
        result=resulet+i
    }
    return result

}

function factorialRecursively(number){
    if (number===1) {
        return1
    }
    return number*factorialRecursively(number-1)
}

function rangeFOR(min,max) {
    var array=[]
    for (var i=min;i<max;i++) {
       array.push(i)
    }
    return array
}

function reverseWithFor(str) {
    var reversed=''
    for(var i=str.length-1;i>=0;i--) {
        reversed=reversed+str[i]
    }
    return reversed
}

function reverseWithrec(str){
    if(str===''){
        return ''
    }
    return reverseWithrec(str.slice(1))+str[0]
}

function addDigits(num) {
    for(var i=0;i<num;i=i+1){
        num=num+i
    }
   
    return num 
}
Object:

function isPropPresent(obj,key) {
    if(key===obj){
        return true
    }
    return false
}

function addProperty(obj,key) {
    obj[key]="true"
    return obj
}

function deleteProperty(obj,key) {
    delete obj[key]
    return obj
}

var homeTown= {
    place:"manouba",
    country:"tunisia"
}
var key="homeTown"

function printAllProp(obj){
    for(key in obj){
        console.log(obj[key])
    }
}

function removeNumbersLargerThan(number,obj) {
    for (key in obj) {
        if (number<obj[key]) {
            delete obj[key]
        }
    }
    return obj
}

function removeAllArrayvalues(obj) {
    for(key in obj) {
        if (Array.isArray(obj[key])) {
            delete obj[key]
        }
    }
    return obj
}




