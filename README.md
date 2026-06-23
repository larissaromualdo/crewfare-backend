Crewfare Backend:
Backend for the Crewfare project, responsible for receiving, saving, listing, updating, and deleting events.

-> Technologies
- NestJS
- TypeScript
- MongoDB
- Mongoose
- Multer

-> Features
- Create events
- Receive and save the event banner
- List all registered events
- Search for an event by ID
- Update an existing event
- Delete an event
- Serve images saved locally in the `uploads` folder

-> Prerequisites
Before running the backend, make sure you have installed:
- Node.js
- npm
- MongoDB

MongoDB must be running locally.

The application uses the following connection:

```txt
mongodb://localhost:27017/crewfare

->How to Run the Project:
-Install the dependencies: npm install.
-Start the backend server:npm run start:dev;
-The backend will be available at:http://localhost:3000.
The frontend consumes the backend API at: http://localhost:3000/events

->This backend is consumed by the Crewfare frontend.To use the full system, run:
Backend: http://localhost:3000
Frontend: http://localhost:5173
