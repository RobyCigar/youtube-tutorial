const cursor = document.getElementById('cursor')

window.addEventListener('mousemove', event => {
	cursor.style.top = `${event.clientY - 80}px`
	cursor.style.left = `${event.clientX - 80}px`
})


























// const cursor = document.getElementById('cursor');

// window.addEventListener('mousemove', (event) => {
// 	cursor.style.top = `${event.clientY - 80}px`;
// 	cursor.style.left = `${event.clientX - 80}px`; 
// })