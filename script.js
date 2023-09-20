// let weight = 66;
// let height = 5.8 * 0.3048;

// let bmi = weight / (height**2);
// console.log(bmi)
// console.log(height)

const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const weight = Number(document.querySelector('#weight').value);
    const height = Number(document.querySelector('#height').value);
    const results = document.querySelector('.results');
    console.log(height)
    console.log(weight)

    
    if(height === ' ' || height <= 0 || isNaN(height) ){
        results.innerHTML = `${document.querySelector('#height').value} is not a valid height`
    } 
    else if(weight === ' ' || weight <= 0 || isNaN(weight) ){
        results.innerHTML = `${document.querySelector('#weight').value} is not a valid weight`
    }
    else{
        const bmi = (weight / ((height*0.3048)**2)).toFixed(2);
        results.innerHTML = `Your BMI is ${bmi}`
    }



})