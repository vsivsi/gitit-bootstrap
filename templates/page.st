<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
          "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>$pagetitle$ - $wikititle$</title>
    <link rel="stylesheet" href="$base$/css/bootstrap.min.css" />
    <link rel="stylesheet" href="$base$/css/gitit.min.css" />
    $if(feed)$
    <link href="$base$/_feed/" type="application/atom+xml" rel="alternate" title="Sitewide ATOM Feed" />
    <link href="$base$/_feed$pageUrl$" type="application/atom+xml" rel="alternate" title="This page's ATOM Feed" />
    $endif$
  </head>
  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-10 col-md-push-2" id="maincol">
          <div class="panel panel-default">
            <div class="hidden-print panel-heading">
              <div id="pathNav" role="navigation">
              </div>
              <div role="navigation">
                $userbox()$
                $tabs$
              </div>
            </div>
            $content()$
            $if(markuphelp)$
              $markuphelp()$
            $endif$
          </div>
        </div>
        <div class="col-md-2 col-md-pull-10 hidden-print" id="sidebar">
          <div class="row">
            $logo()$
            $if(sitenav)$
              $sitenav()$
            $endif$
            $if(pagetools)$
              $pagetools()$
            $endif$
          </div>
        </div>
        <div class="col-md-10 col-md-push-2 hidden-print">
          $footer()$
        </div>
      </div>
    </div>
    <script src="$base$/js/jquery-1.11.3.min.js" type="text/javascript"></script>
    <script src="$base$/js/jquery-ui-1.11.4.min.js" type="text/javascript"></script>
    <script src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML" type="text/javascript"></script>
    <script src="$base$/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="$base$/js/gitit.js" type="text/javascript"></script>
    $expire()$
    $getuser()$
  </body>
</html>
