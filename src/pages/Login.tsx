import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Facebook, Youtube, Linkedin, Instagram, X } from "lucide-react";
import CookieConsent from "@/components/CookieConsent";
const polwelLogo = "/lovable-uploads/05acceb6-d701-4f43-80b8-8b55ffc82105.png";
import singpassLogo from "@/assets/singpass-logo.png";

interface LoginProps {
  onLogin: () => void;
  onUserNotFound: () => void;
}

const Login = ({ onLogin, onUserNotFound }: LoginProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showWarning, setShowWarning] = useState(true);

  const handleSingpassLogin = async () => {
    setIsLoading(true);
    
    // Simulate Singpass authentication
    setTimeout(() => {
      setIsLoading(false);
      // Simulate 80% success rate for demo
      if (Math.random() > 0.2) {
        onLogin();
      } else {
        onUserNotFound();
      }
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col login-page">
      {/* Warning Bar */}
      {showWarning && (
        <div className="bg-primary text-primary-foreground px-4 py-2 text-sm text-center flex items-center justify-between">
          <div className="flex-1 text-center">
            ⓘ Beware of scams: POLWEL will never ask for your login details. Please call the 24/7 ScamShield Helpline at 1799 if you are unsure it is a scam.
          </div>
          <button
            onClick={() => setShowWarning(false)}
            className="ml-4 p-1 hover:bg-primary-hover rounded"
            aria-label="Close warning"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
      
      <div className="flex items-center justify-center p-4 flex-1">
      <div className="w-full max-w-sm space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="mb-8">
            <img src={polwelLogo} alt="Polwel" className="w-48 h-auto mx-auto" />
          </div>
          <h1 className="text-3xl font-bold text-primary text-center">Welcome to POLWEL Nexus Financial Portal</h1>
        </div>

        {/* Login Card */}
        <Card className="shadow-lg">
          <CardHeader className="space-y-1">
            <CardDescription className="text-center text-base text-black">
              Access your financial records securely
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <Button
                onClick={handleSingpassLogin}
                disabled={isLoading}
                className="w-full py-4 text-white font-bold rounded-md hover:bg-[#B0262D] transition-colors"
                style={{ backgroundColor: '#F4333D', fontFamily: 'Poppins', fontSize: '16px' }}
                size="lg"
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-destructive-foreground border-t-transparent rounded-full animate-spin" />
                    Authenticating...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <span>Log in with</span>
                    <img src="/lovable-uploads/1a612a7e-6a5b-4839-a94d-8af585aaad2f.png" alt="singpass" className="h-3.5 mt-0.5" />
                  </div>
                )}
              </Button>
              <p className="text-muted-foreground mt-8 text-center text-sm italic">Accessible by POLWEL members only</p>
            </div>
          </CardContent>
        </Card>

        </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="https://polwel.org.sg/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                About POLWEL
              </a>
              <a href="https://polwel.org.sg/contact/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Contact Us
              </a>
              <a href="https://polwel.org.sg/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Privacy Policy
              </a>
              <a href="https://www.polwel.org.sg/fixed-deposits/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                FAQ
              </a>
              <a href="https://polwel.org.sg/terms-of-use/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Terms of Use
              </a>
              <span className="text-polwel-grey">
                Copyright © 2025, POLWEL Co-operative Society Limited. All Rights Reserved.
              </span>
            </div>
            <div className="flex gap-4">
              <a href="https://linkedin.com/company/polwelco-op" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-primary hover:text-secondary">
                <Linkedin className="h-5 w-5" fill="currentColor" />
              </a>
              <a href="https://www.youtube.com/@POLWELCo-Op" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-primary hover:text-secondary">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a2.985 2.985 0 0 0-2.103-2.103C19.518 3.632 12 3.632 12 3.632s-7.518 0-9.395.451A2.985 2.985 0 0 0 .502 6.186C.051 8.063.051 12 .051 12s0 3.937.451 5.814a2.985 2.985 0 0 0 2.103 2.103C4.482 20.368 12 20.368 12 20.368s7.518 0 9.395-.451a2.985 2.985 0 0 0 2.103-2.103C23.949 15.937 23.949 12 23.949 12s0-3.937-.451-5.814zM9.598 15.568V8.432L15.804 12l-6.206 3.568z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/SGPoliceGifts/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-primary hover:text-secondary">
                <Facebook className="h-5 w-5" fill="currentColor" />
              </a>
               <a href="https://www.instagram.com/sgpolicegifts/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-primary hover:text-secondary">
                 <Instagram className="h-5 w-5" fill="currentColor" />
               </a>
              <a href="https://www.tiktok.com/@sgpolicegifts" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-primary hover:text-secondary">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <CookieConsent />
    </div>
  );
};

export default Login;