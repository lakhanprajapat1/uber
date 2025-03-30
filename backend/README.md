# /user/register Endpoint

## Description
Registers a new user. The endpoint validates input data, hashes the password, creates the user, and returns an authentication token along with the user data.

## Request
- **Method:** POST
- **Endpoint:** `/user/register`
- **Body Parameters:**
  - `fullname`: *(object)* Contains:
    - `firstname` *(string, required)*: At least 3 characters.
    - `lastname` *(string, optional)*: At least 3 characters.
  - `email`: *(string, required)*: At least 6 characters.
  - `password`: *(string, required)*

## Responses
- **201 Created**
  - Returns a JSON object containing the authentication token and user data.
- **400 Bad Request**
  - Returns validation errors when required fields are missing or invalid.

## Example Request Body
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

## Example Success Response (201)
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    // ...user data...
  }
}
```

## Example Error Response (400)
```json
{
  "errors": [
    { "msg": "First name must be at least 3 characters long", "param": "fullname.firstname", ... }
  ]
}
```
