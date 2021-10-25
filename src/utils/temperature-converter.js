export default class TemperatureConverter {
    static farenheightToCelcius(from) {
        return ((from - 32) * (5 / 9));
    }

    static celciusToFarenheight(from) {
        return ((9 / 5) * from) + 32;
    }

    static celciusToKelvin(from) {
        return from + 273;
    }

    static kelvinToCelcius(from) {
        return from - 273;
    }

    static farenheightToKelvin(from) {
        return this.celciusToKelvin(this.farenheightToCelcius(from));
    }

    static kelvinToFarenheight(from) {
        return this.celciusToFarenheight(this.kelvinToCelcius(from));
    }

    static convert(from, to, val) {
        if (from == to) return val;
        if (from == 1) {
            return to == 2 ? this.kelvinToCelcius(val) : this.kelvinToFarenheight(val);
        } else if (from == 2) {
            return to == 1 ? this.celciusToKelvin(val) : this.celciusToFarenheight(val);
        } else {
            return to == 1 ? this.farenheightToKelvin(val) : this.farenheightToCelcius(val);
        }
    }
}