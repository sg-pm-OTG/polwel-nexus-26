import { useState } from "react";
import Login from "./Login";
import UserNotFound from "./UserNotFound";
import Dashboard from "./Dashboard";
import LoanDetails from "./LoanDetails";
import FixedDepositDetails from "./FixedDepositDetails";
import Logout from "./Logout";

type AppState = "login" | "userNotFound" | "dashboard" | "loanDetails" | "fixedDepositDetails" | "logout";

const NexusPortal = () => {
  const [currentState, setCurrentState] = useState<AppState>("login");
  const [user, setUser] = useState<{ name: string; nric: string } | null>(null);

  const handleLogin = () => {
    // Mock user data for demonstration
    const mockUser = {
      name: "Ahmad Bin Hassan",
      nric: "S1234567A"
    };
    setUser(mockUser);
    setCurrentState("dashboard");
  };


  const handleUserNotFound = () => {
    setCurrentState("userNotFound");
  };

  const handleBackToLogin = () => {
    setUser(null);
    setCurrentState("login");
  };

  const handleLogout = () => {
    setCurrentState("logout");
  };

  const handleViewLoans = () => {
    setCurrentState("loanDetails");
  };

  const handleViewFixedDeposits = () => {
    setCurrentState("fixedDepositDetails");
  };

  const handleBackToDashboard = () => {
    setCurrentState("dashboard");
  };

  switch (currentState) {
    case "login":
      return (
        <Login 
          onLogin={handleLogin}
          onUserNotFound={handleUserNotFound}
        />
      );
    
    
    case "userNotFound":
      return (
        <UserNotFound 
          onBackToLogin={handleBackToLogin}
        />
      );
    
    case "dashboard":
      return user ? (
        <Dashboard 
          user={user}
          onViewLoans={handleViewLoans}
          onViewFixedDeposits={handleViewFixedDeposits}
          onLogout={handleLogout}
        />
      ) : null;
    
    case "loanDetails":
      return user ? (
        <LoanDetails 
          user={user}
          onBackToDashboard={handleBackToDashboard}
          onLogout={handleLogout}
        />
      ) : null;
    
    case "fixedDepositDetails":
      return user ? (
        <FixedDepositDetails 
          user={user}
          onBackToDashboard={handleBackToDashboard}
          onLogout={handleLogout}
        />
      ) : null;
    
    case "logout":
      return (
        <Logout 
          onBackToLogin={handleBackToLogin}
        />
      );
    
    default:
      return (
        <Login 
          onLogin={handleLogin}
          onUserNotFound={handleUserNotFound}
        />
      );
  }
};

export default NexusPortal;
