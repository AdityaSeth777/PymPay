import { ProSidebarProvider } from "react-pro-sidebar";
import React from "react";
import Routes from "./Routes";
import Login from "./Login"; // Import the Login component

function App() {
  return (
    <ProSidebarProvider>
      <div>
        <h1>Welcome to My Banking App</h1>
        <Login /> {/* Include the Login component here */}
        <Routes />
      </div>
    </ProSidebarProvider>
  );
}

export default App;
