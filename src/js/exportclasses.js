$(document).ready(function () {

    $("#exportbox").addClass("form-inline");
    $("#exportbox select").addClass("form-control input-sm");
    $("#export").addClass("form-control btn btn-default btn-sm");

    $("form#resetPassword").addClass("form-group");
    $("form#resetPassword fieldset input").addClass("form-control");
    $("form#resetPassword fieldset input[type='submit']").addClass("btn btn-primary");

    $("form#loginForm").addClass("form-group");
    $("form#loginForm fieldset input:not(.req)").addClass("form-control");
    $("form#loginForm fieldset input[type='submit']").addClass("btn btn-primary");
    $("form#loginForm fieldset #login").before("<br/>");

});
