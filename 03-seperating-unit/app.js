import { add } from "./src/calculator.js";
import { validateNumber, validateStringIsNotEmpty } from "./src/validation.js";

const form = document.getElementById('form');
const output = document.getElementById('result');

const formSubmitHandler = (event) => {

    event.preventDefault();

    const formData = new FormData(form);

    const firstNumber = formData.get('firstNumber');    
    const secondNumber = formData.get('secondNumber');
    
    const numbers = [];
    numbers.push(firstNumber);
    numbers.push(secondNumber);
    console.log(numbers);

    let result = '';
    // 덧셈 로직 구현
    try {
        // 유효성 처리 이후 숫자 값으로만 검증된 배열
        const validatedNumbers = [];        

        for (const number of numbers) {
            // 공백값 검증
            validateStringIsNotEmpty(number);
            // 유효한 숫자인지 검증
            const validNumber = validateNumber(number);
            validatedNumbers.push(validNumber);
        }
        
        result = add(validatedNumbers);
    } catch (error) {
        // console.error(error);
        result = error.message; // 숫자 값이 아닙니다~와 같은 에러 메시지
    }

    output.textContent = result;
    
}

form.addEventListener('submit', formSubmitHandler);