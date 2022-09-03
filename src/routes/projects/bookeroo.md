---
name: 'Bookeroo'
date: '2021-9-4'
tags: ['React', 'TypeScript', 'Java', 'AWS', 'Docker', 'CircleCI']
category: 'uni'
summary: 'Fullstack online bookstore with PayPal integration. Made with Java microservices and React frontend. Dockerised and deployed to AWS with CI/CD through CircleCI'
links: { github: 'https://github.com/justinnais/bookeroo' }
featured: true
---

Bookeroo is an online bookstore, providing users a place to browse, trade and buy their favourite books.

The backend is a microservice architecture, built with Java Spring. Each microservice is deployed to its own Docker container, which serve API endpoints for the React frontend, which is using TypeScript. The whole app is packaged and deployed to AWS with automated CI/CD using CircleCI.

Other feature include:

- Shopping cart with PayPal integration
- JWT authentication
- React Query for caching and pagination of API requests, and skeleton loading
- Admin portal with printable CSV reports
- Custom `<table>` implementation that uses generics to fetch appropriate data based on column headings
