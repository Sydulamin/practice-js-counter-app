const data = document.getElementById('data');
const inc = document.getElementById('Upbtn');
const dec = document.getElementById('Downbtn');

// incriment counter
inc.addEventListener("click", async () => {
    data.textContent = parseInt(data.textContent) + 1 
    console.log(data.textContent)
});

// decrement counter
dec.addEventListener("click", async () => {      
    data.textContent = parseInt(data.textContent) - 1 
    console.log(data.textContent)
});



