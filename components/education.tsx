import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

export function Education() {
  const certifications = [
    {
      name: "CS50 Programming with Python",
      provider: "Harvard University",
      year: "2023",
    },
    { name: "Meta Back-End Developer", provider: "Meta", year: "2023" },
    { name: "Google Crash Course on Python", provider: "Google", year: "2023" },
  ];

  return (
    <section className="container mx-auto px-4 pt-4 pb-10 max-w-4xl">
      <h2 className="text-2xl font-medium mb-8">Education & Certifications</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <CardSpotlight className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-6 h-6 text-blue-500" />
            <div>
              <h3 className="text-white/90 text-xl font-normal">
                BSc Computer Science
              </h3>
              <p className="text-gray-400 text-sm">
                Nelson Mandela University (NMU)
              </p>
            </div>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Comprehensive computer science education covering software
            engineering, algorithms, data structures, and system design
            principles.
          </p>
        </CardSpotlight>

        <CardSpotlight className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-6 h-6 text-yellow-500" />
            <div>
              <h3 className="text-white/90 text-xl font-normal">
                Professional Certifications
              </h3>
              <p className="text-gray-400 text-sm">
                Industry-recognized credentials
              </p>
            </div>
          </div>
          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center justify-between">
                <div>
                  <p className="text-white/90 font-medium text-sm">
                    {cert.name}
                  </p>
                  <p className="text-xs text-gray-400">{cert.provider}</p>
                </div>
                <Badge
                  variant="outline"
                  className="text-blue-400 border-blue-400 text-xs"
                >
                  {cert.year}
                </Badge>
              </div>
            ))}
          </div>
        </CardSpotlight>
      </div>
    </section>
  );
}
