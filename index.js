function standardizeInput (collection){
    if (collection instanceof Array){
    return collection.slice();
    }
    else{
        return Object.values(collection);
    }

}

function myEach (collection, callback){
    let newCollection = standardizeInput(collection);

  for (let i = 0; i < newCollection.length; i++) {
    callback(newCollection[i]);
  }

  return collection;

}

function myMap (collection, callback){
    const newCollection = standardizeInput(collection);

    const newArray = [];

    for (let i = 0; i < newCollection.length; i++) {
        newArray.push(callback(newCollection[i]));
    }

  return newArray;

}

function myReduce(collection, callback, acc){
    let newCollection = standardizeInput(collection);

    if (!acc) {
        acc = newCollection[0];
        newCollection = newCollection.slice(1);
      }
    
      const len = newCollection.length;
    
      for (let i = 0; i < len; i++) {
        acc = callback(acc, newCollection[i], newCollection);
      }
      return acc;
    
}

function myFind (collection, predicate){
    const newCollection = standardizeInput(collection);

    for (let i = 0; i < newCollection.length; i++) {
      if (predicate(newCollection[i])) 
      return newCollection[i];
    }

    return undefined;

}

function myFilter (collection, predicate){
    let newCollection = standardizeInput(collection);

    const newArray = [];

    for (let i = 0; i < newCollection.length; i++) {
      if (predicate(newCollection[i])) newArray.push(newCollection[i]);
    }

    return newArray;

}

function mySize (collection){
    let newCollection = standardizeInput(collection);
    return newCollection.length;
}

function myFirst (arr, stop=false){
    if (stop){
        return arr.slice(0, stop);
    }
    else{
        return arr[0];
    }

}
function myLast (arr, start=false){
    if (start){
        return arr.slice(arr.length-start, arr.length);
    }
    else{
        return arr[arr.length-1];
    }

}

function myKeys (object){
    const keys = [];
    for (let key in object){
        keys.push(key);
    }
    return keys;
}

function myValues (object){
    const values = [];
    for (let key in object){
        values.push(object[key]);
    }
    return values;
}