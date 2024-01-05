## HackRU Frontend

To get started, you must install `PNpm`, a much faster version of `npm`. You can find instructions on how to install [`PNpm` here](https://pnpm.io/installation).

Then, you can run the following on your terminal.

```
git clone git@github.com:HackRU/frontendv2.git
cd frontendv2
pnpm i
```
In the project folder, you will find a `.env.example` file. Rename this file to `.env` (this must never be pushed to GitHub).

Contact me (Kevin) and I will provide you with the secret API keys to connect to the dummy database.

## Running the dev environment
To run the project locally, type `npm run dev`. Then, you can go to `localhost:3000` on your browser.

We are in the beginning stages of development.

`localhost:3000/`: This is the landing page (where the hero will reside). This is mapped to `/app/page.tsx`.

`localhost:3000/dashboard`: This is the dashboard route. This is mapped to `/app/dashboard/(overview)/page.tsx`.

