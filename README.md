# Next-Cypress-Docker Demo

This is a demo application intended to help users better understand how to use Docker to test a Next.js application using Cypress.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To build the Docker images and run the development server:

```bash
yarn up:dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file. 

## Running Tests with Cypress Included Docker Image

This demo uses the `cypress/included:9.2.0` image. That image comes with the `9.2.0.` version of Cypress as well as any dependencies needed. 

Start by running this command in a terminal window 

```bash
yarn up:ci
```

That will do the following:

1. Create a new container with everything needed to run the Next.js app
2. Create a container with Cypress installed
2. Start the app and serve it at port 3000
4. Run Cypress tests against the app and exit on completion

Note: This more closely simulates CI, since it exits on completion instead of allowing for continual development.

## Learn More

To learn more, take a look at the following resources:

- [Cypress Documentation](https://on.cypress.io) - learn about Cypress and how it helps you write faster, easier, more reliable tests.
- [Cypress Docker Documentation](https://on.cypress.io/docker) - learn about Cypress custom images and see examples.
- [Cypress CI/CD Documentation](https://on.cypress.io/ci) - learn how to use Cypress in your CI/CD processes.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the cypress-docker-images GitHub repository](https://github.com/cypress-io/cypress-docker-images/) - your feedback and contributions are welcome!
