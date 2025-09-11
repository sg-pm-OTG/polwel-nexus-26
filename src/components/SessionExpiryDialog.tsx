import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";

interface SessionExpiryDialogProps {
  isOpen: boolean;
  onExtendSession: () => void;
  onLogout: () => void;
}

const SessionExpiryDialog = ({ isOpen, onExtendSession, onLogout }: SessionExpiryDialogProps) => {
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    if (!isOpen) {
      setCountdown(30);
      return;
    }

    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          onLogout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, onLogout]);

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md bg-white" onPointerDownOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-secondary" />
            Session Expiring Soon
          </DialogTitle>
          <DialogDescription>
            Your session will expire in <span className="font-semibold text-secondary">{countdown} seconds</span>. 
            Do you want to extend your session?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button onClick={onLogout} className="w-full sm:w-auto bg-primary text-secondary hover:bg-primary-hover">
            Logout
          </Button>
          <Button onClick={onExtendSession} className="w-full sm:w-auto bg-secondary text-primary hover:bg-secondary-hover">
            Extend Session
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SessionExpiryDialog;