const result = document.querySelector('#result')
const height = document.querySelector('#height')
const Weight = document.querySelector('#weight')

const calcBMI = () =>{

    if(height.value !=='' && Weight.value !==''){
        const BMI = (Weight.value/ (height.value * height.value)).toFixed(2)
        let classification = ''

        if( BMI < 18.5){
            classification = 'Under weight'
        } else if (BMI < 25) {
            classification = 'Normal weight'
        }else if (BMI < 30) {
            classification = 'Overweight'
        }else if(BMI <35){
            classification = 'Obesity grade I'
        }else if(BMI< 41){
            classification =  'Obesity grade II'
        }else{
            classification =  'Obesity grade III'
        }

        result.innerHTML =`BMI:${BMI} (${classification})`
    }else{
        result.innerHTML =`fill in the fields`
    }
}
