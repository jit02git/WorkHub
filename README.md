# WorkHub - Project Management Tool

A full-stack project management application built with Node.js, React.js, TypeScript, and MongoDB.

## 🚀 Features

- **User Authentication**: JWT-based registration and login
- **Project Management**: Create, update, delete, and view projects
- **Task Management**: Full CRUD operations on tasks with status tracking
- **Task Filtering**: Filter tasks by status (todo, in-progress, done)
- **Secure Authentication**: Bcrypt password hashing and JWT tokens

## 🛠 Tech Stack

**Backend:**
- Node.js with Express.js/NestJS
- MongoDB with Mongoose
- JWT Authentication
- Bcrypt for password hashing
- TypeScript

**Frontend:**
- React.js with TypeScript
- Tailwind CSS/Bootstrap/MUI for styling
- React Router
- Axios for API calls

## 📋 Prerequisites

- Node.js (v16+)
- MongoDB
- npm or yarn

## 🚦 Installation & Setup

### 1. Clone Repository
```bash
git clone https://github.com/jit02git/WorkHub.git
cd WorkHub
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create `.env` file in backend directory:
```env
MONGODB_URI=mongodb://localhost:27017/workhub
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=7d
PORT=5000
NODE_ENV=development
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

Create `.env` file in frontend directory:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

### 4. Database Seeding
```bash
cd backend
npm run seed
```

**Test Account Created:**
- Email: `test@example.com`
- Password: `Test@123`
- 2 projects with 3+ tasks each

## 🏃‍♂️ Running the Application

### Development Mode

**Start Backend:**
```bash
cd backend
npm run dev
# Runs on http://localhost:5000
```

**Start Frontend:**
```bash
cd frontend
npm start
# Runs on http://localhost:3000
```

### Production Mode

**Build Frontend:**
```bash
cd frontend
npm run build
```

**Start Backend:**
```bash
cd backend
npm start
```

## 📁 Project Structure

```
WorkHub/
├── backend/
│   ├── src/
│   ├── seeders/
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   ├── package.json
│   └── .env
└── README.md
```

## 🔑 Available Scripts

### Backend
- `npm run dev` - Start development server
- `npm start` - Start production server
- `npm run seed` - Run database seeder
- `npm test` - Run tests

### Frontend
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run lint` - Run linter

## 📱 Usage

1. **Register/Login**: Create account or login with test credentials
2. **Dashboard**: View all your projects
3. **Create Projects**: Add new projects with title, description, status
4. **Manage Tasks**: Add, edit, delete tasks within projects
5. **Filter Tasks**: Filter by status (todo, in-progress, done)
6. **Track Progress**: Monitor project and task completion

## 🌟 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Projects
- `GET /api/projects` - Get user projects
- `POST /api/projects` - Create project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

### Tasks
- `GET /api/projects/:projectId/tasks` - Get project tasks
- `POST /api/projects/:projectId/tasks` - Create task
- `PUT /api/tasks/:id` - Update task
- `DELETE /api/tasks/:id` - Delete task

## 🔒 Security Features

- JWT-based authentication
- Bcrypt password hashing
- Protected routes
- Input validation
- CORS configuration

## 🚀 Deployment

The application can be deployed on:
- **Backend**: Render, Railway, Heroku
- **Frontend**: Vercel, Netlify
- **Database**: MongoDB Atlas

## 🧪 Testing

Run tests with:
```bash
# Backend tests
cd backend && npm test

# Frontend tests
cd frontend && npm test
```

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Your Name** - [GitHub](https://github.com/jit02git)

---

**Demo Account:**
- Email: test@example.com
- Password: Test@123
