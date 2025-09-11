import { useState } from "react";
import { LogOut, ChevronDown, Facebook, Youtube, Linkedin, Instagram, X } from "lucide-react";
import CookieConsent from "./CookieConsent";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const polwelLogo = "/lovable-uploads/05acceb6-d701-4f43-80b8-8b55ffc82105.png";

const WarningBar = () => {
  const [showWarning, setShowWarning] = useState(true);

  if (!showWarning) return null;

  return (
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
  );
};

interface LayoutProps {
  children: React.ReactNode;
  user?: {
    name: string;
    nric: string;
  };
  onLogout?: () => void;
}

const Layout = ({ children, user, onLogout }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Warning Bar */}
      <WarningBar />
      
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <img src={polwelLogo} alt="Polwel" className="h-12" />
              <div>
                <h1 className="text-lg font-bold text-primary mt-1">NEXUS Financial Portal</h1>
              </div>
            </div>
            
            {user && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 hover:bg-muted">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="bg-secondary text-secondary-foreground">
                        {user.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <div className="px-2 py-2 text-sm text-foreground font-medium">
                    {user.name}
                  </div>
                  <DropdownMenuItem onClick={onLogout} className="gap-2 cursor-pointer">
                    <LogOut className="w-4 h-4" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="https://polwel.org.sg/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                About POLWEL
              </a>
              <a href="https://polwel.org.sg/contact/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                Contact Us
              </a>
              <a href="https://polwel.org.sg/privacy-policy/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                Privacy Policy
              </a>
              <a href="https://www.polwel.org.sg/fixed-deposits/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                FAQ
              </a>
              <a href="https://polwel.org.sg/terms-of-use/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                Terms of Use
              </a>
              <span className="text-white">
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
              <a href="https://www.instagram.com/sgpolicegifts/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-secondary" style={{ color: 'hsl(215 100% 14%)' }}>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.40z"/>
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

export default Layout;