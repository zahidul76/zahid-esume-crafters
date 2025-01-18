// Simulated API call for resume analysis
export const analyzeResume = async (resumeFile: File, jobDescription: string) => {
  // In a real implementation, this would be an actual API call
  // For now, we'll simulate the analysis with a delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Simulate extracting skills from the job description
  const commonSkills = ['React', 'TypeScript', 'JavaScript', 'Node.js', 'API Development', 'Git', 'AWS', 'Docker'];
  const allSkills = jobDescription.toLowerCase().split(' ');
  
  const foundSkills = commonSkills.filter(skill => 
    jobDescription.toLowerCase().includes(skill.toLowerCase())
  ).slice(0, 4);
  
  const missingSkills = commonSkills.filter(skill => 
    !jobDescription.toLowerCase().includes(skill.toLowerCase())
  ).slice(0, 3);

  const matchScore = Math.floor(Math.random() * 30) + 60; // Random score between 60-90

  return {
    matchScore,
    foundSkills,
    missingSkills
  };
};