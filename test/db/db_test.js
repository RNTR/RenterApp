var TestHelper = require('../test-helper.js');

var request = require('supertest');
var db = require(/* location of db.js, or whatever file this winds up testing **/) ;

describe("The Database", function() {

  var app = TestHelper.createApp()
  // app.use('/', routes)
  app.testReady()


  //do some setup stuff - create tables, populate db with test data, etc.



  it_("does something", function * () { //put a test condition here.

    //
    // Notice how we're in a generator function (indicated by the the *)
    // See test/test-helper.js for details of why this works. [gilbert]
    //
    yield request(app)
      .expect(function(response){
        expect(/* tested thing **/).to.equal(/* expected result **/) //or use .to.include, .to.whatever, etc.
      })
    // 
    //Example:
      // .get('/api/tags-example')
      // .expect(200)
      // .expect(function(response) {
      //   expect(response.body).to.include('node')
      })
  })
})
