# the-basics-shop

This was a practice project for myself, working on Ruby on Rails on the back-end and Angular on the front-end. It's a mock online-store concept where a user can purchase "basic" items on the front, and the retailer can update products and prices on the back.

## adding-env-file

There needs to be a `.env` file in the `back-end` directory. This should contain the info for the Postgres server:
> ` POSTGRES_USER=[username] `
>
> ` POSTGRES_PASSWORD=[password] `
>
> ` POSTGRES_DB=[database_title] `

## installing-dependencies

Have Postgres, version 2.7.0 of Ruby, and Nodejs installed. Then run this in the `front-end` and `back-end` directory:
> `npm install`

Then, in `back-end` directory, run this
> `bundle install`

## run-servers

Having postgres running, type this in `back-end` directory:
> `npm run all`

You can now access back-end server on `localhost:3000` and front-end on `localhost:4200` in your browser.
