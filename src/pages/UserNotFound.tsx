import { AlertTriangle, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";

interface UserNotFoundProps {
  onBackToLogin: () => void;
}

const UserNotFound = ({ onBackToLogin }: UserNotFoundProps) => {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader className="text-center space-y-4">
            <div className="bg-secondary p-4 rounded-full w-16 h-16 mx-auto">
              <AlertTriangle className="w-8 h-8 text-secondary-foreground" />
            </div>
            <CardTitle className="text-2xl text-foreground">User Not Found</CardTitle>
            <CardDescription className="text-base">
              There is no record associated with your NRIC in our system for the past five years.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 rounded-lg text-center" style={{ backgroundColor: '#c5c5c6' }}>
              <p className="text-sm text-black">
                If you require any assistance, please contact the Financial Services Division<br />at <a href="tel:62356428" className="text-primary hover:underline underline">6235 6428</a> or email <a href="mailto:fsd@polwel.org.sg" className="text-primary hover:underline underline">fsd@polwel.org.sg</a>
              </p>
            </div>

            <Button
              onClick={onBackToLogin}
              className="w-full bg-secondary text-primary hover:bg-secondary-hover font-semibold"
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

export default UserNotFound;