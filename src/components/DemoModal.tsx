import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import DiseasePredictionDemo from "./demos/DiseasePredictionDemo";
import PrecisionMedicineDemo from "./demos/PrecisionMedicineDemo";
import DrugDiscoveryDemo from "./demos/DrugDiscoveryDemo";
import AIDiagnosticsDemo from "./demos/AIDiagnosticsDemo";
import GlobalHealthMonitoringDemo from "./demos/GlobalHealthMonitoringDemo";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  demoType: string;
}

const DemoModal = ({ isOpen, onClose, demoType }: DemoModalProps) => {
  const getDemoComponent = () => {
    switch (demoType) {
      case "disease-prediction":
        return <DiseasePredictionDemo />;
      case "precision-medicine":
        return <PrecisionMedicineDemo />;
      case "drug-discovery":
        return <DrugDiscoveryDemo />;
      case "ai-diagnostics":
        return <AIDiagnosticsDemo />;
      case "global-health":
        return <GlobalHealthMonitoringDemo />;
      default:
        return <div>Demo not available</div>;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">Healthcare Demo</DialogTitle>
        </DialogHeader>
        {getDemoComponent()}
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;