This readme walks you through the process of setting up and completing the bureauxlocaux mini-project.
This project uses some of the same technologies that we use on our production stack.
The goal is to get you familiar with this tech, find out if you like it and if you have the basic know-how required to perform your job as a fullstack developer.

### Setup

Use [Create React App](https://github.com/facebook/create-react-app) to bootstrap a new app.

Put the contents into a front folder to separate them from the backend code.

The backend environment already provided in the "back" folder: it specifies the basic configuration including the django project, docker files and python requirements.

If you're going to use git, set it up in the directory containing both back and front.

If you don't have it yet, you will have to install [docker](https://www.docker.com/) and create containers corresponding to the api and the database.

### The task 

The task itself is quite simple.
As you may know, bureauxlocaux.com is a website hosting real estate listings.
The objective is to create a simple app with a list and detail view of real estate listings.

The list view should be a table and have the following structure:

| Title        | Address           | Transaction type  | Realty type | Publication date |
| ------------ | ----------------- | ----------------- | ----------- | ---------------- |

The transaction type might be either a rental or a sale.
The realty type might be one of: office, land plot, warehouse, retail or coworking.

By clicking on the title, the user will be redirected to the detail view.
The also needs to be a button below the table for adding a new listing.

So, the detail view will allow to either create of edit an existing listing.
All of the fields have to be editable.
There are no other structural or style constraints.

### Bonus tasks
- tests
- list view: filtering and sorting

### Code constraints
- In react, you may only use functional components and hooks (no classes) -> [doc](https://reactjs.org/docs/hooks-intro.html)
- The django backend will only be used as an api -> [doc](https://www.django-rest-framework.org/)
- Style: use flexbox and make sure the app can be displayed correctly on mobile as well.

### Tips
This tutorial might be useful https://www.valentinog.com/blog/drf/

### Evaluation criteria
- functionnality and conformity to specifications
- code quality
- style

### Output format
Upon finishing the task you may zip the project and send it back via email
or host the project online (ex. GitHub) and give us access.