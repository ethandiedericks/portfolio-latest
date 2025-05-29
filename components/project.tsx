import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Apple, CodeIcon, Play } from "lucide-react";

import Image from "next/image";

export function Projects() {
  const projects = [
    {
      title: "Recurring Payment Manager",
      description:
        "(CURRENTLY IN DEVELOPMENT) Track contracts, payments, and invoices with a smart dashboard.See active contracts, recent payments, and pending revenue—all in one place.",
      image: "/nevaeh_management.png",
      tech: ["Next.js", "Neon Postgres", "Prisma", "AWS S3"],
      liveUrl: "https://nevaeh-dashboard.vercel.app/",
      githubUrl: "https://github.com/ethandiedericks/nevaeh-dashboard",
      liveIcon: ExternalLink,
      codeIcon: CodeIcon,
      liveLabel: "Live Demo",
      codeLabel: "Code",
    },
    {
      title: "Paperless Consultation App",
      description:
        "Built with Flutter, this mobile app automates Road Accident Fund consultations—streamlining client intake and case assessment on both iOS and Android devices.",
      image: "/jbsa_consultation_app.webp",
      tech: [
        "Flutter",
        "Firebase Authentication",
        "Cloud Firestore",
        "Firebase Messaging",
      ],
      liveIcon: Apple,
      codeIcon: Play,
      liveUrl:
        "https://apps.apple.com/za/app/john-b-scott-attorneys/id6738111256",
      githubUrl:
        "https://play.google.com/store/apps/details?id=com.johnbscottattorneys.jbsaapp&pcampaignid=web_share&pli=1",
      liveLabel: "App Store",
      codeLabel: "Play Store",
    },
    {
      title: "Liam Graham Psychometry",
      description:
        "A clean, informative site built to showcase psychometric assessment services in Port Elizabeth—highlighting offerings like cognitive, educational, and career assessments with clear service details and easy contact access.",
      image: "/liamgrahampsychometry.webp",
      tech: ["Next.js", "Tailwind CSS", "Vercel"],
      liveIcon: ExternalLink,
      codeIcon: CodeIcon,
      liveUrl: "https://www.liamgrahampsychometry.co.za/",
      githubUrl: "https://github.com/ethandiedericks/liam-graham-psychometry",
      liveLabel: "Live Demo",
      codeLabel: "Code",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-4 max-w-4xl">
      <h2 className="text-2xl font-medium mb-8">Featured Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => {
          const LiveIcon = project.liveIcon || ExternalLink;
          const CodeIcon = project.codeIcon || Github;

          return (
            <CardSpotlight
              key={index}
              className="overflow-hidden flex flex-col"
            >
              <div className="relative h-48">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-white/90 text-xl font-normal mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 mt-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 cursor-pointer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-gray-700 hover:border-gray-600 bg-transparent text-gray-300 hover:text-white hover:bg-transparent cursor-pointer"
                    >
                      <LiveIcon className="w-4 h-4 mr-2" />
                      {project.liveLabel || "Live Demo"}
                    </Button>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 cursor-pointer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-gray-700 hover:border-gray-600 bg-transparent text-gray-300 hover:text-white hover:bg-transparent cursor-pointer"
                    >
                      <CodeIcon className="w-4 h-4 mr-2" />
                      {project.codeLabel || "Code"}
                    </Button>
                  </a>
                </div>
              </div>
            </CardSpotlight>
          );
        })}
      </div>
    </section>
  );
}
