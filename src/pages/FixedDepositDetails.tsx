import { ArrowLeft, Building2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Layout from "@/components/Layout";

interface FixedDepositDetailsProps {
  user: {
    name: string;
    nric: string;
  };
  onBackToDashboard: () => void;
  onLogout: () => void;
}

const FixedDepositDetails = ({ user, onBackToDashboard, onLogout }: FixedDepositDetailsProps) => {
  // Mock fixed deposit data for demonstration
  const mockFixedDeposits = [
    {
      fdNumber: "FD-2024-001",
      startDate: "15 Jan 2024",
      maturityDate: "15 Jan 2025",
      withdrawalDate: "-",
      instructions: "Auto Renew",
      tenure: 12,
      interestRate: 2.85,
      status: "Active",
      depositAmount: 50000.00,
      maturityInterest: 1425.00,
      withdrawalAmount: 0.00,
      accruedInterest: 1187.50,
      nominationName: "Mary Tan",
      nominationRelationship: "Spouse"
    },
        {
          fdNumber: "FD-2023-078",
          startDate: "10 Sep 2023",
          maturityDate: "10 Mar 2024",
          withdrawalDate: "10 Mar 2024",
          instructions: "Withdraw",
          tenure: 6,
          interestRate: 2.65,
          status: "Closed",
          depositAmount: 25000.00,
          maturityInterest: 331.25,
          withdrawalAmount: 25331.25,
          accruedInterest: 331.25,
          nominationName: "John Lim",
          nominationRelationship: "Son"
        },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-success text-success-foreground">{status}</Badge>;
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
              <Building2 className="w-8 h-8 text-secondary" />
              Fixed Deposit Details
            </h1>
            <p className="text-muted-foreground">
              Fixed deposit accounts from the last 5 years
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
              <CardTitle className="text-lg font-bold">Fixed Deposit Summary</CardTitle>
              <Building2 className="h-5 w-5 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Active</span>
                  <Badge className="bg-success text-success-foreground">
                    {mockFixedDeposits.filter(fd => fd.status === "Active").length}
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Closed</span>
                  <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">
                    {mockFixedDeposits.filter(fd => fd.status === "Closed").length}
                  </Badge>
                </div>
                <div className="border-t pt-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground">Total Number of Fixed Deposits</span>
                    <Badge variant="secondary" className="bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">
                      {mockFixedDeposits.length}
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-foreground">Total</span>
                    <div className="text-lg font-bold text-primary">
                      {formatCurrency(mockFixedDeposits.filter(fd => fd.status === "Active").reduce((total, fd) => total + fd.depositAmount, 0))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Fixed Deposit Details Grid */}
        <div>
          <div className="mb-4">
            <h2 className="text-xl font-bold text-foreground">Fixed Deposit Account Details</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {mockFixedDeposits.map((fd) => (
              <Card key={fd.fdNumber} className="shadow-sm">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-primary font-bold">{fd.fdNumber}</CardTitle>
                    {getStatusBadge(fd.status)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-muted-foreground">Start Date:</span>
                        <p className="font-medium">{fd.startDate}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Maturity Date:</span>
                        <p className="font-medium">{fd.maturityDate}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Withdrawal Date:</span>
                        <p className="font-medium">{fd.withdrawalDate}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Maturity Instructions:</span>
                        <p className="font-medium">{fd.instructions}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Tenure:</span>
                        <p className="font-medium">{fd.tenure} months</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Interest Rate:</span>
                        <p className="font-medium">{formatPercentage(fd.interestRate)}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Deposit Amount:</span>
                        <p className="font-medium">{formatCurrency(fd.depositAmount)}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Maturity Interest:</span>
                        <p className="font-medium">{formatCurrency(fd.maturityInterest)}</p>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Withdrawal Amount:</span>
                        <p className="font-bold" style={{color: '#1e3a8a'}}>{formatCurrency(fd.withdrawalAmount)}</p>
                      </div>
                     </div>
                     <div className="border-t pt-3">
                       <h4 className="text-sm font-bold text-foreground mb-2">Nomination Details</h4>
                       <div className="grid grid-cols-2 gap-4 text-sm">
                         <div>
                           <span className="text-muted-foreground">Name:</span>
                           <p className="font-medium">{fd.nominationName}</p>
                         </div>
                         <div>
                           <span className="text-muted-foreground">Relationship:</span>
                           <p className="font-medium">{fd.nominationRelationship}</p>
                         </div>
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

export default FixedDepositDetails;