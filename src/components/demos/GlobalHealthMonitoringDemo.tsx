import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Globe, TrendingUp, AlertCircle, Activity } from "lucide-react";

const GlobalHealthMonitoringDemo = () => {
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("global");
  const [liveData, setLiveData] = useState<any>(null);

  const regions = {
    global: "Global Overview",
    "north-america": "North America",
    europe: "Europe",
    asia: "Asia Pacific",
    africa: "Africa"
  };

  const healthMetrics = {
    global: {
      totalPopulation: "8.1B",
      activeCases: "2.3M",
      outbreaks: [
        { disease: "Respiratory Virus", region: "Southeast Asia", severity: "Medium", trend: "Increasing" },
        { disease: "Foodborne Illness", region: "Africa", severity: "Low", trend: "Stable" },
        { disease: "Flu Season", region: "North America", severity: "High", trend: "Decreasing" }
      ],
      riskFactors: [
        { factor: "Air Quality", level: 72, status: "Concerning" },
        { factor: "Water Security", level: 45, status: "Critical" },
        { factor: "Healthcare Access", level: 68, status: "Adequate" }
      ]
    }
  };

  const startMonitoring = () => {
    setIsMonitoring(true);
    setLiveData(null);

    // Simulate real-time data updates
    const interval = setInterval(() => {
      setLiveData({
        timestamp: new Date().toLocaleTimeString(),
        newCases: Math.floor(Math.random() * 1000 + 500),
        recoveries: Math.floor(Math.random() * 800 + 600),
        hospitalizations: Math.floor(Math.random() * 200 + 100),
        vaccinations: Math.floor(Math.random() * 5000 + 10000)
      });
    }, 2000);

    // Stop after 30 seconds for demo
    setTimeout(() => {
      clearInterval(interval);
      setIsMonitoring(false);
    }, 30000);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-2">Global Health Monitoring System</h3>
        <p className="text-muted-foreground">
          Real-time global health surveillance and outbreak detection
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Global Health Dashboard
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Select Region:</label>
              <div className="grid grid-cols-1 gap-2">
                {Object.entries(regions).map(([key, name]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedRegion(key)}
                    className={`p-2 text-left border rounded-lg transition-smooth ${
                      selectedRegion === key 
                        ? 'border-primary bg-primary/10' 
                        : 'border-muted hover:border-muted-foreground'
                    }`}
                  >
                    <div className="text-sm font-medium">{name}</div>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-primary/10 rounded-lg">
                <div className="text-xl font-bold text-primary">{healthMetrics.global.totalPopulation}</div>
                <div className="text-xs text-muted-foreground">Population Monitored</div>
              </div>
              <div className="text-center p-3 bg-accent/10 rounded-lg">
                <div className="text-xl font-bold text-accent">{healthMetrics.global.activeCases}</div>
                <div className="text-xs text-muted-foreground">Active Health Cases</div>
              </div>
            </div>

            <div>
              <div className="text-sm font-medium mb-2">Data Sources:</div>
              <div className="space-y-1 text-xs text-muted-foreground">
                <div>• WHO Health Surveillance Network</div>
                <div>• 194 National Health Ministries</div>
                <div>• 15,000+ Healthcare Facilities</div>
                <div>• Social Media Health Mentions</div>
                <div>• Satellite Environmental Data</div>
              </div>
            </div>

            {!isMonitoring && (
              <Button onClick={startMonitoring} className="w-full">
                <Activity className="h-4 w-4 mr-2" />
                Start Live Monitoring
              </Button>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Health Intelligence
            </CardTitle>
          </CardHeader>
          <CardContent>
            {!isMonitoring && !liveData && (
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-sm font-medium mb-3">
                    <AlertCircle className="h-4 w-4 text-orange-500" />
                    Active Outbreaks
                  </div>
                  
                  <div className="space-y-3">
                    {healthMetrics.global.outbreaks.map((outbreak, index) => (
                      <div key={index} className="p-3 border rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-sm">{outbreak.disease}</span>
                          <Badge className={
                            outbreak.severity === "High" ? "bg-red-500" :
                            outbreak.severity === "Medium" ? "bg-yellow-500" : "bg-green-500"
                          }>
                            {outbreak.severity}
                          </Badge>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {outbreak.region} • {outbreak.trend}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium mb-3">Risk Factors Analysis</div>
                  <div className="space-y-3">
                    {healthMetrics.global.riskFactors.map((factor, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{factor.factor}</span>
                          <span className="text-muted-foreground">{factor.status}</span>
                        </div>
                        <Progress 
                          value={factor.level} 
                          className={`h-2 ${
                            factor.level > 70 ? 'bg-green-100' :
                            factor.level > 40 ? 'bg-yellow-100' : 'bg-red-100'
                          }`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {isMonitoring && (
              <div className="space-y-4">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-hero rounded-full flex items-center justify-center pulse-glow">
                    <Activity className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-sm font-medium">Live Monitoring Active</div>
                  <div className="text-xs text-muted-foreground">
                    Real-time health data streaming...
                  </div>
                </div>

                {liveData && (
                  <div className="space-y-4">
                    <div className="text-center text-xs text-muted-foreground">
                      Last updated: {liveData.timestamp}
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center p-2 bg-blue-50 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">{liveData.newCases}</div>
                        <div className="text-xs text-muted-foreground">New Cases</div>
                      </div>
                      <div className="text-center p-2 bg-green-50 rounded-lg">
                        <div className="text-lg font-bold text-green-600">{liveData.recoveries}</div>
                        <div className="text-xs text-muted-foreground">Recoveries</div>
                      </div>
                      <div className="text-center p-2 bg-orange-50 rounded-lg">
                        <div className="text-lg font-bold text-orange-600">{liveData.hospitalizations}</div>
                        <div className="text-xs text-muted-foreground">Hospitalizations</div>
                      </div>
                      <div className="text-center p-2 bg-purple-50 rounded-lg">
                        <div className="text-lg font-bold text-purple-600">{liveData.vaccinations}</div>
                        <div className="text-xs text-muted-foreground">Vaccinations</div>
                      </div>
                    </div>

                    <div className="p-3 bg-accent/10 rounded-lg">
                      <div className="text-sm font-medium text-accent">AI Alert</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Unusual pattern detected in respiratory symptoms across Southeast Asia
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-4">
                  <Progress value={100} className="data-flow" />
                  <div className="text-xs text-muted-foreground mt-1 text-center">
                    Processing 50,000+ data points per second
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

export default GlobalHealthMonitoringDemo;