import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface AnalysisProps {
  matchScore: number;
  foundSkills: string[];
  missingSkills: string[];
  isVisible: boolean;
}

export const Analysis = ({ matchScore, foundSkills, missingSkills, isVisible }: AnalysisProps) => {
  if (!isVisible) return null;

  return (
    <Card className="w-full animate-fadeIn">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Analysis Results</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <span className="text-lg font-semibold">Match Score</span>
            <span className="text-lg text-blue-600">{matchScore}%</span>
          </div>
          <Progress 
            value={matchScore} 
            className="h-2 bg-gray-100" 
            indicatorClassName="bg-blue-600"
          />
        </div>
        
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Key Skills Found</h3>
          <div className="flex flex-wrap gap-2">
            {foundSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-blue-50 px-4 py-1 text-sm font-medium text-blue-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Missing Skills</h3>
          <div className="flex flex-wrap gap-2">
            {missingSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-gray-100 px-4 py-1 text-sm font-medium text-gray-600"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};