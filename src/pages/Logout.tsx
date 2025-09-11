import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";

interface LogoutProps {
  onBackToLogin: () => void;
}

const Logout = ({ onBackToLogin }: LogoutProps) => {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader className="text-center space-y-4">
            <CardTitle className="text-2xl text-foreground">Logout Successful</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-center">
            <p className="text-base text-muted-foreground">
              You have successfully logged out from POLWEL Nexus Financial Portal.
            </p>

            <Button
              onClick={onBackToLogin}
              className="w-full bg-secondary text-primary hover:bg-secondary-hover"
              size="lg"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Login
            </Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Logout;