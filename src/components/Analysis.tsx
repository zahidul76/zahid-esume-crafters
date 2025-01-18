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

  // Determine progress color based on match score
  const getProgressColor = (score: number) => {
    if (score >= 80) return "bg-green-600";
    if (score >= 60) return "bg-blue-600";
    if (score >= 40) return "bg-yellow-600";
    return "bg-red-600";
  };

  return (
    <Card className="w-full animate-fadeIn">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Analysis Results</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <div>
          <div className="mb-4 flex items-center justify-between">
            <span className="text-lg font-semibold">Match Score</span>
            <span className={`text-lg ${getProgressColor(matchScore)} font-bold`}>
              {matchScore}%
            </span>
          </div>
          <Progress 
            value={matchScore} 
            className={`h-2 bg-gray-100`}
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
            {foundSkills.length === 0 && (
              <span className="text-gray-500 italic">No matching skills found</span>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Missing Skills</h3>
          <div className="flex flex-wrap gap-2">
            {missingSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-red-50 px-4 py-1 text-sm font-medium text-red-600"
              >
                {skill}
              </span>
            ))}
            {missingSkills.length === 0 && (
              <span className="text-gray-500 italic">No missing skills identified</span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};