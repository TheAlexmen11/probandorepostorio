let array = [1,2,3,4,5,6,7,8,9];

const  fnFlecha = (array)=>{
    sum=0;
    array.forEach(element => {
        sum+=element;
    });
    console.log(sum);
}

fnFlecha(array);