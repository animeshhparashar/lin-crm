# Lin CRM

The Repository consists of the following modules,

### docs

This contains all the documents related to the project, including documentation of REST API 

### server

This directory contains code for the REST API server,
to directly install the dependencies and run the project, 
move to the server directory and run the following commands.
(You need to have maven installed to run the project)

```bash
mvn install
mvn spring-boot:run
```
This should start the api at <http://localhost:8080>

In case port is already in use, you can also run the project at a different port via:
```bash
# This starts the development server on port 8010,
# but you can use any port you'd like
mvn spring-boot:run -Dspring-boot.run.arguments=--server.port=8010
```

### user-interface

This directory contains code for the user interface,
to directly install the dependencies and start the start development server,
move to user-interface directory and run the following commands.
(You need to have node installed to run the project)

```bash
npm install
npm start
```

`npm start` should open a browser window to <http://localhost:3000>

By default react runs on port 3000. To change this port you can run:

```bash
# This starts the development server on port 4205,
# but you can use any port you'd like
export PORT=4205 && npm start
```
