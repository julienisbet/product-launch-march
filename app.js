// console.log('hello from app.js');

// let dog = 'Ben Donich';

// console.log(`My dog's name is ${dog}`);
// console.log(`${dog} is very cute.`);

// const label = document.getElementById('label');
// // label.textContent = 'awesome blossom';
// label.style.color = 'blue';
// label.style.fontSize = '4rem';

// const darkText = document.querySelector('.dark-text');
// console.log(darkText)

const button = document.getElementById('button');
button.addEventListener('click', ()=>{
    // 1. store the element with id email-inputs
    //  as a variable inputs
    const inputs = document.getElementById('email-inputs');
    // 2. add the class "hide" to inputs
    inputs.classList.toggle('hide');
    // 3. store the element with the id thank-you
    //   as a variable thankYou
    const thankYou = document.getElementById('thank-you');
    // 4. remove the class "hide" from thankYou
    thankYou.classList.toggle('hide');
});