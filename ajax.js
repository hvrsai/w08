(function ($) {

  $('#btnLoadText').click(function () { $("#showResult").load("show.txt"); });
  $('#btnAjax').click(function () { callRestAPI() });

  // Perform an asynchronous HTTP (Ajax) API request.
  function callRestAPI() {
    var root = 'https://jsonplaceholder.typicode.com';
    $.ajax({
      url: root + '/posts/1',
      method: 'GET'
    }).then(function (response) {
      console.log(response);
      $('#showResult').html(response.body);
    });
  }
})(jQuery);

//http://www.programmableweb.com/news/how-to-build-yahoo-weather-hello-world-application-javascript/how-to/2016/01/25?page=2