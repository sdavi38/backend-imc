{
  "type": "postgres",
  "port": 5432,
  "host": "localhost",
  "username": "postgres",
  "password": "1199",
  "database": "imc",
  "entities": ["./src/entities/*.ts"],
  "migrations": ["./src/database/migrations/*.ts"],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}




