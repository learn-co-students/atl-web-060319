class Animal
    attr_reader :name, :species
    attr_accessor :zoo
    
    @@all = []

    def initialize(species, name, zoo)
        @name = name
        @species = species
        @@all << self
        @zoo = zoo
    end

    def self.all
        @@all
    end

    
end
