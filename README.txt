Put some stuff about how to use the project here.















How to start up a local database:

1) install postgress, if you don't already have it on your machine:
	brew install postgresql
2) initialize a pg instance via terminal:
	postgres -D /usr/local/var/postgres
3) create a local database for RNTR via terminal:
	createdb RNTR_dev
4) run server.js using node, nodemon, or npm start:
	nodemon server/server.js

How to query a local database from terminal (helpful for testing):

1) after starting a local db (see above), run the following in terminal:
	psql RNTR_dev
2) query away. (remember to end all statements with semicolons)






