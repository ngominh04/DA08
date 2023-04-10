$(document).on('ready', function() {
    $(".regular").slick({
      dots: true,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1
    });
    $(".sanpham-regular").slick({
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1
    });
    $(".tintuc-regular").slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    });
  });

  // click header 
  $(document).ready(function(){
    $('.ho-tro-1').click(function(){
        $('.ho-tro-1').css('color','#bf2e1b').css('background-color','white')
        $('.ho-tro-2').css('color','white').css('background-color','#bf2e1b')
    })
        $('.ho-tro-2').click(function(){
            $('.ho-tro-2').css('color','#bf2e1b').css('background-color','white')
            $('.ho-tro-1').css('color','white').css('background-color','#bf2e1b')

        })
          $(".btn").click(function(){
              var valueId = $(this).attr('id');
              $("h3").css("color","valueId")
          })

          $('#show1').click(function() { 
            $('#gt').hide();$('.show2-u').hide()
            $('#trang-chu').show();$('.show1-u').show();$('#show2').css('color','black')
            $('#tin-tuc').hide();$('.show5-u').hide();$('.nav-item').css('color','red')
            $('#san-pham').hide();$('.show3-u').hide();$('#show4').css('color','black')
            $('#san-pham2').hide();
            $('#lienhe').hide();$('.show7-u').hide();$('#show5').css('color','black')
            $('.dich-vu').hide();$('.show4-u').hide();$('#show6').css('color','black')
            $('#tuyen-dung').hide();$('.show6-u').hide();$('#show7').css('color','black')
          });
          $('#show2').click(function() { 
            $('#trang-chu').hide();$('.show1-u').hide();
            $('#gt').show();$('#show2').css('color','red');$('.show2-u').show()
            $('#san-pham').hide();$('.nav-item').css('color','red');$('.show3-u').hide()
            $('#san-pham2').hide();
            $('.dich-vu').hide();$('#show4').css('color','black');$('.show4-u').hide()
            $('#tin-tuc').hide();$('#show5').css('color','black');$('.show5-u').hide()
            $('#tuyen-dung').hide();$('#show6').css('color','black');$('.show6-u').hide()
            $('#lienhe').hide();$('#show7').css('color','black');$('.show7-u').hide()
          });
          $('#show3').click(function() { 
            $('#trang-chu').hide();$('.show1-u').hide();
            $('#gt').hide();$('#show2').css('color','black');$('.show2-u').hide()
            $('#san-pham').show();$('.nav-item').css('color','red');$('.show3-u').show()
            $('#san-pham2').hide();
            $('.dich-vu').hide();$('#show4').css('color','black');$('.show4-u').hide()
            $('#tin-tuc').hide();$('#show5').css('color','black');$('.show5-u').hide()
            $('#tuyen-dung').hide();$('#show6').css('color','black');$('.show6-u').hide()
            $('#lienhe').hide();$('#show7').css('color','black');$('.show7-u').hide()
          });
          $('#show4').click(function() { 
            $('#trang-chu').hide();$('.show1-u').hide();
            $('#gt').hide();$('#show2').css('color','black');$('.show2-u').hide()
            $('#san-pham').hide();$('.nav-item').css('color','red');$('.show3-u').hide()
            $('#san-pham2').hide();
            $('.dich-vu').show();$('#show4').css('color','red');$('.show4-u').show()
            $('#tin-tuc').hide();$('#show5').css('color','black');$('.show5-u').hide()
            $('#tuyen-dung').hide();$('#show6').css('color','black');$('.show6-u').hide()
            $('#lienhe').hide();$('#show7').css('color','black');$('.show7-u').hide()
          });
          $('#show5').click(function() { 
            $('#trang-chu').hide();$('.show1-u').hide();
            $('#gt').hide();$('#show2').css('color','black');$('.show2-u').hide()
            $('#san-pham').hide();$('.nav-item').css('color','red');$('.show3-u').hide()
            $('#san-pham2').hide();
            $('.dich-vu').hide();$('#show4').css('color','black');$('.show4-u').hide()
            $('#tin-tuc').show();$('#show5').css('color','red');$('.show5-u').show()
            $('#tuyen-dung').hide();$('#show6').css('color','black');$('.show6-u').hide()
            $('#lienhe').hide();$('#show7').css('color','black');$('.show7-u').hide()
          });
          $('#show6').click(function() { 
            $('#trang-chu').hide();$('.show1-u').hide();
            $('#gt').hide();$('#show2').css('color','black');$('.show2-u').hide()
            $('#san-pham').hide();$('.nav-item').css('color','red');$('.show3-u').hide()
            $('#san-pham2').hide();
            $('.dich-vu').hide();$('#show4').css('color','black');$('.show4-u').hide()
            $('#tin-tuc').hide();$('#show5').css('color','black');$('.show5-u').hide()
            $('#tuyen-dung').show();$('#show6').css('color','red');$('.show6-u').show()
            $('#lienhe').hide();$('#show7').css('color','black');$('.show7-u').hide()
          });
          $('#show7').click(function() { 
            $('#trang-chu').hide();$('.show1-u').hide();
            $('#gt').hide();$('#show2').css('color','black');$('.show2-u').hide()
            $('#san-pham').hide();$('.nav-item').css('color','red');$('.show3-u').hide()
            $('#san-pham2').hide();
            $('.dich-vu').hide();$('#show4').css('color','black');$('.show4-u').hide()
            $('#tin-tuc').hide();$('#show5').css('color','black');$('.show5-u').hide()
            $('#tuyen-dung').hide();$('#show6').css('color','black');$('.show6-u').hide()
            $('#lienhe').show();$('#show7').css('color','red');$('.show7-u').show()
          });
  // click trong sản phẩm
  $('#glyphicon1').click(function(){
    $('#glyphicon2').show()
    $('#menu-glyphicon').show()
    $('#glyphicon1').hide()
  })
  $('#glyphicon2').click(function(){
    $('#glyphicon1').show()
    $('#menu-glyphicon').hide()
    $('#glyphicon2').hide()
  })
  //  click sản phẩm ProXL 
  $('.sanphamXL').click(function(){
    $('.sanphamXL').css('color','red')
    $('#san-pham2').show()
    $('#san-pham').hide()
  })
  // click box liên hệ footer
  $('#box-lienhe-glyphicon2').click(function(){
    $('#box-lienhe-glyphicon2').hide()
    $('#box-lienhe-glyphicon1').show()
    $('.nhap').show()
  })
  $('#box-lienhe-glyphicon1').click(function(){
    $('#box-lienhe-glyphicon1').hide()
    $('#box-lienhe-glyphicon2').show()
    $('.nhap').hide()
  })
  // click menu tong
  $('#menu-tong').click(function(){
    $('ul').show()
    $('#menu-ngang').hide()
  })
  })