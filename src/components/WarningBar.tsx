import { useState, useEffect } from "react";
import { X } from "lucide-react";

const WarningBar = () => {
  const [showWarning, setShowWarning] = useState(true);

  useEffect(() => {
    const isWarningDismissed = localStorage.getItem('scamWarningDismissed');
    if (isWarningDismissed === 'true') {
      setShowWarning(false);
    }
  }, []);

  const handleClose = () => {
    setShowWarning(false);
    localStorage.setItem('scamWarningDismissed', 'true');
  };

  if (!showWarning) return null;

  return (
    <div className="bg-primary text-primary-foreground px-4 py-2 text-sm text-center flex items-center justify-between">
      <div className="flex-1 text-center">
        ⓘ Beware of scams: POLWEL will never ask for your login details. Please call the 24/7 ScamShield Helpline at 1799 if you are unsure it is a scam.
      </div>
      <button
        onClick={handleClose}
        className="ml-4 p-1 hover:bg-primary-hover rounded"
        aria-label="Close warning"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default WarningBar;