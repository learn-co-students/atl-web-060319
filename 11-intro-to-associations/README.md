## README

### Today's Objectives

* Use associations to relate models: User < Comment > Post
* Use a seed file to put info in the database
* Review "bonus" association methods

10am - Associations lecture
01pm - Classroom chat about projects
02pm - Project pitches!
  * What problem do you want to solve?
  * What models and relationships do you have planned?
  * How are you thinking about diving up the work?

### 1pm Project Demo

* Demo a CLI class
   - Maybe use [tty gems](https://piotrmurach.github.io/tty/)
* Add some validations to enforce rules about our data
* Maybe do something cute with backticks, `open`, `say`, `afplay`, etc
   * ~/p/f/b/a/links ❯❯❯ say 'good morning tez'
   * ~/p/f/b/a/links ❯❯❯ open "http://google.com"
   * ~/p/f/b/a/links ❯❯❯ afplay example.mp3

Active Record naming conventions are [important!][naming conventions].

Process for adding relationships:

* Decide on the relationship type
* Check the [associations guide][assoc] to see the table layout.
* Write the migrations.
* Write the classes and put the associations in them.

[assoc]: https://guides.rubyonrails.org/association_basics.html#the-has-many-association
[naming conventions]: https://guides.rubyonrails.org/active_record_basics.html#convention-over-configuration-in-active-record