function stringChop(str, size) {
  // your code here
	if(!str) return []
	let chunks = []
	for(let i = 0; i<=str.length; i=i+size){
		let substr = str.slice(i, i+size)
		chunk.push(substr)
	}
	return chunks;
}

console.log(stringChop("Hello world!", 5));

// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
// alert(stringChop(str, size));
