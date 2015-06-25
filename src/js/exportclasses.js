$(document).ready(function () {

    if ($('.tabs').size() === 1) {
      $('.tabs').addClass('nav nav-pills');
      $('.tabs li.selected').addClass('active').attr('role', 'presentation');
      $('#content').prepend($('.pageTitle').detach());
    }
    if ((location.pathname.substr(0, 2) === '/_') && ($('div.pageTools').size() > 0)) {
      $('div.pageTools').hide();
    }

    if ($("#exportbox").size() === 1) {
      $("#exportbox").addClass("form-inline");
      $("#exportbox select").addClass("form-control input-sm");
      $("#export").addClass("form-control btn btn-default btn-sm");
    }

    if ($('#categoryList').size() === 1) {
      $('#main').after($('#categoryList').detach());
      $('#categoryList').addClass('panel-footer hidden-print');
      $('#categoryList ul').addClass('list-inline');
      $('#categoryList ul li a')
        .each(function () {
          var q = $(this);
          if (q.text().substr(0,1) === '-') {
            q.wrapInner('<span class="label label-danger">');
          } else if (q.text().substr(0,1) === '+') {
            q.wrapInner('<span class="label label-success">');
          } else {
            q.wrapInner('<span class="label label-primary">');
          }
        });
    }

    if ((location.pathname === '/_login') || (location.pathname === '/_register')) {
      $("form#loginForm").addClass("form-group");
      $("form#loginForm fieldset input:not(.req)").addClass("form-control");
      $("form#loginForm fieldset input[type='submit']").addClass("btn btn-primary");
      $("form#loginForm fieldset #login").before("<br/>");
      return;
    }

    if (location.pathname === '/_resetPassword') {
      $("form#resetPassword").addClass("form-group");
      $("form#resetPassword fieldset input").addClass("form-control");
      $("form#resetPassword fieldset input[type='submit']").addClass("btn btn-primary");
      $("form#resetPassword fieldset #resetPassword").before("<br/>");
      return;
    }

    if (location.pathname.substr(0, 7) === '/_edit/') {
      $("form#editform").addClass("form-group form-inline");
      $("form#editform input").addClass("form-control");
      $("form#editform #update").addClass("btn btn-primary");
      $("form#editform #cancel").addClass("btn btn-default");
      $("form#editform #previewButton").addClass("btn btn-info");

      $("#previewpane").hide();
      $("#previewpane").addClass("panel panel-default panel-body");

      $("div.markupHelp pre").hide();
      $("div.markupHelp h2")
         .after('<p><button id="markupHelpShowButton" type="button" class="btn btn-default">Show</button></p>');
      $("#markupHelpShowButton")
         .on("click", function (ev) {
           if ($(ev.target).hasClass('active')) {
             $(ev.target).removeClass('active');
             $("div.markupHelp pre").hide();
           } else {
             $(ev.target).addClass('active');
             $("div.markupHelp pre").show();
           }
         });
      return;
    }

    if (location.pathname === '/_categories') {
      $('#content ul').addClass('list-inline');
      $('#content ul li a').wrapInner('<span class="label label-primary">');
      return;
    }

    if (location.pathname.substr(0, 11) === '/_category/') {
      $('#content > ul').addClass('list-group');
      $("#content > ul li").addClass('list-group-item');
      return;
    }

    if (location.pathname.substr(0, 7) === '/_diff/') {
      $("small.revision").hide();
      return;
    }

    if (location.pathname === '/_activity') {
      $("ul.history").addClass('list-group');
      $("ul.history li").addClass('list-group-item');
      return;
    }

    if (location.pathname.substr(-1) === '/') { // Contents
      $('.updir').wrapAll('<ol class="breadcrumb"></ol>');
      $('.updir').wrap('<li></li>');
      $('.updir').each(function (i) {
        var q = $(this);
        if (i === 0) {
          q.text('Contents');
        } else {
          q.text(q.text().slice(0,-1));
        }
      });
    }
});
