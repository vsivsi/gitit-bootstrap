$(document).ready(function () {

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
            q.text(q.text().substr(1));
            q.prepend('<span class="glyphicon glyphicon-minus"/>&nbsp;');
            q.wrapInner('<span class="label label-danger">');
          } else if (q.text().substr(0,1) === '+') {
            q.text(q.text().substr(1));
            q.prepend('<span class="glyphicon glyphicon-plus"/>&nbsp;');
            q.wrapInner('<span class="label label-success">');
          } else {
            q.wrapInner('<span class="label label-primary">');
          }
        });
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
    }

    if (location.pathname.substr(0, 7) === '/_diff/') {
      var revText = $("h2.revision").text();
      var re = /Changes from ([0-9a-f]+) to ([0-9a-f]+)/;
      var parsedText = re.exec(revText);
      var fromAbbr = "<code>" + parsedText[1].substr(0,7) + "</code>";
      var toAbbr = "<code>" + parsedText[2].substr(0,7) + "</code>";
      $("h2.revision").remove();
      $("a.rev").html('Changes: ' + fromAbbr + ' <span class="glyphicon glyphicon-arrow-right"></span> ' + toAbbr);
      $("a.rev").attr('href', location.pathname);
    }

    if ($('#tabDiv > ul').size() === 1) {
      $('#tabDiv > ul').addClass('nav nav-pills');
      $('#tabDiv > ul li.selected').addClass('active').attr('role', 'presentation');
      if (location.pathname.substr(0, 2) !== '/_') {
        var pageName = $('.pageTitle').text().trim().split('/');
        pageName.unshift('Contents');
        var pageTitle = pageName.pop();
        var pagePath = $('.pageTitle').attr('href').split('/');
        pagePath.pop();
        if (pagePath.length === 0) pagePath = [''];  // Home page special case
        pagePath = pagePath.map(function (val, idx) {
            return pagePath.slice(0, idx+1).join('/') + '/';
        });
        pagePath[0] = '/_index';
        $('.pageTitle').text(pageTitle);
        // $('#pathNav').prepend('<ol id="bcNav" class="breadcrumb"></ol>');
        pageName.forEach(function (val, idx) {
          var code = '<li' + ((idx === pagePath.length-1) ? ' class="active"' : '') +  '><a href="' + pagePath[idx] + '">' + val + '</a></li>';
          $('#pageAnchor').before(code);
        });
        if ($("a.rev").size() === 1) {
          var revText = 'Revision: <code>' + $("a.rev").text().substr(0,7) + '</code>';
          $("a.rev").html(revText);
        }
      }
      return;
    }

    $('div.pageTools').hide();
    $('#tabDiv').html($($('#topNav').detach()));

    if ((location.pathname === '/_login') || (location.pathname === '/_register')) {
      $('form#loginForm br').remove();
      $('form#loginForm label').each(function (i,e) {
         $(e).next(':input').addBack().wrapAll('<div class="form-group"></div>'); });
      $("form#loginForm input:not(.req)").addClass("form-control");
      $("form#loginForm input[type='submit']").addClass("btn btn-primary");
      $("form#loginForm").after("<p/>");
      return;
    }

    if (location.pathname === '/_resetPassword') {
      $('form#resetPassword br').remove();
      $('form#resetPassword label').each(function (i,e) {
         $(e).next(':input').addBack().wrapAll('<div class="form-group"></div>'); });
      $("form#resetPassword input").addClass("form-control");
      $("form#resetPassword input[type='submit']").addClass("btn btn-primary");
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

    if (location.pathname === '/_activity') {
      $("ul.history").addClass('list-group');
      $("ul.history li").addClass('list-group-item');
      return;
    }

    if (location.pathname === '/_upload') {
      $('div#content form').attr('id','uploadFile');
      $('form#uploadFile br').remove();
      $('form#uploadFile p > *').unwrap();
      $('form#uploadFile label').each(function (i,e) {
         $(e).next(':input').addBack().wrapAll('<div class="form-group"></div>'); });
      $("form#uploadFile input").addClass("form-control");
      return;
    }

    if ((location.pathname === '/_index') || (location.pathname.substr(-1) === '/')) { // Contents
      $('.updir').wrapAll('<ol id="contentsNav" class="breadcrumb"></ol>');
      $('.updir').wrap('<li></li>');
      $('.updir').each(function (i) {
        var q = $(this);
        if (i === 0) {
          q.text('Contents');
        } else {
          q.text(q.text().slice(0,-1));
        }
      });
      $('#bcNav').replaceWith($($('#contentsNav').detach()));
      $('.index').addClass('list-group');
      $('.index li').addClass('list-group-item');
      $('.page').prepend('<span class="glyphicon glyphicon-file"/>&nbsp;');
      $('.folder').prepend('<span class="glyphicon glyphicon-folder-open"/>&nbsp;&nbsp;');
      return;
    }
});
