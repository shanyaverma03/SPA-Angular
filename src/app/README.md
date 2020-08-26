## About the application

1. The app contains two modules, module1 and module2. The contents and description:
a. module1:
   1. HeaderComponent- Contains and code for the header which contains logo, title, view fav button, search input and options button. 
   The data that is input in the search is sent to the SearchComponent.
   2. LoginComponent
   3. LogoutComponent
   4. SearchComponent- Takes the query string sent by the header and displays the search results in the form of cards. Each card has a add to fav and delete from fav button.
   5. Add to fav button adds the fav to the fav.json.
   Delete to fav removes the fav. In case the fav is found found, it sends an alert to the user.
   6. FooterComponent

b. module2:
   1. DashboardComponent: This is the default page. Displays the top headlines in the form of cards. Each card contains add and delete fav buttons. If user is not logged in, he/she will be redirected to the login page.

2. There is a Book class that contains the title, description and photo. (the name of the class is not proper because was earlier working on JustBooks)
3. Only logged in users can perform the following:
   a. View Fav
   b. Add to fav
   c. Delete from fav
   d. Search
4. This is a multi user application. Whenever a user views/adds/deletes fav, the action is performed only on his/her fav json.
5. Json running on http://localhost:3000/articles
   Run json-server --watch fav.json to run the server.

## About the API
1. API used: News API

## About the Users
{
        username: "admin",
        password: "pass"
      },
      {
        username: "admin1",
        password: "pass1"
      },
      {
        username: "admin2",
        password: "pass2"
      },
      {
        username: "admin3",
        password: "pass3"
      }
}
