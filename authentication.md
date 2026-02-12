alright chat now i want a proper role based authentication system for my website

these things should be there
1. proper login signup pages with working api's
2. create a user schema with name, email, password, role(list of enumated of member and admin), domain(enumerated with departments)
3. initialy when the user will sign up the role will be member and domain will be the domain he chooses
4. then the admin role i will manually assign to admins directly in database so now if the user is admin the /projects/admin will not be requiring any password only for member only will require password
5. do this first then i will tell you what to do next

if any migrations are required not to do it by yourself tell i will do it and inform you

go


if i am not looged in when going to the projects page it should redirect me to the login page

also i want another field in the project which is accepted initially false and when admin checks the project and accepts it it will update the accepted field to true so for that the in /projects/admin the projects cards needs to be changed it will now have two buttons accept and reject and when clicked it will update the accepted field to true and checked to true and when rejected it will update the accepted field to false and checked to true and also there i have this logic that the checked cards will not be visible i dont want it i want all the cards to be visible its that they will change ui with accepted or rejected like if they are accepted they will turn to green and rejected to red ok and also in the /projects page the users can see their submitted projects so it will make a call to the api and get all the projects and display them in cards but i want it to be like if the project is accepted it will turn to green and rejected to red and not checked will be not default color ok go 


ok i want this in the admin dashboard the project cards will be in the default state with those two buttons when i click accept the card will turn green and all the buttons will dissapear and an undo icon at the left top will be visible and when i click undo it will turn to default and all the buttons will be visible and the accepted field will be updated to false and checked to false as well and on the reject button it will turn red and all the things and when i undo it the undo button will dissapear also at the top right there will be a delete button that will delete the project from the database and the card will be removed from the page with a warning popup ok now do it