import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import HomePage from "./components/HomePage"
import AddEmployeePage from "./components/AddEmployeePage"
import MyInfoPage from "./components/MyInfoPage"
import LoginPage from "./components/elements/LoginPage"
import RegisterPage from "./components/elements/RegisterPage"

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/home" element={ <HomePage /> } />
      
       <Route path="/add-employee" element={ <AddEmployeePage /> } />

       <Route path="/my-info" element={ <MyInfoPage /> } />

       <Route path="/login" element={ <LoginPage /> } /> 

       <Route path="/register" element={ <RegisterPage /> } /> 
    </Routes>
   </BrowserRouter>
  )
}

export default App
