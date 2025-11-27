'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ChevronDown, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ExternalLink,
  Code,
  Palette,
  Database,
  Smartphone,
  Award,
  Calendar,
  Briefcase,
  GraduationCap,
  ArrowUp,
  Globe
} from 'lucide-react';
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaPython,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaWhatsapp,
  FaAngular,
  FaWordpress,
  FaFigma
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql, 
  SiMysql,
  SiPrisma,
  SiExpress,
  SiRedis,
  SiGraphql,
  SiReactos,
  SiShopify,
  SiStorybook,
  SiVercel,
  SiNginx,
  SiAmazon,
  SiOpenai
} from 'react-icons/si';

// Animated Background Component
const AnimatedBackground = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -300]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl"
      />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
    </div>
  );
};

// Scroll to Top Button
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg transition-colors duration-300"
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// Animated Section Wrapper
const AnimatedSection = ({ children, className = "", id }: { children: React.ReactNode, className?: string, id?: string }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// LinkedIn Profile Component
const LinkedInProfile = () => {
  return (
    <div className="w-full h-80 rounded-xl overflow-hidden bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-lg border border-blue-400/20">
      <div className="w-full h-full flex flex-col items-center justify-center p-6 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-4 w-8 h-8 border border-blue-400 rounded rotate-45"></div>
          <div className="absolute top-8 right-6 w-4 h-4 bg-purple-400 rounded-full"></div>
          <div className="absolute bottom-6 left-8 w-6 h-6 border border-purple-400 rounded-full"></div>
          <div className="absolute bottom-4 right-4 w-3 h-3 bg-blue-400 rounded"></div>
        </div>
        
        {/* LinkedIn header */}
        <div className="flex items-center gap-3 mb-6 relative z-10">
          <motion.div 
            className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center shadow-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Linkedin className="text-white" size={24} />
          </motion.div>
          <div>
            <h4 className="text-white font-bold text-lg">LinkedIn</h4>
            <p className="text-blue-300 text-sm">Professional Network</p>
          </div>
        </div>
        
        {/* Profile image */}
        <motion.div 
          className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 mb-4 flex items-center justify-center overflow-hidden border-4 border-white/20 shadow-xl relative z-10"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face" 
            alt="Fernanda Bonfim"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Profile info */}
        <div className="text-center mb-4 relative z-10">
          <h3 className="text-xl font-bold text-white mb-1">Fernanda Bonfim</h3>
          <p className="text-blue-200 text-sm font-medium mb-1">Full Stack Developer</p>
          <p className="text-gray-400 text-xs">Ribeirão Preto, SP • 500+ connections</p>
        </div>
        
        {/* Action buttons */}
        <div className="flex gap-3 relative z-10">
          <a 
            href="https://br.linkedin.com/in/fernanda-bonfim-9596aa193"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-4 py-2 rounded-full text-white text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Linkedin size={14} />
            Connect
          </a>
          <a 
            href="https://br.linkedin.com/in/fernanda-bonfim-9596aa193"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-blue-400 hover:bg-blue-400/20 px-4 py-2 rounded-full text-blue-200 text-sm font-medium transition-all duration-300"
          >
            View Profile
          </a>
        </div>
        
        {/* Status indicator */}
        <div className="mt-3 flex items-center gap-2 text-xs text-green-400 relative z-10">
          <motion.div 
            className="w-2 h-2 bg-green-400 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          Available for opportunities
        </div>
      </div>
    </div>
  );
};

// GitHub Profile Component
const GitHubProfile = () => {
  return (
    <div className="w-full h-80 rounded-xl overflow-hidden bg-gradient-to-br from-gray-800/50 to-purple-600/10 backdrop-blur-lg border border-gray-400/20">
      <div className="w-full h-full flex flex-col items-center justify-center p-6 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 w-6 h-6 border border-gray-400 rounded"></div>
          <div className="absolute top-8 left-6 w-4 h-4 bg-purple-400 rounded-full"></div>
          <div className="absolute bottom-6 right-8 w-8 h-8 border border-purple-400 rounded-full"></div>
          <div className="absolute bottom-4 left-4 w-3 h-3 bg-gray-400 rounded rotate-45"></div>
        </div>
        
        {/* GitHub header */}
        <div className="flex items-center gap-3 mb-6 relative z-10">
          <motion.div 
            className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center shadow-lg"
            whileHover={{ scale: 1.1, rotate: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Github className="text-white" size={24} />
          </motion.div>
          <div>
            <h4 className="text-white font-bold text-lg">GitHub</h4>
            <p className="text-gray-300 text-sm">Developer Platform</p>
          </div>
        </div>
        
        {/* Profile image */}
        <motion.div 
          className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-400 to-purple-500 mb-4 flex items-center justify-center overflow-hidden border-4 border-white/20 shadow-xl relative z-10"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face" 
            alt="Fernanda Bonfim"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Profile info */}
        <div className="text-center mb-4 relative z-10">
          <h3 className="text-xl font-bold text-white mb-1">fernandabonfimm</h3>
          <p className="text-gray-200 text-sm font-medium mb-1">Full Stack Developer</p>
          <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
            <span>📍 Ribeirão Preto, SP</span>
            <span>⭐ 50+ repos</span>
          </div>
        </div>
        
        {/* Stats */}
        <div className="flex gap-4 mb-4 relative z-10">
          <div className="text-center">
            <div className="text-lg font-bold text-white">25+</div>
            <div className="text-xs text-gray-400">Repositories</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-white">100+</div>
            <div className="text-xs text-gray-400">Commits</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-white">10+</div>
            <div className="text-xs text-gray-400">Projects</div>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex gap-3 relative z-10">
          <a 
            href="https://github.com/fernandabonfimm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 px-4 py-2 rounded-full text-white text-sm font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Github size={14} />
            Follow
          </a>
          <a 
            href="https://github.com/fernandabonfimm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-gray-400 hover:bg-gray-400/20 px-4 py-2 rounded-full text-gray-200 text-sm font-medium transition-all duration-300"
          >
            View Code
          </a>
        </div>
        
        {/* Status indicator */}
        <div className="mt-3 flex items-center gap-2 text-xs text-green-400 relative z-10">
          <motion.div 
            className="w-2 h-2 bg-green-400 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
          Active developer
        </div>
      </div>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showPreview, setShowPreview] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
          <div className="flex items-center gap-2 text-sm">
            <span className="text-purple-300 font-medium">{project.type}</span>
            <span className="text-gray-400">•</span>
            <span className="text-gray-400">{project.period}</span>
            {project.location && (
              <>
                <span className="text-gray-400">•</span>
                <span className="text-blue-300">{project.location}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Project Image/Preview */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        {showPreview && project.demo && project.demo !== '#' ? (
          <div className="w-full h-48 bg-gray-900/50 rounded-lg overflow-hidden border border-purple-400/20 relative">
            {/* Fallback para sites que não permitem iframe */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center z-10">
              <div className="text-center p-4">
                <Globe className="text-purple-400 mx-auto mb-2" size={32} />
                <p className="text-white text-sm font-medium mb-1">Preview do Site</p>
                <p className="text-gray-300 text-xs">Clique em "Ver Site" para abrir</p>
              </div>
            </div>
            <iframe
              src={project.demo}
              className="w-full h-full scale-90 origin-center opacity-30"
              title={`Preview - ${project.title}`}
              frameBorder="0"
              sandbox="allow-scripts allow-same-origin allow-popups"
              loading="lazy"
              style={{ 
                width: '111.11%', 
                height: '111.11%',
                transform: 'scale(0.9) translateX(-5.56%) translateY(-5.56%)'
              }}
              onLoad={() => {
                // Preview carregado com sucesso
                console.log(`Site preview carregado: ${project.title}`);
              }}
            />
          </div>
        ) : (
          <div className="relative">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {/* Website Screenshot Overlay */}
            {project.demo && project.demo !== '#' && (
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="text-white mx-auto mb-2" size={28} />
                  <p className="text-white text-sm font-medium">Ver Site Online</p>
                </div>
              </div>
            )}
          </div>
        )}
        <motion.div 
          className="absolute inset-0 bg-purple-600/20 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered && !showPreview ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {project.demo && project.demo !== '#' ? (
            <Globe className="text-white" size={24} />
          ) : (
            <ExternalLink className="text-white" size={24} />
          )}
        </motion.div>
      </div>
      
      <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
      
      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech: string, techIndex: number) => (
          <span 
            key={techIndex}
            className="px-3 py-1 bg-purple-500/30 text-purple-200 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      
      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2">
        {project.demo && project.demo !== '#' && (
          <a 
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105"
          >
            <ExternalLink size={14} />
            <span>Ver Site</span>
          </a>
        )}
        
        {project.demo && project.demo !== '#' && (
          <button 
            onClick={() => setShowPreview(!showPreview)}
            className="flex items-center gap-2 border border-purple-400 hover:bg-purple-400/20 px-4 py-2 rounded-full text-purple-200 text-sm font-medium transition-all duration-300"
          >
            <Globe size={14} />
            <span>{showPreview ? 'Ocultar' : 'Preview'}</span>
          </button>
        )}

        {project.playStore && (
          <a 
            href={project.playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
          >
            <Smartphone size={14} />
            <span>Play Store</span>
          </a>
        )}

        {project.additionalLink && project.additionalLink !== '#' && (
          <a 
            href={project.additionalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-gray-400 hover:bg-gray-400/20 px-4 py-2 rounded-full text-gray-200 text-sm font-medium transition-all duration-300"
          >
            <ExternalLink size={14} />
            <span>{project.additionalLinkText || t.viewMore}</span>
          </a>
        )}

        {project.github && (
          <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors px-3 py-2"
          >
            <Github size={16} />
            <span>{t.code}</span>
          </a>
        )}
      </div>
    </motion.div>
  );
};

// Translations
const translations = {
  pt: {
    fullStackDeveloper: "Desenvolvedora Full Stack especializada em criar experiências digitais incríveis",
    viewProjects: "Ver Projetos",
    contact: "Entre em Contato",
    aboutMe: "Sobre Mim",
    projects: "Projetos Desenvolvidos",
    awards: "Prêmios e Reconhecimentos",
    experience: "Experiência Profissional",
    education: "Formação Acadêmica",
    services: "Serviços",
    allRightsReserved: "Todos os direitos reservados",
    aboutDescription1: "Desenvolvedora e Especialista de Software com mais de 4 anos de experiência e bacharelado em Ciência da Computação. Natural do interior de São Paulo, sou especialista em JavaScript, com expertise em .NET, React, Next.js, React Native, Node.js, TypeScript e plataformas no-code como WordPress e Shopify.",
    aboutDescription2: "Possuo sólida experiência no desenvolvimento de APIs REST, integração com serviços externos, incluindo gateways de pagamento e sistemas de chat, além da utilização da API do GPT para soluções com LLMs e inteligência artificial. Atualmente, atuo em um sistema legado com arquitetura monolítica distribuída entre lojas.",
    aboutDescription3: "Tenho habilidades no desenvolvimento de bancos de dados relacionais e não relacionais, criação de sites responsivos, design de UI/UX e prototipagem com Figma. Com experiência em liderar projetos freelancer desde o planejamento até a entrega, sou completamente apaixonada por ensinar e aprender continuamente sobre tecnologia.",
    webDevelopment: "Desenvolvimento Web",
    mobileApps: "Aplicações Mobile",
    technicalConsulting: "Consultoria Técnica",
    uiUxDesign: "UI/UX Design",
    technologies: "Tecnologias",
    skillsTitle: "Minhas Especialidades",
    hardSkills: "Hard Skills Avançadas",
    additionalSkills: "Skills Adicionais",
    frontend: "Frontend",
    backendCloud: "Backend & Cloud",
    toolsPlatforms: "Tools & Platforms",
    contactInfo: "Informações de Contato",
    availableFreelance: "Disponível para Freelances",
    remoteWork: "Trabalho remoto para o mundo todo",
    internationalWork: "Trabalho Remoto Internacional",
    globalExperience: "Experiência com clientes globais • Disponível para oportunidades no exterior",
    portfolioSelected: "Portfólio selecionado - Conheça alguns dos meus principais projetos freelance",
    featuredProjects: "Projetos em Destaque",
    of25Delivered: "De 50+ Entregues",
    yearsExperience: "Anos de Experiência",
    onTimeProjects: "Projetos no Prazo",
    countriesServed: "Países Atendidos",
    experienceSummary: "Resumo da Experiência",
    companiesWorked: "Empresas Trabalhadas",
    storesImpacted: "Lojas Impactadas",
    sinceFirstJob: "Desde primeiro emprego T.I",
    startupsToMultinationals: "Startups a Multinacionais",
    mcdonaldsLatam: "McDonald's LATAM",
    mainAchievements: "Principais Conquistas",
    workTogether: "Vamos Trabalhar Juntos?",
    workTogetherDesc: "Estou disponível para projetos freelance e oportunidades remotas. Entre em contato para discutirmos seu próximo projeto!",
    sendEmail: "Enviar Email",
    // Navigation
    about: "Sobre",
    // Additional
    viewMore: "Ver Mais",
    code: "Código"
  },
  en: {
    fullStackDeveloper: "Full Stack Developer specialized in creating incredible digital experiences",
    viewProjects: "View Projects",
    contact: "Get in Touch",
    aboutMe: "About Me",
    projects: "Developed Projects",
    awards: "Awards and Recognition",
    experience: "Professional Experience",
    education: "Academic Background",
    services: "Services",
    allRightsReserved: "All rights reserved",
    aboutDescription1: "Software Developer and Specialist with over 4 years of experience and a bachelor's degree in Computer Science. Born in the interior of São Paulo, I specialize in JavaScript, with expertise in .NET, React, Next.js, React Native, Node.js, TypeScript, and no-code platforms like WordPress and Shopify.",
    aboutDescription2: "I have solid experience in REST API development, integration with external services, including payment gateways and chat systems, plus GPT API utilization for LLM solutions and artificial intelligence. Currently working on a legacy system with monolithic architecture distributed across stores.",
    aboutDescription3: "I have skills in relational and non-relational database development, responsive website creation, UI/UX design, and prototyping with Figma. With experience leading freelance projects from planning to delivery, I am completely passionate about teaching and continuously learning about technology.",
    webDevelopment: "Web Development",
    mobileApps: "Mobile Applications",
    technicalConsulting: "Technical Consulting",
    uiUxDesign: "UI/UX Design",
    technologies: "Technologies",
    skillsTitle: "My Specialties",
    hardSkills: "Advanced Hard Skills",
    additionalSkills: "Additional Skills", 
    frontend: "Frontend",
    backendCloud: "Backend & Cloud",
    toolsPlatforms: "Tools & Platforms",
    contactInfo: "Contact Information",
    availableFreelance: "Available for Freelance",
    remoteWork: "Remote work worldwide",
    internationalWork: "International Remote Work",
    globalExperience: "Experience with global clients • Available for international opportunities",
    portfolioSelected: "Selected Portfolio - Discover some of my main freelance projects",
    featuredProjects: "Featured Projects",
    of25Delivered: "From 50+ Delivered",
    yearsExperience: "Years of Experience",
    onTimeProjects: "On-Time Projects",
    countriesServed: "Countries Served",
    experienceSummary: "Experience Summary",
    companiesWorked: "Companies Worked",
    storesImpacted: "Stores Impacted",
    sinceFirstJob: "Since first IT job",
    startupsToMultinationals: "Startups to Multinationals",
    mcdonaldsLatam: "McDonald's LATAM",
    mainAchievements: "Main Achievements",
    workTogether: "Let's Work Together?",
    workTogetherDesc: "I'm available for freelance projects and remote opportunities. Get in touch to discuss your next project!",
    sendEmail: "Send Email",
    // Navigation 
    about: "About",
    // Additional
    viewMore: "View More",
    code: "Code"
  }
};

// Language Switcher Component
interface LanguageSwitcherProps {
  currentLang?: string;
  setCurrentLang?: (lang: string) => void;
}

const LanguageSwitcher = ({ currentLang, setCurrentLang }: LanguageSwitcherProps) => {
  const [localLang, setLocalLang] = useState('pt');
  const lang = currentLang || localLang;
  const setLang = setCurrentLang || setLocalLang;

  const switchLanguage = (newLang: string) => {
    setLang(newLang);
    // Implementar lógica de troca de idioma com o middleware
    window.localStorage.setItem('preferredLanguage', newLang);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => switchLanguage('pt')}
        className={`p-2 rounded-full transition-all duration-300 ${
          lang === 'pt' 
            ? 'bg-purple-500/30 border-2 border-purple-400' 
            : 'hover:bg-white/10'
        }`}
        title="Português"
      >
        <div className="w-6 h-6 rounded-full overflow-hidden">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#009B3A"/>
            <path d="M2 12L12 7L22 12L12 17L2 12Z" fill="#FEDF00"/>
            <circle cx="12" cy="12" r="3" fill="#002776"/>
            <path d="M8 10C8 10 10 8 12 8C14 8 16 10 16 10" stroke="white" strokeWidth="0.5" fill="none"/>
          </svg>
        </div>
      </button>
      <button
        onClick={() => switchLanguage('en')}
        className={`p-2 rounded-full transition-all duration-300 ${
          lang === 'en' 
            ? 'bg-purple-500/30 border-2 border-purple-400' 
            : 'hover:bg-white/10'
        }`}
        title="English"
      >
        <div className="w-6 h-6 rounded-full overflow-hidden">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#012169"/>
            <path d="M0 0L24 24M24 0L0 24" stroke="white" strokeWidth="2.5"/>
            <path d="M0 0L24 24M24 0L0 24" stroke="#C8102E" strokeWidth="1.5"/>
            <path d="M0 12L24 12M12 0L12 24" stroke="white" strokeWidth="4"/>
            <path d="M0 12L24 12M12 0L12 24" stroke="#C8102E" strokeWidth="2.5"/>
          </svg>
        </div>
      </button>
    </div>
  );
};

// Fixed Navigation Component
const FixedNavigation = ({ currentLang, setCurrentLang }: { currentLang: string, setCurrentLang: (lang: string) => void }) => {
  const [isVisible, setIsVisible] = useState(false);
  const t = translations[currentLang as keyof typeof translations];

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10"
        >
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Fernanda Bonfim
              </h3>
              
              <div className="flex items-center gap-6">
                <div className="hidden md:flex gap-6">
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    {t.about}
                  </button>
                  <button 
                    onClick={() => scrollToSection('projects')}
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    {t.projects}
                  </button>
                  <button 
                    onClick={() => scrollToSection('experience')}
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    {t.experience}
                  </button>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-300 hover:text-purple-400 transition-colors"
                  >
                    {t.contact}
                  </button>
                </div>
                <LanguageSwitcher currentLang={currentLang} setCurrentLang={setCurrentLang} />
              </div>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default function HomePage() {
  const [currentLang, setCurrentLang] = useState('en');
  const t = translations[currentLang as keyof typeof translations];

  // Seção de tecnologias com ícones
  const technologies = [
    { name: 'React', icon: <FaReact className="text-blue-400" size={24} /> },
    { name: 'Angular', icon: <FaAngular className="text-red-500" size={24} /> },
    { name: 'React Native', icon: <SiReactos className="text-blue-300" size={24} /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-white" size={24} /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" size={24} /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" size={24} /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" size={24} /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" size={24} /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" size={24} /> },
    { name: 'Tailwind', icon: <SiTailwindcss className="text-teal-400" size={24} /> },
    { name: 'WordPress', icon: <FaWordpress className="text-blue-600" size={24} /> },
    { name: 'Shopify', icon: <SiShopify className="text-green-600" size={24} /> },
    { name: 'Figma', icon: <FaFigma className="text-purple-500" size={24} /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-500" size={24} /> },
    { name: 'SQL', icon: <SiMysql className="text-orange-600" size={24} /> },
    { name: 'Storybook', icon: <SiStorybook className="text-pink-500" size={24} /> },
    { name: 'AWS S3', icon: <SiAmazon className="text-orange-400" size={24} /> },
    { name: 'Vercel', icon: <SiVercel className="text-white" size={24} /> },
    { name: 'Nginx', icon: <SiNginx className="text-green-500" size={24} /> },
    { name: 'AI/LLM', icon: <SiOpenai className="text-emerald-400" size={24} /> },
  ];

  // Hard Skills Avançadas
  const advancedSkills = {
    frontend: [
      { name: 'React.js', level: 95 },
      { name: 'Angular', level: 85 },
      { name: 'React Native', level: 90 },
      { name: 'Next.js', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'HTML5', level: 98 },
      { name: 'CSS3', level: 95 }
    ],
    backend: [
      { name: 'Node.js', level: 92 },
      { name: 'JavaScript', level: 95 },
      { name: 'MongoDB', level: 88 },
      { name: 'SQL', level: 85 },
      { name: 'AWS S3', level: 80 },
      { name: 'AWS SES', level: 75 },
      { name: 'AWS EC2', level: 78 },
      { name: 'Nginx', level: 70 }
    ],
    tools: [
      { name: 'WordPress', level: 85 },
      { name: 'Shopify', level: 80 },
      { name: 'Figma UI/UX', level: 88 },
      { name: 'Storybook', level: 82 },
      { name: 'Vercel', level: 90 },
      { name: 'LLM Training', level: 75 }
    ]
  };

  // Skills Adicionais
  const additionalSkills = [
    'Documentação Técnica',
    'Pensamento Analítico', 
    'Solução de Problemas',
    'Colaboração entre Equipes',
    'Automação de Testes',
    'Metodologias Ágeis'
  ];

  // Projetos Freelance Reais 2022-2025
  const projects = [
    // {
    //   title: "Clica Cidadão",
    //   description: "Aplicativo React Native para comunicação municipal em pré-lançamento no Google Play. Inclui painel administrativo completo com React, Node.js e MongoDB.",
    //   image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
    //   technologies: ["React Native", "JavaScript", "React", "Node.js", "MongoDB"],
    //   demo: "https://clicacidadao.com.br",
    //   playStore: "https://play.google.com/store/apps/details?id=com.clicacidadao.clickapp",
    //   period: "2022-2024",
    //   type: "App Mobile + Admin Panel"
    // },
    {
      title: "Qrious Eye Studio Canada",
      description: "Site WordPress para designer têxtil canadense com portfolio profissional, estratégias de lead generation e otimização SEO para estúdio B2B.",
      image: "https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=400&h=300&fit=crop",
      technologies: ["WordPress", "SEO", "Lead Generation", "B2B Strategy"],
      demo: "https://qriouseyestudio.com",
      period: "2023",
      type: "Business Website"
    },
    {
      title: "Andrea Vitaliano - Elas em Cena",
      description: "Sites WordPress e automação de marketing para eventos e mentorias. Projeto Elas em Cena para mulheres empreendedoras e mentorias corporativas em saúde mental.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
      technologies: ["WordPress", "Marketing Automation", "Event Management"],
      demo: "https://andreavitaliano.com.br",
      additionalLink: "#",
      additionalLinkText: "Elas em Cena",
      period: "2023-2024",
      type: "Events & Mentorship"
    },
    {
      title: "Fernanda Araújo - Motokando a Dois",
      description: "Landing pages e funis de marketing WordPress para estrategista de mídias sociais. Promoção de serviços online, livro físico e e-book de viagens.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      technologies: ["WordPress", "Digital Marketing", "Sales Funnel", "E-commerce"],
      demo: "https://fernomarketing.com.br",
      additionalLink: "https://motokandoadois.com.br",
      additionalLinkText: "Motokando a Dois",
      period: "2024",
      type: "Marketing & E-commerce"
    },
    {
      title: "Trixx Fábrica de Software - Portugal",
      description: "Desenvolvimento front-end do MVP 'Estude em Portugal' com TypeScript e Next.js. Novas funcionalidades e correções em apps mobile React Native.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop",
      technologies: ["TypeScript", "Next.js", "React Native", "JavaScript"],
      demo: "#",
      period: "2024",
      type: "Software Factory",
      location: "Portugal"
    },
    {
      title: "G-Motors - Concessionária de Luxo",
      description: "Site completo para concessionária de veículos de luxo via Agência UAMA. Da coleta de requisitos ao protótipo Figma e desenvolvimento WordPress com hospedagem HostGator.",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=300&fit=crop",
      technologies: ["WordPress", "Figma", "HostGator", "Luxury Design"],
      demo: "#",
      period: "2023",
      type: "Automotive Website"
    },
    {
      title: "Jota IT - Cybersegurança",
      description: "Website para empresa de cybersegurança desenvolvido em WordPress com foco em serviços de segurança digital e consultoria especializada.",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop",
      technologies: ["WordPress", "Cybersecurity", "Corporate Design"],
      demo: "https://jotait.com.br",
      period: "Agosto 2025",
      type: "Cybersecurity Website"
    },
    {
      title: "Portfolio - Monitoramento e Automação",
      description: "Frontend para startup de São Paulo especializada em monitoria e automação de riscos para empresas como bancos. Desenvolvido com Next.js, CSS e HTML.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      technologies: ["Next.js", "CSS", "HTML", "Risk Management", "Banking"],
      demo: "https://Portfolio-frontend.vercel.app",
      period: "Novembro 2025",
      type: "Risk Management Platform"
    },
    {
      title: "Balões Pic Pic - E-commerce",
      description: "Site vitrine completa para loja de balões e decorações. Desenvolvido com PHP, HTML e MySQL. Inclui painel administrativo MVC em PHP com framework e hospedagem cPanel.",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=300&fit=crop",
      technologies: ["PHP", "HTML", "MySQL", "MVC Framework", "cPanel"],
      demo: "https://baloespicpic.com.br",
      additionalLink: "https://baloespicpic.com.br/lp",
      additionalLinkText: "Landing Page",
      period: "2024-2025",
      type: "E-commerce + Admin Panel"
    }
  ];

  const awards = [
    {
      title: "TechRenova - Logística de Reciclagem",
      organization: "2º Hack Barão",
      year: "2023",
      description: "3º Lugar - Aplicativo para otimizar logística de reciclagem conectando cidadãos, coletores e empresas de reciclagem",
      link: "https://www3.baraodemaua.br/eventos/hack-barao-2023-maratona-de-inovacao-e-criatividade",
      position: "3º Lugar",
      project: "TechRenova"
    },
    {
      title: "Melff - Mobilidade Urbana e Segurança",
      organization: "1º Hack Barão",
      year: "2022", 
      description: "1º Lugar - Liderança do projeto vencedor focado em melhorar segurança e iluminação em ruas mal iluminadas",
      link: "https://jornalismo.baraodemaua.br/1o-hack-barao-premia-propostas-de-mobilidade-urbana-e-seguranca",
      position: "1º Lugar",
      project: "Melff"
    }
  ];

  const experiences = [
    {
      role: "Desenvolvedora Fullstack Pleno",
      company: "Gelato Borelli",
      period: "Julho 2025 - Presente",
      description: "Desenvolvedora na franqueadora Gelato Borelli, atuando na entrega de soluções inovadoras para mais de 200 lojas franqueadas no Brasil. Desenvolvimento de APIs em PHP (MVC) com banco de dados Firebird, projetos front-end com React Native e Next.js, incluindo sistema de gestão de filas.",
      highlights: ["200+ lojas franqueadas", "PHP MVC + Firebird", "React Native + Next.js", "Gestão de filas"],
      type: "Fullstack"
    },
    {
      role: "Desenvolvedora de Software",
      company: "RDI Software part of Capgemini",
      period: "Março 2024 - Julho 2025",
      description: "Atuação como desenvolvedora C# e JavaScript em sistema distribuído legado de POS utilizado pela rede global de fast food McDonald's. Integrante do time LATAM, responsável pelo desenvolvimento, manutenção, sustentação de bugs e entrega semanal de bundles para mais de 2.200 lojas na América Latina.",
      highlights: ["2.200+ lojas McDonald's LATAM", "Sustentação de bugs críticos", "C# + JavaScript ECMA3", "Sprints semanais"],
      type: "Enterprise Software"
    },
    {
      role: "Desenvolvedora de Software Fullstack",
      company: "Lastlink",
      period: "Novembro 2023 - Março 2024",
      description: "Contribuição para o desenvolvimento de novo painel para criadores de conteúdo com recursos de relatórios de vendas. Backend com C#, .NET, Entity Framework, MySQL e microsserviços. Frontend com Angular, React.js, HTML, SCSS, TailwindCSS. Mensageria com RabbitMQ para chat e pagamentos.",
      highlights: ["Painel para creators", "Microsserviços + RabbitMQ", "Angular + React", "MySQL + .NET"],
      type: "Startup",
      link: "https://blog.lastlink.com/nova-dashboard-lastlink/",
      linkText: "Ver Dashboard"
    },
    {
      role: "Desenvolvedora Web e Web Design",
      company: "Digito Agência",
      period: "Fevereiro 2023 - Dezembro 2023",
      description: "Desenvolvimento completo de sites e colaboração com clientes. Liderança em levantamento de requisitos, prototipagem Figma, implantação WordPress/Shopify, automação de marketing. Implementação de lead generation, e-mail marketing e automação WhatsApp com GPT-3.5/4.0.",
      highlights: ["WordPress + Shopify", "Automação GPT", "Lead Generation", "Múltiplos setores"],
      type: "Web Agency"
    },
    {
      role: "Desenvolvedora de Software Fullstack",
      company: "Evermart",
      period: "Junho 2022 - Maio 2023",
      description: "Desenvolvedora fullstack na startup Creator Economy Evermart. Implementação e lançamento de novo aplicativo React Native para criadores de conteúdo e afiliados, substituindo sistema anterior. Melhorias na plataforma web React e backend Node.js, NestJS, MongoDB com integração Pagar.me.",
      highlights: ["React Native App", "Creator Economy", "Node.js + NestJS", "Integração Pagar.me"],
      type: "Startup"
    },
    {
      role: "Desenvolvedora Front-end",
      company: "Fairy Solutions",
      period: "Dezembro 2021 - Junho 2022",
      description: "Desenvolvedora front-end na Fábrica de Software Fairy Code, desenvolvendo aplicações para diversos clientes com JavaScript, React, TypeScript e Next.js. Destaque para soluções no setor de aviação e plataforma para médicos oncologistas para diagnóstico e tratamento de pacientes.",
      highlights: ["Setor aviação", "Plataforma médica", "React + TypeScript", "Next.js"],
      type: "Software Factory"
    },
    {
      role: "Analista de Redes",
      company: "Multifrio Refrigeração",
      period: "Junho 2021 - Dezembro 2021",
      description: "Primeiro emprego na área de T.I. Responsável pela infraestrutura de T.I da empresa de refrigeração em Ribeirão Preto. Formatação de máquinas, configuração de impressoras, suporte à conectividade com internet e suporte técnico no sistema ERP Protheus.",
      highlights: ["Primeiro emprego T.I", "Infraestrutura completa", "ERP Protheus", "Suporte técnico"],
      type: "IT Support"
    }
  ];

  const education = [
    {
      degree: "Bacharel em Ciência da Computação",
      institution: "Centro Universitário Barão de Mauá",
      period: "2021 - 2024",
      description: "Bacharel em Ciência da Computação pelo Centro Universitário Barão de Mauá (nota MEC: 5/5). Focado em desenvolvimento de ferramentas, transferência de tecnologia e resolução de problemas computacionais interdisciplinares.",
      link: "https://baraodemaua.br",
      linkText: "Ver Instituição"
    },
    {
      degree: "Programa de Iniciação Científica",
      institution: "Centro Universitário Barão de Mauá",
      period: "2023 - 2024",
      description: "Projeto de pesquisa científica com foco na redução do uso de animais vivos em experimentos. Desenvolvi API RESTful com Node.js, Express e MongoDB (MVC) e frontend com React, JavaScript, Ant Design e Axios.",
      link: "https://github.com/fernandabonfimm/QuimeraProject",
      linkText: "Ver Projeto",
      additionalLink: "https://github.com/fernandabonfimm/QuimeraProject/blob/main/scientificArticleQuimera_Fernanda.pdf",
      additionalLinkText: "Artigo Científico"
    },
    {
      degree: "Agência Filamento Website",
      institution: "Centro Universitário Barão de Mauá",
      period: "2024 - 2025",
      description: "Liderança e desenvolvimento do site WordPress da Filamento (agência sem fins lucrativos). Entrega completa em 3 dias com blog, eventos e projetos. Hospedado no Azure com Elementor e protótipo Figma validado. Atualmente ministrando aulas semanais sobre manutenção do projeto.",
      link: "https://filamento.baraodemaua.br",
      linkText: "Ver Site",
    },
    {
      degree: "Mentoria e Ensino de Desenvolvimento",
      institution: "Workshops e Semanas Integradas",
      period: "2022 - 2023",
      description: "Ministrei workshops de programação no-code, fundamentos de carreiras em tecnologia, lógica de programação com Scratch, APIs REST e bancos NoSQL. Orientação prática em MongoDB Atlas, JavaScript e Express para construção de APIs.",
      link: "",
      linkText: ""
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
      <FixedNavigation currentLang={currentLang} setCurrentLang={setCurrentLang} />
      <AnimatedBackground />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-4">
        <div className="text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x bg-300% relative"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="relative inline-block">
                Fernanda Bonfim
                <motion.div 
                  className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-20"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </span>
            </motion.h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {t.fullStackDeveloper}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full border border-white/20">
              <Code className="text-purple-400" size={20} />
              <span>Full Stack</span>
            </span>
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full border border-white/20">
              <Palette className="text-blue-400" size={20} />
              <span>UI/UX</span>
            </span>
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full border border-white/20">
              <Database className="text-purple-400" size={20} />
              <span>Backend</span>
            </span>
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full border border-white/20">
              <Smartphone className="text-blue-400" size={20} />
              <span>Mobile</span>
            </span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4 justify-center mb-8"
          >
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              {t.viewProjects}
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-white/30 hover:border-purple-400 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-white/10"
            >
              {t.contact}
            </button>
          </motion.div>
          
          {/* Call to Action para Contato */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-400/20"
          >
            <div className="text-center sm:text-left">
              <div className="flex items-center gap-2 mb-1">
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ExternalLink className="text-purple-400" size={20} />
                </motion.div>
                <p className="text-lg font-semibold text-white">
                  {t.availableFreelance}
                </p>
              </div>
              <p className="text-gray-300 text-sm">
                {t.remoteWork}
              </p>
            </div>
            <div className="flex gap-3">
              <a 
                href="https://github.com/fernandabonfimm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <Github size={16} />
                GitHub
              </a>
              <a 
                href="https://br.linkedin.com/in/fernanda-bonfim-9596aa193" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="text-white/60" size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <AnimatedSection id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              opacity: { duration: 0.6 },
              y: { duration: 0.6 },
              backgroundPosition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <span className="relative">
              {t.aboutMe}
              <motion.div 
                className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: 80 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              />
            </span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <motion.p 
                className="text-lg text-gray-300 leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                {t.aboutDescription1}
              </motion.p>
              <motion.p 
                className="text-lg text-gray-300 leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                {t.aboutDescription2}
              </motion.p>
              <motion.p 
                className="text-lg text-gray-300 leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                {t.aboutDescription3}
              </motion.p>
              
              {/* Destaque para disponibilidade internacional */}
              <motion.div 
                className="mt-6 p-4 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-xl border border-emerald-400/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Globe className="text-emerald-400" size={20} />
                  <p className="text-emerald-300 font-medium">
                    {t.internationalWork}
                  </p>
                </div>
                <p className="text-gray-300 text-sm">
                  {t.globalExperience}
                </p>
              </motion.div>

              {/* Informações da Empresa */}
              <motion.div 
                className="mt-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-400/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase className="text-purple-400" size={20} />
                  <p className="text-purple-300 font-medium">
                    FBS Tecnologia
                  </p>
                </div>
                <p className="text-gray-300 text-sm mb-2">
                  CNPJ: 61.171.635/0001-46 • Empresa de desenvolvimento de software
                </p>
                <div className="flex items-center gap-2">
                  <Code className="text-purple-400" size={18} />
                  <p className="text-gray-300 text-sm">
                    Empreendendo na área com consultoria e desenvolvimento de sites e aplicativos desde 2022
                  </p>
                </div>
              </motion.div>
              
              {/* Seção de Tecnologias */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-white mb-4">{t.technologies}</h3>
                <div className="grid grid-cols-4 md:grid-cols-5 gap-4">
                  {technologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex flex-col items-center gap-2 p-3 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 hover:border-purple-400/50 transition-all duration-300 group"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <span className="text-xs text-gray-300 text-center">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Hard Skills Avançadas */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-white mb-6">{t.hardSkills}</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Frontend Skills */}
                  <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-lg p-5 rounded-xl border border-blue-400/20">
                    <h4 className="text-lg font-semibold text-blue-400 mb-4 flex items-center gap-2">
                      <Code size={20} />
                      {t.frontend}
                    </h4>
                    <div className="space-y-3">
                      {advancedSkills.frontend.map((skill, index) => (
                        <div key={skill.name} className="relative">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-white font-medium">{skill.name}</span>
                            <span className="text-xs text-blue-300">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-700/50 rounded-full h-2">
                            <motion.div
                              className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ delay: index * 0.1, duration: 0.8 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Backend Skills */}
                  <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-lg p-5 rounded-xl border border-green-400/20">
                    <h4 className="text-lg font-semibold text-green-400 mb-4 flex items-center gap-2">
                      <Database size={20} />
                      {t.backendCloud}
                    </h4>
                    <div className="space-y-3">
                      {advancedSkills.backend.map((skill, index) => (
                        <div key={skill.name} className="relative">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-white font-medium">{skill.name}</span>
                            <span className="text-xs text-green-300">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-700/50 rounded-full h-2">
                            <motion.div
                              className="h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools & Platforms */}
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-lg p-5 rounded-xl border border-purple-400/20">
                    <h4 className="text-lg font-semibold text-purple-400 mb-4 flex items-center gap-2">
                      <Palette size={20} />
                      {t.toolsPlatforms}
                    </h4>
                    <div className="space-y-3">
                      {advancedSkills.tools.map((skill, index) => (
                        <div key={skill.name} className="relative">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-white font-medium">{skill.name}</span>
                            <span className="text-xs text-purple-300">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-gray-700/50 rounded-full h-2">
                            <motion.div
                              className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ delay: index * 0.1 + 0.6, duration: 0.8 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Skills Adicionais */}
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-white mb-4">{t.additionalSkills}</h4>
                  <div className="flex flex-wrap gap-3">
                    {additionalSkills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="px-4 py-2 bg-gradient-to-r from-gray-700/50 to-gray-600/50 backdrop-blur-lg border border-gray-500/30 rounded-full text-sm font-medium text-gray-200 hover:border-purple-400/50 hover:text-purple-300 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-white/10 backdrop-blur-lg p-4 rounded-lg border border-white/20">
                  <h4 className="font-semibold text-purple-400 mb-2">Frontend</h4>
                  <p className="text-sm text-gray-300">React, Next.js, TypeScript, Tailwind CSS</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg p-4 rounded-lg border border-white/20">
                  <h4 className="font-semibold text-blue-400 mb-2">Backend</h4>
                  <p className="text-sm text-gray-300">Node.js, Express, MongoDB, PostgreSQL</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg p-4 rounded-lg border border-white/20">
                  <h4 className="font-semibold text-purple-400 mb-2">Mobile</h4>
                  <p className="text-sm text-gray-300">React Native, Flutter</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg p-4 rounded-lg border border-white/20">
                  <h4 className="font-semibold text-blue-400 mb-2">DevOps</h4>
                  <p className="text-sm text-gray-300">Docker, AWS, Vercel, GitHub Actions</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full max-w-lg mx-auto space-y-6">
                {/* LinkedIn Profile */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <LinkedInProfile />
                </motion.div>
                
                {/* GitHub Profile */}
                <motion.div
                  className="relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <GitHubProfile />
                </motion.div>
                
                {/* Elementos decorativos */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-24 h-24 border-2 border-dashed border-purple-400/50 rounded-full"
                />
                
                {/* Social particles effect */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-2 -left-2 w-4 h-4 bg-blue-500 rounded-full blur-sm"
                />
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    opacity: [0.4, 0.8, 0.4]
                  }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                  className="absolute top-1/2 -right-8 w-3 h-3 bg-gray-500 rounded-full blur-sm"
                />
                <motion.div
                  animate={{ 
                    y: [0, -12, 0],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                  className="absolute -bottom-4 -left-6 w-2 h-2 bg-purple-500 rounded-full blur-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 via-pink-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              opacity: { duration: 0.6 },
              y: { duration: 0.6 },
              backgroundPosition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <span className="relative">
              {t.projects}
              <motion.div 
                className="absolute -top-8 -right-8 w-16 h-16 border-2 border-dashed border-purple-400/30 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </span>
          </motion.h2>
          
          {/* Indicação de projetos adicionais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-8 text-center"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-lg px-6 py-3 rounded-full border border-purple-400/20">
              <Code className="text-purple-400" size={18} />
              <span className="text-gray-300 text-sm">
                {t.portfolioSelected}
              </span>
              <ExternalLink className="text-blue-400" size={16} />
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>

          {/* Seção de Estatísticas dos Projetos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            <div className="text-center p-6 bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-lg rounded-xl border border-purple-400/30 shadow-lg">
              <div className="text-4xl font-bold text-purple-400 mb-2">15+</div>
              <div className="text-base font-medium text-gray-200 mb-1">{t.featuredProjects}</div>
              <div className="text-sm text-purple-300">{t.of25Delivered}</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl border border-blue-400/30 shadow-lg">
              <div className="text-4xl font-bold text-blue-400 mb-2">4+</div>
              <div className="text-base font-medium text-gray-200">{t.yearsExperience}</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-lg rounded-xl border border-green-400/30 shadow-lg">
              <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-base font-medium text-gray-200">{t.onTimeProjects}</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-lg rounded-xl border border-yellow-400/30 shadow-lg">
              <div className="text-4xl font-bold text-yellow-400 mb-2">3+</div>
              <div className="text-base font-medium text-gray-200">{t.countriesServed}</div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Awards Section */}
      <AnimatedSection id="awards" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-400 via-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              opacity: { duration: 0.6 },
              y: { duration: 0.6 },
              backgroundPosition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <span className="relative">
              {t.awards}
              <motion.div 
                className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </span>
          </motion.h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:border-yellow-400/50 transition-all duration-300 group"
              >
                {/* Award Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-gradient-to-br from-yellow-400/20 to-orange-500/20 p-3 rounded-full border border-yellow-400/30">
                    <Award className="text-yellow-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                        award.position === '1º Lugar' 
                          ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black' 
                          : 'bg-gradient-to-r from-orange-400 to-red-500 text-white'
                      }`}>
                        {award.position}
                      </span>
                      <span className="text-sm text-yellow-400 font-semibold">{award.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{award.project}</h3>
                    <p className="text-purple-300 font-medium mb-2">{award.organization}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{award.description}</p>
                  </div>
                </div>
                
                {/* Link and iframe section */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <a 
                      href={award.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                    >
                      <ExternalLink size={14} />
                      Ver Reportagem
                    </a>
                    <button 
                      onClick={() => {
                        const iframe = document.getElementById(`iframe-${index}`);
                        if (iframe) {
                          iframe.style.display = iframe.style.display === 'none' ? 'block' : 'none';
                        }
                      }}
                      className="flex items-center gap-2 border border-gray-400 hover:bg-gray-400/20 px-4 py-2 rounded-full text-gray-200 text-sm font-medium transition-all duration-300"
                    >
                      <Globe size={14} />
                      Preview
                    </button>
                  </div>
                  
                  {/* Iframe preview */}
                  <div 
                    id={`iframe-${index}`}
                    className="relative w-full h-64 rounded-lg overflow-hidden border border-gray-400/20 bg-gray-900/50"
                    style={{ display: 'none' }}
                  >
                    <iframe
                      src={award.link}
                      className="w-full h-full"
                      title={`Reportagem - ${award.project}`}
                      frameBorder="0"
                      sandbox="allow-scripts allow-same-origin"
                      loading="lazy"
                    />
                    {/* Overlay para casos de erro */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <p className="text-gray-300 text-sm text-center px-4">
                        Clique no link "Ver Reportagem" para abrir a página completa
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-emerald-400 via-teal-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              opacity: { duration: 0.6 },
              y: { duration: 0.6 },
              backgroundPosition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <span className="relative">
              {t.experience}
              <motion.div 
                className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-1 h-12 bg-gradient-to-b from-emerald-400 to-blue-500 rounded-full"
                animate={{ height: [48, 60, 48] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </span>
          </motion.h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:border-blue-400/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-3 rounded-full border border-blue-400/30">
                    <Briefcase className="text-blue-400" size={24} />
                  </div>
                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                        <div className="flex items-center gap-2 mb-2">
                          <p className="text-blue-300 font-medium">{exp.company}</p>
                          <span className="text-gray-400">•</span>
                          <span className="text-sm text-gray-400">{exp.period}</span>
                        </div>
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full text-xs font-medium text-blue-300">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed mb-4">{exp.description}</p>
                    
                    {/* Highlights */}
                    {exp.highlights && exp.highlights.length > 0 && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-white mb-2">{t.mainAchievements}:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.highlights.map((highlight, hIndex) => (
                            <span 
                              key={hIndex}
                              className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/30 rounded-full text-xs font-medium text-emerald-300"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Link */}
                    {exp.link && exp.linkText && (
                      <div className="mt-4">
                        <a 
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 inline-flex w-fit"
                        >
                          <ExternalLink size={14} />
                          {exp.linkText}
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Resumo da Experiência */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="text-center p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-lg rounded-xl border border-blue-400/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">4+</div>
              <div className="text-sm text-gray-300 mb-1">{t.yearsExperience}</div>
              <div className="text-xs text-gray-400">{t.sinceFirstJob}</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-lg rounded-xl border border-purple-400/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">7</div>
              <div className="text-sm text-gray-300 mb-1">{t.companiesWorked}</div>
              <div className="text-xs text-gray-400">{t.startupsToMultinationals}</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-lg rounded-xl border border-emerald-400/20">
              <div className="text-3xl font-bold text-emerald-400 mb-2">2.200+</div>
              <div className="text-sm text-gray-300 mb-1">{t.storesImpacted}</div>
              <div className="text-xs text-gray-400">{t.mcdonaldsLatam}</div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Education Section */}
      <AnimatedSection id="education" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-violet-400 via-purple-500 via-indigo-500 to-blue-600 bg-clip-text text-transparent relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{
              opacity: { duration: 0.6 },
              y: { duration: 0.6 },
              backgroundPosition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <span className="relative">
              {t.education}
              <motion.div 
                className="absolute -right-6 -top-2 w-4 h-4 border-2 border-purple-400 rounded rotate-45"
                animate={{ rotate: [45, 405, 45] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
            </span>
          </motion.h2>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-lg p-6 rounded-xl border border-white/20 hover:border-purple-400/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500/20 p-3 rounded-full border border-purple-400/30">
                    <GraduationCap className="text-purple-400" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <p className="text-purple-300 font-medium">{edu.institution}</p>
                      <span className="text-gray-400">•</span>
                      <span className="text-sm text-gray-400">{edu.period}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-4">{edu.description}</p>
                    
                    {/* Links section */}
                    {(edu.link || edu.additionalLink) && (
                      <div className="flex flex-wrap gap-3 mt-4">
                        {edu.link && edu.linkText && (
                          <a 
                            href={edu.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                          >
                            <ExternalLink size={14} />
                            {edu.linkText}
                          </a>
                        )}
                        {edu.additionalLink && edu.additionalLinkText && (
                          <a 
                            href={edu.additionalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 border border-purple-400 hover:bg-purple-400/20 px-4 py-2 rounded-full text-purple-200 text-sm font-medium transition-all duration-300"
                          >
                            <ExternalLink size={14} />
                            {edu.additionalLinkText}
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action Section */}
      <AnimatedSection className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-blue-500/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-purple-400/20 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background animated elements */}
            <motion.div 
              className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -bottom-20 -left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"
              animate={{ 
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            
            <motion.h3 
              className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {t.workTogether}
            </motion.h3>
            
            <motion.p 
              className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {t.workTogetherDesc}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a 
                href="mailto:fernandabtech@gmail.com"
                className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 min-w-[200px] justify-center"
              >
                <Mail size={20} />
                {t.sendEmail}
              </a>
              
              <a 
                href="https://wa.me/5516991313277"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 min-w-[200px] justify-center"
              >
                <FaWhatsapp size={20} />
                {currentLang === 'pt' ? 'WhatsApp' : 'WhatsApp'}
              </a>
            </motion.div>
            
            {/* Social Links Row */}
            <motion.div 
              className="flex gap-4 justify-center mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a 
                href="https://github.com/fernandabonfimm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800/50 hover:bg-purple-600/20 px-4 py-2 rounded-full border border-purple-400/30 hover:border-purple-400 transition-all duration-300"
              >
                <Github size={18} />
                <span className="text-sm">GitHub</span>
              </a>
              
              <a 
                href="https://br.linkedin.com/in/fernanda-bonfim-9596aa193" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800/50 hover:bg-blue-600/20 px-4 py-2 rounded-full border border-blue-400/30 hover:border-blue-400 transition-all duration-300"
              >
                <Linkedin size={18} />
                <span className="text-sm">LinkedIn</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer id="contact" className="bg-black/20 backdrop-blur-lg border-t border-white/10 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                Fernanda Bonfim
              </h3>
              <p className="text-gray-300 mb-4">
                Desenvolvedora Full Stack apaixonada por criar soluções digitais inovadoras.
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/fernandabonfimm" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-400/30 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 group"
                >
                  <Github size={24} className="text-purple-300 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="https://br.linkedin.com/in/fernanda-bonfim-9596aa193" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-400/30 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group"
                >
                  <Linkedin size={24} className="text-blue-300 group-hover:text-white transition-colors" />
                </a>
                <a 
                  href="https://wa.me/5516991313277" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-400/30 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 group"
                >
                  <FaWhatsapp size={24} className="text-green-300 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">{t.contactInfo}</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail size={16} className="text-purple-400" />
                  <a href="mailto:fernandabtech@gmail.com" className="hover:text-purple-400 transition-colors font-medium">
                    fernandabtech@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <FaWhatsapp size={16} className="text-green-400" />
                  <a href="https://wa.me/5516991313277" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors font-medium">
                    +55 (16) 99131-3277
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Linkedin size={16} className="text-blue-400" />
                  <a href="https://br.linkedin.com/in/fernanda-bonfim-9596aa193" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors font-medium">
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin size={16} className="text-blue-400" />
                  <span>Ribeirão Preto, SP - Brasil • Trabalho Remoto Global</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Briefcase size={16} className="text-purple-400" />
                  <span>FBS Tecnologia - CNPJ: 61.171.635/0001-46</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">{t.services}</h4>
              <ul className="space-y-2 text-gray-300">
                <li>{t.webDevelopment}</li>
                <li>{t.mobileApps}</li>
                <li>{t.technicalConsulting}</li>
                <li>{t.uiUxDesign}</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Fernanda Bonfim. {t.allRightsReserved}.</p>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  );
}
