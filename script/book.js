'use strict';

var app = {}

(function (module) {

  function Book(obj){
    Object.assign(this, obj);
  };

  Book.all = [];

  Book.prototype.toHtml = function(){
    let template = $('#book-template').html();
    let bookTemplate = Handlebars.compile(template);
    return bookTemplate(this);
  };

  Book.loadAll = JSONData => {
    Book.all = JSONData.map ( e => new Book(e));
  };

  Book.fetchAll = callback => {
    $.get('/books')
      .then( results => {
        Book.loadAll(results);
        callback();
      })
  }

  Book.truncateTable = callback => {
    $.ajax({
      url: '/books',
      method: 'DELETE'
    })
    .then(console.log)
    .then(callback);
  }

  Book.prototype.insertRecord = callback => {
    let insertionObject = {};
    Object.assign(insertionObject, this);
    $.post('/books', insertionObject)
    .then(console.log)
    .then(callback);
  }

  Book.prototype.deleteRecord = callback => {
    $.ajax({
      url: `/books/${this.book_id}`,
      method: 'DELETE'
    })
    .then(console.log)
    .then(callback)
  }

  Book.prototype.updateRecord = callback => {
    let updateObject = {};
    Object.assign(updateObject, this);
    $.ajax({
      url: `/books/${this.book_id}`,
      method: 'PUT',
      data : updateObject
    })
  }

  module.Book = Book;

})(app)