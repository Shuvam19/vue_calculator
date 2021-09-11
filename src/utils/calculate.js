
export default class Calculate {
    static getResult(queryString) {
        let tokens = queryString.split('')
        console.log(tokens);

        // Stack of values 
        let values = [];

        // Stack of Operations
        let operation = [];

        for (let i = 0; i < tokens.length; i++) {
            if (this.isNumber(tokens[i])) {
                let num = "";
                while (i < tokens.length && this.isNumber(tokens[i])) {
                    num += tokens[i++];
                }
                values.push(parseInt(num, 10));
                i--;
            } else if (tokens[i] == '%'){
                values.push(values.pop() / 100);
            } else if (tokens[i] == '(') {
                operation.push('(');
            } else if (tokens[i] == ')') {
                while (operation.length > 0 && this.isClosingTag(operation[operation.length - 1])) {
                    let secondval = values.pop()
                    let firstval = values.pop()
                    let operand = operation.pop()
                    let ans = this.solveOperation(firstval, secondval, operand);
                    values.push(ans);
                    console.log(firstval);
                    console.log(secondval);
                    console.log(ans);
                }
                operation.pop();
            } else if (this.isOperation(tokens[i])) {
                operation.push(tokens[i]);
            }
        }
        console.log(values);
        console.log(operation)
        return values.pop();
    }

    static solveOperation(firstval, secondval, operand) {
        if (operand == '+') {
            return firstval + secondval;
        }
        if (operand == '-') {
            return firstval - secondval;
        }
        if (operand == '*') {
            return firstval * secondval;
        }
        if (operand == '÷') {
            return firstval / secondval;
        }
        if (operand == '^') {
            return Math.pow(firstval,secondval);
        }
    }

    static isOperation(lastChar) {
        return ["*", "%", "+", "-", "÷","^"].find((val) => lastChar == val);
    }

    static isNumber(num) {
        return num >= '0' && num <= '9';
    }

    static isClosingTag(operation) {
        console.log(operation)
        console.log(operation != '(')
        return operation != '(' && operation != 'sin(' && operation != 'cos(';
    }
}