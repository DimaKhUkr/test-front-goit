This application is implemented on React.js

Technical task.

According to the layout, you need to implement user cards. When you click on the
Follow button, the text changes to Following. The color of the button also
changes. And your number of followers is added to the number of followers. That
is, the initial number is 100,500 followers. When you click on the button, it
will be 100,501. When updating a page, the final result of the user's actions
should be recorded. That is, if you click on the button and refresh the page,
the button remains Following with the corresponding color, and the number of
followers does not decrease to the initial value. When you click on the button
again, its text and color change to the original state. The number of followers
also changes. It decreases by 1 (100,500). In the code, the number 100,500
should be written as a single value (100500). The UI should display it should be
displayed separately by commas (100,500). Create your personalized backend for
development using the mockapi.io UI service. Create a user resource. Use the
resource constructor and describe the user object as described below.

Also, complete an additional task

Create a routing using React Router.

The application should have the following routes. Users who enter via
anon-existent route non-existent route should be redirected to the home page.
'/' - the Home component, the home page. Styling and design are at your
discretion '/tweets' - tweets component, the page with tweets displayed On the
tweets page, there should be a Back button that leads to the main page.

Add filtering. It should be a Dropdown with 3 options (design at your
discretion): show all, follow, followings show all - show all tweets. follow -
show tweets that have the following status. followings - show tweets with the
following status
