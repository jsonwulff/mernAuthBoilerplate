# BachelorProject

## To Do

- [ ] Create redirects and success messages on signup flow
- [ ] Refactor code -> change session to auth, destructure functions eg header and reducer/action/types, camelcase, email to tamplates, remove console logs
- [ ] Reset password: check time for password recreation with the token iat
- [ ] Create rotues for react app
- [ ] Add opportunity to make email reconfirmation
- [ ] Put the models in a table (In this README)
- [ ] Redirect or change text upon succesfull signup
- [ ] Consider refactoring components with mapStateToProps and mapDispatchToProps eg. `function Login({ login, loginUser })` should be `function Login({ props, dispatch })`
- [ ] Consider add expiration to auth cookie
- [ ] Consider moving header buttons into components folder
- [ ] [Consider making tests for the API](https://rahmanfadhil.com/test-express-with-supertest/)

### Authentication flow

1. Sign up - if successfull redirect to somewhere.
2. Activate account via email - upon success redirect to login with success message
3. Login - check that user is also confirmed
4. Upon visiting protected page - check that email is connfirmed, and password hasn't changed
5. Logout - Clear cookie

## Making production ready

1. Look for correct usages of enviroment variable in auth controller - especially in email templates.

## Models

User

- name string required
- email string required
- password string required

## Articles

- [Node.js passport-jwt how to send token in a cookie?](https://stackoverflow.com/questions/39163413/node-js-passport-jwt-how-to-send-token-in-a-cookie)
- [How to restrict access using Passport.js role-based authorisation](https://developerhandbook.com/passport.js/passport-role-based-authorisation-authentication/)
- [Sessionless Authentication using JWTs (with Node + Express + Passport JS)](https://blog.usejournal.com/sessionless-authentication-withe-jwts-with-node-express-passport-js-69b059e4b22c)
- [Using cookies to store JWT for authentication and authorization in a MERN stack app](https://medium.com/@zahedialfurquan20/using-cookies-to-store-jwt-for-authentication-and-authorization-in-a-mern-stack-app-a58d7a5d6b6e)- [Protected routes and authentication with React Router v4](https://ui.dev/react-router-v4-protected-routes-authentication/)
- [Structure your React-Redux project for scalability and maintainability](https://levelup.gitconnected.com/structure-your-react-redux-project-for-scalability-and-maintainability-618ad82e32b7)
- [Using JWT (JSON Web Tokens) to authorize users and protect API routes](https://medium.com/@maison.moa/using-jwt-json-web-tokens-to-authorize-users-and-protect-api-routes-3e04a1453c3e)
- [Email Account Verification - Node and Express](https://www.youtube.com/watch?v=CEim3tZsp1Y&t=11s)
- [MERN docker starter - with deployment](https://github.com/joshdcuneo/mern-docker-starter)
- [Dockerize MERN Stack Application](https://medium.com/@pramodrana2107/dockerize-mern-stack-application-9ea8de68ea4e)
- [DOCKER - How To Resolve _"react exited with code 0"_](https://dev.to/igmrrf/docker-react-exited-with-code-0-398n)
- [How to implement runtime environment variables with create-react-app, Docker, and Nginx](https://www.freecodecamp.org/news/how-to-implement-runtime-environment-variables-with-create-react-app-docker-and-nginx-7f9d42a91d70/)
- [Pass environment variables from docker to my Nodejs](https://medium.com/@felipedutratine/pass-environment-variables-from-docker-to-my-nodejs-or-golang-app-a1f2ddec31f5)
- [How to create a DB for MongoDB container on start up?](https://stackoverflow.com/questions/42912755/how-to-create-a-db-for-mongodb-container-on-start-up)
