'use strict';

var app = app || {};

(function (module) {

  var bookView = {};

  bookView.initAllBooks = () => {
    app.Book.all.forEach(a => $('#all-books').append(a.toHtml()));
    $('#single-book').hide();
    $('#add-book').hide();
  };

  bookView.bookTeaser = (book_id) => {
    $(`#${book_id} *:nth-of-type(n+2)`).hide();
    $('article').on('click', 'a.book_id', function (e) {
      e.preventDefault();
      if ($(this).text() === 'view details') {
        $(this).parent().find('*').fadeIn();
        $(this).html('show less');
      } else {
        $('body').animat({
          scrollTop: ($(this).parent().offset().top)
        }, 213);
        $(this).html('view details');
        $(this).parent().find(`#${book_id}*:nth-of-type(n+2)`).hide();
      }
    });
  }
}



module.bookView = bookView;

}) (app);