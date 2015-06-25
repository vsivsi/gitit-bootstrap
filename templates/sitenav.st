<div class="sitenav col-sm-6 col-md-12">
  <div class="panel panel-default">
    <div class="panel-heading">Site</div>
    <div class="panel-body" role="navigation">
        <ul>
          <li role="presentation"><a href="$base$/">Front page</a></li>
          <li role="presentation"><a href="$base$/_index">Contents</a></li>
          <li role="presentation"><a href="$base$/_categories">Categories</a></li>
          <li role="presentation"><a href="$base$/_random">Random page</a></li>
          <li role="presentation"><a href="$base$/_activity">Recent activity</a></li>
          $if(wikiupload)$
          <li role="presentation"><a href="$base$/_upload">Upload a file</a></li>
          $endif$
          $if(feed)$
          <li role="presentation"><a href="$base$/_feed/" type="application/atom+xml" rel="alternate" title="ATOM Feed">Atom feed</a></li>
          $endif$
          <li role="presentation"><a href="$base$/Help">Help</a></li>
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
