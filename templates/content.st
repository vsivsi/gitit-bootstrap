<div id="main">
    <div id="content" class="panel-body">
        <h1 class="pageTitle">
            <a href="$base$$pageUrl$">$pagetitle$</a>
            $if(revision)$
                <small class="revision">Revision $revision$</small>
            $endif$
        </h1>
        $if(messages)$
            <div class="messages">
                $messages()$
            </div>
        $endif$
        $content$
    </div>
</div>
