// Simulated API call for resume analysis
export const analyzeResume = async (resumeFile: File, jobDescription: string) => {
  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 1500));

  // Comprehensive list of technical skills
  const technicalSkills = {
    programming: [
      'JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'Ruby', 'PHP', 'Swift',
      'Kotlin', 'Go', 'Rust', 'C#', 'Scala'
    ],
    frontend: [
      'React', 'Angular', 'Vue.js', 'Next.js', 'HTML5', 'CSS3', 'SASS', 'Redux',
      'Webpack', 'Babel', 'jQuery', 'Bootstrap', 'Tailwind CSS'
    ],
    backend: [
      'Node.js', 'Express.js', 'Django', 'Ruby on Rails', 'Spring Boot',
      'ASP.NET', 'Laravel', 'FastAPI', 'GraphQL', 'REST API'
    ],
    database: [
      'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch', 'Oracle',
      'DynamoDB', 'Cassandra', 'SQL Server'
    ],
    cloud: [
      'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform',
      'Jenkins', 'CircleCI', 'GitHub Actions'
    ],
    tools: [
      'Git', 'JIRA', 'Confluence', 'Slack', 'Postman', 'VS Code', 'IntelliJ',
      'Eclipse', 'Figma', 'Adobe XD'
    ],
    methodologies: [
      'Agile', 'Scrum', 'Kanban', 'TDD', 'BDD', 'CI/CD', 'DevOps',
      'Microservices', 'REST', 'SOA'
    ]
  };

  // Convert job description to lowercase for case-insensitive matching
  const jobDescLower = jobDescription.toLowerCase();
  
  // Find all skills mentioned in the job description
  const foundSkills: string[] = [];
  Object.values(technicalSkills).flat().forEach(skill => {
    if (jobDescLower.includes(skill.toLowerCase())) {
      foundSkills.push(skill);
    }
  });

  // Identify key required skills based on frequency and context
  const keyRequiredSkills = foundSkills.filter(skill => {
    const skillRegex = new RegExp(`\\b${skill.toLowerCase()}\\b`, 'g');
    const matches = jobDescLower.match(skillRegex);
    return matches && matches.length > 0;
  });

  // Calculate weighted match score
  const calculateMatchScore = () => {
    const totalRequiredSkills = keyRequiredSkills.length;
    if (totalRequiredSkills === 0) return 0;

    // Weight different skill categories
    const weights = {
      programming: 1.2,
      frontend: 1.1,
      backend: 1.1,
      database: 1.0,
      cloud: 1.1,
      tools: 0.8,
      methodologies: 0.9
    };

    let weightedScore = 0;
    let totalWeight = 0;

    keyRequiredSkills.forEach(skill => {
      // Find which category the skill belongs to
      for (const [category, skills] of Object.entries(technicalSkills)) {
        if (skills.includes(skill)) {
          const weight = weights[category as keyof typeof weights];
          weightedScore += weight;
          totalWeight += weight;
          break;
        }
      }
    });

    const normalizedScore = (weightedScore / totalWeight) * 100;
    return Math.min(Math.round(normalizedScore), 100);
  };

  // Identify missing skills (prioritize by importance)
  const missingSkills = keyRequiredSkills
    .filter(skill => !foundSkills.includes(skill))
    .slice(0, 5);

  // Calculate final match score
  const matchScore = calculateMatchScore();

  return {
    matchScore,
    foundSkills: foundSkills.slice(0, 6), // Show top 6 matching skills
    missingSkills: missingSkills.length > 0 ? missingSkills : keyRequiredSkills.slice(0, 3) // Show either missing skills or top required skills
  };
};