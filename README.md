A [gitit](https://github.com/jgm/gitit) theme based on [Bootstrap](http://getbootstrap.com/).

**Note!** This project is my in-progress attempt to update [Changaco/gitit-bootstrap](https://github.com/Changaco/gitit-bootstrap) to match the UI of the current version of `gitit`, and to incorporate other up-to-date dependencies.

Where desirable I also intend to introduce enhancements to the original code.

## How to install

Run the following commands:

    cd /path/to/your/gitit/wiki
    cp -a static static.back
    mv templates templates.back
    wget https://github.com/vsivsi/gitit-bootstrap/archive/master.tar.gz -O gitit-bootstrap.tar.gz
    # On Mac OS X the command below will be "gnutar"
    # because the system tar command doesn't support these options.
    tar -xaf gitit-bootstrap.tar.gz --strip-components 1
    cp templates.back/footer.st templates
    ./build.sh

Then restart gitit, and purge its cache:

    rm -r cache
