function fakt(n){
    let res = 1
	for(let i = 2; i <= n; i++){
		res = res * i}
	return res
} 
console.log(fakt(1))
console.log(fakt(0))
console.log(fakt(10))
