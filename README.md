# Pondering Pages - A Blog Website
Pondering Pages is a dynamic blog platform built using the MERN (MongoDB, Express, React, Node.js) stack. Designed for bloggers and readers alike, it provides a seamless interface for creating, sharing, and exploring posts across a variety of topics. With a focus on user experience and performance, Pondering Pages features a rich text editor for intuitive content creation, a responsive layout for easy access across devices, and efficient MongoDB integration for fast data retrieval. Whether you're a writer or an avid reader, Pondering Pages offers an engaging, community-driven environment to share insights, thoughts, and stories.

## Authentication
The Pondering Pages website is equipped with JWT Authentication, which means that only verified users those who are registered on the platform will be able to access the contents.
A basic Overview of how the authentication works is given below: 

![Auth Image](https://res.cloudinary.com/diu8zryvu/image/upload/v1729603836/Screenshot_2024-10-22_at_6.51.40_PM_kpeqrn.png)

1. The client sends an authentication request to the server, no matter if the user is trying to login/register.
2. The client request if he/she is logging in, then the username and the password will be sent in the request, else if the user is trying to register, then username, password and the email id will be sent over in the request.
3. If the client is trying to login, then the server will check the credentials from the mongoDB database and if the credentials are correct, then only provide the auth token to the client.
4. If the client is trying to register, the information is stored in the database, with proper salting and then after saving, the user is redirected to the login page.
5. A recaptcha is enabled at the register page to prevent DDOS attacks.
6. The Auth token received in the browser is HttpOnly enabled that means that client side Js will not be able to access it, thereby preventing ***Client Side Attacks***.

### Authentication Pages
### Login Page
![Login Page](https://res.cloudinary.com/diu8zryvu/image/upload/v1731527540/Screenshot_2024-11-14_at_1.19.20_AM_aiohzv.png)

### Register Page
![Register Page](https://res.cloudinary.com/diu8zryvu/image/upload/v1731527550/Screenshot_2024-11-14_at_1.19.32_AM_nhac7v.png)


## Website Features
### Home Page
![Home Page](https://res.cloudinary.com/diu8zryvu/image/upload/v1731527558/Screenshot_2024-11-14_at_1.19.55_AM_hdanlj.png)

***The Home Page consists of Posts by all the people that are present on the platform, the current user will also be able to see his/her own posts. The user will be having the option to delete or update post from the Home Page Itself.***

### My Posts
![My Posts](https://res.cloudinary.com/diu8zryvu/image/upload/v1731527566/Screenshot_2024-11-14_at_1.20.34_AM_qoyueq.png)

***My Posts Page list only the Posts that are owned by the current logged in user. The user will also have the option to update/delete post from this Page.***

### Create Post
![Create Post](https://res.cloudinary.com/diu8zryvu/image/upload/v1731527572/Screenshot_2024-11-14_at_1.21.10_AM_fevjaz.png)

***The create Post Page is used to create a new Post by the user, the user will have the option to add the title, add an image and add the description for the post. 
The Change of author is not possible due to security and originality concerns.***

## Data Models
All the actors data models along with their schema is mentioned in this section. An attempt is being made so that it would be understandable for everyone.

### User Model
![User Model](https://res.cloudinary.com/diu8zryvu/image/upload/v1729604415/Screenshot_2024-10-22_at_6.59.50_PM_r1yljy.png)
The user model consits of: 
1. Email - Optional ( Not Required when logging in )
2. Username - Required
3. Password - Required
   
### UserPost Model 

![UserPost Model Image](https://res.cloudinary.com/diu8zryvu/image/upload/v1729604547/Screenshot_2024-10-22_at_7.12.14_PM_zzfw95.png)

The userPost model consists of: 
1. Title - Required
2. Image - Optional
3. Author - Required (Autofilled)
4. Blog Content - Required.

### Users Model
![Users Model Image](https://res.cloudinary.com/diu8zryvu/image/upload/v1729604437/Screenshot_2024-10-22_at_6.56.25_PM_v1umfl.png)

The users model consists of: 
1. UserId
2. List of Posts that are associated with that particular user.


## User Features
![User Features](https://res.cloudinary.com/diu8zryvu/image/upload/v1729605172/Screenshot_2024-10-22_at_7.17.09_PM_dspmxk.png)

A user can perform the following tasks: 
1. Create Post
2. ReadPost
3. UpdatePost
4. DeletePost


# Contributions are appreciated.

