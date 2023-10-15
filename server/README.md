## Installation and Configuration

Follow the steps below to set up and run the application in your local environment:

1. Clone this repository to your local machine:

```
git clone -b feat/server_routes https://github.com/TatiCor/pizzeriaProject.git
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
│ └─ v1
│ ├─ Beverage.ts
│ ├─ Dessert.ts
│ ├─ Empanada.ts
│ └─ Pizza.ts
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│ ├─ app.ts
│ ├─ config
│ │ ├─ env.config.ts
│ │ ├─ index.ts
│ │ └─ swagger-options.config.ts
│ ├─ controllers
│ │ ├─ beverage.controller.ts
│ │ ├─ dessert.controller.ts
│ │ ├─ empanada.controller.ts
│ │ └─ pizza.controller.ts
│ ├─ data
│ │ └─ mongodb
│ │ ├─ index.ts
│ │ ├─ models
│ │ │ ├─ Beverage.ts
│ │ │ ├─ Dessert.ts
│ │ │ ├─ Empanada.ts
│ │ │ └─ Pizza.ts
│ │ └─ mongo-database.ts
│ ├─ errors
│ │ ├─ error-handler.error.ts
│ │ └─ errors.error.ts
│ ├─ routes
│ │ └─ v1
│ │ ├─ beverage.routes.ts
│ │ ├─ dessert.routes.ts
│ │ ├─ empanada.routes.ts
│ │ ├─ pizza.routes.ts
│ │ └─ routes.ts
│ ├─ server.ts
│ ├─ services
│ │ ├─ beverage.service.ts
│ │ ├─ dessert.service.ts
│ │ ├─ empanada.service.ts
│ │ └─ pizza.service.ts
│ └─ utils
│ └─ path.utils.ts
└─ tsconfig.json

```

```
