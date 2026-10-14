# ServiceField

ServiceField is a full-stack service management application that combines a .NET 8 API backend with a React + Vite frontend for managing service cases, companies, users, service types, and related operational data.

## Project Overview

This repository contains two main application layers:

- `ServiceField.Server` — ASP.NET Core Web API built with .NET 8
- `servicefield.client` — React frontend powered by Vite

The solution is organized as a single Visual Studio solution (`ServiceField.sln`) and uses SQL Server with Entity Framework Core for data persistence.

## Tech Stack

### Backend
- ASP.NET Core Web API
- .NET 8
- Entity Framework Core
- SQL Server
- Swagger / OpenAPI

### Frontend
- React 18
- Vite
- Bootstrap
- Material UI
- Tailwind CSS

## Repository Structure

```text
ServiceField/
├── .vscode/
├── ServiceField.Server/
│   ├── Controllers/
│   ├── Data/
│   ├── Dtos/
│   ├── Mappers/
│   ├── Models/
│   ├── appsettings.json
│   ├── Program.cs
│   ├── ServiceField.Server.csproj
│   └── ServiceField.Server.http
├── servicefield.client/
│   ├── src/
│   ├── package.json
│   ├── vite.config.js
│   └── ...
├── .gitattributes
├── .gitignore
├── package.json
├── package-lock.json
├── ServiceField.sln
├── tailwind.config.js
└── README.md
```

## Prerequisites

Before running the project locally, install:

- .NET 8 SDK
- Node.js 18+ and npm
- SQL Server (local instance or SQL Server Express)

## Configuration

1. Update the database connection string in `ServiceField.Server/appsettings.json`:

```json
"ConnectionStrings": {
  "DefaultConnection": "Server=<YOUR_SERVER>;Database=ServiceField;Trusted_Connection=True;TrustServerCertificate=True;"
}
```

2. Ensure the frontend URL matches your local setup if needed (the backend is configured to allow CORS).

## Running the Application

### 1. Restore backend dependencies

```bash
dotnet restore
```

### 2. Run the backend API

```bash
dotnet run --project ServiceField.Server
```

The API will start on a local HTTPS port (for example `https://localhost:7141`).

### 3. Install frontend dependencies

```bash
cd servicefield.client
npm install
```

### 4. Start the frontend

```bash
npm run dev
```

The React app is served by Vite, typically at:

```text
https://localhost:5173
```

## Database and Migrations

The project uses Entity Framework Core with SQL Server. If migrations are enabled in your environment, you can apply them using:

```bash
dotnet ef database update --project ServiceField.Server
```

If `dotnet ef` is not available, install the EF Core CLI:

```bash
dotnet tool install --global dotnet-ef
```

## Features

The application includes support for:

- Service case management
- Company records
- User information management
- Service type and category handling
- Object and checklist details
- API endpoints for data management through the backend

## Development Notes

- The backend exposes Swagger UI in development mode.
- The frontend is proxied to the backend during local development via Vite configuration.
- The solution includes both the API and client project in a single .NET solution, which makes local development easier in Visual Studio or Visual Studio Code.

## License

This project does not currently include a license file. If you are publishing or sharing this project publicly, consider adding an appropriate open-source license.

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Open a pull request

## Contact

For project-specific questions or collaboration, contact the repository owner or maintainers through the GitHub repository.
