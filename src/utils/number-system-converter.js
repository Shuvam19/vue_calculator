export default class NumberSystemConverter {
    static octalToBinary(val) {
        var binary = '';
        var i = 0;
        while (i < val.length) {
            switch (val[i]) {
                case '0': binary += "000"; break;
                case '1': binary += "001"; break;
                case '2': binary += "010"; break;
                case '3': binary += "011"; break;
                case '4': binary += "100"; break;
                case '5': binary += "101"; break;
                case '6': binary += "110"; break;
                case '7': binary += "111"; break;
            }
            i++;
        }
        return binary;
    }

    static decimalToBinary(val) {
        return (val >>> 0).toString(2);
    }

    static hexaDecimalToBinary(val) {
        var result = '';
        var i = 0;
        while (i < val.length) {
            switch (val[i]) {
                case '0': result += "0000"; break;
                case '1': result += "0001"; break;
                case '4': result += "0100"; break;
                case '2': result += "0010"; break;
                case '3': result += "0011"; break;
                case '5': result += "0101"; break;
                case '6': result += "0110"; break;
                case '7': result += "0111"; break;
                case '8': result += "1000"; break;
                case '9': result += "1001"; break;
                case 'A': result += "1010"; break;
                case 'B': result += "1011"; break;
                case 'C': result += "1100"; break;
                case 'D': result += "1101"; break;
                case 'E': result += "1110"; break;
                case 'F': result += "1111"; break;
            }
            i++;
        }
        return result;
    }

    static binaryToOctal(val) {
        return parseInt(val, 2).toString(8);
    }

    static binaryToDecimal(val) {
        return parseInt(val, 2).toString();
    }

    static binaryToHexaDecimal(val) {
        return parseInt(val, 2).toString(16).toLocaleUpperCase();
    }

    static convert(from, to, val) {
        let binary;
        switch (from) {
            case 1: binary = val
                break;
            case 2: binary = this.octalToBinary(val)
                break;
            case 3: binary = this.decimalToBinary(val)
                break;
            case 4: binary = this.hexaDecimalToBinary(val)
        }

        switch (to) {
            case 1: return binary;
            case 2: return this.binaryToOctal(binary);
            case 3: return this.binaryToDecimal(binary);
            case 4: return this.binaryToHexaDecimal(binary);
        }
    }
}