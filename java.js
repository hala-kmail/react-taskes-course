function transformToObjects(numberArray) {
    
    const newArray= numberArray.map((e)=>{
        let num={val:e};
        return num;
    });
    
   console.log(newArray) ;
   return newArray;
    
}
const arr=[1, 2, 3,4,5];
transformToObjects(arr);

