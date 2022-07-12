
class StringUtility {

    static isEmpty(input) {
        return input === null || input === undefined;
    }

    static isNoneOrEmpty(input) {
        return input === null || input === undefined || input === "";
    }
}

export default StringUtility;

export function IsEmpty(input) {
    return StringUtility.isEmpty(input);
}

export function IsNoneOrEmpty(input){
    return StringUtility.isNoneOrEmpty(input);
}

