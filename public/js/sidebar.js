$(document).ready(function() {
    var sub_header = $('h2');
    
    if(sub_header.length == 0) {
        $('#sidebar').remove();
        $('#main').removeClass('col-md-9').addClass('col-md-12');
        return;
    };
    
    sub_header.each(function() {
        $(this).attr('id', $(this).text().replace(/ /g, '_').toLowerCase())
        $("#sidebar ul").append("<li><a href='#" + $(this).prop('id') + "'>" + $(this).text() + "</a></li>");
    });
    
    $(window).on('scroll', function () {
      var cur_pos = $(this).scrollTop();
     
      sub_header.each(function() {
        var top = $(this).offset().top;
        var bottom = top + $(this).outerHeight() + 100;
     
        if (cur_pos >= top && cur_pos <= bottom) {
          $('#sidebar').find('li').removeClass('active');
          sub_header.removeClass('active');
     
          $(this).addClass('active');
          $('#sidebar').find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
        }
      });
    });
});