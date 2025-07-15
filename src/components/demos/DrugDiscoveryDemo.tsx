import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Search, Atom, Beaker, Activity } from "lucide-react";

const DrugDiscoveryDemo = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [results, setResults] = useState<any>(null);

  const targetDisease = {
    name: "Alzheimer's Disease",
    target: "Beta-amyloid plaques",
    mechanism: "Protein aggregation inhibition"
  };

  const simulationPhases = [
    { name: "Molecular Screening", duration: "2.3M compounds/sec", icon: Search },
    { name: "Binding Affinity", duration: "Calculating interactions", icon: Atom },
    { name: "Toxicity Prediction", duration: "Safety assessment", icon: Beaker },
    { name: "Efficacy Modeling", duration: "Therapeutic potential", icon: Activity }
  ];

  const drugCandidates = [
    {
      name: "Compound ALZ-447",
      bindingScore: 94,
      toxicityRisk: "Low",
      efficacyPrediction: "High",
      novelty: "New mechanism"
    },
    {
      name: "Compound ALZ-829",
      bindingScore: 87,
      toxicityRisk: "Medium",
      efficacyPrediction: "Medium",
      novelty: "Modified existing"
    },
    {
      name: "Compound ALZ-156",
      bindingScore: 76,
      toxicityRisk: "Low",
      efficacyPrediction: "Medium",
      novelty: "Novel structure"
    }
  ];

  const runSimulation = () => {
    setIsSimulating(true);
    setCurrentPhase(0);
    setResults(null);

    const interval = setInterval(() => {
      setCurrentPhase((prev) => {
        if (prev < simulationPhases.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setResults({
              totalCompounds: "2.3M",
              candidatesFound: drugCandidates.length,
              timeReduction: "73%",
              successRate: "43%"
            });
            setIsSimulating(false);
          }, 1000);
          return prev;
        }
      });
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">AI Drug Discovery Simulation</h3>
        <p className="text-muted-foreground">
          Accelerating drug development with supercomputing
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Target Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <span className="text-sm font-medium">Disease Target:</span>
                <div className="mt-1">
                  <Badge variant="outline" className="text-sm">
                    {targetDisease.name}
                  </Badge>
                </div>
              </div>
              
              <div>
                <span className="text-sm font-medium">Molecular Target:</span>
                <div className="mt-1 text-sm text-muted-foreground">
                  {targetDisease.target}
                </div>
              </div>
              
              <div>
                <span className="text-sm font-medium">Mechanism:</span>
                <div className="mt-1 text-sm text-muted-foreground">
                  {targetDisease.mechanism}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t">
              <div className="text-sm font-medium mb-2">Simulation Parameters:</div>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div>• Compound Library: 2.3M molecules</div>
                <div>• AI Models: 47 trained algorithms</div>
                <div>• Computing Power: 10 petaflops</div>
              </div>
            </div>

            {!isSimulating && !results && (
              <Button onClick={runSimulation} className="w-full mt-4">
                Start Drug Discovery Simulation
              </Button>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Atom className="h-5 w-5" />
              Simulation Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            {isSimulating && (
              <div className="space-y-4">
                <div className="space-y-3">
                  {simulationPhases.map((phase, index) => {
                    const Icon = phase.icon;
                    return (
                      <div key={index} className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                          index <= currentPhase ? 'bg-gradient-tech' : 'bg-muted'
                        }`}>
                          <Icon className={`h-4 w-4 ${
                            index <= currentPhase ? 'text-white' : 'text-muted-foreground'
                          }`} />
                        </div>
                        <div className="flex-1">
                          <div className={`text-sm font-medium ${
                            index <= currentPhase ? 'text-primary' : 'text-muted-foreground'
                          }`}>
                            {phase.name}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {phase.duration}
                          </div>
                        </div>
                        {index === currentPhase && (
                          <div className="w-3 h-3 bg-accent rounded-full pulse-glow" />
                        )}
                      </div>
                    );
                  })}
                </div>
                <Progress value={(currentPhase + 1) / simulationPhases.length * 100} className="data-flow" />
              </div>
            )}

            {results && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-primary/10 rounded-lg">
                    <div className="text-2xl font-bold text-primary">{results.totalCompounds}</div>
                    <div className="text-xs text-muted-foreground">Compounds Screened</div>
                  </div>
                  <div className="text-center p-3 bg-accent/10 rounded-lg">
                    <div className="text-2xl font-bold text-accent">{results.candidatesFound}</div>
                    <div className="text-xs text-muted-foreground">Drug Candidates</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-sm font-medium">Top Drug Candidates:</div>
                  {drugCandidates.map((candidate, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-sm">{candidate.name}</span>
                        <Badge className={
                          candidate.bindingScore > 90 ? "bg-green-500" :
                          candidate.bindingScore > 80 ? "bg-yellow-500" : "bg-orange-500"
                        }>
                          {candidate.bindingScore}% binding
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div>
                          <span className="text-muted-foreground">Toxicity:</span> {candidate.toxicityRisk}
                        </div>
                        <div>
                          <span className="text-muted-foreground">Efficacy:</span> {candidate.efficacyPrediction}
                        </div>
                      </div>
                      <div className="text-xs text-accent mt-1">
                        {candidate.novelty}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="text-sm font-medium text-green-800">Discovery Acceleration</div>
                  <div className="text-sm text-green-700">
                    Time reduced by {results.timeReduction} compared to traditional methods
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

export default DrugDiscoveryDemo;