var Link = {
    setColor: function(color){
        // var i = 0;
        // var alist = document.querySelectorAll('.link-nav');
        // while(alist.length){
        //     alist[i].style.color=color;
        //     i=i+1;
        // }
        $('.link-nav').css('color',color);
        $('.link-nav').hover(function(){
            $(this).css('color', '#4FC1E9');
            $(this).css('text-decoration', 'underline');
        }, function(){
            $(this).css('color', color);
            $(this).css('text-decoration', 'none');
        });
        $('.link-nav').click(function(){
            $(this).css('color', '#5D9CEC');
        })
    }
}
var Body = {
    setColor: function(color){
        document.querySelector('body').style.color=color;
    },
    setBackgorundColor: function(color){
        document.querySelector('body').style.backgroundColor=color;
    }
}
var Header = {
    setColor: function(color){
        document.querySelector('header').style.color=color;
    },
    setBackgorundColor: function(color){
        document.querySelector('header').style.backgroundColor=color;
    }
}
function nightDayHandler(self){
    var target = document.querySelector('body')
    if(self.value==='☽'){
        self.value='☀';
        Body.setColor('white');
        Body.setBackgorundColor('black');
        Header.setColor('white');
        Header.setBackgorundColor('black');
        Link.setColor('white');
    }
    else{
        self.value='☽';
        Body.setColor('black');
        Body.setBackgorundColor('#eae4b2');
        Header.setColor('black');
        Header.setBackgorundColor('#469366');
        Link.setColor('black');
    }
}