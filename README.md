This is an in memory DB to get you to think about how databases work and why we need them. This morning exercise should also help you to understand why a DB helps to organize your data.

I've seeded an in memory database with a table called users that keeps track of users in a system (rows). The properties (columns) are name, age, gender, and job type. There is also a employer table that list the different types of employers.

Your mission is to fill out the 6 functions that are being exported by this module. Each function does a specific task that requires you to go through the data and return the right results based on the name of the function and/or any inputs.

Functions:

byId: Retrieve a single user based on their id.
youngest: Retrieve the youngest user in the system.
oldest: Retrieve the oldest user in the system.
males: Retrieve all the users in the system with the gender of male.
females: Retrieve all the users in the system with the gender of female.
employees: Retrieve all the users in the system that belong to a given employer.

Stretch Goal:
Create a function canDrink() that returns all the users who's of drinking age

Super Stretch Goal:
Create a function groupByEmplorer() that returns all the users but are grouped by their employer and then sorted by their name.

Ex. [
  all st ...
  all dv ...
  all na
]