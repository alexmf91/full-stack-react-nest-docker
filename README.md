<div align="center">
  <p>
    <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
        <a href="http://reactjs.org/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" width="200" alt="React Logo" /></a>
  </p>
</div>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

 Full stack application builded with React + tailwindcss + vite, nestjs + express, mongodb, swagger and docker.

# Running the app with docker orchestration deployment
Make sure have docker installed and in the root of the app project run the following comand:
```bash
docker compose up
```
Wait until the orchestration finish and will have the next aplications avaliable:

- Frontend app: http://localhost:3000
- Api swagger documentation: http://localhost:8000/api
- Mongo DB : http://localhost:27017

