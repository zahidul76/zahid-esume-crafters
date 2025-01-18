import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export const JobDescription = () => {
  const [description, setDescription] = useState("");

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Job Description</CardTitle>
      </CardHeader>
      <CardContent>
        <Textarea
          placeholder="Paste the job description here..."
          className="min-h-[200px]"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button className="mt-4 w-full">Analyze Match</Button>
      </CardContent>
    </Card>
  );
};