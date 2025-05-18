//Conditional-function-variables || Material
//*****************************  1  *********************** 
var carName = "Volvo"
//*****************************  2  ***********************
var length = 16               // number
var lastName = "Johnson"     // string
var scores = [20, 12, 15, 14, 20, 10, 2] // array
var person = {
  firstName: "John",
  lastName: "Doe"
};                             // object
var isGreaterThan10 = length > 10; // boolean
//*****************************  3  ***********************
function square1(x) {
  return x * x
}

function square2(x) {
  return x * x
}

function square3(x) {
  return x * x
}
//*****************************  4  ***********************
function largest(a, b) {
  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
}
//*****************************  5  ***********************
function add(number1, number2) {
  return number1 + number2;
}
//*****************************  6  ***********************
function subtract(number1, number2) {
  return number1 - number2;
}
//*****************************  7  ***********************
var operator = '+'
var num1 = 4
var num2 = 2

if (operator === '+') {
  console.log(add(num1, num2))
} else {
  console.log(subtract(num1, num2))
}
//*****************************  8  ***********************
function divide(number1, number2) {
  return number1 / number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}
//*****************************  9  ***********************
var operator = '*'
var number1 = 6
var number2 = 2

if (operator === '+') {
  console.log(add(number1, number2))
} else if (operator === '-') {
  console.log(subtract(number1, number2))
} else if (operator === '/') {
  console.log(divide(number1, number2))
} else if (operator === '*') {
  console.log(multiply(number1, number2))
} else {
  console.log("Sorry, we don't know this operator")
}
//*****************************  10  ***********************
function calculate(operator, number1, number2) {
  if (operator === '+') {
    return add(number1, number2);
  } else if (operator === '-') {
    return subtract(number1, number2);
  } else if (operator === '/') {
    return divide(number1, number2);
  } else if (operator === '*') {
    return multiply(number1, number2);
  } else {
    return "Unknown operator";
  }
}
//*****************************  12  ***********************
function capitalize(food) {
  return food.charAt(0).toUpperCase() + food.slice(1);
}
//*****************************  15  ***********************
function parity(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
//*****************************  17  ***********************
function removeCharacter(string, position) {
  return string.slice(0, position) + string.slice(position + 1);
}
//*****************************  19  ***********************
function lastDigit(n1, n2, n3) {
  return (n1 % 10 === n2 % 10) && (n2 % 10 === n3 % 10);
}
//While&For loops, Recursion || Material
/*****************************  4  ***********************/
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
function laughRecursively(n) {
  if (number <= 0) return "";
  return "ha" + laughRecursively(number - 1)
}
/*****************************  5  ***********************/
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
/*****************************  6  ***********************/
function factorialRecursively(number){
    if (number===1) {
        return1
    }
    return number*factorialRecursively(number-1)
}
/*****************************  7  ***********************/
function rangeFOR(min,max) {
    var array=[]
    for (var i=min;i<max;i++) {
       array.push(i)
    }
    return array
}
function rangeWhile(min, max) {
  let arr = [];
  while (min < max) {
    arr.push(min);
    min++;
  }
  return arr;
}
/*****************************  8  ***********************/
function reverseWithWhile(str) {
  var reversed = ""
  var i = str.length - 1
  while (i >= 0) {
    reversed += str[i]
    i--
  }
  return reversed
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
/*****************************  9  ***********************/
function addDigits(num) {
    for(var i=0;i<num;i=i+1){
        num=num+i
    }
   
    return num 
}
/*****************************  10  ***********************/
function fibRecursive(number) {
  if (number === 0 || number === 1) return 1;
  return fibRecursive(number - 1) + fibRecursive(number - 2)
}
//Student management system || Material
var numberOfStudents=0
function addStudent() {
    numberOfStudents=numberOfStudents+1
    return numberOfStudents
}

function getNumberOfStudents(){
    return numberOfStudents=numberOfStudents+1
}

var student=[]
function addStudent(name) {
    student.push(name)
    numberOfStudents=numberOfStudents+1
    return student
}

function clearStudents(){
    for (var i=0;i<=numberOfStudents;i++){
        student.shift()
    }

}

function addStudent(name) {
    for (var i=0;i<=numberOfStudents;i++){
    student.push(name)
    numberOfStudents=numberOfStudents+1
    return student
}
}

function createFullName(firstName,lastName){
    return firstName + " " +lastName
}

addStudent(createFullName("maryem","jbely"))

function getStudentByInitials(name,character) {
    if (name[0].toUpperCase()===character.toUpperCase()){
        return true
    }
return false  
} 

function isFullName(name){
    var word=name.split(" ")
if (word.length>1){
    return true
}
return false
}

function getStudentsByInitialS(character){
var arr=[]
for(var i=0;i<arr.length;i++){
    if(student[0][i]===character){
        
    }
}
//Data Modeling with Closures
//More practice:
function makeStore() {
    const books = generateBooks(10)
     
    function displayBook(book, i) {
        return `${i + 1}. ${book.title}, by ${book.author} / CATEGORY: ${book.category} / PRICE: ${book.price} / ID: ${book.id}`
    }

    function displayBooks(bookArray) {
        
    }

    function isMatch(book, query) {
        var s = (book.title + book.author + book.category).toLowerCase()
        return s.indexOf(query.toLowerCase()) >= 0
    }

    return {
        display(n) {
            var selectedBooks = books.slice(0, n);
            console.log(displayBooks(selectedBooks))
        },

        search(query) {
            var results = books.filter(book => isMatch(book, query))
            console.log(displayBooks(results))
        },

        getBook(id) {
            return books.find(book => book.id === id)
        },

        removeBook(id) {
            var index = books.findIndex(book => book.id === id);
            if (index !== -1) books.splice(index, 1)
        },

        getBooks() {
            return books
        }
    };
}

var bookStore = makeStore()

function makeCart() {
    var cart = [];

    function displayCartBook(book, i) {
        return `${i + 1}. ${book.title} / PRICE: ${book.price} / ID: ${book.id}`
    }

    return {
        addBook(book) {
            cart.push(book)
        },

        display() {
            var cartList = cart.map(displayCartBook).join('\n');
            console.log(cartList);
        },

        removeBook(id) {
            var index = cart.findIndex(book => book.id === id);
            if (index !== -1) cart.splice(index, 1)
        },

        total() {
            return cart.reduce((sum, book) => sum + book.price, 0);
        },

        checkout(store) {
            cart.forEach(book => store.removeBook(book.id));
            const purchasedBooks = cart.slice()
            cart.length = 0
            return purchasedBooks
        }
    };
}

var cart = makeCart()
//High order Functions 
function addOne(array){
    return map(array,function (element){
        return element+1
    })
        
}
function removeEveryOther(array) {
      return filter(array,function(element,index){
          return index%2===0
      })
  }
  function doubleAll(nums) {
     return map(nums,function (element){
         return element*2
     })
 }
 function squareAll(nums) {
    return map(nums,function (element){
         return element*element
     })
 }
 function stringLengths(array) {
    return map(array,function(element){
        return element.length
    })
}
function odds(nums){
    return filter(nums,function (element) {
        return element%2!==0
    })
}
function positives(nums) {
     return filter(nums,function (element) {
         return element>0
         
     })
 }
 function negatives(nums) {
     return filter(nums,function (element) {
         return element<0
         
     })
  }
  function evenLength(nums) {
  return filter(nums,function (elemnt) {
      return elemnt.length%2===0
  })
  }
  function map2(arr1, arr2, callback) {
    var acc=[]
    each (arr1,function(element,i){
        acc.push(callback(element,arr2[i]))
    })
    return acc
}
function gradeHigherEqual(array){
    return filter (array,function (element) {
        return element.grade>=90
    })
}
function allNames(array){
    return map(array,function (element) {
        return element.name
    })
}
function level(array) {
    return filter(array,function (element) {
        return element.level==="A+"
    })
    
}
function allGrades(array){
  return map(array,function(element,key){
    return element.grade
  })
}

function maxGrade(array){
  var max=array[0]
  return filter(array,function(element,key){
      
  })
}
function productList(array){
  return map(array, function(product){
    return product.productName
  })
}


function electronicProducts(array){
  var electronicsArray = filter(array, function(element){
    return element.productCategory==="Electronics"
  })
  return productList(electronicsArray)
}


function totalToPay (array){
  return reduce(array,function(total, element){
    return total+(element.productQuantity*element.productPrice)
  },0)
}


function productYouCanbuy(amount,array){
  return filter(array, function(element){
    return amount>=element.productPrice
  })
}

function listNames(array){
  var usersName=map(array,function(element,index){
    return element.name
  })
 return usersName.sort()
}

function filterByGender(array,gender){
  return filter(array,function(element,index){
    return element.gender===gender
  })
}

function mostCommonHobby (array){
   for (var i=0;i<array.length;i++){
    var rep=reduce(array, function(a,b){
      return a=a+b
    }, 0) 
   }
}



Object :
function addFullNameProperty(object){
    return object.fullName = object.firstName + " " + object.lastName
}

function addArrayProperty(object, key, array) {
 return object[key] = array;
}

function sortDrinkByPrice(drinks){
    return sort(drinks)
    return map(drinks,function(element){
        return element.name
    })

}