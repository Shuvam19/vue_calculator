
export default class Calculate {
    static getResult(queryString) {
        console.log(queryString);
        let tokens = queryString.split('')
        // Stack of values 
        let values = [];
        // Stack of Operations
        let operation = [];

        for (let i = 0; i < tokens.length; i++) {
            const isOperand = this.getOperation(tokens, i);
            if (isOperand) {
                if (this.isMathematicalFunction(isOperand[0]) || this.isSymbol(isOperand[0])) {
                    while(this.isSymbol(isOperand[0]) && operation.length > 0 && this.hasPrecedence(isOperand[0],operation[operation.length - 1])){
                        values.push(this.solveOperationTwo(values.pop(),values.pop(),operation.pop()));
                    }
                    operation.push(isOperand[0]);
                } else if (this.isInteger(isOperand[0])) {
                    values.push(isOperand[0]);
                } else if (isOperand[0] == '%') {
                    values.push(values.pop() / 100);
                } else if (isOperand[0] == '!') {
                    values.push(this.factorial(values.pop()))
                } else if (isOperand[0] == ')') {
                    [values, operation] = this.solve(values, operation);
                } else if (isOperand[0] == '°') {
                    values.push(values.pop() * Math.PI / 180)
                }
                i = isOperand[1];
            }
        }
        console.log(values);
        console.log(operation)
        return values.pop();
    }

    static isNumber(num) {
        return num >= '0' && num <= '9';
    }

    static isInteger(num) {
        return typeof (num) == 'number'
    }

    static isCharacter(character) {
        return character >= 'a' && character <= 'z';
    }

    static isSymbol(lastChar) {
        return ["*", "%", "+", "-", "÷", "^"].find((val) => lastChar == val);
    }

    static isMathematicalFunction(operation) {
        return ['(', 'sin', 'cos', 'tan', 'arcsin', 'arccos', 'arctan', 'lg', 'ln'].find((val) => operation == val);
    }

    static isTrigo(operation) {
        return ['(', 'sin(', 'cos(', 'tan(', 'arcsin(', 'arccos(', 'arctan('].find((val) => operation == val);
    }

    static hasPrecedence(upperOperand,belowOperand) {
        return this.precedence(upperOperand) < this.precedence(belowOperand);
    }

    static precedence(operand) {
        switch(operand) {
            case '+' :
            case '-' : return 1;
            case '*' :
            case '÷' : return 2;
            case '^' : return 3;
        }
    }

    static getOperation(tokens, ind) {
        if (this.isCharacter(tokens[ind])) {
            // sin cos tan etc.
            let operand = '';
            while (tokens[ind] != '(' && ind < tokens.length) {
                operand += tokens[ind];
                ind++;
            }
            return [operand, ind];
        } else if (this.isNumber(tokens[ind])) {
            // all the numbers
            let num = "";
            while (ind < tokens.length && this.isNumber(tokens[ind])) {
                num += tokens[ind++];
            }
            ind--;
            return [parseInt(num, 10), ind];
        } else if (this.isSymbol(tokens[ind])) {
            // symbols + - % etc.
            return [tokens[ind], ind]
        }
        return [tokens[ind], ind]
    }

    static factorial(num) {
        if (num == 0) return 1;
        return num * this.factorial(num - 1);
    }

    static solve(values, operation) {
        while (operation[operation.length - 1] != '(' && operation.length > 0) {
            let first = values.pop();
            let second = values.pop();
            let operand = operation.pop();
            let ans;
            if (this.requiresTwoValue(operand)) {
                ans = this.solveOperationTwo(second,first, operand);
            } else {
                values.push(second);
                ans = this.solveOperationOne(first, operand);
            }
            values.push(ans);
        }
        operation.pop();
        return [values, operation];
    }

    static solveOperationTwo(first, second, operand) {
        switch (operand) {
            case '+': return first + second;
            case '-': return first - second;
            case '*': return first * second;
            case '÷': return first / second;
            case '^': return Math.pow(first, second);
        }
    }

    static solveOperationOne(first, operand) {
        switch (operand) {
            case 'sin': return Math.sin(first);
            case 'cos': return Math.cos(first);
            case 'tan': return Math.tan(first);
            case 'lg': return Math.log10(first);
            case 'ln': return Math.log(first);
            case 'arcsin': return Math.asin(first) * 180 / Math.PI;
            case 'arctan': return Math.atan(first) * 180 / Math.PI;
            case 'arccos': return Math.acos(first) * 180 / Math.PI;
        }
        return first;
    }

    static requiresTwoValue(operand) {
        if (this.isSymbol(operand)) return true;
        return false;
    }
}