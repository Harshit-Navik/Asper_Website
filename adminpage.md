now we need to create an admin page where the admins/head of each departments can come and see the projects submitted by the members of their department so we need this:-

the page route should be /projects/admin

after enterning the page it will make an api call to get all the projects that are not checked from the database and show them in the page then admins can filter these projects based on the department and can check the projects if the project is checked it will update the checked field in the database to true.

the project showing cards in the admin page needs to be fixed we want that it should not show the images defaultly since images are oprional so we can you know make a dropdown or something to show the images if they exists

ok so currently the admin page can be opened by any user so we need to add a authentication to the admin page so that only the admins can access the admin page i want a password system for this specific page after i enter the password it will open the admin page

ok chat now i want to have a one to many relation with user to projects so that one user can have many projects and one project can have one user and when i click on the the submit project in the /projects and submit a project it will create a new entry in the database of that user do this then i will tell next

for any migrations tell me and i will do it manually
