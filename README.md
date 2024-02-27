# Project Agila

Production link: https://project-agila.vercel.app/

This is a course requirement for CS 191/192 Software Engineering Courses of the Department of Computer Science, College of Engineering, University of the Philippines, Diliman under the guidance of Ma. Rowena C. Solamo for A.Y. 2023-2024.

- Capule, Emilio Jr.
- Flores, Angela Nicole
- Heffron, Joaquin
- Ko, Daryll Carlsten

## Sprint 1 Guide

### Prerequisites

1) Make sure `npm` is installed; otherwise, see [this guide](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).
2) Add the environment variable values listed in the Discord server in your `.env` file.

### Making changes

Our workflow (for now) looks like this:

1) Make a new branch with the format `s<sprint number>/<name>` (e.g., `s1/daryll`, `s3/joaquin`) and switch to that branch.
2) Make a change to one or more files (e.g., `a.tsx` and `b.tsx`).
3) Commit your changes (`git add a.tsx b.tsx && git commit -m '<commit message>'`).
4) Make a pull request (the option should be visible in the GitHub web UI once you push your changes).
5) Have someone approve the pull request (ideally someone else).
6) Rinse and repeat!

### Creating & styling pages

Each file in `src/pages` corresponds to a route in the website. For example, `src/pages/hello.tsx` maps to `project-agila.vercel.app/hello`.

A barebones page implementation looks like this:

```tsx
export default function Hello() {
    return <>
        <main>
            <div>Hello World!</div>
        </main>
    <>
} 
```

[React](https://react.dev/) allows us to use HTML-like syntax inside JavaScript/TypeScript files. [Next](https://nextjs.org/) is what does the mapping between `.tsx` files and website routes.

Styling is done using [Tailwind](https://tailwindcss.com/). To make the contents of the `div` above blue, just add a class to the `div` element itself:

```html
<div class="text-blue">Hello World!</div>
```

The idea behind using Tailwind is to make it easy for us to see which styles particular elements have (as opposed to having to search around in a separate `.css` file). 

For this sprint, we just need to modify the following files:

```
src/pages/login.tsx
src/pages/dashboard.tsx
src/pages/notification_management.tsx
src/pages/transaction_management.tsx
```

### Setting up the database

1) Edit `prisma/schema.prisma` to include schemas we plan on using (for lawyers, clients, transactions, etc.).
2) Run `npx prisma db push` to sync Prisma's schemas to our MySQL schemas.
3) Access the `localhost:3306` connection in MySQL Workbench (this should still be here from CS 165); the `project_agila` database should contain the relevant tables.

## Create T3 App (original README contents)

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

### What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

### Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!
