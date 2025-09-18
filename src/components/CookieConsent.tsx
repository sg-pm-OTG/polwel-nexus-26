import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-lg z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 className="font-semibold text-foreground mb-1">Necessary Cookie Notice</h3>
            <p className="text-sm text-muted-foreground">
              We use essential cookies to keep you securely signed in and to improve your experience. By continuing, you agree to our use of cookies.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <Button
              onClick={handleAccept}
              className="bg-secondary text-primary hover:bg-secondary-hover font-semibold"
              size="sm"
            >
              Got it!
            </Button>
            <Button 
              variant="outline"
              onClick={() => window.open('https://polwel.org.sg/privacy-policy/', '_blank')}
              className="bg-[#001a45] text-white border-[#1e3a8a] hover:bg-[#1e3a8a]/90 hover:text-white hover:border-[#1e3a8a]/90 font-semibold"
              size="sm"
            >
              Privacy Policy
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;