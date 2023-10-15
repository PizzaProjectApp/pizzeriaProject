## Installation and Configuration

Follow the steps below to set up and run the application in your local environment:

1. Clone this repository to your local machine:

```
git clone -b refacotr/clean_architecture https://github.com/TatiCor/pizzeriaProject.git
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
   ├─ package-lock.json
   ├─ package.json
   ├─ README.md
   ├─ src
   │  ├─ app.ts
   │  ├─ config
   │  │  ├─ env.config.ts
   │  │  ├─ index.ts
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
   │  │  │  └─ pizza.datasource.ts
   │  │  ├─ dtos
   │  │  │  └─ pizza.dto.ts
   │  │  ├─ entities
   │  │  │  └─ pizza.entity.ts
   │  │  ├─ errors
   │  │  │  └─ custom.error.ts
   │  │  ├─ index.ts
   │  │  ├─ repositories
   │  │  │  └─ pizza.repository.ts
   │  │  └─ use-cases
   │  │     ├─ index.ts
   │  │     └─ pizza
   │  │        └─ create-pizza.use-case.ts
   │  ├─ infrastructure
   │  │  ├─ datasources
   │  │  │  └─ pizza.datasource.impl.ts
   │  │  ├─ index.ts
   │  │  ├─ mappers
   │  │  │  └─ pizza.mapper.ts
   │  │  └─ respositories
   │  │     └─ pizza.repository.impl.ts
   │  └─ presentation
   │     ├─ products
   │     │  └─ v1
   │     │     ├─ beverage
   │     │     │  └─ beverage.routes.ts
   │     │     ├─ dessert
   │     │     │  └─ dessert.routes.ts
   │     │     ├─ empanada
   │     │     │  └─ empanada.routes.ts
   │     │     ├─ index.ts
   │     │     └─ pizza
   │     │        ├─ pizza.controller.ts
   │     │        └─ pizza.routes.ts
   │     ├─ routes.ts
   │     ├─ server.ts
   │     └─ utils
   │        └─ path.utils.ts
   └─ tsconfig.json

```
