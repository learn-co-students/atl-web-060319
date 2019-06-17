class CLI
  def run
    puts "Welcome to the app!"

    post = choose_a_post
    show_top_comments(post)
  end

  def show_top_comments(post)
    post.top_3_comments.each do |comment|
      puts "#{comment.user.name} says: #{comment.text}"
    end
  end
end