/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    
    //Testing suite for RSS Feeds
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /*  Make sure all feeds have urls */
         it('URL is defined and not empty', function() {
             allFeeds.forEach(function(feed) {
             feedLink = feed.url;
             expect(feedLink).toBeDefined();
             expect(feedLink.length).not.toBe(0);
             });
         });


        /*  Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name and not empty', function() {
            allFeeds.forEach(function(feed) {
                feedName = feed.name;
                expect(feedName).toBeDefined();
                expect(feedName.length).not.toBe(0);
            });
        });

    });


    /*  Testing  suite named "The menu" */

        describe('menu', function() {
             // Pre-define elements needed for testing hiding/showing of the menu
    var body = document.body;
    var menuIcon = document.querySelector(".menu-icon-link");
            
     // Make sure the menu is hidden initially

 it("body has 'menu-hidden' initially", function() {
      expect($('body').hasClass('menu-hidden')).toBe();
    });
            
     // Make sure menu icon toggles hide/show on clicking
            
 it("body toggles the class 'menu-hidden' on clicking menu icon", function() {
      menuIcon.click();
      expect($('body').hasClass('menu-hidden')).toBe();

      menuIcon.click();
      expect($('body').hasClass('menu-hidden')).toBe();
    });
  });

    // Testing suite for initial entries
    
         */ describe('Initial Entries', function() {
                // run before test
                beforeEach(function(done) {
                    loadFeed(0, done);
                });

                it('initial element is there', function(){
                    expect($('.feed .entry').length).toBeGreaterThan(0);
                });
            });

    // Testing suite for New Feed Selection

        describe('New Feed Selection', function(){
            var testfeed;

            // when a new feed is loaded by the loadFeed function that the content actually changes

            beforeEach(function(done) {
                loadFeed(0, function() {
                    testfeed = $('.feed').html();
                    loadFeed(1, done);
                });
            });

            // Check the newsfeed  html to be not same as previous.
            it('has been loaded', function(){
                expect($('.feed').html()).not.toEqual(testfeed);
            });
        });
}());
