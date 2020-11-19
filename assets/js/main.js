$(function(){
    'use strict'

    


    $(window).on("swiperight", function( event ) 
    {
        $('body').addClass('sidebar-show');
    } );

    $(window).on("swipeleft", function( event ) 
    {
        $('body').removeClass('sidebar-show');
    } );
  
    $('main content').on('click', function(){
        $('body').removeClass('sidebar-show');
    });
  
  
    $('header .nav-right .toggleside').on('click', function(e){
        e.preventDefault();
        if(window.matchMedia('(max-width: 600px)').matches) {
            $('body').removeClass('sidebar-hide');
            $('body').toggleClass('sidebar-show');
        } else {
            $('body').removeClass('sidebar-show');
            $('body').toggleClass('sidebar-hide');
        }
    });


  });
  
