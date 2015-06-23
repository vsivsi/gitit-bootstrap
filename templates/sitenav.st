<div class="sitenav col-sm-6 col-md-12">
  <div class="panel panel-default">
    <div class="panel-heading">Site</div>
    <div class="panel-body">
      <ul>
        <li><a href="$base$/">Front page</a></li>
        <li><a href="$base$/_index">All pages</a></li>
        <li><a href="$base$/_categories">Categories</a></li>
        <li><a href="$base$/_random">Random page</a></li>
        <li><a href="$base$/_activity">Recent activity</a></li>
        $if(wikiupload)$
        <li><a href="$base$/_upload">Upload a file</a></li>
        $endif$
        $if(feed)$
        <li><a href="$base$/_feed/" type="application/atom+xml" rel="alternate" title="ATOM Feed">Atom feed</a></li>
        $endif$
        <li><a href="$base$/Help">Help</a></li>
        <li> </li>
      </ul>
      <form action="$base$/_go" method="post" id="goform">
        <input type="text" name="gotopage" id="gotopage"
        class="form-control input-sm" placeholder="Go to page" />
      </form>
      <form action="$base$/_search" method="get" id="searchform">
        <input type="text" name="patterns" id="patterns"
        class="form-control input-sm" placeholder="Search" />
      </form>
    </div>
  </div>
</div>
<!-- This is because there are some pages that don't use the page template,
(e.g. password reset) but they all seem to load the site nav sidebar. -->
<link rel="stylesheet" href="$base$/css/bootstrap.min.css" />
<link rel="stylesheet" href="$base$/css/gitit.min.css" />
<script src="$base$/js/jquery.min.js"></script>
<script src="$base$/js/bootstrap.min.js"></script>
<script src="$base$/js/jquery-ui-1.10.4.custom.min.js"></script>
<script src="$base$/js/gitit.min.js"></script>
