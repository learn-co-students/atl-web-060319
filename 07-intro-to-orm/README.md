# Intro to ORMs (Object Relational Mappers)

### Timeline

* Stop by 11:15 so we have a 15 minute break before career services talk.
* 60 seconds: What is an ORM? Why do you want one?
* 4 minutes: Review Rakefile, environment, Gemfile. Seen already in labs.
* Run the app, let's build an ORM for it to use.
  * Start with reading out of the database.
  * Then we can add update/delete.
* If there is time, we can try to think about how to make the ORM _reusable_ by new models.
  * Otherwise, we'll leave that for tomorrow.

# CRUD REVIEW

A tweet belongs to a user and has some message content - must have user_id

The belongs_to must have a user_id on it

A user has a username, and has many tweets

A tweet can have many tags and a tag can have many tweets
