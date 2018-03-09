##Keep in mind##
If you don't finish this task 100% that's okay we understand there is quite a lot of work involved here. For the parts that you don't complete just write a sentence or two on why you didn't complete that component and if you had more time how you would approach it. Feel free to use any frameworks or plugins you think you need to complete the task. 

**We suggest using plugins like**

* Bootstrap to help with the front end
* A NodeJS module that helps with serving content like Express

----------------------------------------------

##What is the task?##
We want a small web application that lets users post about new websites and design ideas that they would like to share with other web development enthusiasts. The task is a simple web application that when loaded retrieves all previous user submissions from the server via a HTTP GET request and displays them in a vertical list, similar to a blog however anyone can make a new post. The list of user posts is ordered with the newest posts first. If a post has a Subject URL included then an iframe using the Subject URL as the source is displayed between directly below the post's title, this is to let users show the website they're talking about in their post.

* *Front End* - An Angular app that lists the existing user posts and lets the users submit new posts.
* *Back End* - Does what a server should do, serves the content, saves new posts submitted by users.
* *Database* - Conists of a single table that stores user submissions.

At the top of the page there is a 'Submit new post' button which should open a modal form. This form has 4 fields:

* Title        : (required) this is the title of the new post.
* Body         : (required) this is the actual content of the post, it can be very long sometimes but should never be longer than 1000 characters.
* Category     : (required) a drop down with the following options: 'Lifestyle', 'Travel', 'Video'
* Subject URL  : (optional) this can be the URL of any webpage. eg: https://www.google.com

When the user submits the form it is sent to the server using a POST request (eg: using the Angular $http service). The server will save the fields in the database.

When a post is displayed in the list it should take a form similar to:

```
#!html
 <!--for each post-->
  <div>
      <heading>post's title here</heading>
      <iframe source='post subject url'></iframe>
      <text>post's body of text here</text>
  </div>
```


If the post does not have a Subject URL then the iframe should not be shown for this post. Hint: *ng-if*

**Bonus points**

* When a new post is saved, the main page could automatically display the new post at the top of the list without the user having to refresh.
* Client side form validation
* Making sure the user data is saved carefully without the risk of an SQL injection attack.
* Server side form validation
* Pagination with 3 posts maximum per page.
* The server runs reliably and doesn't crash if unexpected data is received from a client.

----------------------------------------------

##What is this task for?##
This task is an opportunity for you to demonstrate your abilities in:

* HTML / CSS
* Angular or Angular 2 (whichever you prefer)
* MySQL
* NodeJS

----------------------------------------------

##When is this task due?##
From the time you receive this task you have 3 days to work on it. Send us an email when you're happy with your work. This email should include:

* a link to the Github repository so we can access the code
* a list of the features you didn't complete with a couple of sentences for each explaining if you had more time how you would have approached it.

----------------------------------------------

##How to submit your work to us?##
Put everything we would need into a Github repository and send us the link. This repository should include:

* The entire NodeJS project so we can simply download it and start the server locally to test it.
* The SQL we will need to create the database table you used.

Don't worry if your visual design isn't fantastic, this task isn't for designers after all. We are very excited to see what you come up with, best of luck!