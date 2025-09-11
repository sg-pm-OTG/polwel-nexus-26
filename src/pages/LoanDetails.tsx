import { ArrowLeft, CreditCard, Calendar, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Layout from "@/components/Layout";

interface LoanDetailsProps {
  user: {
    name: string;
    nric: string;
  };
  onBackToDashboard: () => void;
  onLogout: () => void;
}

const LoanDetails = ({ user, onBackToDashboard, onLogout }: LoanDetailsProps) => {
  // Mock loan data for demonstration
  const mockLoans = [
    {
      loanNumber: "LOAN-2024-001",
      startDate: "15 Mar 2024",
      endDate: "15 Mar 2029",
      principalAmount: 25000.00,
      interestRate: 3.25,
      tenure: 60,
      monthlyRepayment: 453.20,
      lastRepaymentDate: "15 Jan 2024",
      outstandingPrincipal: 22150.00,
      outstandingInterest: 245.80,
      totalOutstanding: 22395.80,
      status: "Active",
      loanType: "Personal Loan"
    },
    {
      loanNumber: "LOAN-2023-045",
      startDate: "10 Aug 2023",
      endDate: "10 Aug 2026",
      principalAmount: 15000.00,
      interestRate: 2.85,
      tenure: 36,
      monthlyRepayment: 437.50,
      lastRepaymentDate: "10 Jan 2024",
      outstandingPrincipal: 8520.00,
      outstandingInterest: 112.30,
      totalOutstanding: 8632.30,
      status: "Active",
      loanType: "Emergency Loan"
    },
    {
      loanNumber: "LOAN-2022-078",
      startDate: "20 May 2022",
      endDate: "20 May 2024",
      principalAmount: 8000.00,
      interestRate: 3.50,
      tenure: 24,
      monthlyRepayment: 352.85,
      lastRepaymentDate: "20 Dec 2023",
      outstandingPrincipal: 0.00,
      outstandingInterest: 0.00,
      totalOutstanding: 0.00,
      status: "Pending Close",
      loanType: "Medical Loan"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-success text-success-foreground">{status}</Badge>;
      case "Pending Close":
        return <Badge className="bg-warning text-warning-foreground">{status}</Badge>;
      case "Closed":
        return <Badge variant="outline">{status}</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const formatCurrency = (amount: number) => {
    return amount === 0 ? "-" : `$${amount.toLocaleString('en-SG', { minimumFractionDigits: 2 })}`;
  };

  const formatPercentage = (rate: number) => {
    return `${rate.toFixed(2)}%`;
  };

  return (
    <Layout user={user} onLogout={onLogout}>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Button
            size="sm"
            onClick={onBackToDashboard}
            className="p-2 bg-secondary text-white hover:bg-secondary-hover"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
              <CreditCard className="w-8 h-8 text-secondary" />
              Loan Details
            </h1>
            <p className="text-muted-foreground">
              Loan accounts from the last 5 years (excluding rejected applications)
            </p>
          </div>
        </div>

        {/* Last Retrieved Information */}
        <div className="bg-card p-3 rounded-lg">
          <p className="text-sm text-muted-foreground">
            Information last retrieved: 13 Aug 2024, 2:30 PM
          </p>
        </div>

        {/* Summary Card */}
        <div className="grid grid-cols-1 max-w-md">
          <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg font-bold">Loan Summary</CardTitle>
              <CreditCard className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Active</span>
                  <Badge className="bg-success text-success-foreground">
                    {mockLoans.filter(loan => loan.status === "Active").length}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Closed</span>
                  <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">
                    {mockLoans.filter(loan => loan.status === "Closed").length}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Pending Close</span>
                  <Badge className="bg-warning text-warning-foreground">
                    {mockLoans.filter(loan => loan.status === "Pending Close").length}
                  </Badge>
                </div>
                <div className="border-t pt-4 space-y-3">
                 <div className="flex justify-between items-center">
                   <span className="text-sm font-medium text-foreground">Total Number of Loans</span>
                   <Badge variant="secondary" className="bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">
                     {mockLoans.length}
                   </Badge>
                 </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground">Total</span>
                    <div className="text-lg font-bold text-primary">
                      {formatCurrency(mockLoans.reduce((total, loan) => total + loan.totalOutstanding, 0))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Loan Details Grid */}
        <div>
          <div className="mb-4">
            <h2 className="text-xl font-bold text-foreground">Loan Account Details</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {mockLoans.map((loan) => (
              <Card key={loan.loanNumber} className="shadow-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-primary font-bold">{loan.loanNumber}</CardTitle>
                    {getStatusBadge(loan.status)}
                  </div>
                  <CardDescription className="text-primary font-bold">{loan.loanType}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Start Date:</span>
                        <p className="font-medium">{loan.startDate}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">End Date:</span>
                        <p className="font-medium">{loan.endDate}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Principal:</span>
                        <p className="font-medium">{formatCurrency(loan.principalAmount)}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Interest Rate:</span>
                        <p className="font-medium">{formatPercentage(loan.interestRate)}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Tenure:</span>
                        <p className="font-medium">{loan.tenure} months</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Last Repayment:</span>
                        <p className="font-medium">{loan.lastRepaymentDate}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Monthly Repayment:</span>
                        <p className="font-medium">{formatCurrency(loan.monthlyRepayment)}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Outstanding Principal:</span>
                        <p className="font-medium">{formatCurrency(loan.outstandingPrincipal)}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Outstanding Interest:</span>
                        <p className="font-medium">{formatCurrency(loan.outstandingInterest)}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Total Outstanding:</span>
                        <p className="font-medium text-secondary">{formatCurrency(loan.totalOutstanding)}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Information Note */}
        <Card className="shadow-sm" style={{ backgroundColor: 'hsl(210 3% 43% / 0.8)' }}>
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <div className="text-2xl text-white">
                ⓘ
              </div>
              <div className="space-y-1">
                <h4 className="font-semibold text-white">Information</h4>
                <p className="text-sm text-white">
                  For any queries, please contact the POLWEL Financial Services Division at <a href="tel:62356428" className="text-secondary hover:underline">6235 6428 (option 1)</a> or email <a href="mailto:fsd@polwel.org.sg" className="text-secondary hover:underline">fsd@polwel.org.sg</a>.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default LoanDetails;