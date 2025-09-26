import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CheckCircle } from "lucide-react";

interface NRICConfirmationProps {
  nric: string;
  onProceed: () => void;
}

const NRICConfirmation = ({ nric, onProceed }: NRICConfirmationProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            Singpass Authentication Successful
          </h1>
          <p className="text-gray-600">
            We have successfully retrieved your information from Singpass
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-center text-lg">
              Confirm Your Identity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nric" className="text-sm font-medium text-gray-700">
                NRIC/FIN
              </Label>
              <Input
                id="nric"
                type="text"
                value={nric}
                readOnly
                className="bg-gray-50 cursor-not-allowed"
              />
              <p className="text-xs text-gray-500">
                This information will be used to access your POLWEL account
              </p>
            </div>

            <Button 
              onClick={onProceed}
              className="w-full mt-6"
              size="lg"
            >
              Proceed to Log In
            </Button>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-xs text-gray-500">
            By proceeding, you confirm that this information is correct
          </p>
        </div>
      </div>
    </div>
  );
};

export default NRICConfirmation;