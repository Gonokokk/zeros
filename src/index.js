module.exports = function getZerosCount(number) {
    var num = Math.floor(number / 5);
    var result = 0;
    
    while(num !== 0){
        result = result + num;
        num = Math.floor(num / 5);
    	}
    return result;
}
