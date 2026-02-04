// Projects Configuration - 200 Projects Database
const PROJECTS_DATABASE = {
  // Project Categories
  categories: [
    { id: 'health', name: 'Health Services', color: '#8B5CF6' },
    { id: 'education', name: 'Education', color: '#F59E0B' },
    { id: 'environment', name: 'Environment', color: '#10B981' },
    { id: 'community', name: 'Community Service', color: '#EF4444' },
    { id: 'disaster', name: 'Disaster Relief', color: '#F97316' },
    { id: 'youth', name: 'Youth Programs', color: '#3B82F6' },
    { id: 'senior', name: 'Senior Citizens', color: '#8B5A2B' },
    { id: 'international', name: 'International Relations', color: '#EC4899' }
  ],

  // Project Status
  status: [
    { id: 'completed', name: 'Completed', color: '#10B981' },
    { id: 'ongoing', name: 'Ongoing', color: '#F59E0B' },
    { id: 'upcoming', name: 'Upcoming', color: '#3B82F6' },
    { id: 'planning', name: 'Planning', color: '#6B7280' }
  ],

  // Generate 200 Projects
  projects: []
};

// Generate 200 diverse projects
const projectTemplates = [
  {
    title: 'Free Medical Camp',
    description: 'Providing free medical check-ups and medicines to underprivileged communities',
    category: 'health',
    status: 'completed',
    impact: '500+ beneficiaries',
    duration: '1 day'
  },
  {
    title: 'School Supplies Distribution',
    description: 'Distributing notebooks, pens, and other educational materials to government school students',
    category: 'education',
    status: 'completed',
    impact: '1000+ students',
    duration: '3 days'
  },
  {
    title: 'Tree Plantation Drive',
    description: 'Planting native tree species to combat climate change and improve air quality',
    category: 'environment',
    status: 'ongoing',
    impact: '2000+ trees planted',
    duration: '1 week'
  },
  {
    title: 'Blood Donation Camp',
    description: 'Organizing blood donation drives in collaboration with local hospitals and blood banks',
    category: 'health',
    status: 'completed',
    impact: '200+ units of blood',
    duration: '1 day'
  },
  {
    title: 'Clean Water Initiative',
    description: 'Installing water purifiers and rainwater harvesting systems in rural areas',
    category: 'community',
    status: 'ongoing',
    impact: '10+ villages',
    duration: '6 months'
  },
  {
    title: 'Senior Citizen Care',
    description: 'Providing health check-ups, nutrition, and companionship to elderly citizens',
    category: 'senior',
    status: 'ongoing',
    impact: '100+ seniors',
    duration: 'Monthly'
  },
  {
    title: 'Youth Leadership Program',
    description: 'Training young people in leadership skills and community service',
    category: 'youth',
    status: 'planning',
    impact: '50+ youth leaders',
    duration: '3 months'
  },
  {
    title: 'Disaster Relief Fund',
    description: 'Emergency relief assistance during natural disasters and emergencies',
    category: 'disaster',
    status: 'ongoing',
    impact: 'Emergency response',
    duration: 'As needed'
  }
];

// Generate 200 projects with variations
for (let i = 1; i <= 200; i++) {
  const template = projectTemplates[i % projectTemplates.length];
  const year = 2018 + Math.floor((i - 1) / 20); // Projects from 2018-2027
  const month = ((i - 1) % 12) + 1;
  
  PROJECTS_DATABASE.projects.push({
    id: `project-${i}`,
    title: `${template.title} #${i}`,
    description: template.description,
    category: template.category,
    status: template.status,
    date: `${year}-${String(month).padStart(2, '0')}-15`,
    impact: template.impact,
    duration: template.duration,
    location: ['Sankalpa', 'Bangalore', 'Rural Areas', 'Urban Centers', 'Community Centers'][i % 5],
    volunteers: Math.floor(Math.random() * 50) + 10,
    budget: Math.floor(Math.random() * 50000) + 10000,
    images: [
      `assets/images/projects/project-${i}-1.jpg`,
      `assets/images/projects/project-${i}-2.jpg`
    ]
  });
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PROJECTS_DATABASE;
} else {
  window.PROJECTS_DATABASE = PROJECTS_DATABASE;
}
