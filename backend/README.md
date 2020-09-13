# API documentation

## Response Codes

```
200: Success
400: Bad request
401: Unauthorized
404: Cannot be found
405: Method not allowed
422: Unprocessable Entity 
50X: Server Error
```

## Auth

### Sign up
Sign up a new user.

**URL**: `/api/signup`

**Method**: `GET`

**Auth required**: No

**Permissions required**: NO

#### Data constraints

```
{
    "name": "John Doe",
    "email": "example@gmail.com",
    "password": "1234"
}
```

## Examples of API's

- [Toggl API](https://github.com/toggl/toggl_api_docs/blob/master/chapters/authentication.md)
- [API Documentation Example](https://gist.github.com/Simonwep/bfb3bff51e9679c0af6f3ce3cd1404db)
- [REST API docs - put](https://github.com/jamescooke/restapidocs/blob/master/examples/user/put.md)
- [REST API docs - get](https://github.com/jamescooke/restapidocs/blob/master/examples/user/get.md)