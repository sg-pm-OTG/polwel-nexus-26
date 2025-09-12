import { LogOut, ChevronDown, Facebook, Youtube, Linkedin } from "lucide-react";
import CookieConsent from "./CookieConsent";
import WarningBar from "./WarningBar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const polwelLogo = "/lovable-uploads/05acceb6-d701-4f43-80b8-8b55ffc82105.png";

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
                <svg className="h-5 w-5" fill="hsl(215 100% 14%)" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="white"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeLinecap="round" strokeWidth="2"/>
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