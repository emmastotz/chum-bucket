### **Chum Bucket**
#### *Find the right chum. Don't get catfished.*

##### PROBLEM/SOLUTION
Chum Bucket is a friend finder app. Answer a few simple questions and Chum Bucket will match you with a new friend.

##### Chum Bucket Overview
* server.js (Sets up our app to use express and to listen at a port. It also requires the next two files for use.)
* package.json
* package-lock.json
* app
  * data
    * friend.js (Holds an array of friend objects so that the user has some options to match to.)
  * public
    * assets
      * css
        * style.css (Main stylesheet.)
        * reset.css (Resets any style that the browser might have preloaded. )
      * img
    * home.html (Initial landing page.)
    * quiz.html (The page that holds the quiz. Logic at the bottom adds the information from our /api/friends link to match the user with a friend.)
  * routes
    * htmlRoutes.js (Sets up the paths to get to the various html pages used.)
    * apiRoutes.js (Where the compatibility logic lives; uses a GET to get our friend data as a json object. Uses a POST to work through the compatibility logic and return the best match for the user.)

##### Instructions to Run the App
* Hosted on Heroku here: https://immense-wave-93212.herokuapp.com/home

* OR clone the file from github. (https://github.com/emmastotz/chum-bucket)
* Install all dependencies needed to run the program ("npm install").
* Run the applications using node in the command line ("node server.js") and open up browser with correct port to see the magic.

##### Technologies Used
* HTML5
* CSS3
* Bootstrap 4
* JavaScript
* Node
* NPMs: Express, body-parser, path

This app was created entirely by Emma Stotz