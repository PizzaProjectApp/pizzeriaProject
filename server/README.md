# Pizzeria Project with Clean Architecture, DDD, and Clean Code

## Overview

This project is a Pizzeria application that demonstrates the use of Clean Architecture, Domain-Driven Design (DDD), and Clean Code principles. The application is designed to showcase best practices for building maintainable and scalable software.

## Features

- **Domain-Driven Design (DDD):** The project follows DDD principles by organizing the codebase into clear and well-defined domains, such as "Order," "Customer," and "Menu." Each domain has its own folder structure with distinct responsibilities.

- **Clean Architecture:** Clean Architecture is implemented to ensure separation of concerns and maintainability. The codebase is divided into layers, including "Application," "Domain," and "Infrastructure," each with a specific role.

- **Clean Code:** Clean Code principles are applied throughout the project to enhance code readability, maintainability, and testability. Descriptive variable and function names, SOLID principles, and best practices are followed.

- **Modularity:** The code is organized using barrel files, making it easy to navigate and understand the project structure. This modularity enhances code accessibility and maintainability.

## Project Structure

- `/src`
  - `/domain`: The heart of the application, housing the domain model, entities, and core business logic.
  - `/infrastructure`: Manages infrastructure-related tasks like database access and external service interactions.
  - `/presentation`: Handles user interfaces and API endpoints for interacting with the application.

## Installation and Configuration

Follow the steps below to set up and run the application in your local environment:

1. Clone this repository to your local machine:

```
git clone -b refactor/clean_architecture https://github.com/TatiCor/pizzeriaProject.git
```

2. Navigate to the project directory:

```
cd pizzeriaProject/server
```

3. Install project dependencies:

```
npm i
```

3. Launch server:

```
npm run dev
```

Make sure you have the `.env` file in the root folder.

```plaintext
pizzeria_project
└─ server
├─ .env
├─ .env.template
└─ ...
```

# To access the documentation, open your web browser and enter the following URL:

```
http://localhost:3000/api/docs
```

This will take you to the API documentation, where you can explore the endpoints and learn how to interact with the application.

```
pizzeria_project
└─ server
   ├─ .env
   ├─ .env.template
   ├─ .prettierignore
   ├─ docs
   │  └─ v1
   │     ├─ Beverage.ts
   │     ├─ Dessert.ts
   │     ├─ Empanada.ts
   │     └─ Pizza.ts
   ├─ logs
   │  ├─ combined.log
   │  └─ error.log
   ├─ package-lock.json
   ├─ package.json
   ├─ README.md
   ├─ src
   │  ├─ app.ts
   │  ├─ config
   │  │  ├─ env.config.ts
   │  │  ├─ index.ts
   │  │  ├─ logger.config.ts
   │  │  └─ swagger-options.config.ts
   │  ├─ data
   │  │  ├─ index.ts
   │  │  └─ mongodb
   │  │     ├─ index.ts
   │  │     ├─ models
   │  │     │  ├─ Beverage.ts
   │  │     │  ├─ Dessert.ts
   │  │     │  ├─ Empanada.ts
   │  │     │  └─ Pizza.ts
   │  │     └─ mongo-database.ts
   │  ├─ domain
   │  │  ├─ datasources
   │  │  │  ├─ index.ts
   │  │  │  └─ products
   │  │  │     ├─ beverage.datasource.ts
   │  │  │     ├─ dessert.datasource.ts
   │  │  │     ├─ empanada.datasource.ts
   │  │  │     ├─ index.ts
   │  │  │     └─ pizza.datasource.ts
   │  │  ├─ dtos
   │  │  │  ├─ index.ts
   │  │  │  └─ products
   │  │  │     ├─ beverage
   │  │  │     │  ├─ beverage-partial.dto.ts
   │  │  │     │  ├─ beverage.dto.ts
   │  │  │     │  └─ index.ts
   │  │  │     ├─ dessert
   │  │  │     │  ├─ dessert-partial.dto.ts
   │  │  │     │  ├─ dessert.dto.ts
   │  │  │     │  └─ index.ts
   │  │  │     ├─ empanada
   │  │  │     │  ├─ empanada-partial.dto.ts
   │  │  │     │  ├─ empanada.dto.ts
   │  │  │     │  └─ index.ts
   │  │  │     ├─ index.ts
   │  │  │     ├─ pizza
   │  │  │     │  ├─ index.ts
   │  │  │     │  ├─ pizza-partial.dto.ts
   │  │  │     │  └─ pizza.dto.ts
   │  │  │     └─ product-id.dto.ts
   │  │  ├─ entities
   │  │  │  ├─ index.ts
   │  │  │  └─ products
   │  │  │     ├─ beverage.entity.ts
   │  │  │     ├─ dessert.entity.ts
   │  │  │     ├─ empanada.entity.ts
   │  │  │     ├─ index.ts
   │  │  │     └─ pizza.entity.ts
   │  │  ├─ errors
   │  │  │  └─ custom.error.ts
   │  │  ├─ index.ts
   │  │  ├─ repositories
   │  │  │  ├─ index.ts
   │  │  │  └─ products
   │  │  │     ├─ beverage.repository.ts
   │  │  │     ├─ dessert.repository.ts
   │  │  │     ├─ empanada.repository.ts
   │  │  │     ├─ index.ts
   │  │  │     └─ pizza.repository.ts
   │  │  └─ use-cases
   │  │     ├─ index.ts
   │  │     └─ products
   │  │        ├─ beverage.use-case.ts
   │  │        ├─ dessert.use-case.ts
   │  │        ├─ empanada.use-case.ts
   │  │        ├─ index.ts
   │  │        └─ pizza.use-case.ts
   │  ├─ infrastructure
   │  │  ├─ datasources
   │  │  │  ├─ index.ts
   │  │  │  └─ products
   │  │  │     ├─ beverage.datasource.impl.ts
   │  │  │     ├─ dessert.datasource.impl.ts
   │  │  │     ├─ empanada.datasource.impl.ts
   │  │  │     ├─ index.ts
   │  │  │     └─ pizza.datasource.impl.ts
   │  │  ├─ index.ts
   │  │  ├─ mappers
   │  │  │  ├─ index.ts
   │  │  │  └─ products
   │  │  │     ├─ beverage.mapper.ts
   │  │  │     ├─ dessert.mapper.ts
   │  │  │     ├─ empanada.mapper.ts
   │  │  │     ├─ index.ts
   │  │  │     └─ pizza.mapper.ts
   │  │  └─ repositories
   │  │     ├─ index.ts
   │  │     └─ products
   │  │        ├─ beverage.repository.impl.ts
   │  │        ├─ dessert.repository.impl.ts
   │  │        ├─ empanada.repository.impl.ts
   │  │        ├─ index.ts
   │  │        └─ pizza.repository.impl.ts
   │  ├─ presentation
   │  │  ├─ products
   │  │  │  ├─ index.ts
   │  │  │  └─ v1
   │  │  │     ├─ beverage
   │  │  │     │  ├─ beverage.controller.ts
   │  │  │     │  ├─ beverage.routes.ts
   │  │  │     │  └─ index.ts
   │  │  │     ├─ dessert
   │  │  │     │  ├─ dessert.controller.ts
   │  │  │     │  ├─ dessert.routes.ts
   │  │  │     │  └─ index.ts
   │  │  │     ├─ empanada
   │  │  │     │  ├─ empanada.controller.ts
   │  │  │     │  ├─ empanada.routes.ts
   │  │  │     │  └─ index.ts
   │  │  │     ├─ index.ts
   │  │  │     └─ pizza
   │  │  │        ├─ index.ts
   │  │  │        ├─ pizza.controller.ts
   │  │  │        └─ pizza.routes.ts
   │  │  ├─ routes.ts
   │  │  └─ server.ts
   │  └─ utils
   │     └─ path.utils.ts
   └─ tsconfig.json

```
