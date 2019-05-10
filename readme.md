# Kyle Cui
## Setup

**API Server (Node.js)**
 1. cd to "apiserver"
 2. npm install
 3. npm start

After doing this, 

**Main Content**

1. cd to "mainpage"
2. npm install
3. npm start

Note: the ports used are 3000 (apiserver) and 3001 (mainpage). 
The clone should then be visible on http://localhost:3001/

## How It's Made
**Tech used:** React, Node.js, Express, JS, HTML, CSS


To start things off, I decided to set up my own API that returns word pairings like the original website. The pairings that the original website used were found at https://github.com/karan/ThisForThat/blob/master/thisforthat.py?fbclid=IwAR0VX85h1Rq3gOHZDPlo4glEGOJeze6ZokCjtBCi5EUDe6srxwo0EPLaN1Q, and I saved these pairings in a JSON (thisforthat.json) file which was loaded and manipulated via Node.js. After doing this, the pairings generated could be viewed at http://localhost:3000/thisforthat .

Then, I set up a React app to try to manipulate + display the data in a more appealing way. I created a React Component with "this" and "that" as properties. When the page is displayed, it first makes a call to our local server in order to update & display "this" and "that". Then, new pairings are updated & displayed each time the button is pressed. 



