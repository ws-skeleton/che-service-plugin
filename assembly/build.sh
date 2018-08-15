#!/bin/sh
set -e
set -u

if [ -f che-service-plugin.tar.gz ]; then
    rm che-service-plugin.tar.gz
fi

if [ ! -f ../ui/che_ui_service_plugin.theia ]; then
    echo "Theia plug-in does not exist. Please compile Theia plug-in first"
    echo "in ../ui directory"
    exit 1
fi

tar cvf che-service-plugin.tar -C ../ui che_ui_service_plugin.theia
cd etc
tar uvf ../che-service-plugin.tar .
cd ..
gzip che-service-plugin.tar

