import createUtilityClassName from "react-bootstrap/createUtilityClasses";

class ClassNameUtility {
    static ExtendClass(origin, className) {
        return className ? `${origin} ${className}` : origin;
    }
}

export default ClassNameUtility;

export function ExtentClass(origin, className) {
    ClassNameUtility.ExtendClass(origin, className);
}
