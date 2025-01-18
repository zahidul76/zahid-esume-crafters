import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export const Header = () => {
  return (
    <header className="w-full border-b bg-white py-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <FileText className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-semibold">Resume Optimizer</h1>
        </div>
        <Button variant="outline">Get Started</Button>
      </div>
    </header>
  );
};