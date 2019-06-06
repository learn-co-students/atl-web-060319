class Zoo
    attr_accessor :name
    attr_reader :location

    def initialize(name, location)
        @name = name
        @location = location
        @animals = []
    end
end