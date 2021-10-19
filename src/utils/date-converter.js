export default class DateConverter {
    static getNoOfMin(millisecond) {
        return parseInt(millisecond / (1000 * 60));
    }

    static getNoOfHours(millisecond) {
        return parseInt(millisecond / (1000 * 60 * 60));
    }

    static getNoOfDays(millisecond) {
        return parseInt(millisecond / (1000 * 60 * 60 * 24));
    }

    static getNoOfWeeks(millisecond) {
        return parseInt(millisecond / (1000 * 60 * 60 * 24 * 7));
    }

    static getNoOfMonths(millisecond) {
        return parseInt(millisecond / (1000 * 60 * 60 * 24 * 30));
    }

    static getNoOfYears(millisecond) {
        return parseInt(millisecond / (1000 * 60 * 60 * 24 * 365));
    }

    static getNoOfRemainingDays(millisecond) {
        return parseInt(this.getNoOfDays(millisecond) - (this.getNoOfRemainingYears(millisecond) * 365) - (this.getNoOfRemainingMonths(millisecond) * 30));
    }

    static getNoOfRemainingMonths(millisecond) {
        return parseInt((this.getNoOfDays(millisecond) - (this.getNoOfRemainingYears(millisecond) * 365)) / 30);
    }

    static getNoOfRemainingYears(millisecond) {
        return this.getNoOfYears(millisecond);
    }
}