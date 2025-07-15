import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Dna, Pill, Target, CheckCircle } from "lucide-react";

const PrecisionMedicineDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const patientProfile = {
    condition: "Breast Cancer",
    stage: "Stage II",
    geneticMarkers: ["BRCA1", "HER2+", "ER+"],
    previousTreatments: ["Chemotherapy", "Radiation"]
  };

  const treatmentOptions = [
    {
      name: "Trastuzumab (Herceptin)",
      compatibility: 95,
      sideEffects: "Low",
      effectiveness: "High",
      reason: "HER2+ compatibility"
    },
    {
      name: "Tamoxifen",
      compatibility: 88,
      sideEffects: "Medium",
      effectiveness: "High",
      reason: "ER+ receptor match"
    },
    {
      name: "Carboplatin",
      compatibility: 72,
      sideEffects: "High",
      effectiveness: "Medium",
      reason: "BRCA1 mutation present"
    }
  ];

  const steps = [
    "Genetic Analysis",
    "Biomarker Identification",
    "Treatment Matching",
    "Personalized Plan"
  ];

  const runAnalysis = () => {
    setIsAnalyzing(true);
    setCurrentStep(0);

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setIsAnalyzing(false);
          return prev;
        }
      });
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">Precision Medicine AI</h3>
        <p className="text-muted-foreground">
          Personalized treatment based on genetic profile
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Dna className="h-5 w-5" />
              Patient Genetic Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Condition:</span>
                <Badge variant="outline">{patientProfile.condition}</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium">Stage:</span>
                <Badge variant="secondary">{patientProfile.stage}</Badge>
              </div>
            </div>

            <div>
              <div className="text-sm font-medium mb-2">Genetic Markers:</div>
              <div className="flex flex-wrap gap-2">
                {patientProfile.geneticMarkers.map((marker, index) => (
                  <Badge key={index} className="bg-gradient-medical text-white">
                    {marker}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <div className="text-sm font-medium mb-2">Previous Treatments:</div>
              <div className="flex flex-wrap gap-2">
                {patientProfile.previousTreatments.map((treatment, index) => (
                  <Badge key={index} variant="outline">
                    {treatment}
                  </Badge>
                ))}
              </div>
            </div>

            {!isAnalyzing && currentStep === 0 && (
              <Button onClick={runAnalysis} className="w-full mt-4">
                Generate Personalized Treatment
              </Button>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Treatment Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isAnalyzing && (
              <div className="space-y-4">
                <div className="space-y-3">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        index <= currentStep ? 'bg-primary' : 'bg-muted'
                      }`} />
                      <span className={`text-sm ${
                        index <= currentStep ? 'text-primary font-medium' : 'text-muted-foreground'
                      }`}>
                        {step}
                      </span>
                      {index === currentStep && (
                        <div className="ml-auto">
                          <div className="w-4 h-4 bg-primary rounded-full pulse-glow" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <Progress value={(currentStep + 1) / steps.length * 100} className="data-flow" />
              </div>
            )}

            {!isAnalyzing && currentStep === steps.length - 1 && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-medium text-accent">
                  <CheckCircle className="h-4 w-4" />
                  Personalized Treatment Plan
                </div>

                <div className="space-y-3">
                  {treatmentOptions.map((treatment, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm">{treatment.name}</span>
                        <Badge className={
                          treatment.compatibility > 90 ? "bg-green-500" :
                          treatment.compatibility > 80 ? "bg-yellow-500" : "bg-orange-500"
                        }>
                          {treatment.compatibility}% match
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                        <div>Side Effects: {treatment.sideEffects}</div>
                        <div>Effectiveness: {treatment.effectiveness}</div>
                      </div>
                      <div className="text-xs text-accent mt-1">
                        {treatment.reason}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <div className="text-sm font-medium text-primary">Recommended Protocol</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Start with Trastuzumab + Tamoxifen combination therapy
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrecisionMedicineDemo;