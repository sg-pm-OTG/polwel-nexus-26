import { AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";

const Maintenance = () => {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-lg">
          <CardHeader className="text-center space-y-4">
            <div className="bg-secondary p-4 rounded-full w-16 h-16 mx-auto">
              <AlertTriangle className="w-8 h-8 text-secondary-foreground" />
            </div>
            <CardTitle className="text-2xl text-foreground">System Maintenance</CardTitle>
            <CardDescription className="text-base">
              We're currently undergoing maintenance, please try again later.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="p-6 rounded-lg text-center" style={{ backgroundColor: 'hsl(210 3% 43% / 0.8)' }}>
              <p className="text-sm text-white">
                For any queries, please contact the POLWEL Financial Services Division<br />at <a href="tel:62356428" className="text-secondary hover:underline">6235 6428</a> (option 1) or email <a href="mailto:fsd@polwel.org.sg" className="text-secondary hover:underline">fsd@polwel.org.sg</a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Maintenance;