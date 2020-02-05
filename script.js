          $(document).ready(function(){
        $('.nav-link').on('click', function(){
          var link = $(this).attr('data-link');
          var new_top = $(window).scrollTop();
          if(link == 'silicon_talk'){
            new_top = $('#silicon_talk').offset().top;
          } else if(link == 'disability_1'){
            new_top = $('#disability_1').offset().top;
          } else if(link == 'radical_1'){
            new_top = $('#radical_1').offset().top;
          } else if(link == 'play_1'){
            new_top = $('#play_1').offset().top;
          } else if(link == 'disability_talk'){
            new_top = $('#disability_talk').offset().top;
          } else if(link == 'silicon_1'){
            new_top = $('#silicon_1').offset().top;
          } else if(link == 'radical_2'){
            new_top = $('#radical_2').offset().top;
          } else if(link == 'play_2'){
            new_top = $('#play_2').offset().top;
          } else if(link == 'radical_talk'){
            new_top = $('#radical_talk').offset().top;
          } else if(link == 'disability_2'){
            new_top = $('#disability_2').offset().top;
          } else if(link == 'play_3'){
            new_top = $('#play_3').offset().top;
          } else if(link == 'silicon_2'){
            new_top = $('#silicon_2').offset().top;
              } else if(link == 'silicon_3'){
            new_top = $('#silicon_3').offset().top;
          } else if(link == 'play_talk'){
            new_top = $('#play_talk').offset().top;
          } else if(link == 'disability_3'){
            new_top = $('#disability_3').offset().top;
          } else if(link == 'radical_3'){
            new_top = $('#radical_3').offset().top;
          } 
          // console.log(link, new_top);
          $('body,html').animate({scrollTop: new_top});
        });
    });
