A [gitit](https://github.com/jgm/gitit) theme based on [Bootstrap](http://getbootstrap.com/).


## How to install

Run the following commands:

    cd /path/to/your/gitit/wiki
    cp -a static static.back
    mv templates templates.back
    curl https://github.com/vsivsi/gitit-bootstrap/archive/master.tar.gz -o gitit-bootstrap.tar.gz
    gnutar -xaf gitit-bootstrap.tar.gz --strip-components 1
    cp templates.back/footer.st templates
    ./build.sh

Then restart gitit, and purge its cache:

    rm -r cache
