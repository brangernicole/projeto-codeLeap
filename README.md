# CodeLeap Network

Project developed with React, TypeScript, and Vite, simulating a simple social network where users can create, edit, and delete posts. The interface is fully responsive, adapting to mobile devices, and features hover effects to enhance user experience.

## Features

- **User registration:** Initial screen to enter the username.
- **Main page:** Displays posts and allows creating new posts with title and content.
- **Posts CRUD:**
  - Create post
  - Edit post (modal)
  - Delete post (modal)
- **Modern and responsive interface:** Using TailwindCSS.
- **Navigation flow:** React Router DOM.

## Project Structure

- `src/pages/SignUp.tsx`: User registration screen.
- `src/pages/Home.tsx`: Main page with post feed and form to create posts.
- `src/components/EditModal.tsx`: Modal to edit posts.
- `src/components/DeleteModal.tsx`: Modal to delete posts.
- `src/assets/icons/`: Icons for edit and delete actions.

## Technologies Used

- React 19
- TypeScript
- Vite
- TailwindCSS
- React Router DOM
- ESLint
- React Hooks (useState)
- React Router DOM (useNavigate)

## How to run the project

1. Install dependencies:
   ```
   npm install
   ```
2. Start the development server:
   ```
   npm run dev
   ```
3. Access (http://localhost:5173) in your browser.

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Generates the production build.
- `npm run preview`: Previews the build.
- `npm run lint`: Runs lint.

## Highlights

- Modals for editing and deleting posts.
- Field validation for creation and editing.
- Clean and responsive UI, adapted for mobile.
- Hover effects on actions and interactive elements.

## Deploy

This project is hosted on Vercel: (https://projeto-code-leap.vercel.app/)

Deployment is automatic for every push to the main branch.
