class CLI
  def run
    @prompt = TTY::Prompt.new
    @pastel = Pastel.new
    @user = nil

    puts @pastel.red("Welcome to my blogging app!")

    title_crawl

    while true
      main_menu
    end
  end

  def title_crawl
    puts "A new hope"
    sleep 2
    puts "\n\n"
    puts "It is a dark time for the rebellion..."
    sleep 2
    puts "Lol"
  end

  def main_menu
    `reset`
    choices = ["Login", "Read a post", "Write a post", "Exit", "Mess with Will"]
    choice = @prompt.enum_select("What would you like to do?", choices)

    if choice == choices[0]
      login
    elsif choice == choices[1]
      choose_post
    elsif choice == choices[2]
      write_post
    elsif choice == choices[3]
      puts "Thanks for using the app.\n\n"
      exit
    elsif choice == choices[4]
      `say 'i see you, Will'`
      puts "thanks for using the app"
      exit
    end
  end

  def login
    puts "What is your name?"
    name = gets.chomp
    @user = User.find_or_create_by(name: name)
  end

  def write_post
    if @user
      title = prompt_for_title
      content = prompt_for_content
      Post.create(title: title, content: content)
    else
      puts "You have to be logged in to write posts."
      sleep 3
    end
  end

  def choose_post
    puts "Please choose the number of the post you want to read:\n\n"
    Post.all.each do |p|
      puts p.short_description
    end

    post_id = gets.chomp.to_i
    post = Post.find(post_id)
    puts post.detail_view

    sleep 4
  end
end