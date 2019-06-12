class BasicORM
  def self.table_name
    "#{self.name.downcase}s"
  end

  def self.column_names
    table_info = DB[:conn].execute("PRAGMA table_info(#{self.table_name})")
    table_info.map { |column_info| column_info['name'] }
  end

  def self.non_id_columns
    self.column_names.drop(1).join(", ")
  end

  def non_id_values
    values = self.class.column_names.drop(1).map do |column_name|
      "'#{self.send(column_name.to_sym)}'"
    end
    values.join(", ")
  end

  def self.all
    hashes = DB[:conn].execute("SELECT * FROM #{table_name}")
    hashes.map { |options| self.new(options) }
  end

  def save
    insert_sql = "INSERT INTO #{self.class.table_name} (#{self.class.non_id_columns})
                  VALUES (#{self.non_id_values})"
    DB[:conn].execute(insert_sql)
  end
end