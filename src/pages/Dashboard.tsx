import { useState, useEffect } from "react";
import { CreditCard, TrendingUp, Eye, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import SessionExpiryDialog from "@/components/SessionExpiryDialog";

interface DashboardProps {
  user: {
    name: string;
    nric: string;
  };
  onViewLoans: () => void;
  onViewFixedDeposits: () => void;
  onLogout: () => void;
}

const Dashboard = ({ user, onViewLoans, onViewFixedDeposits, onLogout }: DashboardProps) => {
  const [selectedPeriod, setSelectedPeriod] = useState("all");
  const [showSessionExpiry, setShowSessionExpiry] = useState(false);

  // Simulate session expiry warning after 3 minutes
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSessionExpiry(true);
    }, 3 * 60 * 1000); // 3 minutes

    return () => clearTimeout(timer);
  }, []);

  const handleExtendSession = () => {
    setShowSessionExpiry(false);
    // Reset the timer for another 3 minutes
    setTimeout(() => {
      setShowSessionExpiry(true);
    }, 3 * 60 * 1000);
  };

  // Mock data for demonstration
  const mockData = {
    loans: {
      active: 2,
      closed: 1,
      pendingClose: 1
    },
    fixedDeposits: {
      active: 2,
      closed: 1
    },
    lastTransactions: [
      { type: "Loan Repayment", amount: "-$850.00", date: "15 Jan 2024" }
    ]
  };

  return (
    <Layout user={user} onLogout={onLogout}>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">
            <span className="text-secondary">Welcome</span><span className="text-secondary">,</span> <span className="text-primary">{user.name}</span>
          </h1>
          <p className="text-muted-foreground">
            Here's your financial overview for the past 5 years
          </p>
        </div>

        {/* Last Retrieved Information */}
        <div className="bg-card p-3 rounded-lg">
          <p className="text-sm text-muted-foreground">
            Information last retrieved: 18 Sep 2025, 3:30 PM
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Loan Accounts Card */}
          <Card className="shadow-sm flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-bold">Loan Accounts</CardTitle>
              <CreditCard className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent className="p-6 pt-0 flex-1 flex flex-col">
              <div className="flex-1 space-y-3">
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Active</span>
                    <Badge variant="secondary" className="bg-success text-success-foreground hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">
                      {mockData.loans.active}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Closed</span>
                    <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">{mockData.loans.closed}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Pending Closure</span>
                    <Badge variant="secondary" className="bg-warning text-warning-foreground hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">
                      {mockData.loans.pendingClose}
                    </Badge>
                  </div>
                </div>
                <div className="border-t pt-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Total Accounts</span>
                    <Badge variant="secondary" className="bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">
                      {mockData.loans.active + mockData.loans.closed + mockData.loans.pendingClose}
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Button 
                  onClick={onViewLoans}
                  size="sm" 
                  className="w-full bg-secondary text-primary hover:bg-secondary-hover"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Fixed Deposit Accounts Card */}
          <Card className="shadow-sm flex flex-col">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-bold">Fixed Deposit Accounts</CardTitle>
              <Wallet className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent className="p-6 pt-0 flex-1 flex flex-col">
              <div className="flex-1 space-y-3">
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Active</span>
                    <Badge variant="secondary" className="bg-success text-success-foreground hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">
                      {mockData.fixedDeposits.active}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Closed</span>
                    <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">{mockData.fixedDeposits.closed}</Badge>
                  </div>
                </div>
                <div className="py-2"></div>
                <div className="border-t pt-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">Total Accounts</span>
                    <Badge variant="secondary" className="bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">
                      {mockData.fixedDeposits.active + mockData.fixedDeposits.closed}
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Button 
                  onClick={onViewFixedDeposits}
                  size="sm" 
                  className="w-full bg-secondary text-primary hover:bg-secondary-hover"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Announcements Section */}
        <div className="mt-8">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img 
              src="/polwel-announcement-updated.png" 
              alt="POLWEL Loan Options" 
              className="w-full h-auto object-cover"
            />
            {/* Desktop overlay text and button */}
            <div className="hidden sm:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-col items-center space-y-4 text-center">
              <h2 className="text-[#1e3a8a] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight px-4">
                POLWEL IS AROUND FOR EVERY OF YOUR MILESTONE
              </h2>
            </div>
            <div className="hidden sm:flex absolute left-1/2 bottom-16 transform -translate-x-1/2 justify-center">
              <a 
                href="https://polwel.org.sg/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 sm:px-6 sm:py-2 bg-primary text-white text-sm sm:text-base font-semibold rounded-md hover:bg-primary/90 transition-colors"
              >
                Find out more
              </a>
            </div>
          </div>
          
          {/* Mobile text and button below image */}
          <div className="sm:hidden mt-4 text-center space-y-4">
            <h2 className="text-[#1e3a8a] text-lg font-bold leading-tight px-4">
              POLWEL IS AROUND FOR EVERY OF YOUR MILESTONE
            </h2>
            <div className="flex justify-center">
              <a 
                href="https://polwel.org.sg/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-primary text-white text-sm font-semibold rounded-md hover:bg-primary/90 transition-colors"
              >
                Find out more
              </a>
            </div>
          </div>
        </div>

        <SessionExpiryDialog 
          isOpen={showSessionExpiry}
          onExtendSession={handleExtendSession}
          onLogout={onLogout}
        />
      </div>
    </Layout>
  );
};

export default Dashboard;