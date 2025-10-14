import React, { useState } from 'react';
import { Clock, CheckCircle, Circle, Briefcase, Target, Award, Book, Users, UserCheck, AlertCircle } from 'lucide-react';

const AddsOnComposer = () => {
  const [activeProgram, setActiveProgram] = useState('java-piscine');
  const [configs, setConfigs] = useState({
    'java-piscine': { objective: 'fullstack', duration: '4-mois', level: 'debutant', participants: '15' },
    devops: { objective: 'reconversion', job: 'devops', profession: 'ingenieur-devops', duration: '6-mois', level: 'debutant', participants: '15' },
    'ai-starter': { duration: '2-semaines', participants: '15' }
  });
  const [selectedModules, setSelectedModules] = useState(new Set());

  const programs = {
    'java-piscine': {
      name: 'Parcours Java',
      color: 'blue',
      objectives: ['Développement Full Stack Java', 'Architecture microservices', 'APIs REST et Frontend'],
      softSkills: ['Pensée analytique', 'Débogage méthodique', 'Travail en équipe', 'Gestion de projet', 'Documentation technique'],
      hardSkills: ['Java SE/EE', 'Spring Boot', 'APIs REST', 'Angular', 'Bases de données', 'Maven/Gradle', 'Jenkins CI/CD', 'Docker', 'Neo4j'],
      prerequisites: [
        'Avoir écrit au moins 500 lignes de code dans n\'importe quel langage (Python, JavaScript, C, etc.)',
        'Comprendre les concepts de classe, objet, héritage et encapsulation',
        'Savoir créer des requêtes SQL de base (SELECT, INSERT, UPDATE, DELETE)'
      ],
      description: "Formation intensive en développement Full Stack Java. Parcours complet couvrant Java SE/EE, Spring Boot, APIs REST, Angular pour le frontend, bases de données, et intégration continue. Programme conçu pour former des développeurs Full Stack Java capables de concevoir et déployer des applications web complètes, du backend au frontend.",
      resources: {
        experts: [
          { role: 'Expert Java/Spring Boot', count: 1, description: 'Architecte logiciel avec 8+ ans d\'expérience' },
          { role: 'Expert Frontend Angular', count: 1, description: 'Développeur senior spécialisé en frameworks JS' }
        ],
        mentors: { count: 2, ratio: '1 mentor pour 10 apprenants' },
        staff: [
          { role: 'Coordinateur pédagogique', count: 1 },
          { role: 'Support technique', count: 1 }
        ]
      },
      modules: [
        { id: 'lets-play', name: 'Lets Play', description: 'Introduction Java et premiers projets', duration: 5, skills: ['Java', 'OOP'], type: 'base' },
        { id: 'localserver', name: 'Local Server', description: 'Serveurs locaux et communication réseau', duration: 7, skills: ['Serveur', 'HTTP'], type: 'core' },
        { id: 'angul-it', name: 'Angul-it', description: 'Intégration frontend Angular avec backend', duration: 10, skills: ['Angular', 'API'], type: 'projet' },
        { id: 'buy-01', name: 'Buy-01', description: 'Application e-commerce partie 1', duration: 8, skills: ['Spring', 'REST'], type: 'projet' },
        { id: 'mr-jenk', name: 'Mr Jenkins', description: 'CI/CD avec Jenkins et automatisation', duration: 6, skills: ['Jenkins', 'CI/CD'], type: 'core' },
        { id: 'safe-zone', name: 'Safe Zone', description: 'Sécurité et authentification', duration: 7, skills: ['Security', 'Auth'], type: 'core' },
        { id: 'buy-02', name: 'Buy-02', description: 'Application e-commerce partie 2', duration: 8, skills: ['Spring', 'DB'], type: 'projet' },
        { id: 'nexus', name: 'Nexus', description: 'Gestion dépendances et repository', duration: 5, skills: ['Nexus', 'Maven'], type: 'core' },
        { id: 'neo4flix', name: 'Neo4flix', description: 'Base de données graphe avec Neo4j', duration: 9, skills: ['Neo4j', 'Graph'], type: 'avance' },
        { id: '01blog', name: '01 Blog', description: 'Application blog complète', duration: 10, skills: ['Full Stack'], type: 'projet' },
        { id: 'travel-plan', name: 'Travel Plan', description: 'Planification de voyages', duration: 8, skills: ['Microservices'], type: 'avance' },
        { id: 'lets-travel', name: 'Lets Travel', description: 'Projet final application voyage', duration: 12, skills: ['Architecture'], type: 'projet' }
      ]
    },
    devops: {
      name: 'Parcours DevOps',
      color: 'emerald',
      objectives: ['Automatisation infrastructure', 'Pipelines CI/CD', 'Monitoring et observabilité'],
      softSkills: ['Résolution de problèmes', 'Collaboration inter-équipes', 'Communication technique', 'Gestion du changement', 'Pensée systémique'],
      hardSkills: ['Linux/Unix', 'Docker & Kubernetes', 'CI/CD (GitLab, Jenkins)', 'Infrastructure as Code (Terraform)', 'Scripting (Python, Bash)', 'Cloud (AWS, Azure, GCP)', 'Monitoring & Logging'],
      prerequisites: ['Expérience minimale en développement logiciel', 'Familiarité avec Python et shell scripting', 'Connaissances de base en systèmes d\'exploitation'],
      description: "Formation complète en ingénierie DevOps couvrant l'automatisation d'infrastructure, les pipelines CI/CD, la conteneurisation et les pratiques de monitoring. Parcours conçu pour développer les compétences techniques essentielles à l'intégration d'équipes DevOps professionnelles.",
      resources: {
        experts: [
          { role: 'Expert DevOps/SRE', count: 1, description: 'Ingénieur cloud avec expérience en production' },
          { role: 'Expert Infrastructure', count: 1, description: 'Architecte cloud certifié (AWS/Azure/GCP)' }
        ],
        mentors: { count: 2, ratio: '1 mentor pour 10 apprenants' },
        staff: [
          { role: 'Coordinateur pédagogique', count: 1 },
          { role: 'Support infrastructure', count: 1 }
        ]
      },
      modules: [
        { id: 'scripting-piscine', name: 'Scripting Piscine', description: 'Introduction intensive Unix, shell et Python', duration: 10, skills: ['Git', 'Unix', 'Python'], type: 'base' },
        { id: 'deep-in-net', name: 'Deep-in-Net', description: 'Fondamentaux réseaux et communication services', duration: 5, skills: ['Networking', 'TCP/IP'], type: 'core' },
        { id: 'deep-in-system', name: 'Deep-in-System', description: 'Administration système Linux et serveurs', duration: 10, skills: ['Linux', 'SSH'], type: 'core' },
        { id: 'crud-master', name: 'CRUD Master', description: 'Applications backend et APIs REST', duration: 13, skills: ['Backend', 'API'], type: 'projet' },
        { id: 'play-with-containers', name: 'Play with Containers', description: 'Conteneurisation avec Docker', duration: 10, skills: ['Docker'], type: 'core' },
        { id: 'orchestrator', name: 'Orchestrator', description: 'Orchestration containers avec Kubernetes', duration: 10, skills: ['Kubernetes'], type: 'core' },
        { id: 'cloud-design', name: 'Cloud Design', description: 'Architecture cloud et Infrastructure as Code', duration: 15, skills: ['Cloud', 'Terraform'], type: 'core' },
        { id: 'code-keeper', name: 'Code Keeper', description: 'Pipelines DevOps et déploiement continu', duration: 10, skills: ['CI/CD', 'GitLab'], type: 'avance' }
      ]
    },
    'ai-starter': {
      name: 'Piscine AI Starter',
      color: 'purple',
      objectives: ['Codage avec IA', 'Travail humain-IA', 'Applications web'],
      softSkills: ['Collaboration', 'Communication', 'Résolution créative de problèmes', 'Adaptabilité', 'Apprentissage autonome'],
      hardSkills: ['HTML/CSS', 'JavaScript', 'Manipulation DOM', 'Intégration API', 'Développement web', 'Utilisation outils IA'],
      prerequisites: ['Aucun prérequis technique'],
      description: "Piscine intensive d'introduction au développement web avec assistance d'intelligence artificielle. Programme peer-to-peer axé sur l'apprentissage collaboratif entre humains et IA pour développer des compétences de codage et de résolution de problèmes créative.",
      resources: {
        experts: [
          { role: 'Expert Web & IA', count: 1, description: 'Développeur web avec expertise en outils IA (Optionnel)' }
        ],
        mentors: { count: 3, ratio: '1 mentor pour 10 apprenants' },
        staff: [
          { role: 'Coordinateur pédagogique', count: 1 },
          { role: 'Facilitateur peer-learning', count: 1 }
        ]
      },
      modules: [
        { id: 'forme', name: 'Shape Crafting', duration: 1, skills: ['HTML'], type: 'base', level: 1 },
        { id: 'pouvoir', name: 'Building Power', duration: 1, skills: ['JS'], type: 'core', level: 1 },
        { id: 'mouvement', name: 'Motion Magic', duration: 1, skills: ['DOM'], type: 'core', level: 1 },
        { id: 'robots', name: 'Robots Harmony', duration: 1, skills: ['Collab'], type: 'projet', level: 1 },
        { id: 'codeurs', name: 'Coders Harmony', duration: 1, skills: ['Present'], type: 'projet', level: 1 },
        { id: 'recap', name: 'Power Recap', duration: 1, skills: ['Portfolio'], type: 'base', level: 2 },
        { id: 'build', name: 'Start Building', duration: 1, skills: ['UI'], type: 'core', level: 2 },
        { id: 'dynamic', name: 'Make It Dynamic', duration: 1, skills: ['JS DOM'], type: 'core', level: 2 },
        { id: 'gate', name: 'Gate Of Knowlegdge', duration: 1, skills: ['API'], type: 'projet', level: 2 },
        { id: 'think', name: 'Thinking wide', duration: 1, skills: ['Créatif'], type: 'projet', level: 2 }
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
      if (cfg.level === 'avance' && cfg.duration === '3-mois') mods = mods.slice(3);
      else if (cfg.level === 'intermediaire') mods = mods.slice(1);
    } else if (activeProgram === 'devops') {
      if (cfg.level === 'avance' && cfg.duration === '3-mois') mods = mods.slice(2);
      else if (cfg.level === 'intermediaire') mods = mods.slice(1);
    } else {
      mods = cfg.duration === '1-semaine' ? mods.filter(m => m.level === 1) : mods;
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
    ? (cfg.duration === '1-semaine' ? 5 : 10)
    : activeProgram === 'java-piscine'
    ? (cfg.duration === '5-mois' ? 100 : cfg.duration === '4-mois' ? 80 : 60)
    : (cfg.duration === '6-mois' ? 120 : cfg.duration === '4-mois' ? 80 : 60);

  const weeks = activeProgram === 'ai-starter' 
    ? (cfg.duration === '1-semaine' ? 1 : 2)
    : activeProgram === 'java-piscine'
    ? (cfg.duration === '5-mois' ? 20 : cfg.duration === '4-mois' ? 16 : 12)
    : (cfg.duration === '6-mois' ? 24 : cfg.duration === '4-mois' ? 16 : 12);

  // Check if configuration is not ideal
  const isNonIdealConfig = () => {
    if (activeProgram === 'java-piscine') {
      return cfg.level === 'debutant' && cfg.duration === '3-mois';
    }
    if (activeProgram === 'devops') {
      return cfg.level === 'debutant' && cfg.duration === '3-mois';
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
          <h1 className="text-5xl font-bold text-gray-900 mb-3">Compositeur de Programmes Add-ons</h1>
          <p className="text-xl text-gray-600">Expériences modulaires d'apprentissage sur mesure</p>
        </div>

        <div className="flex gap-8">
          <div className="w-72 space-y-3">
            <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <Book className="w-5 h-5 mr-2" />
                Parcours
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
                <div className="text-sm font-medium text-gray-600 mb-3">Modules sélectionnés</div>
                <div className={`text-3xl font-bold ${colors.text} mb-1`}>{actualDuration}</div>
                <div className="text-sm font-medium text-gray-600">Jours de formation</div>
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
                  <h3 className="text-lg font-bold text-gray-900">Objectifs</h3>
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
                <h3 className="text-xl font-bold text-gray-900">Ressources à mobiliser</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Award className="w-5 h-5 text-blue-600 mr-2" />
                    Experts requis
                  </h4>
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

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <UserCheck className="w-5 h-5 text-emerald-600 mr-2" />
                    Mentors
                  </h4>
                  <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">Mentors</span>
                      <span className="text-sm text-emerald-700 font-medium">{prog.resources.mentors.ratio}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Briefcase className="w-5 h-5 text-purple-600 mr-2" />
                    Personnel support
                  </h4>
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
                    <span className="font-semibold">Total équipe: </span>
                    {prog.resources.experts.reduce((sum, e) => sum + e.count, 0) + 
                     prog.resources.mentors.count + 
                     prog.resources.staff.reduce((sum, s) => sum + s.count, 0)} personnes
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Configuration du programme</h3>
              
              {isNonIdealConfig() && (
                <div className="mb-6 p-4 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-amber-900 mb-1">Configuration intensive</p>
                      <p className="text-sm text-amber-800">Cette combinaison (niveau débutant + 3 mois) nécessite un accompagnement renforcé pour garantir la réussite des apprenants.</p>
                    </div>
                  </div>
                </div>
              )}
              
              {activeProgram === 'java-piscine' && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Objectif</label>
                    <select value={cfg.objective} onChange={(e) => updateConfig('objective', e.target.value)} className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none">
                      <option value="fullstack">Full Stack Java</option>
                      <option value="backend-dev">Backend Spécialisé</option>
                      <option value="microservices">Architecture Microservices</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Niveau</label>
                    <select value={cfg.level} onChange={(e) => updateConfig('level', e.target.value)} className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none">
                      <option value="debutant">Débutant</option>
                      <option value="intermediaire">Intermédiaire</option>
                      <option value="avance">Avancé</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Durée</label>
                    <select value={cfg.duration} onChange={(e) => updateConfig('duration', e.target.value)} className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none">
                      <option value="5-mois">5 Mois</option>
                      <option value="4-mois">4 Mois</option>
                      <option value="3-mois">3 Mois</option>
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
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Objectif</label>
                    <select value={cfg.objective} onChange={(e) => updateConfig('objective', e.target.value)} className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none">
                      <option value="reconversion">Reconversion</option>
                      <option value="competences">Compétences</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Métier</label>
                    <select value={cfg.job} onChange={(e) => updateConfig('job', e.target.value)} className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none">
                      <option value="devops">DevOps</option>
                      <option value="sre">SRE</option>
                      <option value="cloud">Cloud</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Niveau</label>
                    <select value={cfg.level} onChange={(e) => updateConfig('level', e.target.value)} className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none">
                      <option value="debutant">Débutant</option>
                      <option value="intermediaire">Intermédiaire</option>
                      <option value="avance">Avancé</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Durée</label>
                    <select value={cfg.duration} onChange={(e) => updateConfig('duration', e.target.value)} className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:outline-none">
                      <option value="6-mois">6 Mois</option>
                      <option value="4-mois">4 Mois</option>
                      <option value="3-mois">3 Mois</option>
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
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Durée</label>
                    <select value={cfg.duration} onChange={(e) => { updateConfig('duration', e.target.value); setSelectedModules(new Set()); }} className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:outline-none">
                      <option value="2-semaines">2 Semaines (Complet)</option>
                      <option value="1-semaine">1 Semaine (Niveau 1)</option>
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
                <h3 className="text-xl font-bold text-gray-900">Modules du parcours</h3>
                <button className="text-sm font-medium text-gray-600 hover:text-gray-900" onClick={() => setSelectedModules(new Set())}>
                  Tout sélectionner
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
                        <Clock className="w-3 h-3 mr-1" />{m.duration}j
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
                    <div className="text-sm opacity-90">Semaines</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold mb-1">{cfg.participants}</div>
                    <div className="text-sm opacity-90">Participants</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="bg-white text-gray-900 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Demander un devis
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