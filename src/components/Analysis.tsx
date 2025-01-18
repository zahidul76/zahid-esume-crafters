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
        <CardTitle>Analysis Results</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium">Match Score</span>
              <span className="text-sm text-gray-500">{matchScore}%</span>
            </div>
            <Progress value={matchScore} className="h-2" />
          </div>
          
          <div className="space-y-4">
            <h3 className="font-medium">Key Skills Found</h3>
            <div className="flex flex-wrap gap-2">
              {foundSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-primary-light px-3 py-1 text-xs font-medium text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Missing Skills</h3>
            <div className="flex flex-wrap gap-2">
              {missingSkills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};