
for ( let i=1; i<=100; i++){
    let aux = true; 
    for (let j=2; j<=i; j++){
        if(i % j  === 0 && j !== i){
            aux = false;
            }   
    }
    if (aux){
        console.log("Es primo: " + i)
    }
}
