# RNTR

[![Build Status](https://travis-ci.org/nodedoubt/cinemaplate.svg?branch=master)](https://travis-ci.org/RNTR/RenterApp)

The RNTR web platform (alpha) allows users to rent tools, household items, sports equipment, or nearly anything else from neighbors. Alternatively, RNTR allows users to monetize their underutilized posessions, helping convert junk into revenue.

<a href='rntr.herokuapp.com'>RNTR</a>

## Getting Started

    $ npm install
    $ webpack
    $ npm start

## Stack

 - Node.js
 - Express.js
 - PostgreSQL
 - Knex.js
 - React.js

## Tests

The RNTR backend was developed via TDD using Mocha and Chai. To run the test suite:
```
$ createdb RNTR_test
$ npm test
```

See ```Database Setup``` for more information.

## Continuous Integration

On every pull request, Travis will automatically run and perform the following:

 - Clone from the pull request.
 - Read the travis.yml file from the root directory of the repo.
 - Run npm install.
 - Start the server.
 - Run tests from the test directory.

If any of the above fail, Travis will report what went wrong on the Github pull request page.
If all of the above succeed, Travis will autodeploy to production when the pull request is merged to DEV-BRANCH.

##Database
See ```Database Setup```.

<img src='http://i.imgur.com/xAKLZ0F.png' />

## Road Map
  - In-app messaging for users
  - Rental confirmation/rejection options for item owners
  - Rental cancellation option for users
  - Delete Items and Delete Account option for users
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

- Install postgress:
	
	``` $ brew install postgresql ```

- Initialize a pg instance via terminal:
	
	``` $ postgres -D /usr/local/var/postgres ```

- Create a local database for RNTR via terminal:
	
	``` $ createdb RNTR_dev ```

- Run server.js:
	
	``` $ npm start ```

- To query a local database from terminal once a postgres instance is running:
	
	``` $ psql RNTR_dev ```


