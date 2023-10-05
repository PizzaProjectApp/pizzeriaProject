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
backend
└─ server
   ├─ .env
   ├─ .env.template
   ├─ .prettierignore
   ├─ .vscode
   │  └─ settings.json
   ├─ package-lock.json
   ├─ package.json
   ├─ README.md
   ├─ src
   │  ├─ app.ts
   │  ├─ config
   │  │  ├─ db.config.ts
   │  │  ├─ env.config.ts
   │  │  ├─ index.ts
   │  │  └─ swaggerOptions.config.ts
   │  ├─ controllers
   │  │  ├─ dessert.controller.ts
   │  │  ├─ empanada.controller.ts
   │  │  └─ pizza.controller.ts
   │  ├─ errors
   │  │  ├─ errorHandler.ts
   │  │  └─ errors.ts
   │  ├─ middlewares
   │  │  └─ CustomRouter.ts
   │  ├─ models
   │  │  ├─ Beverage.ts
   │  │  ├─ Dessert.ts
   │  │  ├─ Empanada.ts
   │  │  └─ Pizza.ts
   │  ├─ public
   │  │  └─ css
   │  │     └─ notFound.css
   │  ├─ routes
   │  │  └─ v1
   │  │     ├─ dessert.routes.ts
   │  │     ├─ empanada.routes.ts
   │  │     └─ pizza.routes.ts
   │  ├─ server.ts
   │  ├─ services
   │  │  ├─ dessert.service.ts
   │  │  ├─ empanada.service.ts
   │  │  └─ pizza.service.ts
   │  ├─ types
   │  │  ├─ errorHandler.ts
   │  │  └─ types.ts
   │  ├─ utils
   │  │  └─ pathUtils.ts
   │  └─ views
   │     ├─ home.hbs
   │     ├─ layouts
   │     │  └─ main.hbs
   │     └─ partials
   │        └─ notFound.hbs
   └─ tsconfig.json

```
