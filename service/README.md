## Service

This is a very simple REST server

db.json contains a set of `users`

```json
{
  "users": [
    {
      "id": 1,
      "first_name": "Eclipse",
      "last_name": "Che"
    },
    {
      "id": 2,
      "first_name": "Eclipse",
      "last_name": "Theia"
    }
  ]
}
```

It uses db.json file to start a REST-API server proposing to list/update/create/delete users.

It is listening on port 8080 and then path is : `http://<server-location>:8080/users`
