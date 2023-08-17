// App.js

import React from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import AuthPage from './AuthPage'; // Import the AuthPage component
import Routes from "./Routes";
import './AuthPage.css'; // Add this line if you have a separate CSS file
//import './App.css'; // If you have other styling

function App() {
  return (
    <ProSidebarProvider>
      <div className="app-container">
        <h1>Welcome to My Banking App</h1>
        <AuthPage /> {/* Include the AuthPage component */}
      </div>
      <Routes />
    </ProSidebarProvider>
  );
}

export default App;
