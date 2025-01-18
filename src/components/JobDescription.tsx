import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import { useState } from "react";

export const JobDescription = ({ 
  onAnalyze 
}: { 
  onAnalyze: (text: string) => Promise<void> 
}) => {
  const [description, setDescription] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const handleAnalyze = async () => {
    if (description.trim().length < 50) {
      toast({
        title: "Invalid Input",
        description: "Please enter a more detailed job description (minimum 50 characters).",
        variant: "destructive",
      });
      return;
    }
    
    setIsAnalyzing(true);
    try {
      await onAnalyze(description);
    } finally {
      setIsAnalyzing(false);
    }
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
          disabled={description.trim().length < 50 || isAnalyzing}
        >
          {isAnalyzing ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Analyzing...
            </>
          ) : (
            'Analyze Match'
          )}
        </Button>
      </CardContent>
    </Card>
  );
};