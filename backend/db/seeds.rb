# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Sample.create(title: "sample1", description: "This is sample data.", checked: true)
Sample.create(title: "sample2", description: "This is also sample data.", checked: false)
Sample.create(title: "sample3", description: "Again, this is sample data.", checked: false)