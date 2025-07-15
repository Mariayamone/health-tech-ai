import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Eye, Brain, Zap, AlertTriangle } from "lucide-react";

const AIDiagnosticsDemo = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState("chest-xray");

  const medicalImages = {
    "chest-xray": {
      name: "Chest X-Ray",
      type: "Radiological",
      findings: [
        { condition: "Pneumonia", confidence: 94, severity: "Moderate" },
        { condition: "Pleural Effusion", confidence: 78, severity: "Mild" },
        { condition: "Normal", confidence: 12, severity: "N/A" }
      ]
    },
    "skin-lesion": {
      name: "Skin Lesion",
      type: "Dermatological",
      findings: [
        { condition: "Melanoma", confidence: 87, severity: "High Risk" },
        { condition: "Benign Nevus", confidence: 23, severity: "Low Risk" },
        { condition: "Seborrheic Keratosis", confidence: 15, severity: "Benign" }
      ]
    },
    "retinal-scan": {
      name: "Retinal Scan",
      type: "Ophthalmological",
      findings: [
        { condition: "Diabetic Retinopathy", confidence: 91, severity: "Stage 2" },
        { condition: "Macular Degeneration", confidence: 34, severity: "Early" },
        { condition: "Normal", confidence: 18, severity: "N/A" }
      ]
    }
  };

  const runAnalysis = () => {
    setIsAnalyzing(true);
    setResults(null);

    // Simulate AI analysis
    setTimeout(() => {
      const imageData = medicalImages[selectedImage as keyof typeof medicalImages];
      setResults({
        processingTime: "2.3 seconds",
        accuracy: "99.2%",
        findings: imageData.findings,
        recommendations: [
          "Consult with specialist",
          "Schedule follow-up in 2 weeks",
          "Consider additional imaging"
        ]
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">AI Medical Diagnostics</h3>
        <p className="text-muted-foreground">
          Advanced image analysis for medical diagnosis
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="h-5 w-5" />
              Medical Image Analysis
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Select Image Type:</label>
              <div className="grid grid-cols-1 gap-2">
                {Object.entries(medicalImages).map(([key, image]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedImage(key)}
                    className={`p-3 text-left border rounded-lg transition-smooth ${
                      selectedImage === key 
                        ? 'border-primary bg-primary/10' 
                        : 'border-muted hover:border-muted-foreground'
                    }`}
                  >
                    <div className="font-medium text-sm">{image.name}</div>
                    <div className="text-xs text-muted-foreground">{image.type}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 bg-muted/30 rounded-lg border-2 border-dashed border-muted-foreground/20">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-medical rounded-lg flex items-center justify-center">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <div className="text-sm font-medium">
                  {medicalImages[selectedImage as keyof typeof medicalImages].name}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  AI-ready medical image
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-sm font-medium">AI Analysis Features:</div>
              <div className="space-y-1 text-xs text-muted-foreground">
                <div>• Pattern recognition with 99.2% accuracy</div>
                <div>• Multi-layer neural network analysis</div>
                <div>• Comparison with 10M+ medical images</div>
                <div>• Real-time processing in 2-3 seconds</div>
              </div>
            </div>

            {!isAnalyzing && !results && (
              <Button onClick={runAnalysis} className="w-full">
                <Brain className="h-4 w-4 mr-2" />
                Analyze with AI
              </Button>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Diagnostic Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isAnalyzing && (
              <div className="space-y-4">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-tech rounded-full flex items-center justify-center pulse-glow">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-sm font-medium">AI Analysis in Progress</div>
                  <div className="text-xs text-muted-foreground">
                    Processing medical image...
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs text-muted-foreground">Analysis Steps:</div>
                  <div className="space-y-1 text-xs">
                    <div>✓ Image preprocessing complete</div>
                    <div>✓ Feature extraction running...</div>
                    <div>• Pattern matching in progress</div>
                    <div>• Generating diagnostic report</div>
                  </div>
                </div>

                <Progress value={75} className="data-flow" />
              </div>
            )}

            {results && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 bg-primary/10 rounded-lg">
                    <div className="text-lg font-bold text-primary">{results.processingTime}</div>
                    <div className="text-xs text-muted-foreground">Processing Time</div>
                  </div>
                  <div className="text-center p-3 bg-accent/10 rounded-lg">
                    <div className="text-lg font-bold text-accent">{results.accuracy}</div>
                    <div className="text-xs text-muted-foreground">AI Accuracy</div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-sm font-medium mb-3">
                    <AlertTriangle className="h-4 w-4 text-accent" />
                    Diagnostic Findings
                  </div>
                  
                  <div className="space-y-3">
                    {results.findings.map((finding: any, index: number) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-sm">{finding.condition}</span>
                          <Badge className={
                            finding.confidence > 85 ? "bg-red-500" :
                            finding.confidence > 50 ? "bg-yellow-500" : "bg-green-500"
                          }>
                            {finding.confidence}%
                          </Badge>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Severity: {finding.severity}
                        </div>
                        <Progress 
                          value={finding.confidence} 
                          className="h-1 mt-2"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                  <div className="text-sm font-medium text-accent mb-2">
                    Recommended Actions
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {results.recommendations.map((rec: string, index: number) => (
                      <li key={index}>• {rec}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AIDiagnosticsDemo;