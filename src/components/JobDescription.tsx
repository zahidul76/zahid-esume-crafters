import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

export const JobDescription = ({ onAnalyze }: { onAnalyze: (text: string) => void }) => {
  const [description, setDescription] = useState("");
  const { toast } = useToast();

  const handleAnalyze = () => {
    if (description.trim().length < 50) {
      toast({
        title: "Invalid Input",
        description: "Please enter a more detailed job description (minimum 50 characters).",
        variant: "destructive",
      });
      return;
    }
    onAnalyze(description);
    toast({
      title: "Analysis Started",
      description: "Analyzing your resume against the job description...",
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Job Description</CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          placeholder="Paste the job description here..."
          className="min-h-[200px] mb-4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button 
          className="w-full" 
          onClick={handleAnalyze}
          disabled={description.trim().length < 50}
        >
          Analyze Match
        </Button>
      </CardContent>
    </Card>
  );
};