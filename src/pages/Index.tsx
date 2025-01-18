import { Analysis } from "@/components/Analysis";
import { Header } from "@/components/Header";
import { JobDescription } from "@/components/JobDescription";
import { ResumeUpload } from "@/components/ResumeUpload";
import { analyzeResume } from "@/lib/api";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

interface AnalysisResult {
  matchScore: number;
  foundSkills: string[];
  missingSkills: string[];
}

const Index = () => {
  const [resume, setResume] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const { toast } = useToast();

  const handleResumeUpload = (file: File) => {
    setResume(file);
    setAnalysisResult(null);
  };

  const handleAnalyze = async (jobDescription: string) => {
    if (!resume) {
      toast({
        title: "Missing Resume",
        description: "Please upload a resume before analyzing",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsAnalyzing(true);
      const result = await analyzeResume(resume, jobDescription);
      setAnalysisResult(result);
      toast({
        title: "Analysis Complete",
        description: "Your resume has been analyzed successfully!",
      });
    } catch (error) {
      toast({
        title: "Analysis Failed",
        description: "There was an error analyzing your resume. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
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