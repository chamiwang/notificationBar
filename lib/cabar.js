/**
 * https://github.com/chamiwang/notificationBar.git
 * Created by darkchameleonwy@yahoo.com/99264438@qq.com on 2016/12/15.
 */
var showBar = (function(){
    var CaBar = function(){
    };
    var cb = new CaBar();

    CaBar.prototype.jqueryShow = function(obj, height, speed){
        cb.start_location = document.body.scrollTop;
        obj.style.display = 'block';
        var top = -height;
        var times = height;
        var t = 0;
        for(var i=0;i<times;i++){
            setTimeout(function(){
                var now_t = document.body.scrollTop;
                obj.style.top = now_t + top +t+'px';
                t+=1;
            },speed*i);
        }
    };

    CaBar.prototype.jqueryHide = function(obj, height, speed){

        var times = height+2;
        var t = 0;
        for(var i=0;i<times;i++){
            setTimeout(function(){
                var now_t = document.body.scrollTop;
                obj.style.top =(now_t -t)+'px';
                t+=1;
            },cb.delay+speed*i);

        }

        setTimeout(function(){
            obj.style.display ='none';
        },cb.delay+speed*times);

    };

    var body = document.getElementsByTagName('body');
    var template = document.createElement('div');

    return function (word, type, delay, speed, option) {
        var defaultOption = {
            'backgroundColor': '#66ccff',
            'height':60,
            'width':'100%',
            'textAlign' : 'center',
            'lineHeight':60+'px',
            'position':'absolute',
            'zIndex':'100001',
            'top':'-60px',
            'font-family':'-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",sans-serif'
        };

        switch (type) {
            case 'primary':
                defaultOption.backgroundColor = '#337ab7';
                defaultOption.color = '##fff';
                break;
            case 'success':
                defaultOption.backgroundColor = '#dff0d8';
                break;
            case 'info':
                defaultOption.backgroundColor = '#d9edf7';
                break;
            case 'warning':
                defaultOption.backgroundColor = '#fcf8e3';
                break;
            case 'danger':
                defaultOption.backgroundColor = '#f2dede';
                break;
        }
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
