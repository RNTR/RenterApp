# RNTR

[![Build Status](https://travis-ci.org/nodedoubt/cinemaplate.svg?branch=master)](https://travis-ci.org/RNTR/RenterApp)

## Getting Started

    $ npm install
    $ webpack
    $ npm start

## Tests

The RNTR backend was developed via TDD using Mocha and Chai. To run the test suite:
- $ createdb RNTR_test
- $ npm test

See ```Database Setup``` for more information.

## Continuous Integration

On every pull request Travis will automatically run and perform the following:

 - Perform clone from the DEV-BRANCH at the specific pull request.
 - Create a Docker container from the cloned repo.
 - Read the travis.yml file from the root directory of the repo for the Node version.
 - Run npm install.
 - Start the server.
 - Run tests from the test directory.

If any of the above fail, travis will report on what went wrong on the Github pull request page.

## Stack

 - PostgreSQL
 - React.js
 - Node.js
 - Express.js

##Database
See ```Database Setup```

## Road Map
  - In-app messaging for users
  - Rental confirmation/rejection options for item owners
  - User rating/review system
  - Booking items by-the-hour
  - Email notifications
  - In-app notifications
  - Filter searches by item category, condition, and availability dates
  - Payment processing integration (Paypal, Venmo)
  - Enhanced UI for displaying item availability
  - 'Request an Item' functionality
  - City-specific home pages

## Database Setup
```

1) install postgress, if you don't already have it on your machine:
	brew install postgresql
2) initialize a pg instance via terminal:
	postgres -D /usr/local/var/postgres
3) create a local database for RNTR via terminal:
	createdb RNTR_dev
4) run server.js using node, nodemon, or npm start:
	nodemon server/server.js
5) seed database with starter users
	knex seed:run

How to query a local database from terminal (helpful for testing):

1) after starting a local db (see above), run the following in terminal:
	psql RNTR_dev
2) query away. (remember to end all statements with semicolons)
