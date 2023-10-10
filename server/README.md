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

# Remember to have the .env file in the root folder.

```
pizzeriaProject
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
   │  │  └─ swaggerOptions.config.ts
   │  ├─ controllers
   │  │  ├─ beverage.controller.ts
   │  │  ├─ dessert.controller.ts
   │  │  ├─ empanada.controller.ts
   │  │  └─ pizza.controller.ts
   │  ├─ data
   │  │  └─ mongodb
   │  │     ├─ index.ts
   │  │     ├─ models
   │  │     │  ├─ Beverage.ts
   │  │     │  ├─ Dessert.ts
   │  │     │  ├─ Empanada.ts
   │  │     │  └─ Pizza.ts
   │  │     └─ mongo-database.ts
   │  ├─ errors
   │  │  ├─ error-handler.error.ts
   │  │  └─ errors.error.ts
   │  ├─ middlewares
   │  │  └─ custom-router.middleware.ts
   │  ├─ public
   │  │  └─ css
   │  │     └─ notFound.css
   │  ├─ routes
   │  │  └─ v1
   │  │     ├─ beverage.routes.ts
   │  │     ├─ dessert.routes.ts
   │  │     ├─ empanada.routes.ts
   │  │     └─ pizza.routes.ts
   │  ├─ server.ts
   │  ├─ services
   │  │  ├─ beverage.service.ts
   │  │  ├─ dessert.service.ts
   │  │  ├─ empanada.service.ts
   │  │  └─ pizza.service.ts
   │  ├─ types
   │  │  ├─ errorHandler.ts
   │  │  └─ types.ts
   │  ├─ utils
   │  │  └─ path.utils.ts
   │  └─ views
   │     ├─ home.hbs
   │     ├─ layouts
   │     │  └─ main.hbs
   │     └─ partials
   │        └─ notFound.hbs
   └─ tsconfig.json

```
