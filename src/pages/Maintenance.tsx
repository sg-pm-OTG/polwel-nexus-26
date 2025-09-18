import { AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";

const Maintenance = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{ backgroundColor: '#c5c5c6' }}>
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-black">
            We're currently undergoing maintenance
          </h1>
          <p className="text-black">
            Please try again later.
          </p>
        </div>
        
        <Card className="p-6" style={{ backgroundColor: '#c5c5c6' }}>
          <p className="text-sm text-black mb-4">
            For any queries, please contact the POLWEL Financial Services Division at{" "}
            <a href="tel:62356428" className="text-primary hover:underline underline">
              6235 6428 (option 1)
            </a>{" "}
            or email{" "}
            <a href="mailto:fsd@polwel.org.sg" className="text-primary hover:underline underline">
              fsd@polwel.org.sg
            </a>
            .
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Maintenance;