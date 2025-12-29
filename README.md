📝 BigBlog App
BigBlog is a high-performance, full-stack blogging platform built with React 19, Vite, and Appwrite. It features a robust state management system using Redux Toolkit and a sleek, modern interface powered by Tailwind CSS v4.

🌟 Key Features
Authentication: Secure Login/Signup system powered by Appwrite Auth.

State Management: Global state handling for user sessions and post data using Redux Toolkit.

Rich Text Editing: Integrated TinyMCE editor for creating beautiful, formatted blog posts.

Form Handling: Optimized performance with React Hook Form.

Dynamic Routing: Multi-page experience with React Router Dom v7.

Backend Integration: Database management and file storage (for images) handled via Appwrite.

Content Rendering: Safe and efficient HTML parsing with html-react-parser.

🛠️ Tech Stack
Frontend
Library: React 19

Build Tool: Vite (ES Modules)

Styling: Tailwind CSS v4

State: Redux Toolkit & React-Redux

Backend (BaaS)
Appwrite: Authentication, Database, and Storage (Buckets).

Form & Logic
TinyMCE: For the WYSIWYG editor.

React Hook Form: For validation and submission logic.

🚀 Getting Started
1. Prerequisites
Ensure you have Node.js installed and an active Appwrite project.

2. Installation
Bash

git clone https://github.com/Mslight16/React-Appwrite-BigBlog.git
cd BloggersHub
npm install
3. Environment Variables
Create a .env file in the root directory and add your Appwrite credentials:

Code snippet

VITE_APPWRITE_URL="https://cloud.appwrite.io/v1"
VITE_APPWRITE_PROJECT_ID=""
VITE_APPWRITE_DATABASE_ID=""
VITE_APPWRITE_COLLECTION_ID=""
VITE_APPWRITE_BUCKET_ID=""
4. Development
Bash

npm run dev
🏗️ Project Structure
Plaintext

src/
├── appwrite/      # Appwrite configuration & authentication services
├── components/    # Reusable UI components (Header, Footer, Logout, etc.)
├── store/         # Redux Toolkit slices and store configuration
├── pages/         # Page-level components (Home, Login, Signup, AllPosts)
├── components/RTE # Real-time Editor component
└── main.jsx       # Entry point