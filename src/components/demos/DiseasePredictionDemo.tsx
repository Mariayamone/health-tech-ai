import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Heart, Activity, AlertTriangle, TrendingUp } from "lucide-react";

const DiseasePredictionDemo = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<any>(null);

  const patientData = {
    name: "Patient #A7491",
    age: 45,
    gender: "Male",
    bloodPressure: "140/90",
    cholesterol: "240 mg/dL",
    bmi: 28.3,
    smoking: "Yes",
    familyHistory: "Heart Disease"
  };

  const runPrediction = () => {
    setIsAnalyzing(true);
    setResults(null);

    // Simulate AI analysis
    setTimeout(() => {
      setResults({
        heartDisease: { risk: 78, timeframe: "5-7 years" },
        diabetes: { risk: 45, timeframe: "8-10 years" },
        stroke: { risk: 32, timeframe: "10+ years" }
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">Disease Prediction AI Demo</h3>
        <p className="text-muted-foreground">
          AI analyzes patient data to predict disease risks
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Patient Profile
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div><strong>Age:</strong> {patientData.age}</div>
              <div><strong>Gender:</strong> {patientData.gender}</div>
              <div><strong>BP:</strong> {patientData.bloodPressure}</div>
              <div><strong>Cholesterol:</strong> {patientData.cholesterol}</div>
              <div><strong>BMI:</strong> {patientData.bmi}</div>
              <div><strong>Smoking:</strong> {patientData.smoking}</div>
            </div>
            <div className="pt-2">
              <Badge variant="outline">Family History: {patientData.familyHistory}</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5" />
              Risk Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            {!isAnalyzing && !results && (
              <Button onClick={runPrediction} className="w-full">
                Run AI Prediction
              </Button>
            )}

            {isAnalyzing && (
              <div className="space-y-3">
                <div className="text-sm text-muted-foreground">Analyzing patient data...</div>
                <Progress value={75} className="data-flow" />
                <div className="text-xs text-muted-foreground">
                  Processing 10,000+ medical records for comparison
                </div>
              </div>
            )}

            {results && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <TrendingUp className="h-4 w-4 text-accent" />
                  Prediction Results
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Heart Disease Risk</span>
                    <Badge variant="destructive">{results.heartDisease.risk}%</Badge>
                  </div>
                  <Progress value={results.heartDisease.risk} className="h-2" />
                  <div className="text-xs text-muted-foreground">
                    Estimated timeframe: {results.heartDisease.timeframe}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Diabetes Risk</span>
                    <Badge variant="secondary">{results.diabetes.risk}%</Badge>
                  </div>
                  <Progress value={results.diabetes.risk} className="h-2" />
                  <div className="text-xs text-muted-foreground">
                    Estimated timeframe: {results.diabetes.timeframe}
                  </div>
                </div>

                <div className="mt-4 p-3 bg-accent/10 rounded-lg">
                  <div className="flex items-center gap-2 text-sm font-medium text-accent">
                    <AlertTriangle className="h-4 w-4" />
                    Recommended Actions
                  </div>
                  <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                    <li>• Schedule cardiology consultation</li>
                    <li>• Implement lifestyle changes</li>
                    <li>• Begin preventive medication</li>
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

export default DiseasePredictionDemo;