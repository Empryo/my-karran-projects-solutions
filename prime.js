 function primeFactors(num){
	 function isPrime(num){
		 for(let i = 2; i < Math.sqrt(num); i++){
		 if(num % i === 0) return false;}
		 return true
	 } 
	 const result = [];
	 for( let i = 2; i < num; i++)
	 { while( isPrime(i) && num % i === 0)
		 {if (!result.includes(i)) result.push(i)
			 num /= i;
		 } }
	 return result;}
  console.log(primeFactors(100))
