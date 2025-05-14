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