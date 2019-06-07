## Congratulations!

Note about blogs.


You've made it to the end of your first week at Flatiron!

...How does it feel?

[drinking-from-the-firehose]: http://redlinernotes.com/images/herp-derp.gif





## Today's Plan

* Really loved the engagement in yesterday's lecture
* I should probably call on people randomly more huh?
  * Quick 2 minute sidebar to write `the_hat`.



We're building a twitter app.
Let's start by reviewing our starting code, line by line...

Important questions:
  * Why does a tweet have a `@user` but the user doesn't have `@tweets`?
    * What are some ways things could go wrong if we had `@user` and `@tweets`?
  * Why can we call `Tweet.all` from another file?




Okay. So now, we need to figure out how to represent our many to many relationship.
And if we want to keep the data in only one place (i.e. a SSOT) we'll need another class, a Like.

* Y'all are gonna tell me how to write this thing.



Well that seems like a pretty simple class. Now we should use it to let people like tweets. Let's look back at our deliverables. `like_tweet` is probably the simplest place to start.



Okay, are our deliverables done?

This might be a good time for review:
  * `each`, `map`, and `select` can be tricky. How do you know which to use? What are the differences?