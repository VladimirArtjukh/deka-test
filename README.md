## Instructions

- Clone repository
- Open directory `cd docker`
- Run command `docker-compose up --build`
- Open new terminal and run command `docker-compose exec web bash`
- Based on the file `.env.example`, create the file` .env`, for this, run the command `cp .env.example .env`, then generate the keys using the command` php artisan key: generate`
- Setting data bases into `.env`
- Open DB `http://localhost:6080/`
- Create DB for production and testing
- Install DB table: `php artisan migrate`
