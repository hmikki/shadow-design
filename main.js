 $(document).ready(function(){
     var scrolTop=0;
     $(window).scroll(function(){
         scrolTop=$(window).scrollTop();
         var annimate=$('.section').height();
         if(scrolTop == annimate ){
            $('.image').addClass('test');  
         }
     })
 });
     /**********************************/
   $(document).ready(function(){  
       var scrollTop=0;
    $(window).scroll(function(){
        scrollTop=$(window).scrollTop();
        if(scrollTop > 0){
            $('.navbar').addClass('scrollNav');
        }else if(scrollTop == 0){
            $('.navbar').removeClass('scrollNav');
        }
    })
 });