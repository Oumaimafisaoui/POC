import React, { useState } from 'react';
import { Clock, CheckCircle, Circle, Briefcase, Target, Award, Book, Users, UserCheck, AlertCircle, Info } from 'lucide-react';

const AddsOnComposer = () => {
  const [activeProgram, setActiveProgram] = useState('java-piscine');
  const [configs, setConfigs] = useState({
    'java-piscine': { objective: 'fullstack', duration: '4-months', level: 'beginner', participants: '15' },
    devops: { objective: 'career-change', job: 'devops', profession: 'devops-engineer', duration: '6-months', level: 'beginner', participants: '15' },
    'ai-starter': { duration: '2-weeks', participants: '15' }
  });
  const [selectedModules, setSelectedModules] = useState(new Set());
  const [hoveredTooltip, setHoveredTooltip] = useState(null);

  const programs = {
    'java-piscine': {
      name: 'Java Track',
      color: 'blue',
      objectives: ['Full Stack Java Development', 'Microservices Architecture', 'REST APIs and Frontend'],
      softSkills: ['Analytical thinking', 'Methodical debugging', 'Teamwork', 'Project management', 'Technical documentation'],
      hardSkills: ['Java SE/EE', 'Spring Boot', 'REST APIs', 'Angular', 'Databases', 'Maven/Gradle', 'Jenkins CI/CD', 'Docker', 'Neo4j'],
      prerequisites: [
        'Have written at least 500 lines of code in any language (Python, JavaScript, C, etc.)',
        'Understand the concepts of class, object, inheritance and encapsulation',
        'Know how to create basic SQL queries (SELECT, INSERT, UPDATE, DELETE)'
      ],
      description: "Intensive Full Stack Java development training. Complete track covering Java SE/EE, Spring Boot, REST APIs, Angular for frontend, databases, and continuous integration. Program designed to train Full Stack Java developers capable of designing and deploying complete web applications, from backend to frontend.",
      resources: {
        experts: [
          { role: 'Java/Spring Boot Expert', count: 1, description: 'Software architect with 8+ years of experience' }
        ],
        mentors: { count: 2, ratio: '1 mentor for 10 learners' },
        staff: [
          { role: 'Educational coordinator', count: 1 },
          { role: 'Technical support', count: 1 }
        ]
      },
      modules: [
        { id: 'lets-play', name: 'Lets Play', description: 'Java introduction and first projects', duration: 5, skills: ['Java', 'OOP'], type: 'base' },
        { id: 'localserver', name: 'Local Server', description: 'Local servers and network communication', duration: 7, skills: ['Server', 'HTTP'], type: 'core' },
        { id: 'angul-it', name: 'Angul-it', description: 'Angular frontend integration with backend', duration: 10, skills: ['Angular', 'API'], type: 'project' },
        { id: 'buy-01', name: 'Buy-01', description: 'E-commerce application part 1', duration: 8, skills: ['Spring', 'REST'], type: 'project' },
        { id: 'mr-jenk', name: 'Mr Jenkins', description: 'CI/CD with Jenkins and automation', duration: 6, skills: ['Jenkins', 'CI/CD'], type: 'core' },
        { id: 'safe-zone', name: 'Safe Zone', description: 'Security and authentication', duration: 7, skills: ['Security', 'Auth'], type: 'core' },
        { id: 'buy-02', name: 'Buy-02', description: 'E-commerce application part 2', duration: 8, skills: ['Spring', 'DB'], type: 'project' },
        { id: 'nexus', name: 'Nexus', description: 'Dependency management and repository', duration: 5, skills: ['Nexus', 'Maven'], type: 'core' },
        { id: 'neo4flix', name: 'Neo4flix', description: 'Graph database with Neo4j', duration: 9, skills: ['Neo4j', 'Graph'], type: 'advanced' },
        { id: '01blog', name: '01 Blog', description: 'Complete blog application', duration: 10, skills: ['Full Stack'], type: 'project' },
        { id: 'travel-plan', name: 'Travel Plan', description: 'Travel planning', duration: 8, skills: ['Microservices'], type: 'advanced' },
        { id: 'lets-travel', name: 'Lets Travel', description: 'Final project travel application', duration: 12, skills: ['Architecture'], type: 'project' }
      ]
    },
    devops: {
      name: 'DevOps Track',
      color: 'emerald',
      objectives: ['Infrastructure automation', 'CI/CD Pipelines', 'Monitoring and observability'],
      softSkills: ['Problem solving', 'Cross-team collaboration', 'Technical communication', 'Change management', 'Systems thinking'],
      hardSkills: ['Linux/Unix', 'Docker & Kubernetes', 'CI/CD (GitLab, Jenkins)', 'Infrastructure as Code (Terraform)', 'Scripting (Python, Bash)', 'Cloud (AWS, Azure, GCP)', 'Monitoring & Logging'],
      prerequisites: ['Minimal software development experience', 'Familiarity with Python and shell scripting', 'Basic knowledge of operating systems'],
      description: "Complete DevOps engineering training covering infrastructure automation, CI/CD pipelines, containerization and monitoring practices. Track designed to develop essential technical skills for joining professional DevOps teams.",
      resources: {
        experts: [
          { role: 'DevOps/SRE Expert', count: 1, description: 'Cloud engineer with production experience' }
        ],
        mentors: { count: 2, ratio: '1 mentor for 10 learners' },
        staff: [
          { role: 'Educational coordinator', count: 1 },
          { role: 'Infrastructure support', count: 1 }
        ]
      },
      modules: [
        { id: 'scripting-piscine', name: 'Scripting Piscine', description: 'Intensive Unix, shell and Python introduction', duration: 10, skills: ['Git', 'Unix', 'Python'], type: 'base' },
        { id: 'deep-in-net', name: 'Deep-in-Net', description: 'Network fundamentals and service communication', duration: 5, skills: ['Networking', 'TCP/IP'], type: 'core' },
        { id: 'deep-in-system', name: 'Deep-in-System', description: 'Linux system administration and servers', duration: 10, skills: ['Linux', 'SSH'], type: 'core' },
        { id: 'crud-master', name: 'CRUD Master', description: 'Backend applications and REST APIs', duration: 13, skills: ['Backend', 'API'], type: 'project' },
        { id: 'play-with-containers', name: 'Play with Containers', description: 'Containerization with Docker', duration: 10, skills: ['Docker'], type: 'core' },
        { id: 'orchestrator', name: 'Orchestrator', description: 'Container orchestration with Kubernetes', duration: 10, skills: ['Kubernetes'], type: 'core' },
        { id: 'cloud-design', name: 'Cloud Design', description: 'Cloud architecture and Infrastructure as Code', duration: 15, skills: ['Cloud', 'Terraform'], type: 'core' },
        { id: 'code-keeper', name: 'Code Keeper', description: 'DevOps pipelines and continuous deployment', duration: 10, skills: ['CI/CD', 'GitLab'], type: 'advanced' }
      ]
    },
    'ai-starter': {
      name: 'AI Starter Bootcamp',
      color: 'purple',
      objectives: ['Coding with AI', 'Human-AI collaboration', 'Web applications'],
      softSkills: ['Collaboration', 'Communication', 'Creative problem solving', 'Adaptability', 'Self-directed learning'],
      hardSkills: ['HTML/CSS', 'JavaScript', 'DOM Manipulation', 'API Integration', 'Web development', 'AI tools usage'],
      prerequisites: ['No technical prerequisites'],
      description: "Intensive bootcamp introducing web development with artificial intelligence assistance. Peer-to-peer program focused on collaborative learning between humans and AI to develop coding skills and creative problem solving.",
      resources: {
        experts: [
          { role: 'Web & AI Expert', count: 1, description: 'Web developer with AI tools expertise (Optional)' }
        ],
        mentors: { count: 3, ratio: '1 mentor for 10 learners' },
        staff: [
          { role: 'Educational coordinator', count: 1 },
          { role: 'Peer-learning facilitator', count: 1 }
        ]
      },
      modules: [
        { id: 'forme', name: 'Shape Crafting', duration: 1, skills: ['HTML'], type: 'base', level: 1 },
        { id: 'pouvoir', name: 'Building Power', duration: 1, skills: ['JS'], type: 'core', level: 1 },
        { id: 'mouvement', name: 'Motion Magic', duration: 1, skills: ['DOM'], type: 'core', level: 1 },
        { id: 'robots', name: 'Robots Harmony', duration: 1, skills: ['Collab'], type: 'project', level: 1 },
        { id: 'codeurs', name: 'Coders Harmony', duration: 1, skills: ['Present'], type: 'project', level: 1 },
        { id: 'recap', name: 'Power Recap', duration: 1, skills: ['Portfolio'], type: 'base', level: 2 },
        { id: 'build', name: 'Start Building', duration: 1, skills: ['UI'], type: 'core', level: 2 },
        { id: 'dynamic', name: 'Make It Dynamic', duration: 1, skills: ['JS DOM'], type: 'core', level: 2 },
        { id: 'gate', name: 'Gate Of Knowledge', duration: 1, skills: ['API'], type: 'project', level: 2 },
        { id: 'think', name: 'Thinking wide', duration: 1, skills: ['Creative'], type: 'project', level: 2 }
      ]
    }
  };

  const prog = programs[activeProgram];
  const cfg = configs[activeProgram];
  
  const updateConfig = (key, value) => {
    setConfigs({...configs, [activeProgram]: {...cfg, [key]: value}});
  };

  const filteredModules = (() => {
    let mods = prog.modules;
    if (activeProgram === 'java-piscine') {
      if (cfg.level === 'advanced' && cfg.duration === '3-months') mods = mods.slice(3);
      else if (cfg.level === 'intermediate') mods = mods.slice(1);
    } else if (activeProgram === 'devops') {
      if (cfg.level === 'advanced' && cfg.duration === '3-months') mods = mods.slice(2);
      else if (cfg.level === 'intermediate') mods = mods.slice(1);
    } else {
      mods = cfg.duration === '1-week' ? mods.filter(m => m.level === 1) : mods;
    }
    return mods;
  })();

  const isSelected = (id) => selectedModules.size === 0 || selectedModules.has(id);
  const toggleModule = (id) => {
    const newSet = new Set(selectedModules);
    newSet.has(id) ? newSet.delete(id) : newSet.add(id);
    setSelectedModules(newSet);
  };

  const selectedCount = filteredModules.filter(m => isSelected(m.id)).length;
  const actualDuration = activeProgram === 'ai-starter' 
    ? (cfg.duration === '1-week' ? 5 : 10)
    : activeProgram === 'java-piscine'
    ? (cfg.duration === '5-months' ? 100 : cfg.duration === '4-months' ? 80 : 60)
    : (cfg.duration === '6-months' ? 120 : cfg.duration === '4-months' ? 80 : 60);

  const weeks = activeProgram === 'ai-starter' 
    ? (cfg.duration === '1-week' ? 1 : 2)
    : activeProgram === 'java-piscine'
    ? (cfg.duration === '5-months' ? 20 : cfg.duration === '4-months' ? 16 : 12)
    : (cfg.duration === '6-months' ? 24 : cfg.duration === '4-months' ? 16 : 12);

  // Check if configuration is not ideal
  const isNonIdealConfig = () => {
    if (activeProgram === 'java-piscine') {
      return cfg.level === 'beginner' && cfg.duration === '3-months';
    }
    if (activeProgram === 'devops') {
      return cfg.level === 'beginner' && cfg.duration === '3-months';
    }
    return false;
  };

  const colorClasses = {
    blue: { bg: 'bg-blue-600', hover: 'hover:bg-blue-700', light: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-500' },
    emerald: { bg: 'bg-emerald-600', hover: 'hover:bg-emerald-700', light: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-500' },
    purple: { bg: 'bg-purple-600', hover: 'hover:bg-purple-700', light: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-500' }
  };

  const colors = colorClasses[prog.color];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto p-6">
        <div className="text-center mb-12 pt-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-3">Add-ons Program Composer</h1>
          <p className="text-xl text-gray-600">Customized modular learning experiences</p>
        </div>

        <div className="flex gap-8">
          <div className="w-72 space-y-3">
            <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Book className="w-5 h-5 mr-2" />
                Tracks
              </h2>
              {Object.entries(programs).map(([key, p]) => (
                <button 
                  key={key} 
                  className={`w-full text-left p-4 rounded-xl mb-2 transition-all font-medium ${
                    activeProgram === key 
                      ? `${colorClasses[p.color].bg} text-white shadow-lg transform scale-105` 
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100 hover:shadow-md'
                  }`} 
                  onClick={() => { setActiveProgram(key); setSelectedModules(new Set()); }}
                >
                  {p.name}
                </button>
              ))}
            </div>

            <div className={`${colors.light} rounded-2xl p-6 border ${colors.border} border-opacity-30`}>
              <div className="text-center">
                <div className={`text-4xl font-bold ${colors.text} mb-1`}>{selectedCount}</div>
                <div className="text-sm font-medium text-gray-600 mb-3">Selected modules</div>
                <div className={`text-3xl font-bold ${colors.text} mb-1`}>{actualDuration}</div>
                <div className="text-sm font-medium text-gray-600">Training days</div>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className={`text-3xl font-bold ${colors.text} mb-2`}>{prog.name}</h2>
                  <p className="text-gray-600 leading-relaxed">{prog.description}</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <Target className={`w-6 h-6 ${colors.text} mr-2`} />
                  <h3 className="text-lg font-bold text-gray-900">Objectives</h3>
                </div>
                <ul className="space-y-2">
                  {prog.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <CheckCircle className={`w-4 h-4 ${colors.text} mr-2 mt-0.5 flex-shrink-0`} />
                      <span className="text-gray-700">{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-indigo-600 mr-2" />
                  <h3 className="text-lg font-bold text-gray-900">Soft Skills</h3>
                </div>
                <ul className="space-y-2">
                  {prog.softSkills.slice(0, 5).map((s, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2 mt-1.5 flex-shrink-0"></div>
                      <span className="text-gray-700">{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-pink-600 mr-2" />
                  <h3 className="text-lg font-bold text-gray-900">Hard Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {prog.hardSkills.slice(0, 7).map((s, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium bg-pink-50 text-pink-700 rounded-full border border-pink-200">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <Users className={`w-6 h-6 ${colors.text} mr-3`} />
                <h3 className="text-xl font-bold text-gray-900">Resources to mobilize</h3>
              </div>
              
              <div className="space-y-6">
                <div className="relative">
                  <div 
                    className="flex items-center mb-3"
                    onMouseEnter={() => setHoveredTooltip('experts')}
                    onMouseLeave={() => setHoveredTooltip(null)}
                  >
                    <Award className="w-5 h-5 text-blue-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">Required experts</h4>
                    <div className="ml-2 p-1 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors cursor-help">
                      <Info className="w-3.5 h-3.5 text-blue-600" />
                    </div>
                  </div>
                  
                  {hoveredTooltip === 'experts' && (
                    <div className="absolute top-0 left-0 right-0 -mt-16 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm rounded-xl py-3 px-4 z-10 shadow-xl border border-blue-400">
                      <div className="font-medium">These are the experts mobilized by the client</div>
                      <div className="absolute bottom-0 left-8 transform translate-y-1/2 rotate-45 w-3 h-3 bg-blue-600 border-r border-b border-blue-400"></div>
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    {prog.resources.experts.map((expert, i) => (
                      <div key={i} className="flex items-start p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <CheckCircle className="w-4 h-4 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-medium text-gray-900">{expert.count} × {expert.role}</div>
                          <div className="text-sm text-gray-600">{expert.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div 
                    className="flex items-center mb-3"
                    onMouseEnter={() => setHoveredTooltip('mentors')}
                    onMouseLeave={() => setHoveredTooltip(null)}
                  >
                    <UserCheck className="w-5 h-5 text-emerald-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">Mentors</h4>
                    <div className="ml-2 p-1 rounded-full bg-emerald-100 hover:bg-emerald-200 transition-colors cursor-help">
                      <Info className="w-3.5 h-3.5 text-emerald-600" />
                    </div>
                  </div>
                  
                  {hoveredTooltip === 'mentors' && (
                    <div className="absolute top-0 left-0 right-0 -mt-16 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-sm rounded-xl py-3 px-4 z-10 shadow-xl border border-emerald-400">
                      <div className="font-medium">Staff who assist and guide learners throughout the experience</div>
                      <div className="absolute bottom-0 left-8 transform translate-y-1/2 rotate-45 w-3 h-3 bg-emerald-600 border-r border-b border-emerald-400"></div>
                    </div>
                  )}
                  
                  <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">Mentors</span>
                      <span className="text-sm text-emerald-700 font-medium">{prog.resources.mentors.ratio}</span>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div 
                    className="flex items-center mb-3"
                    onMouseEnter={() => setHoveredTooltip('staff')}
                    onMouseLeave={() => setHoveredTooltip(null)}
                  >
                    <Briefcase className="w-5 h-5 text-purple-600 mr-2" />
                    <h4 className="font-semibold text-gray-900">Support staff</h4>
                    <div className="ml-2 p-1 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors cursor-help">
                      <Info className="w-3.5 h-3.5 text-purple-600" />
                    </div>
                  </div>
                  
                  {hoveredTooltip === 'staff' && (
                    <div className="absolute top-0 left-0 right-0 -mt-20 bg-gradient-to-r from-purple-600 to-purple-500 text-white text-sm rounded-xl py-3 px-4 z-10 shadow-xl border border-purple-400">
                      <div className="font-medium">Resources mobilized by 01Edu for support</div>
                      <div className="text-xs mt-1 opacity-90">(Optional - Available upon request with applicable conditions)</div>
                      <div className="absolute bottom-0 left-8 transform translate-y-1/2 rotate-45 w-3 h-3 bg-purple-600 border-r border-b border-purple-400"></div>
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    {prog.resources.staff.map((member, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-purple-50 rounded-lg border border-purple-100">
                        <span className="font-medium text-gray-900">{member.role}</span>
                        <span className="text-sm text-purple-700 font-semibold">{member.count}×</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="text-sm text-gray-700">
                    <span className="font-semibold">Total team: </span>
                    {prog.resources.experts.reduce((sum, e) => sum + e.count, 0) + 
                     prog.resources.mentors.count + 
                     prog.resources.staff.reduce((sum, s) => sum + s.count, 0)} people
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Program configuration</h3>
              
              {isNonIdealConfig() && (
                <div className="mb-6 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-amber-900 mb-1">Intensive configuration</p>
                      <p className="text-sm text-amber-800">This combination (beginner level + 3 months) requires reinforced support to ensure learner success.</p>
                    </div>
                  </div>
                </div>
              )}
              
              {activeProgram === 'java-piscine' && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Objective</label>
                    <select value={cfg.objective} onChange={(e) => updateConfig('objective', e.target.value)} className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none">
                      <option value="fullstack">Full Stack Java</option>
                      <option value="backend-dev">Specialized Backend</option>
                      <option value="microservices">Microservices Architecture</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Level</label>
                    <select value={cfg.level} onChange={(e) => updateConfig('level', e.target.value)} className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none">
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Duration</label>
                    <select value={cfg.duration} onChange={(e) => updateConfig('duration', e.target.value)} className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none">
                      <option value="5-months">5 Months</option>
                      <option value="4-months">4 Months</option>
                      <option value="3-months">3 Months</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Participants</label>
                    <input type="number" min="15" max="100" value={cfg.participants} onChange={(e) => updateConfig('participants', e.target.value)} className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
              )}
              {activeProgram === 'devops' && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Objective</label>
                    <select value={cfg.objective} onChange={(e) => updateConfig('objective', e.target.value)} className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none">
                      <option value="career-change">Career Change</option>
                      <option value="skills">Skills</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Job</label>
                    <select value={cfg.job} onChange={(e) => updateConfig('job', e.target.value)} className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none">
                      <option value="devops">DevOps</option>
                      <option value="sre">SRE</option>
                      <option value="cloud">Cloud</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Level</label>
                    <select value={cfg.level} onChange={(e) => updateConfig('level', e.target.value)} className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none">
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Duration</label>
                    <select value={cfg.duration} onChange={(e) => updateConfig('duration', e.target.value)} className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none">
                      <option value="6-months">6 Months</option>
                      <option value="4-months">4 Months</option>
                      <option value="3-months">3 Months</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Participants</label>
                    <input type="number" min="15" max="100" value={cfg.participants} onChange={(e) => updateConfig('participants', e.target.value)} className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none" />
                  </div>
                </div>
              )}
              {activeProgram === 'ai-starter' && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Duration</label>
                    <select value={cfg.duration} onChange={(e) => { updateConfig('duration', e.target.value); setSelectedModules(new Set()); }} className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none">
                      <option value="2-weeks">2 Weeks (Complete)</option>
                      <option value="1-week">1 Week (Level 1)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Participants</label>
                    <input type="number" min="15" max="100" value={cfg.participants} onChange={(e) => updateConfig('participants', e.target.value)} className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none" />
                  </div>
                </div>
              )}
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">Track modules</h3>
                <button className="text-sm font-medium text-gray-600 hover:text-gray-900" onClick={() => setSelectedModules(new Set())}>
                  Select all
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {filteredModules.map((m, i) => (
                  <div 
                    key={m.id} 
                    className={`p-5 border-2 rounded-xl cursor-pointer transition-all ${
                      isSelected(m.id) 
                        ? `${colors.border} ${colors.light} shadow-md transform scale-[1.02]` 
                        : 'border-gray-200 bg-white opacity-50 hover:opacity-70'
                    }`} 
                    onClick={() => toggleModule(m.id)}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center">
                        <span className="text-xs font-bold text-gray-400 mr-3 bg-gray-100 px-2 py-1 rounded">{String(i + 1).padStart(2, '0')}</span>
                        {isSelected(m.id) ? <CheckCircle className={`w-5 h-5 ${colors.text}`} /> : <Circle className="w-5 h-5 text-gray-300" />}
                      </div>
                      <div className="text-xs flex items-center text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        <Clock className="w-3 h-3 mr-1" />{m.duration}d
                      </div>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{m.name}</h4>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">{m.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {m.skills.map(s => (
                        <span key={s} className={`px-2.5 py-1 text-xs font-medium ${colors.light} ${colors.text} rounded-full`}>{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${colors.bg} rounded-2xl shadow-xl p-8 text-white`}>
              <div className="flex justify-between items-center">
                <div className="flex gap-8">
                  <div>
                    <div className="text-4xl font-bold mb-1">{selectedCount}</div>
                    <div className="text-sm opacity-90">Modules</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-1">{weeks}</div>
                    <div className="text-sm opacity-90">Weeks</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-1">{cfg.participants}</div>
                    <div className="text-sm opacity-90">Participants</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="bg-white text-gray-900 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Request Information
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddsOnComposer;
