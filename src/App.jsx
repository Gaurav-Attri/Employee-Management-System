import React, { useContext, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {

  const [user, setuser] = useState(null);

  const handleLogin = (email, password) => {
    if(email == "admin@gmail.com" && password == 123){
      setuser("admin");
    }
    else if(email == "user@gmail.com" && password == 123){
      setuser("employee");
    }
    else{
      alert("Invalid Credentials");
    }
  }

  const data = useContext(AuthContext);
  console.log(data);

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user == "admin" ? <AdminDashboard /> : ((user == "employee") ? <EmployeeDashboard /> : '')}
    </>
  );
};

export default App;
