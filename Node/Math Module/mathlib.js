module.exports = function(){
    return {
        add : function(num1, num2){
            return num1 + num2;
        },
        multiply : function(num1, num2){
            return num1 * num2;
        },
        square : function(num){
            total = num * num;
            return total; 
        },
        random : function(num1, num2){
            return Math.floor(Math.random(num1,num2)*100);
        },
    }
}