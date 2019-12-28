/* <4 kyu> https://www.codewars.com/kata/520446778469526ec0000001
 * Complete the function/method (depending on the language) 
 * to return true/True when its argument is an array that has
 * the same nesting structure as the first array.
 */
Array.prototype.sameStructureAs = function (other) {
    let result = Array.isArray(other);

    if(result) result = this.length === other.length;
    for (let i = 0; i < this.length; i++) {
        if (result) {
            const element = this[i];
            const otherElement = other[i];
            if (Array.isArray(element)) {
                if (Array.isArray(otherElement)) {
                    if (!element.sameStructureAs(otherElement)) {
                        result = false;
                    };
                } else {
                    result = false;;
                }
            }
        }
    }
    return result;
};
