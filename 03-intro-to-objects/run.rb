require 'pry'
require_relative 'account'

account1 = Account.new("brit", 7.50)
account1.balance = 45000000000000

account2 = Account.new('vanessa', 40000000)

puts "Account1 is higher balance than account2?"
puts account2.higher_balance?(account1)

binding.pry

# account1 = { owner: 'brit', balance: 7.45 }
# account2 = { owner: 'vanessa', balance: 400000 }
# account3 = { owner: 'will', balanc: 600 }

# def deposit(account, amount)
#   account[:balance] = account[:balance] + amount
# end
