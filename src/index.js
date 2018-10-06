// DO WHATEVER YOU WANT HERE
const createEnumerableProperty = (property) => {return property};
const createNotEnumerableProperty = (property) => {return Symbol(property)};
const createProtoMagicObject = () => {
    magicObj = () => {}
    magicObj.prototype = magicObj.__proto__;
    return magicObj;
};
let i = 0;
const incrementor = () => {
    counter = () => {
        i++;
        return counter;
    }
    counter.valueOf = () => i;
    return counter();
};
let j = 0;
const asyncIncrementor = () => {return ++j;};
const createIncrementer = () => {
    let result = function*() {
        let i = 0;
        while(true) {
            yield ++i
        };
    };
    return result();
};
// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    let result = new Promise((resolve, reject) =>
        setTimeout(() => {
            resolve(param);
        }, 1000)
    )
    return result;
};
const getDeepPropertiesCount = (object) => {
    let count = 0;
    deepProperties = (object) => {
        for (key in object) {
            count++;
            deepProperties(object[key]);
        }
    }
    deepProperties(object);
    return count;
};
const createSerializedObject = () => {
    return new Number();
};
const toBuffer = () => {};
const sortByProto = (object) => {
    return object.sort();
};
exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;