import { Analysis } from "@/components/Analysis";
import { Header } from "@/components/Header";
import { JobDescription } from "@/components/JobDescription";
import { ResumeUpload } from "@/components/ResumeUpload";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container py-8">
        <div className="grid gap-8 md:grid-cols-2">
          <ResumeUpload />
          <JobDescription />
        </div>
        <div className="mt-8">
          <Analysis />
        </div>
      </main>
    </div>
  );
};

export default Index;