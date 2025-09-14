import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
  Code,
  Database,
  Server,
  Globe,
  Award,
  Building,
  GraduationCap,
  User,
  Briefcase,
  FolderOpen,
  BadgeIcon as Certificate,
  MessageSquare,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">Azeddine HARCHAOUI</div>
            <div className="hidden md:flex space-x-6">
              <a href="#home" className="hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="hover:text-primary transition-colors">
                About
              </a>
              <a href="#education" className="hover:text-primary transition-colors">
                Education
              </a>
              <a href="#experience" className="hover:text-primary transition-colors">
                Experience
              </a>
              <a href="#projects" className="hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#certificates" className="hover:text-primary transition-colors">
                Certificates
              </a>
              <a href="#contact" className="hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/Azeddine Harchaoui.jpg"
              alt="Profile Picture"
              width={200}
              height={200}
              className="rounded-full mx-auto mb-6 border-4 border-primary/20"
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Azeddine HARCHAOUI</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">Full Stack Developer & AI enthusiast</p>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Passionate about creating innovative web applications , AI agents and solving complex problems with modern
              technologies. Specialized in Laravel, Node.js, Ollama, HuggingFace, langchain and cloud architecture.
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              <Button asChild>
                <Link href="#contact">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Get In Touch
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/resume.pdf" target="_blank">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Link>
              </Button>
            </div>
            <div className="flex justify-center space-x-6">
              <Link
                href="https://github.com/azddineharchaoui"
                target="_blank"
                className="text-2xl hover:text-primary transition-colors"
              >
                <Github />
              </Link>
              <Link
                href="https://www.linkedin.com/in/azeddine-harchaoui-310b96146"
                target="_blank"
                className="text-2xl hover:text-primary transition-colors"
              >
                <Linkedin />
              </Link>
              <Link href="mailto:azeddineharchaoui1@gmail.com" className="text-2xl hover:text-primary transition-colors">
                <Mail />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <User className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Learn more about my journey, skills, and passion for technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/Azeddine Harchaoui.jpg"
                alt="About Me"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">My Story</h3>
              <p className="text-muted-foreground mb-6">
                I'm a passionate full-stack junior developer and AI enthusiast. My journey started with a Computer Science Bachelor's degree from the Institut Polythechnique de Bordeaux , and I've been continuously learning and
                adapting to new technologies ever since, from Machine Learning, Data science , Cyber security , and ServiceNow platfrome.
              </p>
              <p className="text-muted-foreground mb-6">
                I specialize in modern JavaScript frameworks with react and react native , and I build strong and maintenable Laravel backend APIs, and creating user-centric applications
                that solve real-world problems. When I'm not coding, you can find me learning in Udemy platforme to get new certificat in IT especially in AI field , or in EDX platforme for verified certificates.
              </p>

              <h4 className="text-xl font-semibold mb-4">Technical Skills</h4>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <h5 className="font-medium mb-2 flex items-center">
                    <Code className="w-4 h-4 mr-2" />
                    Frontend
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">React Native</Badge>
                    <Badge variant="secondary">Javascript</Badge>
                    <Badge variant="secondary">Tailwind CSS</Badge>
                    <Badge variant="secondary">Bootstrap</Badge>
                    <Badge variant="secondary">Vuejs</Badge>

                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-2 flex items-center">
                    <Server className="w-4 h-4 mr-2" />
                    Backend
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">Laravel</Badge>
                    <Badge variant="secondary">Django</Badge>
                    <Badge variant="secondary">Ollama</Badge>
                    <Badge variant="secondary">HuggingFace</Badge>
                    <Badge variant="secondary">LangChain</Badge>
                    <Badge variant="secondary">Python</Badge>
                    <Badge variant="secondary">PHP</Badge>
                    <Badge variant="secondary">Flask</Badge>
                  </div>
                </div>
                <div>
                  <h5 className="font-medium mb-2 flex items-center">
                    <Database className="w-4 h-4 mr-2" />
                    Database
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">PostgreSQL</Badge>
                    <Badge variant="secondary">MySQL</Badge>
                    <Badge variant="secondary">MongoDB</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <GraduationCap className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
            <p className="text-lg text-muted-foreground">My academic background and continuous learning journey</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">Bachelor in Computer Science</CardTitle>
                      <CardDescription className="text-lg">ENSEIRB-MATMECA of Bordeaux </CardDescription>
                    </div>
                    <Badge variant="outline">2017 - 2019</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Specialized in Software Engineering and Machine Learning. Graduated with after validating 2 eyars in the Engineering School.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Software Engineering</Badge>
                    <Badge>Machine Learning</Badge>
                    <Badge>Algorithms</Badge>
                    <Badge>Management of Projects</Badge>
                    <Badge>Cyber Security</Badge>
                    <Badge>Finance</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">Diploma of Preparatory classes MPSI </CardTitle>
                      <CardDescription className="text-lg">CPGE Omar Ibn Al Khattab, Meknès</CardDescription>
                    </div>
                    <Badge variant="outline">2015 - 2017</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Foundation in Mathematics, Physics, Chemistry, Engineering sciences, computer science fundamentals, data structures using Python. 
                    I passed the CNCM and got the rank 145 in the national competition for the entrance to the engineering schools.
                    And i got the rank 1951 in the CCP competition for the entrance to the engineering schools at France.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Mathematics</Badge>
                    <Badge>Object-Oriented Programming</Badge>
                    <Badge>Physics</Badge>
                    <Badge>Engineering sciences</Badge>
                    <Badge>Chemistry</Badge>
                    <Badge>Data Structures</Badge>
                    <Badge>Python</Badge>

                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Briefcase className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
            <p className="text-lg text-muted-foreground">My professional journey and key accomplishments</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <Building className="w-8 h-8 text-primary" />
                      <div>
                        <CardTitle className="text-xl">Internship Full Stack Developer</CardTitle>
                        <CardDescription className="text-lg">Developpeur-informatique.ma</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline">2025 - Present</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                    <li>Led development of microservices architecture </li>
                    <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
                    <li>Build a backend API with Laravel with more than 60 endpoints, with tests and documentation</li>
                    <li>Architected scalable React applications with Next.js and TypeScript</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <Badge>React</Badge>
                    <Badge>Node.js</Badge>
                    <Badge>Laravel</Badge>
                    <Badge>MySQL</Badge>
                    <Badge>Docker</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <Building className="w-8 h-8 text-primary" />
                      <div>
                        <CardTitle className="text-xl">Database Administrator</CardTitle>
                        <CardDescription className="text-lg">Délégation régional de tourisme</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline">2018 </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                    <li>Built and maintained a web application from concept to production</li>
                    <li>Designed and implemented RESTful APIs for data access</li>
                    <li>Optimized database queries improving performance by 40%</li>
                    <li>Collaborated with cross-functional teams to deliver high-quality software</li>
                    <li>Implemented security best practices to safeguard sensitive data</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Vue.js</Badge>
                    <Badge>Python</Badge>
                    <Badge>MongoDB</Badge>
                    <Badge>Stripe API</Badge>
                    <Badge>Heroku</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <Building className="w-8 h-8 text-primary" />
                      <div>
                        <CardTitle className="text-xl">Telephone counsellor</CardTitle>
                        <CardDescription className="text-lg">Yource Mèknes</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline">2023 - 2024</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                    <li>Provided technical support and troubleshooting for customers</li>
                    <li>Resolved customer issues via phone and email with a 95% satisfaction rate</li>
                    <li>Documented customer interactions and feedback for continuous improvement</li>
                    <li>Collaborated with product teams to enhance user experience</li>
                    <li>Trained new team members on customer service best practices</li>
                    <li>Assisted in the development of training materials and documentation</li>
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <Badge>JavaScript</Badge>
                    <Badge>PHP</Badge>
                    <Badge>MySQL</Badge>
                    <Badge>WordPress</Badge>
                    <Badge>ARC</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <Building className="w-8 h-8 text-primary" />
                      <div>
                        <CardTitle className="text-xl">Telephone counsellor</CardTitle>
                        <CardDescription className="text-lg">intelcia Mèknes</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline">2022 - 2023</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                    <li>Provided technical support and troubleshooting for customers</li>
                    <li>Resolved customer issues via phone and email with 85% satisfaction rate</li>
                    <li>Technical and commercial services in INWI project  </li>
                    <li>Documented customer interactions and feedback for continuous improvement</li>
                    <li>Collaborated with product teams to enhance user experience</li>
                    <li>Trained new team members on customer service best practices</li>
                    <li>Assisted in the development of training materials and documentation</li>

                  </ul>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Teams</Badge>
                    <Badge>MySQL</Badge>
                    <Badge>Salto</Badge>
                    <Badge>ARC</Badge>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <FolderOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground">Some of my recent work and personal projects</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            
            <Card className="group hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden">
                <Image
                  src="/mindmate.png"
                  alt="Mental Health AI agent "
                  width={400}
                  height={200}
                  className="w-full object-cover object-center group-hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  MindMate
                  <div className="flex space-x-2">
                    <Link href="https://github.com/azddineharchaoui/MindMate2" target="_blank">
                      <Github className="w-5 h-5 hover:text-primary" />
                    </Link>
                    
                  </div>
                </CardTitle>
                <CardDescription>
                  A mental health AI agent that provides support and resources for users seeking help with mental health issues. It uses natural language processing to understand user queries and provide relevant information and support. It contains mood tracking , crisis assessement , and personalized recommendations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Flask</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Ollama</Badge>
                  <Badge variant="secondary">Whisper API</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">LangChain</Badge>
                  <Badge variant="secondary">HuggingFace</Badge>

                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden">
                <Image
                  src="/vibe.png"
                  alt="Vibe Social Network"
                  width={400}
                  height={200}
                  className="w-full object-cover object-center group-hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Social Network Vibe
                  <div className="flex space-x-2">
                    <Link href="https://github.com/azddineharchaoui/vibev2" target="_blank">
                      <Github className="w-5 h-5 hover:text-primary" />
                    </Link>
                  </div>
                </CardTitle>
                <CardDescription>
                    A web application that allows users to create and manage their accounts, interact with each other by adding friends, posting content, and reacting to others' posts. Using the Laravel framework.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Laravel</Badge>
                  <Badge variant="secondary">PHP</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">Chatify</Badge>
                  <Badge variant="secondary">JWT</Badge>

                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden">
                <Image
                  src="/cinehall.png"
                  alt="Cinehall API"
                  width={400}
                  height={200}
                  className="w-full object-cover object-center group-hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Cinema API 
                  <div className="flex space-x-2">
                    <Link href="https://github.com/azddineharchaoui/Cinehall10" target="_blank">
                      <Github className="w-5 h-5 hover:text-primary" />
                    </Link>
                    
                  </div>
                </CardTitle>
                <CardDescription>
                  CinéHall is a comprehensive web application for managing and booking cinema tickets. It allows users to browse movies, check showtimes, reserve seats, and make online payments, while offering an admin interface for managing films, theaters, and bookings.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Laravel</Badge>
                  <Badge variant="secondary">JWT</Badge>
                  <Badge variant="secondary">Spatie</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">Postman</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden">
                <Image
                  src="/youdemy.png"
                  alt="Youdemy"
                  width={400}
                  height={200}
                  className="w-full object-cover object-center group-hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Lerning platform Youdemy
                  <div className="flex space-x-2">
                    <Link href="https://github.com/azddineharchaoui/Youdemy-v2" target="_blank">
                      <Github className="w-5 h-5 hover:text-primary" />
                    </Link>
                    
                  </div>
                </CardTitle>
                <CardDescription>
                  The online course platform Youdemy aims to revolutionize learning by offering an interactive and personalized system for both students and teachers.                
                  </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">PHP</Badge>
                  <Badge variant="secondary">Javascript</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <div className="relative  overflow-hidden">
                <Image
                  src="/drive.png"
                  alt="Drive & Loc"
                  width={400}
                  height={200}
                  className="w-full object-cover object-center group-hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Drive & Loc
                  <div className="flex space-x-2">
                    <Link href="https://github.com/azddineharchaoui/drive2" target="_blank">
                      <Github className="w-5 h-5 hover:text-primary" />
                    </Link>
                    
                  </div>
                </CardTitle>
                <CardDescription>
                  An intuitive platform for car rental management, allowing customers to book and rate vehicles while providing administrators with efficient management tools.                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">PHP</Badge>
                  <Badge variant="secondary">Javascript</Badge>
                  <Badge variant="secondary">TailwindCSS</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <div className="relative overflow-hidden">
                <Image
                  src="/school.png"
                  alt="School management C application"
                  width={400}
                  height={200}
                  className="w-full object-cover object-center group-hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  School management system
                  <div className="flex space-x-2">
                    <Link href="https://github.com/azddineharchaoui/projet-SAS" target="_blank">
                      <Github className="w-5 h-5 hover:text-primary" />
                    </Link>
                    
                  </div>
                </CardTitle>
                <CardDescription>
                  A C application for managing school operations, including student enrollment, course management, and grade tracking. It provides a grading system and many functionalities to streamline school administration.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">C language</Badge>
                  
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Certificate className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Certificates & Awards</h2>
            <p className="text-lg text-muted-foreground">Professional certifications and recognitions</p>
          </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="text-center group hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative">
                <Image
                  src="/certificates/generative_ia_for_everyone.png"
                  alt="Generative AI for Everyone Certificate"
                  width={400}
                  height={250}
                  className="w-full object-cover object-center group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <CardHeader>
                <Award className="w-10 h-10 mx-auto mb-2 text-primary" />
                <CardTitle>Generative AI for Everyone</CardTitle>
                <CardDescription>IBM (Professional)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive understanding of generative AI technologies, applications, and ethical considerations. Gained practical knowledge in implementing and evaluating generative AI solutions across various domains.
                </p>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Completed 2025</Badge>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative">
                <Image
                  src="/certificates/foundations.png"
                  alt="Foundations of AI Certificate"
                  width={400}
                  height={250}
                  className="w-full object-cover object-center group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <CardHeader>
                <Award className="w-10 h-10 mx-auto mb-2 text-primary" />
                <CardTitle>Foundations of AI</CardTitle>
                <CardDescription>IBM (Professional)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Mastered core AI concepts including machine learning, neural networks, and data preparation. Developed skills in designing and implementing AI solutions while understanding their business implications.
                </p>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Completed 2025</Badge>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative">
                <Image
                  src="/certificates/devops.png"
                  alt="DevOps Basics for Everyone Certificate"
                  width={400}
                  height={250}
                  className="w-full object-cover object-center group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <CardHeader>
                <Award className="w-10 h-10 mx-auto mb-2 text-primary" />
                <CardTitle>DevOps Basics for Everyone</CardTitle>
                <CardDescription>IBM</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Acquired fundamental DevOps practices, CI/CD pipeline implementation, and collaboration between development and operations teams. Learned essential tools and methodologies for automation and efficient software delivery.
                </p>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Completed 2025</Badge>
              </CardContent>
            </Card>
            
            <Card className="text-center group hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative">
                <Image
                  src="/certificates/mlops.png"
                  alt="AI/ML Foundations Certificate"
                  width={400}
                  height={250}
                  className="w-full object-cover object-center group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <CardHeader>
                <Award className="w-10 h-10 mx-auto mb-2 text-primary" />
                <CardTitle>AI/ML Foundations (AgenticAI + MLOps)</CardTitle>
                <CardDescription>Udemy</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Deep dive into Machine Learning operations and agentic AI systems. Developed skills in ML model deployment, monitoring, and the creation of autonomous AI agents that can perform tasks with minimal human supervision.
                </p>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Completed 2025</Badge>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative">
                <Image
                  src="/certificates/generative_ai.png"
                  alt="Introduction to Generative AI Certificate"
                  width={400}
                  height={250}
                  className="w-full object-cover object-center group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <CardHeader>
                <Award className="w-10 h-10 mx-auto mb-2 text-primary" />
                <CardTitle>Introduction to Generative AI</CardTitle>
                <CardDescription>Pragmatic AI Labs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Explored the fundamentals of generative AI models, their architectures, and applications. Gained hands-on experience with various generative models and understanding of their capabilities and limitations.
                </p>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Completed 2025</Badge>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative">
                <Image
                  src="/certificates/llmops.png"
                  alt="LLMOps with Azure Certificate"
                  width={400}
                  height={250}
                  className="w-full object-cover object-center group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <CardHeader>
                <Award className="w-10 h-10 mx-auto mb-2 text-primary" />
                <CardTitle>LLMOps with Azure</CardTitle>
                <CardDescription>Pragmatic AI Labs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Advanced training in deploying, managing, and scaling Large Language Models on Azure. Learned best practices for LLM operations, optimization techniques, and integration with Azure AI services.
                </p>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Completed 2025</Badge>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative">
                <Image
                  src="/certificates/servicenow.png"
                  alt="ServiceNow Verified System Administrator Certificate"
                  width={400}
                  height={250}
                  className="w-full object-cover object-center group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <CardHeader>
                <Award className="w-10 h-10 mx-auto mb-2 text-primary" />
                <CardTitle>ServiceNow Verified System Administrator</CardTitle>
                <CardDescription>ServiceNow</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  The ServiceNow Certified System Administrator (CSA) certificate validates foundational knowledge of the ServiceNow platform. It demonstrates the ability to configure, manage, and maintain ServiceNow applications and services.                </p>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Completed 2025</Badge>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative">
                <Image
                  src="/certificates/generative_ai_.png"
                  alt="Introduction to Generative AI Certificate - IBM"
                  width={400}
                  height={250}
                  className="w-full object-cover object-center group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <CardHeader>
                <Award className="w-10 h-10 mx-auto mb-2 text-primary" />
                <CardTitle>Introduction to Generative AI</CardTitle>
                <CardDescription>IBM via EDX platforme</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
Knowledge of generative AI technologies, their real-world applications, and their transformative impact across various industries. From content creation to data analysis, I've gained practical skills to effectively leverage these innovative tools.                </p>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Completed 2025</Badge>
              </CardContent>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-shadow overflow-hidden">
              <div className="relative">
                <Image
                  src="/certificates/master_ai.png"
                  alt="Mastering AI Agents Bootcamp Certificate"
                  width={400}
                  height={250}
                  className="w-full object-cover object-center group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <CardHeader>
                <Award className="w-10 h-10 mx-auto mb-2 text-primary" />
                <CardTitle>Mastering AI Agents Bootcamp: Build Smart Chatbots & Tools</CardTitle>
                <CardDescription>AI School via Udemy</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Developed AI-powered agents, chatbots, and automation bots with speech, memory, and document processing features.
Built web-based assistants using vector databases and prompt engineering for dynamic, human-like AI interactions.
                </p>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Completed 2025</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <MessageSquare className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">Let's discuss your next project or opportunity</p>
          </div>

          <div className="flex justify-center  mx-auto">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">azeddineharchaoui1@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">0778609635</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Meknès, Morocco</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <Link
                    href="https://github.com/azddineharchaoui"
                    target="_blank"
                    className="text-2xl hover:text-primary transition-colors"
                  >
                    <Github />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/azeddine-harchaoui-310b96146"
                    target="_blank"
                    className="text-2xl hover:text-primary transition-colors"
                  >
                    <Linkedin />
                  </Link>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">© 2024 Azeddine Harchaoui. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
