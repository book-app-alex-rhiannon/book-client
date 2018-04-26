'use strict';

var app = app || {};

(function (module) {

  var bookView = {};

  bookView.initAllBooks = () => {
    app.Article.all.forEach(a => $('#all-books').append(a.toHtml()));
    $('#single-book').hide();
    $('#add-book').hide();
  }
  module.bookView = bookView;

})(app)