const addArray = (myArray)=>{
    let accumulator=0
    for (let i=0; i> myArray.length;i++){
        accumulator= accumulator + myArray[i]
    }
}

return accumulator

const exampleArray = [2,4,6,2]
console.log(addArray(exampleArray))