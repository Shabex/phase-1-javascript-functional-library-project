const standardizeInput = function(collection) {
    return (collection instanceof Array) ? collection.slice() : Object.values(collection);
  }

function myEach(collection, callback) {
    const newCollection = standardizeInput(collection)

    for (let i=0; i<newCollection.length; i++){
        callback(newCollection[i])
    }
    return collection
}

function myMap(collection, callback) {
    const newCollection= standardizeInput(collection);
    const newArr = [];

    for (let i=0; i<newCollection.length; i++){
        newArr.push(callback(newCollection[i]));
    }

    return newArr;
}

function myReduce(collection, callback, acc) {
    let newCollection = standardizeInput(collection);

    if(!acc){
        acc=newCollection[0];
        newCollection = newCollection.slice(1);
    }
    const len = newCollection.length;

    for(let i=0; i<len; i++){
        acc = callback(acc, newCollection[i], newCollection)
    }
    return acc;
}

function myFind(collection, predicate) {
    const newCollection = standardizeInput(collection);

    for (let i=0; i<newCollection.length; i++){
        if (predicate(newCollection[i])) return newCollection[i]
    }
    return undefined;
}

function myFilter(collection, predicate) {
    const newCollection = standardizeInput(collection);

    const newArr = []

    for(let i=0; i<newCollection.length; i++){
        if (predicate(newCollection[i])) newArr.push(newCollection[i]);
    }
    return newArr;
}

function mySize(collection) {
    const newCollection = standardizeInput(collection);
    return newCollection.length
}

function myFirst(arr, stop=false){
   return(stop) ? arr.slice(0, stop) : arr[0];
}

function myLast(arr, start=false) {
    return (start) ? arr.slice(arr.length-start, arr.length) : arr[arr.length-1];
}

function myKeys(object) {
    const keys = [];
    for(let key in object){
        keys.push(key)

    }
    return keys;
}

function myValues(object){
    const values = [];
    for (let key in object){
        values.push(object[key]);
    }
    return values;
}