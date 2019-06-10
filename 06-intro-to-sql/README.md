# Intro to SQL

## Objectives

* Be able to define CRUD
* Be able to define Foreign Key
* Recognize Normalized vs Denormalized data
* Recognize Client Commands vs Table Operations vs Data Operations
* Know the only SQL "collection" is a table


### Thus Far...

* In-Memory - (RAM) The data or memory is lost when the program exits.
* Persistent - (Disk) The data is kept if power is lost or the program is exited and reopened.

Now, SQL is introduced to let us work with RDBMS systems:
* MySQL
* PostgreSQL
* Oracle SQL database
* MS SQL Server
* Sqlite ( <-- we'll spend most of our time with this one )


## Challenges

1. Write the SQL to return all of the rows in the artists table?

```SQL

```

2. Write the SQL to select the artist with the name "Black Sabbath"

```SQL

```

3. Write the SQL to create a table named 'fans' with an autoincrementing ID that's a primary key and a name field of type text

```sql

```

4. Write the SQL to alter the fans table to have a artist_id column type integer?

```sql

```

5. Write the SQL to add yourself as a fan of the Black Eyed Peas? ArtistId **169**

```sql

```

6. Check out the [Faker gem](https://github.com/stympy/faker). `gem install faker`, open up irb, run `require 'faker'` and then generate a fake name for yourself using `Faker::Name.name`. How would you update your name in the fans table to be your new name?

   ```sql

   ```

7. Write the SQL to return fans that are not fans of the black eyed peas.

```sql

```

8. Write the SQL to display an artists name next to their album title

```sql

```

9. Write the SQL to display artist name, album name and number of tracks on that album

```sql

```

10. Write the SQL to return the name of all of the artists in the 'Pop' Genre

```sql

```

## BONUS (very hard)

11. I want to return the names of the artists and their number of rock tracks
    who play Rock music
    and have move than 30 tracks
    in order of the number of rock tracks that they have
    from greatest to least

```sql

```
