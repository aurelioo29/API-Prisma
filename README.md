# API-Prisma

### 🚀 About

**API-Prisma** is a CRUD API project built with Express and Prisma using a Layered Architecture. The project is designed to ensure modularity and scalability while applying best practices for developing Node.js applications connected to relational databases.

---

### 📂 Project Structure

```bash
├── API-Prisma/
    ├── package.json
    ├── prisma/
    │   └── schema.prisma
    └── src/
        ├── index.js
        ├── db/
        │   └── index.js
        └── product/
            ├── product.controller.js
            ├── product.repository.js
            └── product.service.js
```

---

### 🔑 Key Directories and Files

- `prisma/schema.prisma`: Defines the data model and database configuration.

- `src/index.js`: Application entry point.

- `src/db/index.js`: Manages database connections using Prisma.

- `src/product/`: Handles business logic related to products.

  - `product.controller.js`: Manages API requests and responses.

  - `product.repository.js`: Interacts with the database.

  - `product.service.js`: Contains business logic for products.

---

### 🛠️ Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/aurelioo29/API-Prisma.git
   cd API-Prisma
   ```

2. Install dependencies:

   ```bash
    npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory and add:

   ```bash
   DATABASE_URL=your_database_connection_url
   ```

4. Generate Prisma client:

   ```bash
    npx prisma generate
   ```

5. Start the application:

   ```bash
    npm start
   ```

---

### 📢 API Endpoints

| **Method** | **Endpoint**    | **Description**        |
| ---------- | --------------- | ---------------------- |
| GET        | `/products`     | Retrieve all products  |
| POST       | `/products`     | Create a new product   |
| GET        | `/products/:id` | Retrieve product by ID |
| PUT        | `/products/:id` | Update product by ID   |
| DELETE     | `/products/:id` | Delete product by ID   |

---

### 💻 Technologies Used

- **Node.js:** Runtime for server-side applications.
- **Express:** Framework for routing and API handling.
- **Prisma:** ORM for database interactions.
- **Nodemon:** Automatically restarts the server during development.
- **Dotenv:** Manages environment variables.

---

### 🤝 Contributing

Contributions are welcome! Please submit a pull request or open an issue for suggestions or improvements.
