"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Shield,
  Database,
  Code,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  GraduationCap,
  Briefcase,
  ChevronDown,
  Lock,
  BarChart3,
  Brain,
  Server,
  Eye,
  FileText,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [selectedCert, setSelectedCert] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "certifications", "projects", "experience", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-xl">Alex Chen</div>
            <div className="hidden md:flex space-x-6">
              {["Home", "About", "Skills", "Certifications", "Projects", "Experience", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.toLowerCase() ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Data Scientist & Cybersecurity Specialist
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Protecting digital assets while extracting meaningful insights from complex data
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" onClick={() => scrollToSection("projects")}>
                View My Work
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection("contact")}>
                Get In Touch
              </Button>
            </div>
            <div className="flex justify-center space-x-6">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-primary/20 to-blue-600/20 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-primary to-blue-600 rounded-full flex items-center justify-center">
                    <Code className="w-24 h-24 text-white" />
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a passionate computer science professional with expertise in both data science and cybersecurity.
                  With over 5 years of experience, I specialize in building secure data pipelines, implementing threat
                  detection systems, and extracting actionable insights from complex datasets.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My unique combination of skills allows me to not only analyze data but also ensure its security and
                  integrity throughout the entire data lifecycle. I'm committed to using technology to solve real-world
                  problems while maintaining the highest security standards.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Machine Learning</Badge>
                  <Badge variant="secondary">Penetration Testing</Badge>
                  <Badge variant="secondary">Cloud Security</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Skills & Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Data Science Skills */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                    Data Science & Analytics
                  </CardTitle>
                  <CardDescription>
                    Extracting insights and building predictive models from complex datasets
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Database className="w-4 h-4" />
                      <span className="text-sm">SQL & NoSQL</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Brain className="w-4 h-4" />
                      <span className="text-sm">Machine Learning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BarChart3 className="w-4 h-4" />
                      <span className="text-sm">Data Visualization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4" />
                      <span className="text-sm">Python/R</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Python & Libraries</span>
                      <span className="text-muted-foreground">95%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Statistical Analysis</span>
                      <span className="text-muted-foreground">90%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Cybersecurity Skills */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-6 h-6 text-red-600" />
                    Cybersecurity
                  </CardTitle>
                  <CardDescription>Protecting systems and data from cyber threats and vulnerabilities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4" />
                      <span className="text-sm">Penetration Testing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">Threat Detection</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Server className="w-4 h-4" />
                      <span className="text-sm">Network Security</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span className="text-sm">Compliance</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Security Assessment</span>
                      <span className="text-muted-foreground">92%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-red-600 h-2 rounded-full" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Incident Response</span>
                      <span className="text-muted-foreground">88%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-red-600 h-2 rounded-full" style={{ width: "88%" }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Certifications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Cybersecurity Certifications */}
              <Card
                className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-red-500 cursor-pointer"
                onClick={() => setSelectedCert("cissp")}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Shield className="w-10 h-10 text-red-600" />
                    <Badge variant="secondary" className="bg-red-50 text-red-700 border-red-200">
                      Security
                    </Badge>
                  </div>
                  <div className="mt-4 mb-3">
                    <img
                      src="/placeholder.svg?height=120&width=200"
                      alt="CISSP Certificate"
                      className="w-full h-24 object-cover rounded-md border"
                    />
                  </div>
                  <CardTitle className="text-lg">CISSP</CardTitle>
                  <CardDescription className="text-sm">
                    Certified Information Systems Security Professional
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">ISC²</span>
                      <span className="text-xs text-muted-foreground">2023</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Valid until: Dec 2026</div>
                    <Button variant="outline" size="sm" className="w-full mt-2 bg-transparent">
                      View Certificate
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card
                className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-red-500 cursor-pointer"
                onClick={() => setSelectedCert("ceh")}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Lock className="w-10 h-10 text-red-600" />
                    <Badge variant="secondary" className="bg-red-50 text-red-700 border-red-200">
                      Security
                    </Badge>
                  </div>
                  <div className="mt-4 mb-3">
                    <img
                      src="/placeholder.svg?height=120&width=200"
                      alt="CEH Certificate"
                      className="w-full h-24 object-cover rounded-md border"
                    />
                  </div>
                  <CardTitle className="text-lg">CEH</CardTitle>
                  <CardDescription className="text-sm">Certified Ethical Hacker</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">EC-Council</span>
                      <span className="text-xs text-muted-foreground">2022</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Valid until: Aug 2025</div>
                    <Button variant="outline" size="sm" className="w-full mt-2 bg-transparent">
                      View Certificate
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card
                className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-red-500 cursor-pointer"
                onClick={() => setSelectedCert("gcih")}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Eye className="w-10 h-10 text-red-600" />
                    <Badge variant="secondary" className="bg-red-50 text-red-700 border-red-200">
                      Security
                    </Badge>
                  </div>
                  <div className="mt-4 mb-3">
                    <img
                      src="/placeholder.svg?height=120&width=200"
                      alt="GCIH Certificate"
                      className="w-full h-24 object-cover rounded-md border"
                    />
                  </div>
                  <CardTitle className="text-lg">GCIH</CardTitle>
                  <CardDescription className="text-sm">GIAC Certified Incident Handler</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">SANS/GIAC</span>
                      <span className="text-xs text-muted-foreground">2023</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Valid until: Jan 2027</div>
                    <Button variant="outline" size="sm" className="w-full mt-2 bg-transparent">
                      View Certificate
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Data Science Certifications */}
              <Card
                className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500 cursor-pointer"
                onClick={() => setSelectedCert("tensorflow")}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Brain className="w-10 h-10 text-blue-600" />
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                      Data Science
                    </Badge>
                  </div>
                  <div className="mt-4 mb-3">
                    <img
                      src="/placeholder.svg?height=120&width=200"
                      alt="TensorFlow Certificate"
                      className="w-full h-24 object-cover rounded-md border"
                    />
                  </div>
                  <CardTitle className="text-lg">TensorFlow Developer</CardTitle>
                  <CardDescription className="text-sm">TensorFlow Developer Certificate</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Google</span>
                      <span className="text-xs text-muted-foreground">2023</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Valid until: Mar 2026</div>
                    <Button variant="outline" size="sm" className="w-full mt-2 bg-transparent">
                      View Certificate
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card
                className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500 cursor-pointer"
                onClick={() => setSelectedCert("aws-ml")}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <BarChart3 className="w-10 h-10 text-blue-600" />
                    <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                      Data Science
                    </Badge>
                  </div>
                  <div className="mt-4 mb-3">
                    <img
                      src="/placeholder.svg?height=120&width=200"
                      alt="AWS ML Certificate"
                      className="w-full h-24 object-cover rounded-md border"
                    />
                  </div>
                  <CardTitle className="text-lg">AWS ML Specialty</CardTitle>
                  <CardDescription className="text-sm">AWS Certified Machine Learning - Specialty</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Amazon Web Services</span>
                      <span className="text-xs text-muted-foreground">2022</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Valid until: Nov 2025</div>
                    <Button variant="outline" size="sm" className="w-full mt-2 bg-transparent">
                      View Certificate
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Cloud & General Certifications */}
              <Card
                className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-500 cursor-pointer"
                onClick={() => setSelectedCert("aws-sa")}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Server className="w-10 h-10 text-green-600" />
                    <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                      Cloud
                    </Badge>
                  </div>
                  <div className="mt-4 mb-3">
                    <img
                      src="/placeholder.svg?height=120&width=200"
                      alt="AWS Solutions Architect Certificate"
                      className="w-full h-24 object-cover rounded-md border"
                    />
                  </div>
                  <CardTitle className="text-lg">AWS Solutions Architect</CardTitle>
                  <CardDescription className="text-sm">
                    AWS Certified Solutions Architect - Professional
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Amazon Web Services</span>
                      <span className="text-xs text-muted-foreground">2023</span>
                    </div>
                    <div className="text-xs text-muted-foreground">Valid until: Sep 2026</div>
                    <Button variant="outline" size="sm" className="w-full mt-2 bg-transparent">
                      View Certificate
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Certificate Modal */}
            {selectedCert && (
              <div
                className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                onClick={() => setSelectedCert(null)}
              >
                <div
                  className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-2xl font-bold">Certificate Details</h3>
                      <Button variant="ghost" size="sm" onClick={() => setSelectedCert(null)}>
                        ✕
                      </Button>
                    </div>
                    <div className="text-center">
                      <img
                        src="/placeholder.svg?height=400&width=600"
                        alt="Full Certificate"
                        className="w-full max-w-2xl mx-auto rounded-lg border shadow-lg"
                      />
                      <div className="mt-6 space-y-2">
                        <p className="text-lg font-semibold">
                          {selectedCert === "cissp" && "CISSP - Certified Information Systems Security Professional"}
                          {selectedCert === "ceh" && "CEH - Certified Ethical Hacker"}
                          {selectedCert === "gcih" && "GCIH - GIAC Certified Incident Handler"}
                          {selectedCert === "tensorflow" && "TensorFlow Developer Certificate"}
                          {selectedCert === "aws-ml" && "AWS Certified Machine Learning - Specialty"}
                          {selectedCert === "aws-sa" && "AWS Certified Solutions Architect - Professional"}
                        </p>
                        <p className="text-muted-foreground">Click outside to close</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Certification Stats - keep existing */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">6+</div>
                <div className="text-sm text-muted-foreground">Active Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 mb-2">3</div>
                <div className="text-sm text-muted-foreground">Security Certs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
                <div className="text-sm text-muted-foreground">Data Science Certs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">1</div>
                <div className="text-sm text-muted-foreground">Cloud Architecture</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Shield className="w-8 h-8 text-red-600" />
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <CardTitle>Threat Detection System</CardTitle>
                  <CardDescription>
                    ML-powered system for real-time cybersecurity threat detection and response
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">TensorFlow</Badge>
                    <Badge variant="outline">SIEM</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Developed an AI system that analyzes network traffic patterns to identify potential security threats
                    with 95% accuracy.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <BarChart3 className="w-8 h-8 text-blue-600" />
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <CardTitle>Customer Analytics Platform</CardTitle>
                  <CardDescription>
                    Comprehensive data analytics platform for customer behavior analysis
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Python</Badge>
                    <Badge variant="outline">PostgreSQL</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Built a secure analytics platform processing 1M+ daily transactions with advanced visualization and
                    reporting.
                  </p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Lock className="w-8 h-8 text-green-600" />
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <CardTitle>Secure Data Pipeline</CardTitle>
                  <CardDescription>
                    End-to-end encrypted data processing pipeline for sensitive healthcare data
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">Apache Kafka</Badge>
                    <Badge variant="outline">Docker</Badge>
                    <Badge variant="outline">AWS</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Designed HIPAA-compliant data pipeline with zero-trust architecture and end-to-end encryption.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience & Education</h2>
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Briefcase className="w-6 h-6 text-primary" />
                      <div>
                        <CardTitle>Senior Data Security Analyst</CardTitle>
                        <CardDescription>TechCorp Solutions • 2022 - Present</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Led implementation of ML-based threat detection system, reducing false positives by 60%</li>
                    <li>
                      • Designed secure data architecture for processing 10TB+ daily data with zero security incidents
                    </li>
                    <li>• Mentored junior analysts and established security best practices across data teams</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <Database className="w-6 h-6 text-blue-600" />
                      <div>
                        <CardTitle>Data Scientist</CardTitle>
                        <CardDescription>DataInsights Inc • 2020 - 2022</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Developed predictive models improving customer retention by 25%</li>
                    <li>• Built automated reporting systems serving 500+ stakeholders</li>
                    <li>• Implemented data governance framework ensuring GDPR compliance</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="w-6 h-6 text-green-600" />
                      <div>
                        <CardTitle>M.S. Computer Science</CardTitle>
                        <CardDescription>Stanford University • 2018 - 2020</CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Specialization in Machine Learning and Cybersecurity. Thesis: "Privacy-Preserving Machine Learning
                    for Threat Detection"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Interested in collaborating on data science or cybersecurity projects? I'd love to hear from you.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">alex.chen@email.com</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Linkedin className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">LinkedIn</h3>
                  <p className="text-muted-foreground">linkedin.com/in/alexchen</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Github className="w-8 h-8 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">GitHub</h3>
                  <p className="text-muted-foreground">github.com/alexchen</p>
                </CardContent>
              </Card>
            </div>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90"
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© 2024 Alex Chen. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
