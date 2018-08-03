# che-service-plugin
Che Plug-in with Theia plug-in and container definition providing a service


here are the different folders:

## service
I contains the docker image used to serve a very simple REST API using json-server
db.json file contains the json file that is served automatically and supports like CRUD operations
more information in the README of this folder

Note: the docker image is automatically published using dockerhub build from source
https://hub.docker.com/r/wsskeleton/che-hello/

note: there is a `build.sh` script to build locally the docker image

## ui
This is a pure Theia plug-in. This plug-in allows to list users and create users on the service provided by the REST-API service provided by the docker image
When this plug-in is installed, there are two available commands in command palette:
- Che UI Service:List users (allow listing current users)
- Che UI Service:Create user (allow creating a user)


note: there is a `build.sh` script to build locally the npm plug-in. It can also be tested using the self-hosting mode in theia.

#### requirements: yarn + nodejs

## assembly

In this folder, the Che plug-in is generated (`che-service-plugin.tar.gz`) including:
- che-plugin.yaml file (from `etc/` folder) describing the Che plug-in like the endpoint, docker images and theia plugins
- che-dependency.yaml file (from `etc/` folder) linking the Theia plug-in to a local file
- che_ui_service_plugin.theia the Theia plug-in

note: there is a build.sh allowing to recreate this .tar.gz file


### Building

In the root folder, `build.sh` script can build the docker image, build the theia plug-in and create Che plug-in file.

### Using

In Releases section, https://github.com/ws-skeleton/che-service-plugin/releases, a new Che plug-in is published for each commit occuring into master.

### CI job
Che plug-in is managed by a Travis-CI job
--> https://travis-ci.org/ws-skeleton/che-service-plugin/builds

Docker image build (service directory) is managed by Dockerhub automated build
https://hub.docker.com/r/wsskeleton/che-hello/builds/







