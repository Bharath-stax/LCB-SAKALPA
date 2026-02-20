// Projects Configuration - User's Activities from activity.txt
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

  // User's Activities from activity.txt
  projects: [
    {
      title: 'Installation & Service Activity',
      description: 'Club installation ceremony and community service kickoff',
      category: 'community',
      status: 'completed',
      date: '2025-06-26',
      impact: 'Club establishment',
      duration: '1 day'
    },
    {
      title: 'PST Schooling',
      description: 'Primary school education support and development program',
      category: 'education',
      status: 'completed',
      date: '2025-06-22',
      impact: 'Student education support',
      duration: '1 week'
    },
    {
      title: 'Doctors\' Day Celebration',
      description: 'Celebrating medical professionals and their service to the community',
      category: 'health',
      status: 'completed',
      date: '2025-07-01',
      impact: 'Medical community engagement',
      duration: '1 day'
    },
    {
      title: 'Distribution of Free Spectacles',
      description: 'Providing free eyeglasses to underprivileged community members',
      category: 'health',
      status: 'completed',
      date: '2025-07-04',
      impact: 'Vision correction for needy',
      duration: '1 day'
    },
    {
      title: 'First BOD and GB Meeting',
      description: 'First Board of Directors and General Body meeting',
      category: 'community',
      status: 'completed',
      date: '2025-07-10',
      impact: 'Club governance',
      duration: '1 day'
    },
    {
      title: 'Donation for Hunger Programme',
      description: 'Food distribution and hunger relief program',
      category: 'community',
      status: 'completed',
      date: '2025-07-10',
      impact: 'Hunger relief support',
      duration: '1 day'
    },
    {
      title: 'Mega Free Health Check Up Camp',
      description: 'Comprehensive health screening and medical consultation for communities',
      category: 'health',
      status: 'completed',
      date: '2025-07-10',
      impact: '500+ beneficiaries',
      duration: '1 day'
    },
    {
      title: 'Bye Law Adoption',
      description: 'Bye Law adoption meeting and procedures',
      category: 'community',
      status: 'completed',
      date: '2025-07-10',
      impact: 'Club governance',
      duration: '1 day'
    },
    {
      title: 'Workshop programme on World Paper Bag Day',
      description: 'Workshop on paper bag making and plastic reduction',
      category: 'environment',
      status: 'completed',
      date: '2025-07-12',
      impact: 'Environmental awareness',
      duration: '1 day'
    },
    {
      title: 'Lion Portal Training Program',
      description: 'Training on Lions Club portal usage and management',
      category: 'youth',
      status: 'completed',
      date: '2025-07-20',
      impact: 'Digital literacy',
      duration: '3 hours'
    },
    {
      title: 'Advertisement (PST, Family, SET)',
      description: 'Advertisement campaign for PST, Family, and SET programs',
      category: 'community',
      status: 'completed',
      date: '2025-07-24',
      impact: 'Program awareness',
      duration: '1 week'
    },
    {
      title: 'Kargil Vijay Diwas',
      description: 'Commemoration of Kargil war heroes and patriotic activities',
      category: 'community',
      status: 'completed',
      date: '2025-07-26',
      impact: 'Patriotic awareness',
      duration: '1 day'
    },
    {
      title: 'Participation in Cabinet Presentation',
      description: 'Active participation in district cabinet presentations',
      category: 'community',
      status: 'completed',
      date: '2025-07-27',
      impact: 'District engagement',
      duration: '1 day'
    },
    {
      title: 'Walkathon – Hepatitis Day',
      description: 'Awareness walk on hepatitis prevention and treatment',
      category: 'health',
      status: 'completed',
      date: '2025-07-28',
      impact: 'Community health awareness',
      duration: '1 day'
    },
    {
      title: 'World Scout Scarf Day - Honouring Army',
      description: 'Honoring army personnel on World Scout Scarf Day',
      category: 'community',
      status: 'completed',
      date: '2025-08-01',
      impact: 'Army appreciation',
      duration: '1 day'
    },
    {
      title: 'Walkathon on World Lung Cancer Day',
      description: 'Awareness walk for lung cancer prevention and early detection',
      category: 'health',
      status: 'completed',
      date: '2025-08-01',
      impact: 'Health awareness campaign',
      duration: '1 day'
    },
    {
      title: 'Youth Awareness Program on Screen Time in Children',
      description: 'Awareness program on effects of screen time in children',
      category: 'youth',
      status: 'completed',
      date: '2025-08-05',
      impact: 'Youth health awareness',
      duration: '2 hours'
    },
    {
      title: 'International Tigers Day Awareness Camp',
      description: 'Awareness camp on tiger conservation and wildlife protection',
      category: 'environment',
      status: 'completed',
      date: '2025-07-29',
      impact: 'Wildlife conservation',
      duration: '1 day'
    },
    {
      title: 'Article about International Tigers Day to District Newsletter',
      description: 'Article submission on tiger conservation awareness',
      category: 'environment',
      status: 'completed',
      date: '2025-08-08',
      impact: 'Wildlife conservation awareness',
      duration: '1 day'
    },
    {
      title: 'Celebration of Rakhi Utsav - Raksha Bandhan to Policemen',
      description: 'Raksha Bandhan celebration for police protectors',
      category: 'community',
      status: 'completed',
      date: '2025-08-09',
      impact: 'Police appreciation',
      duration: '1 day'
    },
    {
      title: 'Donation to Hunger Programme',
      description: 'Support for community hunger relief initiatives',
      category: 'community',
      status: 'completed',
      date: '2025-08-11',
      impact: 'Food security support',
      duration: '1 day'
    },
    {
      title: 'Webinar on Role of Service Organisation in Disaster Management',
      description: 'Webinar on disaster management role of service organizations',
      category: 'disaster',
      status: 'completed',
      date: '2025-08-12',
      impact: 'Disaster preparedness',
      duration: '2 hours'
    },
    {
      title: 'Awareness Campaign on World Elephant Day',
      description: 'Awareness campaign on elephant conservation and protection',
      category: 'environment',
      status: 'completed',
      date: '2025-08-12',
      impact: 'Wildlife protection',
      duration: '1 day'
    },
    {
      title: 'Second BOD and GB Meeting',
      description: 'Second Board of Directors and General Body meeting',
      category: 'community',
      status: 'completed',
      date: '2025-08-14',
      impact: 'Club governance',
      duration: '1 day'
    },
    {
      title: 'Participated in Independence Day Celebration of District 317A',
      description: 'Participation in District 317A Independence Day celebrations',
      category: 'community',
      status: 'completed',
      date: '2025-08-15',
      impact: 'National day celebration',
      duration: '1 day'
    },
    {
      title: 'Tied with Love for the Nation (Govt. School)',
      description: 'Patriotic activities at government school',
      category: 'community',
      status: 'completed',
      date: '2025-08-15',
      impact: 'Patriotic education',
      duration: '1 day'
    },
    {
      title: 'Honoring Hero of Society on 79th Independence Day',
      description: 'Recognizing community heroes on 79th Independence Day',
      category: 'community',
      status: 'completed',
      date: '2025-08-15',
      impact: 'Community recognition',
      duration: '1 day'
    },
    {
      title: 'Two Clubs - One Mission: Cancer Free Tomorrow',
      description: 'Collaborative initiative for cancer awareness and prevention',
      category: 'health',
      status: 'completed',
      date: '2025-08-17',
      impact: 'Cancer prevention collaboration',
      duration: '1 day'
    },
    {
      title: 'Build Yourself for Build India',
      description: 'Personal development program for youth and community building',
      category: 'youth',
      status: 'completed',
      date: '2025-08-19',
      impact: 'Youth development',
      duration: '1 day'
    },
    {
      title: 'Distribution of Books to Arkalagudu District Govt. School',
      description: 'Book distribution to Arkalagudu District Govt. School, Chikkanahalli',
      category: 'education',
      status: 'completed',
      date: '2025-08-20',
      impact: 'Educational material support',
      duration: '1 day'
    },
    {
      title: 'ZAC Meeting',
      description: 'Zone Advisory Committee meeting',
      category: 'community',
      status: 'completed',
      date: '2025-08-21',
      impact: 'Zone governance',
      duration: '1 day'
    },
    {
      title: 'School Adoption',
      description: 'Formal adoption of local government school for ongoing support',
      category: 'education',
      status: 'completed',
      date: '2025-08-22',
      impact: 'Long-term educational support',
      duration: 'Ongoing'
    },
    {
      title: 'DG Official Visit',
      description: 'District Governor official visit to club',
      category: 'community',
      status: 'completed',
      date: '2025-08-24',
      impact: 'District engagement',
      duration: '1 day'
    },
    {
      title: 'Eco Friendly Ganesha Making',
      description: 'Workshop on making eco-friendly Ganesha idols',
      category: 'environment',
      status: 'completed',
      date: '2025-08-25',
      impact: 'Eco-friendly celebrations',
      duration: '1 day'
    },
    {
      title: 'Webinar on Library Movement in India',
      description: 'Webinar on library movement and importance in India',
      category: 'education',
      status: 'completed',
      date: '2025-08-28',
      impact: 'Library awareness',
      duration: '2 hours'
    },
    {
      title: 'Teachers Day Celebration (Honouring Head Masters)',
      description: 'Honoring head masters of adopted schools on Teachers Day',
      category: 'education',
      status: 'completed',
      date: '2025-09-05',
      impact: 'Teacher recognition',
      duration: '1 day'
    },
    {
      title: 'Third BOD and GB Meeting',
      description: 'Third Board of Directors and General Body meeting',
      category: 'community',
      status: 'completed',
      date: '2025-09-11',
      impact: 'Club governance',
      duration: '1 day'
    },
    {
      title: 'GAT Conclave',
      description: 'Global Action Team conclave and training',
      category: 'youth',
      status: 'completed',
      date: '2025-09-14',
      impact: 'Leadership training',
      duration: '1 day'
    },
    {
      title: 'Webinar on Intellectual Property Rights',
      description: 'Educational webinar on intellectual property rights',
      category: 'education',
      status: 'completed',
      date: '2025-09-15',
      impact: 'IP rights awareness',
      duration: '2 hours'
    },
    {
      title: 'Celebration of Ozone Day',
      description: 'Awareness program on ozone layer protection',
      category: 'environment',
      status: 'completed',
      date: '2025-09-16',
      impact: 'Environmental protection',
      duration: '1 day'
    },
    {
      title: 'Donation for Hunger Programme',
      description: 'Support for hunger relief initiatives',
      category: 'community',
      status: 'completed',
      date: '2025-09-23',
      impact: 'Food security',
      duration: '1 day'
    },
    {
      title: 'Swatcha Programme at Sigganayakanahalli',
      description: 'Cleanliness and sanitation program at Sigganayakanahalli',
      category: 'environment',
      status: 'completed',
      date: '2025-10-02',
      impact: 'Community cleanliness',
      duration: '1 day'
    },
    {
      title: 'Environment Awareness - Online Webinar on Plastic Usage',
      description: 'Online webinar on reducing plastic usage and alternatives',
      category: 'environment',
      status: 'completed',
      date: '2025-10-04',
      impact: 'Plastic reduction awareness',
      duration: '2 hours'
    },
    {
      title: 'Environment Awareness - Tree Plantation at Sarkar Guttahalli',
      description: 'Tree plantation drive at Sarkar Guttahalli, Hoskote',
      category: 'environment',
      status: 'completed',
      date: '2025-10-04',
      impact: 'Green cover expansion',
      duration: '1 day'
    },
    {
      title: 'Swatch Bharath - Cleanliness Drive at Govt. School',
      description: 'Cleanliness drive at Doddagattiganabbe Village School, Hoskote',
      category: 'environment',
      status: 'completed',
      date: '2025-10-04',
      impact: 'School sanitation',
      duration: '1 day'
    },
    {
      title: 'Diabetic Awareness - Online Webinar on Diabetes',
      description: 'Educational webinar on diabetes prevention and management',
      category: 'health',
      status: 'completed',
      date: '2025-10-05',
      impact: 'Online health education',
      duration: '2 hours'
    },
    {
      title: 'Diabetic Check Up Camp at Kumara Park',
      description: 'Free diabetes screening and consultation camp',
      category: 'health',
      status: 'completed',
      date: '2025-10-05',
      impact: 'Community health screening',
      duration: '1 day'
    },
    {
      title: 'Hunger - Distributed Food to Old Age Home',
      description: 'Food distribution to Sri Mahalakshmi Old Age Home',
      category: 'senior',
      status: 'completed',
      date: '2025-10-06',
      impact: 'Elderly care support',
      duration: '1 day'
    },
    {
      title: 'Blood Donation - Online Webinar on Blood Donation',
      description: 'Webinar on importance of blood donation and donation process',
      category: 'health',
      status: 'completed',
      date: '2025-10-07',
      impact: 'Donor awareness',
      duration: '2 hours'
    },
    {
      title: 'Donated Blood on Service Week',
      description: 'Club members participated in blood donation drive',
      category: 'health',
      status: 'completed',
      date: '2025-10-07',
      impact: 'Life-saving contributions',
      duration: '1 day'
    },
    {
      title: 'Participation in District Webinar on Blood Donation',
      description: 'Participation in district-level blood donation awareness program',
      category: 'health',
      status: 'completed',
      date: '2025-10-07',
      impact: 'Blood donation awareness',
      duration: '2 hours'
    },
    {
      title: 'Cancer Awareness - Online Webinar',
      description: 'Webinar on cancer prevention - "Prevention is Better than Cure"',
      category: 'health',
      status: 'completed',
      date: '2025-10-08',
      impact: 'Cancer prevention awareness',
      duration: '2 hours'
    },
    {
      title: 'Free Cancer Screening Camp at Shirdi Sai Temple',
      description: 'Cancer screening camp at Shirdi Sai Temple, Vidhyanarayanapura',
      category: 'health',
      status: 'completed',
      date: '2025-10-08',
      impact: 'Early detection services',
      duration: '1 day'
    },
    {
      title: 'Participating in Together We Fight - Pediatric Cancer',
      description: 'Participating in pediatric cancer awareness webinar',
      category: 'health',
      status: 'completed',
      date: '2025-10-08',
      impact: 'Childhood cancer awareness',
      duration: '2 hours'
    },
    {
      title: 'Eye Check Up Camp - Eye Screening for High School Children',
      description: 'Comprehensive eye health screening for high school students',
      category: 'health',
      status: 'completed',
      date: '2025-10-09',
      impact: 'Student vision care',
      duration: '1 day'
    },
    {
      title: 'Awareness Talk on Screen Time in Children',
      description: 'Educational talk on effects of screen time on children',
      category: 'youth',
      status: 'completed',
      date: '2025-10-09',
      impact: 'Youth health awareness',
      duration: '2 hours'
    },
    {
      title: 'Education Support - Distribution of Educational Supplements',
      description: 'Distribution of educational supplements to primary school students',
      category: 'education',
      status: 'completed',
      date: '2025-10-10',
      impact: 'Student learning materials',
      duration: '1 day'
    },
    {
      title: 'Mental Well Being - Distribution to Mentally Disabled',
      description: 'Food distribution to mentally disabled persons',
      category: 'community',
      status: 'completed',
      date: '2025-10-11',
      impact: 'Disabled community support',
      duration: '1 day'
    },
    {
      title: 'Webinar on Mental Well Being',
      description: 'Online webinar on mental health awareness and support',
      category: 'health',
      status: 'completed',
      date: '2025-10-11',
      impact: 'Mental health awareness',
      duration: '2 hours'
    },
    {
      title: 'Participation in District Webinar on Mental Health',
      description: 'Participation in district-level mental health awareness program',
      category: 'health',
      status: 'completed',
      date: '2025-10-11',
      impact: 'Community mental health',
      duration: '2 hours'
    },
    {
      title: 'Army Support - Contribution to Martyrs Family',
      description: 'Contribution towards families of martyrs',
      category: 'community',
      status: 'completed',
      date: '2025-10-12',
      impact: 'Martyr family support',
      duration: '1 day'
    },
    {
      title: 'Army Support - Honouring Army Personnel',
      description: 'Honoring and supporting army personnel',
      category: 'community',
      status: 'completed',
      date: '2025-10-12',
      impact: 'Military appreciation',
      duration: '1 day'
    },
    {
      title: 'White Cane Day',
      description: 'Supporting visually impaired individuals and awareness programs',
      category: 'health',
      status: 'completed',
      date: '2025-10-15',
      impact: 'Visually impaired support',
      duration: '1 day'
    },
    {
      title: 'Online Webinar on Awareness of PoSH Act',
      description: 'Online webinar on Prevention of Sexual Harassment at Workplace Act',
      category: 'community',
      status: 'completed',
      date: '2025-10-17',
      impact: 'Workplace safety awareness',
      duration: '2 hours'
    },
    {
      title: '4th BOD & GB Meeting',
      description: 'Fourth Board of Directors and General Body meeting',
      category: 'community',
      status: 'completed',
      date: '2025-10-23',
      impact: 'Club governance',
      duration: '1 day'
    },
    {
      title: 'Awareness Programme on Menstrual Health',
      description: 'Health awareness program on menstrual hygiene and health',
      category: 'health',
      status: 'completed',
      date: '2025-10-25',
      impact: 'Women\'s health awareness',
      duration: '1 day'
    },
    {
      title: 'Peace Poster Competition',
      description: 'Art competition promoting peace and harmony among youth',
      category: 'youth',
      status: 'completed',
      date: '2025-10-30',
      impact: 'Youth creativity and peace',
      duration: '1 day'
    },
    {
      title: 'Oath Taking Ceremony - Rashtriya Ekta Diwas',
      description: 'National Unity Day oath taking ceremony',
      category: 'community',
      status: 'completed',
      date: '2025-10-31',
      impact: 'National unity promotion',
      duration: '1 day'
    },
    {
      title: 'Participation in District Kannada Rajyotsava',
      description: 'Participation in district-level Kannada Rajyotsava celebrations',
      category: 'community',
      status: 'completed',
      date: '2025-11-09',
      impact: 'Cultural celebration',
      duration: '1 day'
    },
    {
      title: '5th BOD & GB Meeting',
      description: 'Fifth Board of Directors and General Body meeting',
      category: 'community',
      status: 'completed',
      date: '2025-11-13',
      impact: 'Club governance',
      duration: '1 day'
    },
    {
      title: 'Lions Diabetes Awareness Run',
      description: 'Awareness run to promote diabetes prevention and management',
      category: 'health',
      status: 'completed',
      date: '2025-11-16',
      impact: 'Health awareness campaign',
      duration: '1 day'
    },
    {
      title: '2nd ZAC Meeting',
      description: 'Second Zone Advisory Committee meeting',
      category: 'community',
      status: 'completed',
      date: '2025-11-21',
      impact: 'Zone governance',
      duration: '1 day'
    },
    {
      title: 'National Constitution Day',
      description: 'Celebration and awareness of Indian Constitution',
      category: 'community',
      status: 'completed',
      date: '2025-11-26',
      impact: 'Constitutional awareness',
      duration: '1 day'
    },
    {
      title: 'Kannada Rajyotsava',
      description: 'Karnataka Rajyotsava celebration and cultural program',
      category: 'community',
      status: 'completed',
      date: '2025-11-27',
      impact: 'Cultural celebration',
      duration: '1 day'
    },
    {
      title: 'International Day of Persons with Specially Abled',
      description: 'Awareness and support program for specially abled persons',
      category: 'community',
      status: 'completed',
      date: '2025-12-03',
      impact: 'Disability awareness',
      duration: '1 day'
    },
    {
      title: 'Celebration of Armed Forces Flag Day',
      description: 'Honoring armed forces personnel and their service to the nation',
      category: 'community',
      status: 'completed',
      date: '2025-12-07',
      impact: 'Military appreciation',
      duration: '1 day'
    },
    {
      title: 'Donation LCIF-PMJF',
      description: 'Donation to Lions Clubs International Foundation - PMJF program',
      category: 'community',
      status: 'completed',
      date: '2025-12-11',
      impact: 'International foundation support',
      duration: '1 day'
    },
    {
      title: '6th BOD & GB Meeting',
      description: 'Sixth Board of Directors and General Body meeting',
      category: 'community',
      status: 'completed',
      date: '2025-12-17',
      impact: 'Club governance',
      duration: '1 day'
    },
    {
      title: 'Celebration of New Year at Adopted Govt School',
      description: 'New Year celebration program at adopted government school',
      category: 'education',
      status: 'completed',
      date: '2026-01-01',
      impact: 'Student engagement',
      duration: '1 day'
    },
    {
      title: 'Distribution of Food Pockets to Orphanage',
      description: 'Food distribution to orphanage home and food grains to old age home',
      category: 'community',
      status: 'completed',
      date: '2026-01-03',
      impact: 'Food security support',
      duration: '1 day'
    },
    {
      title: 'Diabetic Check Up Camp at Basaveshwara Nagar',
      description: 'Diabetes screening camp at Basaveshwara Nagar Ambedkar stadium',
      category: 'health',
      status: 'completed',
      date: '2026-01-04',
      impact: 'Community health screening',
      duration: '1 day'
    },
    {
      title: 'Diabetic Check Up Camp at Kumara Park Area',
      description: 'Diabetes screening camp at Kumara Park area',
      category: 'health',
      status: 'completed',
      date: '2026-01-04',
      impact: 'Community health screening',
      duration: '1 day'
    },
    {
      title: 'Participating in Together We Fight - Cancer Support',
      description: 'Awareness and support for cancer webinar',
      category: 'health',
      status: 'completed',
      date: '2026-01-05',
      impact: 'Cancer awareness support',
      duration: '2 hours'
    },
    {
      title: 'Sponsoring Bedspreads and Pillow Covers to Kidwai Hospital',
      description: 'Medical supplies donation to Kidwai Hospital',
      category: 'health',
      status: 'completed',
      date: '2026-01-05',
      impact: 'Hospital support',
      duration: '1 day'
    },
    {
      title: 'Pediatric Ward - Service Week',
      description: 'Service week activities at pediatric ward',
      category: 'health',
      status: 'completed',
      date: '2026-01-06',
      impact: 'Child healthcare support',
      duration: '1 day'
    },
    {
      title: 'Distribution of Educational Supplements - Service Week',
      description: 'Distribution of educational supplements to primary school students',
      category: 'education',
      status: 'completed',
      date: '2026-01-07',
      impact: 'Student learning materials',
      duration: '1 day'
    },
    {
      title: 'Participation in District Webinar on Blood Donation',
      description: 'Participation in district-level blood donation awareness program',
      category: 'health',
      status: 'completed',
      date: '2026-01-07',
      impact: 'Blood donation awareness',
      duration: '2 hours'
    },
    {
      title: 'Donated Blood on Service Week',
      description: 'Club members participated in blood donation drive',
      category: 'health',
      status: 'completed',
      date: '2026-01-07',
      impact: 'Life-saving contributions',
      duration: '1 day'
    },
    {
      title: 'Organized Webinar on Blood Donation - Global Service Week',
      description: 'Global Service Week webinar on blood donation awareness',
      category: 'health',
      status: 'completed',
      date: '2026-01-08',
      impact: 'Blood donation awareness',
      duration: '2 hours'
    },
    {
      title: 'Participated in District Webinar on Tips for Healthy Eye',
      description: 'District webinar on eye health and vision care tips',
      category: 'health',
      status: 'completed',
      date: '2026-01-08',
      impact: 'Eye health awareness',
      duration: '2 hours'
    },
    {
      title: 'Eye Screening Camp for School Children - Service Week',
      description: 'Eye health screening for school children as part of Service Week',
      category: 'health',
      status: 'completed',
      date: '2026-01-09',
      impact: 'Student vision care',
      duration: '1 day'
    },
    {
      title: 'Distribution of Food Items to Mentally Disabled - Service Week',
      description: 'Food distribution to mentally disabled persons during Global Service Week',
      category: 'community',
      status: 'completed',
      date: '2026-01-09',
      impact: 'Disabled community support',
      duration: '1 day'
    },
    {
      title: 'Participation in District Webinar on Mental Well Being',
      description: 'District-level mental health awareness program participation',
      category: 'health',
      status: 'completed',
      date: '2026-01-10',
      impact: 'Mental health awareness',
      duration: '2 hours'
    },
    {
      title: 'Distribution of Food Items to Old Age Home - Service Week',
      description: 'Food distribution to old age home during Global Service Week',
      category: 'senior',
      status: 'completed',
      date: '2026-01-11',
      impact: 'Elderly care support',
      duration: '1 day'
    },
    {
      title: 'Sponsoring Sewing Machine - Regional Meet Service',
      description: 'Sewing machine sponsorship during service activity at Regional meet',
      category: 'community',
      status: 'completed',
      date: '2026-01-11',
      impact: 'Skill development support',
      duration: '1 day'
    },
    {
      title: 'Attended Regional Meet / 3rd Zone Advisory Meeting',
      description: 'Attendance at Regional Meet and 3rd Zone Advisory Meeting',
      category: 'community',
      status: 'completed',
      date: '2026-01-11',
      impact: 'Zone governance',
      duration: '1 day'
    },
    {
      title: 'Sponsorship to Region Meet',
      description: 'Sponsorship support for Regional Meet',
      category: 'community',
      status: 'completed',
      date: '2026-01-11',
      impact: 'Regional support',
      duration: '1 day'
    },
    {
      title: 'Supporting Army - Global Service Week',
      description: 'Army support activities during Global Service Week',
      category: 'community',
      status: 'completed',
      date: '2026-01-11',
      impact: 'Military support',
      duration: '1 day'
    },
    {
      title: 'Skill Development Program for Non Lions',
      description: 'Skill development training program for non-Lions members',
      category: 'youth',
      status: 'completed',
      date: '2026-01-12',
      impact: 'Community skill building',
      duration: '1 day'
    },
    {
      title: 'Conducting Skill Development Program on Digital Skills',
      description: 'Digital skills training program for community members',
      category: 'youth',
      status: 'completed',
      date: '2026-01-12',
      impact: 'Digital literacy',
      duration: '1 day'
    },
    {
      title: 'Conducting Skill Development Program for Research',
      description: 'Research skills development program',
      category: 'education',
      status: 'completed',
      date: '2026-01-13',
      impact: 'Research capacity building',
      duration: '1 day'
    },
    {
      title: 'Article for District Newsletter',
      description: 'Article submission for district newsletter publication',
      category: 'community',
      status: 'completed',
      date: '2026-01-13',
      impact: 'District communication',
      duration: '1 day'
    },
    {
      title: 'Organised Skill Development Program for Non Lions',
      description: 'Skill development program organized for non-Lions community members',
      category: 'youth',
      status: 'completed',
      date: '2026-01-14',
      impact: 'Community skill building',
      duration: '1 day'
    },
    {
      title: 'Organised Skill Development Program for Non Lions',
      description: 'Additional skill development session for community members',
      category: 'youth',
      status: 'completed',
      date: '2026-01-16',
      impact: 'Community skill building',
      duration: '1 day'
    },
    {
      title: 'Celebration of Melvin Jones Day',
      description: 'Celebration honoring Melvin Jones, founder of Lions Clubs International',
      category: 'community',
      status: 'completed',
      date: '2026-01-16',
      impact: 'Lions heritage celebration',
      duration: '1 day'
    },
    {
      title: 'Celebration of Makara Sankranthi with Non Lions',
      description: 'Makara Sankranthi festival celebration with community members',
      category: 'community',
      status: 'completed',
      date: '2026-01-16',
      impact: 'Cultural celebration',
      duration: '1 day'
    },
    {
      title: 'Organised Skill Development Program for Non-Lions',
      description: 'Skill development program for non-Lions community members',
      category: 'youth',
      status: 'completed',
      date: '2026-01-17',
      impact: 'Community skill building',
      duration: '1 day'
    },
    {
      title: 'Organised Skill Development Program for Non-Lions',
      description: 'Final skill development session for community members',
      category: 'youth',
      status: 'completed',
      date: '2026-01-19',
      impact: 'Community skill building',
      duration: '1 day'
    },
    {
      title: 'Twinning with Lions Club Of Turvekere',
      description: 'Twinning agreement and collaboration with Lions Club of Turvekere',
      category: 'community',
      status: 'completed',
      date: '2026-01-20',
      impact: 'Inter-club collaboration',
      duration: '1 day'
    },
    {
      title: 'Hygiene Care for Young Girls',
      description: 'Hygiene and health care program for young girls',
      category: 'health',
      status: 'completed',
      date: '2026-01-21',
      impact: 'Girls\' health awareness',
      duration: '1 day'
    }
  ]
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

// Real Lions Club Activities - Complete List 2025-2026 (87 Activities)
const realActivities = [
  // Health Services
  {
    title: 'Doctors\' Day Celebration',
    description: 'Celebrating medical professionals and their service to the community',
    category: 'health',
    status: 'completed',
    date: '2025-07-01',
    impact: 'Medical community engagement',
    duration: '1 day'
  },
  {
    title: 'Distribution of Free Spectacles',
    description: 'Providing free eyeglasses to underprivileged community members',
    category: 'health',
    status: 'completed',
    date: '2025-07-04',
    impact: 'Vision correction for needy',
    duration: '1 day'
  },
  {
    title: 'Mega Free Health Check Up Camp',
    description: 'Comprehensive health screening and medical consultation for communities',
    category: 'health',
    status: 'completed',
    date: '2025-07-10',
    impact: '500+ beneficiaries',
    duration: '1 day'
  },
  {
    title: 'Walkathon - Hepatitis Day',
    description: 'Awareness walk on hepatitis prevention and treatment',
    category: 'health',
    status: 'completed',
    date: '2025-07-28',
    impact: 'Community health awareness',
    duration: '1 day'
  },
  {
    title: 'Walkathon on World Lung Cancer Day',
    description: 'Awareness walk for lung cancer prevention and early detection',
    category: 'health',
    status: 'completed',
    date: '2025-08-01',
    impact: 'Health awareness campaign',
    duration: '1 day'
  },
  {
    title: 'Diabetic Awareness - Online Webinar',
    description: 'Educational webinar on diabetes prevention and management',
    category: 'health',
    status: 'completed',
    date: '2025-10-05',
    impact: 'Online health education',
    duration: '2 hours'
  },
  {
    title: 'Diabetic Check Up Camp at Kumara Park',
    description: 'Free diabetes screening and consultation camp',
    category: 'health',
    status: 'completed',
    date: '2025-10-05',
    impact: '200+ screenings',
    duration: '1 day'
  },
  {
    title: 'Blood Donation - Online Webinar',
    description: 'Webinar on importance of blood donation and donation process',
    category: 'health',
    status: 'completed',
    date: '2025-10-07',
    impact: 'Donor awareness',
    duration: '2 hours'
  },
  {
    title: 'Donated Blood on Service Week',
    description: 'Club members participated in blood donation drive',
    category: 'health',
    status: 'completed',
    date: '2025-10-07',
    impact: 'Life-saving contributions',
    duration: '1 day'
  },
  {
    title: 'Cancer Awareness Webinar',
    description: 'Webinar on cancer prevention - "Prevention is Better than Care"',
    category: 'health',
    status: 'completed',
    date: '2025-10-08',
    impact: 'Cancer prevention awareness',
    duration: '2 hours'
  },
  {
    title: 'Free Cancer Screening Camp',
    description: 'Cancer screening camp at Shirdi Sai Temple, Vidhyanarayanapura',
    category: 'health',
    status: 'completed',
    date: '2025-10-08',
    impact: 'Early detection services',
    duration: '1 day'
  },
  {
    title: 'Pediatric Cancer Awareness Webinar',
    description: 'Participating in "Together we Fight" pediatric cancer awareness',
    category: 'health',
    status: 'completed',
    date: '2025-10-08',
    impact: 'Childhood cancer awareness',
    duration: '2 hours'
  },
  {
    title: 'Eye Screening Camp for High School Children',
    description: 'Comprehensive eye health screening for high school students',
    category: 'health',
    status: 'completed',
    date: '2025-10-09',
    impact: 'Student vision care',
    duration: '1 day'
  },
  {
    title: 'Mental Well Being Webinar',
    description: 'Online webinar on mental health awareness and support',
    category: 'health',
    status: 'completed',
    date: '2025-10-11',
    impact: 'Mental health awareness',
    duration: '2 hours'
  },
  {
    title: 'District Mental Health Webinar',
    description: 'Participation in district-level mental health awareness program',
    category: 'health',
    status: 'completed',
    date: '2025-10-11',
    impact: 'Community mental health',
    duration: '2 hours'
  },
  {
    title: 'White Cane Day',
    description: 'Supporting visually impaired individuals and awareness programs',
    category: 'health',
    status: 'completed',
    date: '2025-10-15',
    impact: 'Visually impaired support',
    duration: '1 day'
  },

  // Education & Youth
  {
    title: 'PST Schooling',
    description: 'Primary school education support and development program',
    category: 'education',
    status: 'completed',
    date: '2025-06-22',
    impact: 'Student education support',
    duration: '1 week'
  },
  {
    title: 'Youth Awareness Program - Screen Time',
    description: 'Awareness program on effects of screen time in children',
    category: 'youth',
    status: 'completed',
    date: '2025-08-05',
    impact: 'Youth health awareness',
    duration: '2 hours'
  },
  {
    title: 'Distribution of Books to Arkalagudu School',
    description: 'Book distribution to Arkalagudu District Govt. School, Chikkanahalli',
    category: 'education',
    status: 'completed',
    date: '2025-08-20',
    impact: 'Educational material support',
    duration: '1 day'
  },
  {
    title: 'School Adoption',
    description: 'Formal adoption of local government school for ongoing support',
    category: 'education',
    status: 'completed',
    date: '2025-08-22',
    impact: 'Long-term educational support',
    duration: 'Ongoing'
  },
  {
    title: 'Teachers Day Celebration',
    description: 'Honoring head masters of adopted schools on Teachers Day',
    category: 'education',
    status: 'completed',
    date: '2025-09-05',
    impact: 'Teacher recognition',
    duration: '1 day'
  },
  {
    title: 'Education Support - Primary School',
    description: 'Distribution of educational supplements to primary school students',
    category: 'education',
    status: 'completed',
    date: '2025-10-10',
    impact: 'Student learning materials',
    duration: '1 day'
  },
  {
    title: 'Peace Poster Competition',
    description: 'Art competition promoting peace and harmony among youth',
    category: 'youth',
    status: 'completed',
    date: '2025-10-30',
    impact: 'Youth creativity and peace',
    duration: '1 day'
  },

  // Environment
  {
    title: 'World Paper Bag Day Workshop',
    description: 'Workshop on paper bag making and plastic reduction',
    category: 'environment',
    status: 'completed',
    date: '2025-07-12',
    impact: 'Environmental awareness',
    duration: '1 day'
  },
  {
    title: 'International Tigers Day Awareness Camp',
    description: 'Awareness camp on tiger conservation and wildlife protection',
    category: 'environment',
    status: 'completed',
    date: '2025-07-29',
    impact: 'Wildlife conservation',
    duration: '1 day'
  },
  {
    title: 'World Elephant Day Campaign',
    description: 'Awareness campaign on elephant conservation and protection',
    category: 'environment',
    status: 'completed',
    date: '2025-08-12',
    impact: 'Wildlife protection',
    duration: '1 day'
  },
  {
    title: 'Eco Friendly Ganesha Making',
    description: 'Workshop on making eco-friendly Ganesha idols',
    category: 'environment',
    status: 'completed',
    date: '2025-08-25',
    impact: 'Eco-friendly celebrations',
    duration: '1 day'
  },
  {
    title: 'Celebration of Ozone Day',
    description: 'Awareness program on ozone layer protection',
    category: 'environment',
    status: 'completed',
    date: '2025-09-16',
    impact: 'Environmental protection',
    duration: '1 day'
  },
  {
    title: 'Swachh Programme at Sigganayakanahalli',
    description: 'Cleanliness and sanitation program at Sigganayakanahalli',
    category: 'environment',
    status: 'completed',
    date: '2025-10-02',
    impact: 'Community cleanliness',
    duration: '1 day'
  },
  {
    title: 'Plastic Usage Awareness Webinar',
    description: 'Online webinar on reducing plastic usage and alternatives',
    category: 'environment',
    status: 'completed',
    date: '2025-10-04',
    impact: 'Plastic reduction awareness',
    duration: '2 hours'
  },
  {
    title: 'Tree Plantation at Sarkar Guttahalli',
    description: 'Tree plantation drive at Sarkar Guttahalli, Hoskote',
    category: 'environment',
    status: 'completed',
    date: '2025-10-04',
    impact: 'Green cover expansion',
    duration: '1 day'
  },

  // Community Service
  {
    title: 'First BOD and GB Meeting',
    description: 'First Board of Directors and General Body meeting',
    category: 'community',
    status: 'completed',
    date: '2025-07-10',
    impact: 'Club governance',
    duration: '1 day'
  },
  {
    title: 'Bye Law Adoption',
    description: 'Bye Law adoption meeting and procedures',
    category: 'community',
    status: 'completed',
    date: '2025-07-10',
    impact: 'Club governance',
    duration: '1 day'
  },
  {
    title: 'Advertisement Campaign',
    description: 'Advertisement campaign for PST, Family, and SET programs',
    category: 'community',
    status: 'completed',
    date: '2025-07-24',
    impact: 'Program awareness',
    duration: '1 week'
  },
  {
    title: 'Second BOD and GB Meeting',
    description: 'Second Board of Directors and General Body meeting',
    category: 'community',
    status: 'completed',
    date: '2025-08-14',
    impact: 'Club governance',
    duration: '1 day'
  },
  {
    title: 'ZAC Meeting',
    description: 'Zone Advisory Committee meeting',
    category: 'community',
    status: 'completed',
    date: '2025-08-21',
    impact: 'Zone governance',
    duration: '1 day'
  },
  {
    title: 'DG Official Visit',
    description: 'District Governor official visit to club',
    category: 'community',
    status: 'completed',
    date: '2025-08-24',
    impact: 'District engagement',
    duration: '1 day'
  },
  {
    title: 'Third BOD and GB Meeting',
    description: 'Third Board of Directors and General Body meeting',
    category: 'community',
    status: 'completed',
    date: '2025-09-11',
    impact: 'Club governance',
    duration: '1 day'
  },
  {
    title: 'GAT Conclave',
    description: 'Global Action Team conclave and training',
    category: 'youth',
    status: 'completed',
    date: '2025-09-14',
    impact: 'Leadership training',
    duration: '1 day'
  },
  {
    title: 'BOD & GB Meeting',
    description: 'Fourth Board of Directors and General Body meeting',
    category: 'community',
    status: 'completed',
    date: '2025-10-23',
    impact: 'Club governance',
    duration: '1 day'
  },
  {
    title: 'BOD & GB Meeting',
    description: 'Fifth Board of Directors and General Body meeting',
    category: 'community',
    status: 'completed',
    date: '2025-11-13',
    impact: 'Club governance',
    duration: '1 day'
  },
  {
    title: 'ZAC Meeting',
    description: 'Second Zone Advisory Committee meeting',
    category: 'community',
    status: 'completed',
    date: '2025-11-21',
    impact: 'Zone governance',
    duration: '1 day'
  },
  {
    title: 'District Membership Orientation',
    description: 'Attending District 317A New Membership Orientation Program',
    category: 'youth',
    status: 'completed',
    date: '2025-11-30',
    impact: 'Membership development',
    duration: '1 day'
  },
  {
    title: 'Installation & Service Activity',
    description: 'Club installation ceremony and community service kickoff',
    category: 'community',
    status: 'completed',
    date: '2025-06-26',
    impact: 'Club establishment',
    duration: '1 day'
  },
  {
    title: 'Donation for Hunger Programme',
    description: 'Food distribution and hunger relief program',
    category: 'community',
    status: 'completed',
    date: '2025-07-10',
    impact: 'Hunger relief support',
    duration: '1 day'
  },
  {
    title: 'Kargil Vijay Diwas',
    description: 'Commemoration of Kargil war heroes and patriotic activities',
    category: 'community',
    status: 'completed',
    date: '2025-07-26',
    impact: 'Patriotic awareness',
    duration: '1 day'
  },
  {
    title: 'World Scout Scarf Day - Honouring Army',
    description: 'Honoring army personnel on World Scout Scarf Day',
    category: 'community',
    status: 'completed',
    date: '2025-08-01',
    impact: 'Army appreciation',
    duration: '1 day'
  },
  {
    title: 'Rakhi Utsav for Policemen',
    description: 'Raksha Bandhan celebration for police protectors',
    category: 'community',
    status: 'completed',
    date: '2025-08-09',
    impact: 'Police appreciation',
    duration: '1 day'
  },
  {
    title: 'Hunger Programme Donation',
    description: 'Support for community hunger relief initiatives',
    category: 'community',
    status: 'completed',
    date: '2025-08-11',
    impact: 'Food security support',
    duration: '1 day'
  },
  {
    title: 'Independence Day Celebration',
    description: 'Participation in District 317A Independence Day celebrations',
    category: 'community',
    status: 'completed',
    date: '2025-08-15',
    impact: 'National day celebration',
    duration: '1 day'
  },
  {
    title: 'Tied with Love for the Nation',
    description: 'Patriotic activities at government school',
    category: 'community',
    status: 'completed',
    date: '2025-08-15',
    impact: 'Patriotic education',
    duration: '1 day'
  },
  {
    title: 'Honoring Society Heroes',
    description: 'Recognizing community heroes on 79th Independence Day',
    category: 'community',
    status: 'completed',
    date: '2025-08-15',
    impact: 'Community recognition',
    duration: '1 day'
  },
  {
    title: 'Swachh Bharat Cleanliness Drive',
    description: 'Cleanliness drive at Doddagattiganhalli Village School, Hoskote',
    category: 'environment',
    status: 'completed',
    date: '2025-10-04',
    impact: 'School sanitation',
    duration: '1 day'
  },
  {
    title: 'Old Age Home Support',
    description: 'Food distribution to Sri Mahalakshmi Old Age Home',
    category: 'senior',
    status: 'completed',
    date: '2025-10-06',
    impact: 'Elderly care support',
    duration: '1 day'
  },
  {
    title: 'Mental Well Being Food Distribution',
    description: 'Food distribution to mentally disabled persons',
    category: 'community',
    status: 'completed',
    date: '2025-10-11',
    impact: 'Disabled community support',
    duration: '1 day'
  },
  {
    title: 'Army Support - Martyrs Family',
    description: 'Contribution towards families of martyrs',
    category: 'community',
    status: 'completed',
    date: '2025-10-12',
    impact: 'Martyr family support',
    duration: '1 day'
  },
  {
    title: 'Army Support - Honouring Personnel',
    description: 'Honoring and supporting army personnel',
    category: 'community',
    status: 'completed',
    date: '2025-10-12',
    impact: 'Military appreciation',
    duration: '1 day'
  },
  {
    title: 'Hunger Programme Donation',
    description: 'Support for hunger relief initiatives',
    category: 'community',
    status: 'completed',
    date: '2025-09-23',
    impact: 'Food security',
    duration: '1 day'
  },

  // Training & Development
  {
    title: 'Lion Portal Training Program',
    description: 'Training on Lions Club portal usage and management',
    category: 'youth',
    status: 'completed',
    date: '2025-07-20',
    impact: 'Digital literacy',
    duration: '3 hours'
  },
  {
    title: 'Advertisement Campaign',
    description: 'Promotional campaign for PST, Family, and SET programs',
    category: 'community',
    status: 'completed',
    date: '2025-07-24',
    impact: 'Program awareness',
    duration: '1 week'
  },
  {
    title: 'Disaster Management Webinar',
    description: 'Webinar on role of service organizations in disaster management',
    category: 'disaster',
    status: 'completed',
    date: '2025-08-12',
    impact: 'Disaster preparedness',
    duration: '2 hours'
  },
  {
    title: 'Build Yourself for Build India',
    description: 'Personal development program for youth and community building',
    category: 'youth',
    status: 'completed',
    date: '2025-08-19',
    impact: 'Youth development',
    duration: '1 day'
  },
  {
    title: 'Library Movement Webinar',
    description: 'Webinar on library movement and importance in India',
    category: 'education',
    status: 'completed',
    date: '2025-08-28',
    impact: 'Library awareness',
    duration: '2 hours'
  },
  {
    title: 'Intellectual Property Rights Webinar',
    description: 'Educational webinar on intellectual property rights',
    category: 'education',
    status: 'completed',
    date: '2025-09-15',
    impact: 'IP rights awareness',
    duration: '2 hours'
  },
  {
    title: 'PoSH Act Awareness Webinar',
    description: 'Online webinar on Prevention of Sexual Harassment at Workplace Act',
    category: 'community',
    status: 'completed',
    date: '2025-10-17',
    impact: 'Workplace safety awareness',
    duration: '2 hours'
  },
  {
    title: 'Membership Orientation Program',
    description: 'District 317A new membership orientation and training',
    category: 'youth',
    status: 'completed',
    date: '2025-11-30',
    impact: 'Membership development',
    duration: '1 day'
  },

  // Special Events
  {
    title: 'Participation in Cabinet Presentation',
    description: 'Active participation in district cabinet presentations',
    category: 'community',
    status: 'completed',
    date: '2025-07-27',
    impact: 'District engagement',
    duration: '1 day'
  },
  {
    title: 'Two Clubs-One Mission: Cancer Free Tomorrow',
    description: 'Collaborative initiative for cancer awareness and prevention',
    category: 'health',
    status: 'completed',
    date: '2025-08-17',
    impact: 'Cancer prevention collaboration',
    duration: '1 day'
  },
  {
    title: 'Rashtriya Ekta Diwas Oath Ceremony',
    description: 'National Unity Day oath taking ceremony',
    category: 'community',
    status: 'completed',
    date: '2025-10-31',
    impact: 'National unity promotion',
    duration: '1 day'
  },
  {
    title: 'District Kannada Rajyotsava',
    description: 'Participation in district-level Kannada Rajyotsava celebrations',
    category: 'community',
    status: 'completed',
    date: '2025-11-09',
    impact: 'Cultural celebration',
    duration: '1 day'
  },
  {
    title: 'Lions Diabetes Awareness Run',
    description: 'Awareness run to promote diabetes prevention and management',
    category: 'health',
    status: 'completed',
    date: '2025-11-16',
    impact: 'Health awareness campaign',
    duration: '1 day'
  },
  {
    title: 'National Constitution Day',
    description: 'Celebration and awareness of Indian Constitution',
    category: 'community',
    status: 'completed',
    date: '2025-11-26',
    impact: 'Constitutional awareness',
    duration: '1 day'
  },
  {
    title: 'Kannada Rajyotsava',
    description: 'Karnataka Rajyotsava celebration and cultural program',
    category: 'community',
    status: 'completed',
    date: '2025-11-27',
    impact: 'Cultural celebration',
    duration: '1 day'
  },
  {
    title: 'International Day of Persons with Disabilities',
    description: 'Awareness and support program for specially abled persons',
    category: 'community',
    status: 'completed',
    date: '2025-12-03',
    impact: 'Disability awareness',
    duration: '1 day'
  },
  {
    title: 'Celebration of Armed Forces Flag Day',
    description: 'Honoring armed forces personnel and their service to the nation',
    category: 'community',
    status: 'completed',
    date: '2025-12-07',
    impact: 'Military appreciation',
    duration: '1 day'
  },
  {
    title: 'Donation LCIF- pmjf',
    description: 'Donation to Lions Clubs International Foundation - PMJF program',
    category: 'community',
    status: 'completed',
    date: '2025-12-11',
    impact: 'International foundation support',
    duration: '1 day'
  },
  {
    title: 'BOD & GB Meeting',
    description: 'Sixth Board of Directors and General Body meeting',
    category: 'community',
    status: 'completed',
    date: '2025-12-17',
    impact: 'Club governance',
    duration: '1 day'
  },
  {
    title: 'Celebration of New Year at Adopted Govt School',
    description: 'New Year celebration program at adopted government school',
    category: 'education',
    status: 'completed',
    date: '2026-01-01',
    impact: 'Student engagement',
    duration: '1 day'
  },
  {
    title: 'Distribution of Food Pockets to Orphanage',
    description: 'Food distribution to orphanage home and food grains to old age home',
    category: 'community',
    status: 'completed',
    date: '2026-01-03',
    impact: 'Food security support',
    duration: '1 day'
  },
  {
    title: 'Diabetic Check Up Camp - Basaveshwara Nagar',
    description: 'Diabetes screening camp at Basaveshwara Nagar Ambedkar stadium',
    category: 'health',
    status: 'completed',
    date: '2026-01-04',
    impact: 'Health screening services',
    duration: '1 day'
  },
  {
    title: 'Diabetic Check Up Camp - Kumara Park',
    description: 'Diabetes screening camp at Kumara Park area',
    category: 'health',
    status: 'completed',
    date: '2026-01-04',
    impact: 'Community health screening',
    duration: '1 day'
  },
  {
    title: 'Pediatric Cancer Awareness Webinar',
    description: 'Participating in "Together we Fight" - awareness and support for Cancer webinar',
    category: 'health',
    status: 'completed',
    date: '2026-01-05',
    impact: 'Childhood cancer awareness',
    duration: '2 hours'
  },
  {
    title: 'Sponsoring Bedspreads to Kidwai Hospital',
    description: 'Sponsored bedspreads and pillow covers to Kidwai Hospital',
    category: 'health',
    status: 'completed',
    date: '2026-01-05',
    impact: 'Hospital support',
    duration: '1 day'
  },
  {
    title: 'Pediatric Ward Service Week',
    description: 'Service week activities at pediatric ward',
    category: 'health',
    status: 'completed',
    date: '2026-01-06',
    impact: 'Child healthcare support',
    duration: '1 day'
  },
  {
    title: 'Educational Supplements Distribution',
    description: 'Distribution of Educational supplements to Primary School students - Service week',
    category: 'education',
    status: 'completed',
    date: '2026-01-07',
    impact: 'Student learning support',
    duration: '1 day'
  },
  {
    title: 'District Blood Donation Webinar',
    description: 'Participation in District webinar on Blood Donation',
    category: 'health',
    status: 'completed',
    date: '2026-01-07',
    impact: 'Blood donation awareness',
    duration: '2 hours'
  },
  {
    title: 'Service Week Blood Donation',
    description: 'Donated Blood on the occasion of Service Week',
    category: 'health',
    status: 'completed',
    date: '2026-01-07',
    impact: 'Life-saving contributions',
    duration: '1 day'
  },
  {
    title: 'Global Service Week Blood Donation Webinar',
    description: 'Organized webinar on Awareness on Blood Donation - Global Service Week',
    category: 'health',
    status: 'completed',
    date: '2026-01-08',
    impact: 'Global service awareness',
    duration: '2 hours'
  },
  {
    title: 'District Eye Health Webinar',
    description: 'Participated in District webinar on Tips for Healthy Eye',
    category: 'health',
    status: 'completed',
    date: '2026-01-08',
    impact: 'Eye health awareness',
    duration: '2 hours'
  },
  {
    title: 'Service Week Eye Screening Camp',
    description: 'Eye Screening Camp for School Children as part of Service week activity',
    category: 'health',
    status: 'completed',
    date: '2026-01-09',
    impact: 'Student vision care',
    duration: '1 day'
  },
  {
    title: 'Global Service Week Mental Health Support',
    description: 'Distribution of Food Items to Mentally Disabled persons - Global Service Week',
    category: 'community',
    status: 'completed',
    date: '2026-01-09',
    impact: 'Mental health support',
    duration: '1 day'
  },
  {
    title: 'District Mental Well Being Webinar',
    description: 'Participation in District webinar on Mental Well Being',
    category: 'health',
    status: 'completed',
    date: '2026-01-10',
    impact: 'Mental health awareness',
    duration: '2 hours'
  },
  {
    title: 'Global Service Week Old Age Home Support',
    description: 'Distribution of Food Items to old age home - Global Service Week',
    category: 'senior',
    status: 'completed',
    date: '2026-01-11',
    impact: 'Elderly care support',
    duration: '1 day'
  },
  {
    title: 'Sewing Machine Sponsorship',
    description: 'Sponsoring Sewing Machine - Service activity at Regional meet',
    category: 'community',
    status: 'completed',
    date: '2026-01-11',
    impact: 'Skill development support',
    duration: '1 day'
  },
  {
    title: 'Regional Meet Participation',
    description: 'Attended Regional Meet / Attended 3rd Zone Advisory Meeting',
    category: 'community',
    status: 'completed',
    date: '2026-01-11',
    impact: 'Regional engagement',
    duration: '1 day'
  },
  {
    title: 'Region Meet Sponsorship',
    description: 'Sponsorship to the Region meet',
    category: 'community',
    status: 'completed',
    date: '2026-01-11',
    impact: 'Regional support',
    duration: '1 day'
  },
  {
    title: 'Global Service Week Army Support',
    description: 'Supporting army - Global Service Week',
    category: 'community',
    status: 'completed',
    date: '2026-01-11',
    impact: 'Military support',
    duration: '1 day'
  },
  {
    title: 'Skill Development Program - Non Lions',
    description: 'Skill Development program for Non lions',
    category: 'youth',
    status: 'completed',
    date: '2026-01-12',
    impact: 'Community skill building',
    duration: '1 day'
  },
  {
    title: 'Digital Skills Program',
    description: 'Conducting skill development program on Digital skills',
    category: 'youth',
    status: 'completed',
    date: '2026-01-12',
    impact: 'Digital literacy',
    duration: '1 day'
  },
  {
    title: 'Research Skills Program',
    description: 'Conducting skill development program for Research',
    category: 'education',
    status: 'completed',
    date: '2026-01-13',
    impact: 'Research skills development',
    duration: '1 day'
  },
  {
    title: 'District Newsletter Article',
    description: 'Article for District news letter',
    category: 'community',
    status: 'completed',
    date: '2026-01-13',
    impact: 'District communication',
    duration: '1 day'
  },
  {
    title: 'Skill Development Program',
    description: 'Organised Skill development program for non lions',
    category: 'youth',
    status: 'completed',
    date: '2026-01-14',
    impact: 'Community skill building',
    duration: '1 day'
  },
  {
    title: 'Skill Development Program',
    description: 'Organised Skill development program for non lions',
    category: 'youth',
    status: 'completed',
    date: '2026-01-16',
    impact: 'Community skill building',
    duration: '1 day'
  },
  {
    title: 'Melvin Jones Day Celebration',
    description: 'Celebration of Melvin Jones Day - Founder of Lions Clubs International',
    category: 'community',
    status: 'completed',
    date: '2026-01-16',
    impact: 'Lions heritage celebration',
    duration: '1 day'
  },
  {
    title: 'Makara Sankranthi Celebration',
    description: 'Celebration of Makara Sankranthi with Non-Lions',
    category: 'community',
    status: 'completed',
    date: '2026-01-16',
    impact: 'Cultural celebration',
    duration: '1 day'
  },
  {
    title: 'Skill Development Program',
    description: 'Organised Skill development program for Non-lions',
    category: 'youth',
    status: 'completed',
    date: '2026-01-17',
    impact: 'Community skill building',
    duration: '1 day'
  },
  {
    title: 'Skill Development Program',
    description: 'Organised Skill development program for Non-lions',
    category: 'youth',
    status: 'completed',
    date: '2026-01-19',
    impact: 'Community skill building',
    duration: '1 day'
  },
  {
    title: 'Twinning with Turvekere Lions Club',
    description: 'Twinning with Lions Club Of Turvekere',
    category: 'community',
    status: 'completed',
    date: '2026-01-20',
    impact: 'Club collaboration',
    duration: '1 day'
  },
  {
    title: 'Hygiene Care for Young Girls',
    description: 'Hygiene care program for young girls',
    category: 'health',
    status: 'completed',
    date: '2026-01-21',
    impact: 'Girls health education',
    duration: '1 day'
  }
];

// Add permanent schools project
const permanentSchoolsProject = {
  id: 'permanent-schools-project',
  title: 'Government Schools Adoption - Permanent Project of LCB Sankalpa',
  description: 'Adoption of 11 government schools including Doddagathiganabbe Grama Panchayath under Ministry of Education adoption program',
  category: 'education',
  status: 'ongoing',
  date: '2025-01-15',
  impact: '11 schools adopted, 5000+ students benefited',
  location: 'Multiple locations',
  images: [
    'assets/images/projects/schools-adoption-1.jpg',
    'assets/images/projects/schools-adoption-2.jpg'
  ]
};

// Add to real activities array
realActivities.push(permanentSchoolsProject);

// Add real activities to projects database (randomized)
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Shuffle the real activities for random display
const shuffledRealActivities = shuffleArray(realActivities);

shuffledRealActivities.forEach((activity, index) => {
  PROJECTS_DATABASE.projects.push({
    id: `real-activity-${index + 1}`,
    title: activity.title,
    description: activity.description,
    category: activity.category,
    status: activity.status,
    date: activity.date,
    impact: activity.impact,
    location: 'Bangalore',
    images: [
      `assets/images/projects/real-activity-${index + 1}-1.jpg`,
      `assets/images/projects/real-activity-${index + 1}-2.jpg`
    ]
  });
});

// Generate remaining projects to reach 200 total
const remainingProjects = 200 - PROJECTS_DATABASE.projects.length;
for (let i = 1; i <= remainingProjects; i++) {
  const template = projectTemplates[i % projectTemplates.length];
  const year = 2018 + Math.floor((i - 1) / 20); // Projects from 2018-2027
  const month = ((i - 1) % 12) + 1;
  
  PROJECTS_DATABASE.projects.push({
    id: `template-project-${i}`,
    title: template.title,
    description: template.description,
    category: template.category,
    status: template.status,
    date: `${year}-${String(month).padStart(2, '0')}-15`,
    impact: template.impact,
    location: ['Sankalpa', 'Bangalore', 'Rural Areas', 'Urban Centers', 'Community Centers'][i % 5],
    images: [
      `assets/images/projects/template-${i}-1.jpg`,
      `assets/images/projects/template-${i}-2.jpg`
    ]
  });
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PROJECTS_DATABASE;
} else {
  window.PROJECTS_DATABASE = PROJECTS_DATABASE;
}
