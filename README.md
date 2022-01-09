# Introduction

-   This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
-   Create a 4 page application with date queried from https://randomuser.me/

#### Page 1 - Authentication with a hardcoded user.

-   Ensured that unauthenticated users cannot view the userslist
-   Users can Sign up or Login

#### page 2 - Time Page (publically accessible)

-   Showed the current time in a formateL 'Day/Month/Year" - "hours:minutes:seconds"
-   Animated the time using https://www.react-reveal.com/

#### page 3 - UserList (private page for lodded in users only)

-   showed 50 users with thier image and name

#### page 4/Side bar

-   show user details (img, name, email, age)

## Getting Started

First, run the development server:

```bash
clone the app

# then install dependencies
npm install

#then run the application with

npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

-   [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
-   [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
