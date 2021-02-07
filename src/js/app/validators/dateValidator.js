export const dateValidator = (val) => {
    const selectedDate = new Date(val);
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    if(selectedDate >= now) {
        return "Date couldn't be in the future";
    }
}