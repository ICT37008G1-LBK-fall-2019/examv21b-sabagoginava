let regex = /^([a-zA-Z]{3})([1358]{5})([AB]{2})$/;
let validation = document.querySelector('.validation').textContent;
var found = validation.match(regex);
if (validation.match(regex)) {
console.log(`Success - ${found}`)
} else {
console.log('undef')
}