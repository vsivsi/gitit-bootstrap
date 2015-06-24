$(document).ready(function(){
    if (location.pathname.substr(0, 10) != '/_history/') return;

    $("ul.history").addClass('list-group');
    $("li.difflink").addClass('list-group-item');

    $(".difflink").draggable({helper: "clone"});
    $(".difflink").droppable({
         accept: ".difflink",
         drop: function(ev, ui) {
            var targetOrder = parseInt($(this).attr("order"));
            var sourceOrder = parseInt($(ui.draggable).attr("order"));
            var diffurl = $(this).attr("diffurl");
            if (targetOrder < sourceOrder) {
                var fromRev = $(this).attr("revision");
                var toRev   = $(ui.draggable).attr("revision");
            } else {
                var toRev   = $(this).attr("revision");
                var fromRev = $(ui.draggable).attr("revision");
            };
            location.href = diffurl + '?from=' + fromRev + '&to=' + toRev;
        }
    });
    $("#content").append("<h4><small>Drag one revision onto another to see differences.</small></h4>");
});
