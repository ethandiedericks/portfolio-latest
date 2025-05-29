import { CardSpotlight } from "@/components/ui/card-spotlight";

export function Experience() {
  const technologies = [
    { name: "Next.js", color: "bg-blue-500" },
    { name: "React", color: "bg-blue-500" },
    { name: "Python", color: "bg-green-500" },
    { name: "Django", color: "bg-green-500" },
    { name: "C#", color: "bg-purple-500" },
    { name: ".NET", color: "bg-purple-500" },
    { name: "AWS", color: "bg-orange-500" },
    { name: "Azure", color: "bg-orange-500" },
    { name: "Vercel", color: "bg-blue-500" },
    { name: "Docker", color: "bg-cyan-500" },
  ];

  return (
    <section className="container mx-auto px-4 py-4 max-w-4xl">
      <h2 className="text-2xl font-medium mb-8">Technical Expertise</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <CardSpotlight className="p-6">
          <h3 className="text-white/90 text-xl font-normal mb-2">
            Technologies & Frameworks
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Technologies I&apos;m familiar with
          </p>

          <div className="space-y-4">
            {technologies.map((tech, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className={`w-3 h-3 ${tech.color}`}></div>
                <span className="text-white/90">{tech.name}</span>
              </div>
            ))}
          </div>
        </CardSpotlight>

        <CardSpotlight className="p-6">
          <h3 className="text-white/90 text-xl font-normal mb-2">
            Cloud & Deployment
          </h3>
          <p className="text-gray-400 text-sm mb-6">
            Infrastructure and deployment platforms
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-cyan-500"></div>
              <span className="text-white/90">
                Docker for application containerization
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-orange-500"></div>
              <span className="text-white/90">
                AWS S3 Buckets for file storage
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-orange-500"></div>
              <span className="text-white/90">
                AWS EC2 for scalable computing
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500"></div>
              <span className="text-white/90">Azure for .NET applications</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-green-500"></div>
              <span className="text-white/90">
                Vercel for Next.js deployments
              </span>
            </div>
          </div>
        </CardSpotlight>
      </div>
    </section>
  );
}
