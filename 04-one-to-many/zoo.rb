class Zoo
    attr_accessor :name, :city

    def initialize(name, city)
        @name = name
        @city = city
    end

    def animals
        Animal.all.select { |animal| animal.zoo == self }
    end

    def add_animal(species, name)
        Animal.new(species, name, self)
    end
end

