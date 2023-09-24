function threeSum(arr, target) {
// write your code here
	let n = arr.length;
	let sum = Infinity;
	for(let i=0; i<n-2; i++){
		let t = arr[i] + arr[i+1] + arr[i+2];
		if(Math.abs(t-target) < sum){
			sum = t
		}
	}
	return sum;
}

module.exports = threeSum;
