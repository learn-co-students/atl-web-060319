class Account
  def initialize(owner, starting_balance)
    @owner = owner
    @balance = starting_balance
  end

  def collect_interest
    puts "You are now a millionaire"
  end

  def withdraw(amount)
    if @balance > amount
      @balance = @balance - amount
      puts "You get #{amount} dollars."
    else
      puts "RUH  ROH. Insufficient funds for lunch."
    end
  end

  def higher_balance?(other_account)
    self.balance > other_account.balance
  end

  def owner
    @owner
  end

  def owner=(new_owner)
    @owner = new_owner
  end

  def balance
    puts "LOG BALANCE ACCESS: #{DateTime.now}"
    @balance
  end

  def balance=(new_balance)
    if new_balance > 1000000
      puts "Lol, we aren't in the caymans wrong bank"
    else
      @balance = new_balance
    end
  end
end