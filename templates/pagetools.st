<div class="pageTools col-sm-6 col-md-12">
    <div class="panel panel-default">
        <div class="panel-heading">This page</div>
        <div class="panel-body" role="navigation">
            <ul>
                <li role="presentation"><a href="$base$/_showraw$pageUrl$$if(revision)$?revision=$revision$$endif$">Raw page source</a></li>
                <li role="presentation"><a href="$base$$pageUrl$?printable$if(revision)$&amp;revision=$revision$$endif$">Printable version</a></li>
                <li role="presentation"><a href="$base$/_delete$pageUrl$">Delete this page</a></li>
                $if(feed)$
                <li role="presentation"><a href="$base$/_feed$pageUrl$" type="application/atom+xml" rel="alternate" title="This page's ATOM Feed">Atom feed</a></li>
                $endif$
            </ul>
            $exportbox$
        </div>
    </div>
</div>
