# Pondering Pages - A Blogging Website

Pondering Pages is a full-stack blog platform built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to create, edit, and delete blog posts, while also providing a seamless interface for readers to explore content. The project integrates user authentication and role-based access control, ensuring that only authorized users can manage posts. The responsive design ensures a smooth experience across devices, while MongoDB handles efficient data storage and retrieval. The backend is powered by Node.js and Express, enabling fast and scalable interactions between the frontend and database.

## Running The project.

**Remember to create a dotenv file and store all the necessary credentials, like configuring the PORT as well as the mongodb cluster URL.**

1. First, just clone the project in your local Repository.
```
git clone https://github.com/avbhutani/Blog-Website.git
```
2. After cloning, as the package.json files are already present, just run the following commands for installing all the required dependencies.
```javascript
// For Frontend
cd frontend
npm install

// For Backend
cd backend
npm install
```
3. After installing, just open 2 terminals, navigate to the frontend and the backend repos, and then run
```javascript
// For Frontend
cd frontend
npm start

// For Backend
cd backend
npm start
```


```
Run The Project and Enjoy!!😉
```
## Authentication Workflow

The authentication workflow will be as follows:
1. User Landing will be having 2 options, Login Or Register ( Login, if Existing User. Else, Register as a new User )
2. User Logged in will only be having the access to the homepage, as well as the profile page.
3. Register Page is equipped with **Recaptcha Authentication** so as to prevent DOS Attacks.
4. The Cookies Used uses **HttpOnly** Method which **denies Client Side Javascript** access to tokens, **making the authentication token more secure.**
5. User Logged in once or registered, will not have the access to Login/Register Page Again, thereby **preventing multiple logins at the same time.**

![Authentication Workflow Image](https://res.cloudinary.com/diu8zryvu/image/upload/fl_preserve_transparency/v1729603836/Screenshot_2024-10-22_at_6.51.40_PM_kpeqrn.jpg?_s=public-apps)

## Data Models

### User Data Model

**The User data models Consists of 3 Main Parts:**
1. Email
2. Username
3. Password

**All of them are necessary for a successful User Registration and as well as maintaining a proper User Detail for Future updates as well.**

![User Data Model](https://res.cloudinary.com/diu8zryvu/image/upload/v1729604415/Screenshot_2024-10-22_at_6.59.50_PM_r1yljy.png)

### Posts Data Model 

**The Posts Data Model Consists of the following Components:**
**1. UserId ( Required )
2. List Of Posts**

**This is made so that all the posts that belong to the particular user are listed under a particular userId, this can be used for the profile section as well as, identifying which post belongs to which of the user and can determine access rights easily, in short makes authorization easy.**

![Posts Data Model](https://res.cloudinary.com/diu8zryvu/image/upload/v1729604437/Screenshot_2024-10-22_at_6.56.25_PM_v1umfl.png)

### Post Data Model
The Post Data Model is basically what a Single Post would look like in the website, the post would be containing the following information: 
1. Title - A catchy Title so as to attract attention. ( Required )
2. Author - Author of the Blog. ( Required )
3. Image - Image adds to the charm of the Blog Post.
4. Content - A detailed Blog Post With a Maximum Limit of 3000 characters, maintaining readability, making the blogs short and crispy. ( Required )
   
![Post Data Model](https://res.cloudinary.com/diu8zryvu/image/upload/v1729604547/Screenshot_2024-10-22_at_7.12.14_PM_zzfw95.png)


## User Interaction with Posts
The User Interaction with the post is the most Important and define what all actions can the user perform on the perform. Some of the actions are:
1. CreatePost - Accessible at '/user/createNewPost' API. The user will be able to create a new post with the Required Fields.
2. ReadPost - Accessible at
  - '/allposts' Gets all the posts from the backend, no matter what user has created it. It is used in the homepage.
  - '/user/posts' Gets all the post for the particular user that is logged in.
  - '/users/posts/:id' Get the Post by the particular Id.
3. Update Post - Accessible at '/user/posts/update/:id' . Responsible for Updating the post with the particular Id, modification fields can be ( title, image and content ). **Author Cannot be changed, thereby preventing Impersonation.
4. Delete Post: Accessible at '/user/posts/delete/:id'. Responsible for Deleting the post with the Particular Id.

![User-Post Interaction](https://res.cloudinary.com/diu8zryvu/image/upload/v1729605172/Screenshot_2024-10-22_at_7.17.09_PM_dspmxk.png)
