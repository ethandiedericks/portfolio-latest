import { CardSpotlight } from "@/components/ui/card-spotlight";
import { Users, MessageCircle, Smartphone } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: "hire my team",
      description:
        "With experience building production-ready apps, my team and I can build your next project.",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-blue-400" />,
      title: "book a consultation",
      description:
        "Need advice on your product? Book a consultation to get clarity on your next steps.",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-blue-400" />,
      title: "mobile app development",
      description:
        "From concept to app stores, I build cross-platform mobile applications that scale.",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-4 max-w-4xl">
      <h2 className="text-xl font-medium mb-8 flex items-center gap-2">
        Services <span className="text-2xl">🛠️</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <CardSpotlight key={index} className="p-6">
            <div className="flex items-center gap-3 mb-4">
              {service.icon}
              <h3 className="text-white/90 text-lg font-normal">
                {service.title}
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {service.description}
            </p>
          </CardSpotlight>
        ))}
      </div>
    </section>
  );
}
