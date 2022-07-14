var getNextPrimeNumber = (function () {
	"use strict";
	function isPrime(n){
		for(var i = 2; i<= Math.sqrt(n); i++) {
			if(n % i === 0){
				return false}
		}
		return true;
		var currentPrimeNumber = 2;
		return function () {
			while(!isPrime(currentPrimeNumber)){
				currentPrimeNumber++}
			return currentPrimeNumeber++;}}})
console.log(getNextPrimeNumber())
