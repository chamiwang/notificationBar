/**
 * https://github.com/chamiwang/notificationBar.git
 * Created by darkchameleonwy@yahoo.com/99264438@qq.com on 2016/12/15.
 */
var showBar = (function(){
    var CaBar = function(){
    };
    var cb = new CaBar();
    CaBar.prototype.jqueryShow = function(obj, height, speed){
        var top = -height;
        var times = height;
        var t = 0;
        for(var i=0;i<times;i++){
            setTimeout(function(){
                obj.style.top = top +t+'px';
                t+=1;
            },speed*i);
        }
    };

    CaBar.prototype.jqueryHide = function(obj, height, speed){
        var times = height+2;
        var t = 0;
        for(var i=0;i<times;i++){
            setTimeout(function(){
                obj.style.top =(0 -t)+'px';
                t+=1;
            },cb.delay+speed*i);
        }
    };
    var body = document.getElementsByTagName('body');
    var template = document.createElement('div');

    return function (word, delay, speed, option) {
        var defaultOption = {
            'backgroundColor': '#66ccff',
            'height':60,
            'width':'100%',
            'textAlign' : 'center',
            'lineHeight':60+'px',
            'position':'absolute',
            'zIndex':'100001',
            'top':'-60px'
        };
        cb.delay = delay?delay:3000;
        speed = speed?speed:8;
        word = word?word:'test';
        if (option) {
            for(var tem in option){
                defaultOption[tem]=option[tem];
            }
        }
        option = defaultOption;
        var text_node = document.createTextNode(word);
        for (var tem in option) {
            template.style[tem] = option[tem];
        }

        template.innerHTML = '';
        template.appendChild(text_node);
        body[0].appendChild(template);

        cb.jqueryShow(template, defaultOption['height'], speed);

        cb.jqueryHide(template, defaultOption['height'], speed);
    }

})();