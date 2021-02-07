export const onlyLettersValidator = (val) => {
    if(!/^[a-zA-Z]+$/.test(val)) {
        return "Only letters are allowed"
    }
};