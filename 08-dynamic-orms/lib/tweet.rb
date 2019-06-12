class Tweet < BasicORM
  attr_reader :id
  attr_accessor :message, :username

  def initialize(props={})
    @id = props['id']
    @message = props['message']
    @username = props['username']
    self.save unless self.id
  end
end
