User.destroy_all
Post.destroy_all
Comment.destroy_all

brit = User.create(name: "Brit Butler")
kaeland = User.create(name: "Kaeland Chatman")
will = User.create(name: "William George")

first = Post.create(
  title: "New Day, New Blog",
  content: "It's Monday and I'm still asleep. Please send help.",
  user_id: brit.id
)

partitioning = Post.create(
  title: "Learning to Linux",
  content: "How does hard drive partitioning work? Hope I don't break my pc lulz",
  user_id: will.id
)

Comment.create(
  post_id: partitioning.id,
  user_id: brit.id,
  content: "BE CAREFUL! And maybe just try out linux in a virtual machine like Virtualbox first."
)

partitioning.comments.create(
  content: "Will, you should check out Ubuntu. It's pretty great.",
  user_id: kaeland.id
)

brit.posts.create(
  title: "Time for Lunch!",
  content: "Did you enjoy this lecture? Boy, I hope so."
)
