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
      <div className="w-full max-w-md space-y-8">
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
              <a href="#" className="text-primary hover:underline">
                FAQ
              </a>
              <a href="https://polwel.org.sg/terms-of-use/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                Terms of Use
              </a>
              <span className="text-muted-foreground">
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
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  
                  <circle cx="12" cy="12" r="3" fill="currentColor"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/>
                </svg>
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