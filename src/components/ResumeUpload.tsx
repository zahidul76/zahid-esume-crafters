import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload } from "lucide-react";
import { useState } from "react";

export const ResumeUpload = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Upload Resume</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center gap-4 rounded-lg border-2 border-dashed border-gray-200 p-6">
          <Upload className="h-12 w-12 text-gray-400" />
          <div className="text-center">
            <p className="text-sm text-gray-600">
              {file ? file.name : "Drag and drop your resume here"}
            </p>
            <p className="mt-1 text-xs text-gray-500">PDF, DOC, DOCX (Max 5MB)</p>
          </div>
          <input
            type="file"
            id="resume"
            className="hidden"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
          />
          <Button
            variant="outline"
            onClick={() => document.getElementById("resume")?.click()}
          >
            Browse Files
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};