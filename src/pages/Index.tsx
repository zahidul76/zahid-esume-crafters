import { Analysis } from "@/components/Analysis";
import { Header } from "@/components/Header";
import { JobDescription } from "@/components/JobDescription";
import { ResumeUpload } from "@/components/ResumeUpload";
import { useState } from "react";

interface AnalysisResult {
  matchScore: number;
  foundSkills: string[];
  missingSkills: string[];
}

const Index = () => {
  const [resume, setResume] = useState<File | null>(null);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);

  const handleResumeUpload = (file: File) => {
    setResume(file);
    setAnalysisResult(null); // Reset analysis when new resume is uploaded
  };

  const handleAnalyze = (jobDescription: string) => {
    if (!resume) return;

    // Simulated analysis - In a real app, this would call an API
    const mockAnalysis = {
      matchScore: 75,
      foundSkills: ["React", "TypeScript", "Node.js", "API Development"],
      missingSkills: ["Docker", "AWS", "GraphQL"],
    };

    setAnalysisResult(mockAnalysis);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container py-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ResumeUpload onUpload={handleResumeUpload} />
          <JobDescription onAnalyze={handleAnalyze} />
        </div>
        <div className="mt-8">
          <Analysis 
            isVisible={!!analysisResult}
            matchScore={analysisResult?.matchScore ?? 0}
            foundSkills={analysisResult?.foundSkills ?? []}
            missingSkills={analysisResult?.missingSkills ?? []}
          />
        </div>
      </main>
    </div>
  );
};

export default Index;