<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
?>
[ {
	"title" : "The Cloud",
	"xp" : "5 xp each",
	"badge" : "cloud",
	"unicode" : "\uF21F",
	"description" : "The cloud has become a big buzz word and as the hype settles and understanding increases, people are less afraid of cloud services. For small development companies or even big ones, the cloud is a perfect solution. For example, snapchat's backend runs on Google app engine. Netflix uses amazon web services (thier EC2 service, I believe). We can use a cloud service, so that you can get expirence deploying your application to a server. I do not care which one you choose but a few to look at are amazon web services (AWS), Heroku, Google App Engine, and Microsoft Azure. I believe all of these provide free services and for the amount of traffic you will have during the semester, you should not exceed the free service. Amazon Web Service and Microsoft (i think microsoft does) offer a virtual machine that you can build your application server on from scratch and their will make it scalable for you. If you use Google App Engine, you will have to setup your app a little differently so that it works with thier architecture. Basically, Google provides everything, you just configure your app with an ID from Google and hit a button. Its the other extreme from Amazon. I do not know much about how Heroku works but I know it offers hosting.<br><br>For each assignment you host on a cloud service, you will receive 5 points extra credit. Email me a link to your hosted site when you deploy your final solution. If you use a cloud service that has dynamic links, we can work something out.",
	"id" : 1
}, {
	"title" : "Participation",
	"xp" : "1 xp per class",
	"badge" : "local_activity",
	"unicode" : "\uF1DF",
	"description" : "For each class you attend and activity contribute towards, you will get one xp. If you attend all of the sessions, you will get an extra 5 xp! If a class is canceled for any reason, that will not affect you earning this badge.",
	"id" : 2
}, {
	"title" : "Sleeping Bear",
	"xp" : "45 xp",
	"badge" : "snooze",
	"unicode" : "\uF32C",
	"description" : "Redo the database assignment but use a library called hibernate which is an ORM (object relational model) abstraction.",
	"id" : 3
}, {
	"title" : "Template of doom",
	"xp" : "45 xp",
	"badge" : "view_quilt",
	"unicode" : "\uF322",
	"description" : "Redo the database assignment but use a library called spring-jdbc which is an abstraction over SQL.",
	"id" : 4
}, {
	"title" : "Jynx",
	"xp" : "40 xp",
	"badge" : "people",
	"unicode" : "\uF209",
	"description" : "Redo the database assignment but use a library called jinq.",
	"id" : 5
}, {
	"title" : "Mongo",
	"xp" : "50 xp",
	"badge" : "lens",
	"unicode" : "\uF26D",
	"description" : "Redo the database assignment but instead of using mySQL, use a noSQL solution called mongoDB.",
	"id" : 6
}, {
	"title" : "CORS",
	"xp" : "25 xp",
	"badge" : "cloud_off",
	"unicode" : "\uF21B",
	"description" : "Research what CORS is and write a servlet filter to enable CORS. Write a one page document about what cors is and describe what your filter does and why it is needed.",
	"id" : 7
}, {
	"title" : "2 Birds, 1 Stone",
	"xp" : "50 xp",
	"badge" : "devices",
	"unicode" : "\uF295",
	"description" : "Look up a tool called sitemesh. Write a small application that has 2 or more pages and use site mesh to demostrate how it makes html development easier. Are their other tool like sitemesh available? Are they open source? Research other tools similar to sitemesh and write up a high level comparison between them. If you hate writing papers, then create the same application you did with sitemesh but with one of these other tools.",
	"id" : 8
}, {
	"title" : "Test Master",
	"xp" : "10 xp each",
	"badge" : "check",
	"unicode" : "\uF26B",
	"description" : "Look up the following tools: Findbugs, junit, Mockito, easymock, jmock, Cobertura, Sonarqube (formally sonar), and PMD.<br><br>Write junit tests for each assignment and generate a code coverage report. Having 100% code coverage is really tough to do and maintain. It can be very time consuming and obsessive, yet very beneficial in stability and longevity of an application. However, test cases must be maintained along with the actual application. Even though you build a stronger application, you have to maintain an application(the test cases) whose goal it to test your application.<br><br>For every 10% of code coverage, you earn .5pt xp. For example, if you have 22.4% code coverage, you will earn 1.12 xp. The other 5 xp will be earned by uploading your code coverage and other reports with your project to github. In addition, I should be able to generate the report when I pull down your code and build your project to verify.",
	"id" : 9
}, {
	"title" : "Droid",
	"xp" : "100 xp",
	"badge" : "android",
	"unicode" : "\uF33B",
	"description" : "Build an android client for any assignment or for this website. If you do it for this website. feel free to ask me for help on the API services.",
	"id" : 10
}, {
	"title" : "Docker",
	"xp" : "50 xp",
	"badge" : "present_to_all",
	"unicode" : "\uF3E4",
	"description" : "Reseach what Docker is and build an image of your tomcat server with an app installed in tomcat. Document how someone else would be able to use your docker image and have your tomcat server and app up and running.",
	"id" : 11
}, {
	"title" : "Swag",
	"xp" : "75 xp",
	"badge" : "mood",
	"unicode" : "\uF214",
	"description" : "Build a simple RESTful api that has a few GET and POST methods. You will need at least 4 different rest endpoints to earn credit for this. The endpoints can do anything you want, but at least 2 of them need to accept a payload of data to process (similar to form submission). Look up Swagger (as it pertains to web development not as it pertains towards arrogance) and swagger-ui and have it document your rest api. You should be able to play with your rest api with swagger and test out your code.",
	"id" : 12
}, {
	"title" : "Tic Tac Toe",
	"xp" : "50 xp",
	"badge" : "grid_on",
	"unicode" : "\uF214",
	"description" : "Finish the implementation for tic-tac-toe as discussed in class. Fork this <a href='https://github.com/benbaxter/tic-tac-toe-web'>repo</a> for a starting point.",
    "id" : 13
}, {
	"title" : "Super Effective!",
	"xp" : "200 xp",
	"badge" : "chat",
	"unicode" : "\uF262",
	"description" : "Read the book Effective Java by Joshua Bloch and create a small presentation (no more than a 20 minutes) and give it to the class. Please coordinate with me on when you would like to give your presentation so I can adjust the schedule accordingly. This badge will only be awarded to the first person who completes it.",
	"id" : 14
}]