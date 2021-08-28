export class custumPatternValidators{
    

    static isEmail(value){
        return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(value);
    }
    static isPhone(value){
        return  /^((\\+91-?)|0)?[0-9]{10}$/.test(value);
       
    }
}