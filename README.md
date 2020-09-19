# BachelorProject

## To Do

- [X] Add MongoDB to the stack
- [X] Add login functionality to the API
- [X] Consider using .env variables
- [X] Create a simple user api route
- [X] Add password encryption from mernProject
- [ ] Add validation to signup fields
- [ ] Put the models in a table (In this README)

### Login / Auth todos

#### Backend

- [X] Encrypt password
- [X] Create login route
- [X] Add email confirmation
- [ ] Add password reset
- [X] Add validation to signup
- [ ] Consider moving the activation token from [url request to body request](https://medium.com/better-programming/using-url-parameters-and-query-strings-with-react-router-fffdcea7a8e9)
- [X] Changes signup flow such that the user i created at signup and the jwt token link does not contain the password.
- [ ] [Save auth/jwt token in safe http cookie](https://medium.com/@ryanchenkie_40935/react-authentication-how-to-store-jwt-in-a-cookie-346519310e81)
- [ ] Restructure the passport stratigy - move from middleware

##### Articles

- [Node.js passport-jwt how to send token in a cookie?](https://stackoverflow.com/questions/39163413/node-js-passport-jwt-how-to-send-token-in-a-cookie)
- [How to restrict access using Passport.js role-based authorisation](https://developerhandbook.com/passport.js/passport-role-based-authorisation-authentication/)
- [Sessionless Authentication using JWTs (with Node + Express + Passport JS)](https://blog.usejournal.com/sessionless-authentication-withe-jwts-with-node-express-passport-js-69b059e4b22c)
- [Using cookies to store JWT for authentication and authorization in a MERN stack app](https://medium.com/@zahedialfurquan20/using-cookies-to-store-jwt-for-authentication-and-authorization-in-a-mern-stack-app-a58d7a5d6b6e)

#### Frontend

- [ ] Consider dropping all the logic from App and paste it into index

- [Structure of react redux library](https://www.pluralsight.com/guides/how-to-organize-your-react-+-redux-codebase)
- [Protected routes and authentication with React Router v4](https://ui.dev/react-router-v4-protected-routes-authentication/)

## Models

User

- name  string required
- email string required
- password string required

## Articles/videos used for login

- [Using JWT (JSON Web Tokens) to authorize users and protect API routes](https://medium.com/@maison.moa/using-jwt-json-web-tokens-to-authorize-users-and-protect-api-routes-3e04a1453c3e)
- [Email Account Verification - Node and Express](https://www.youtube.com/watch?v=CEim3tZsp1Y&t=11s)

## Articles used for setting up docker development enviroment

- [Dockerize MERN Stack Application](https://medium.com/@pramodrana2107/dockerize-mern-stack-application-9ea8de68ea4e)
- [DOCKER - How To Resolve _"react exited with code 0"_](https://dev.to/igmrrf/docker-react-exited-with-code-0-398n)
- [MERN docker starter](https://github.com/joshdcuneo/mern-docker-starter)
- [How to implement runtime environment variables with create-react-app, Docker, and Nginx](https://www.freecodecamp.org/news/how-to-implement-runtime-environment-variables-with-create-react-app-docker-and-nginx-7f9d42a91d70/)
- [Pass environment variables from docker to my Nodejs](https://medium.com/@felipedutratine/pass-environment-variables-from-docker-to-my-nodejs-or-golang-app-a1f2ddec31f5)
- [How to create a DB for MongoDB container on start up?](https://stackoverflow.com/questions/42912755/how-to-create-a-db-for-mongodb-container-on-start-up)
