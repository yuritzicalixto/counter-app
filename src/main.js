function solution(year){
    if(year%100===0){
        return year /100;
    } else{
        return Math.floor(year/100)+1
    }
    
}

// solution(2000)

console.log(solution(2024));
