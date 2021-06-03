// function declaration

function addSquared(number1, number2) {
    squarednum1 = number1 ** 2;
    squarednum2 = number2 ** 2;
    result = squarednum1 + squarednum2;
    return result;
};

console.log(addSquared(8, 2));

// function expression

const addSquared2 = function (number1, number2) {
    squarednum1 = number1 ** 2;
    squarednum2 = number2 ** 2;
    result = squarednum1 + squarednum2;
    return result;
};
console.log(addSquared2(2, 2));

// arrow function

const addSquared3 = (number1, number2) => {
    squarednum1 = number1 ** 2;
    squarednum2 = number2 ** 2;
    result = squarednum1 + squarednum2;
    return result;
};
console.log(addSquared2(3, 2));