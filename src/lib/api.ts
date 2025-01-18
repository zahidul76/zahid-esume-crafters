// Simulated API call for resume analysis
export const analyzeResume = async (resumeFile: File, jobDescription: string) => {
  // In a real implementation, this would be an actual API call
  // For now, we'll simulate the analysis with a delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Common technical skills that might appear in job descriptions
  const technicalSkills = [
    'React', 'TypeScript', 'JavaScript', 'Node.js', 'Python', 'Java', 'C++',
    'AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'REST API', 'SQL',
    'MongoDB', 'Redis', 'GraphQL', 'Machine Learning', 'Agile', 'Scrum'
  ];

  // Extract skills from job description
  const jobDescLower = jobDescription.toLowerCase();
  
  // Find skills mentioned in the job description
  const foundSkills = technicalSkills.filter(skill => 
    jobDescLower.includes(skill.toLowerCase())
  );

  // Select some skills not found in the job description as missing skills
  const missingSkills = technicalSkills
    .filter(skill => !jobDescLower.includes(skill.toLowerCase()))
    .slice(0, 5); // Take up to 5 missing skills

  // Calculate match score based on found skills vs typical job requirements
  const averageRequiredSkills = 8; // Assume average job requires 8 key skills
  const matchScore = Math.min(
    Math.round((foundSkills.length / averageRequiredSkills) * 100),
    100
  );

  return {
    matchScore,
    foundSkills: foundSkills.slice(0, 6), // Limit to 6 found skills
    missingSkills
  };
};