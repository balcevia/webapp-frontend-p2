export const peselValidator = (pesel, {dateOfBirth}) => {
    if (!dateOfBirth) {
        return "Please provide date of birth"
    }

    const date = new Date(dateOfBirth);
    const year = date.getFullYear().toString().substr(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + (date.getDate())).slice(-2);

    const providedYear = pesel.substring(0, 2);
    const providedMonth = pesel.substring(2, 4);
    const providedDay = pesel.substring(4, 6);

    let weight = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
    let sum = 0;
    let controlNumber = parseInt(pesel.substring(10, 11));

    for (let i = 0; i < weight.length; i++) {
        sum += (parseInt(pesel.substring(i, i + 1)) * weight[i]);
    }
    sum = sum % 10;
    const isPeselValid = ((10 - sum) % 10 === controlNumber) && year === providedYear && month === providedMonth && day === providedDay;
    if (!isPeselValid) {
        return "Invalid Pesel";
    }
};