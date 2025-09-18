import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "Sistema de Monitoreo para Flota Pesada",
    company: "RACIEMSA - Grupo Gloria",
    description: "Desarrollo de una plataforma integral para el monitoreo en tiempo real de conductores y camiones, optimizando la logística, seguridad y eficiencia operativa para una de las flotas más grandes del país.",
    technologies: ["React", "Node.js", "PostgreSQL", "GPS APIs", "AWS"],
    image: "https://images.pexels.com/photos/1098460/pexels-photo-1098460.jpeg?auto=compress&cs=tinysrgb&w=600",
    reverse: false
  },
  {
    title: "Marketplace tipo Mercado Libre",
    company: "Proyecto Personal",
    description: "Arquitectura y desarrollo de una plataforma de e-commerce C2C, implementando pasarelas de pago, sistema de reputación, chat en tiempo real y gestión de catálogos.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Socket.io", "Stripe API"],
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
    reverse: true
  },
  {
    title: "CRM Inmobiliario Avanzado",
    company: "Sector Inmobiliario",
    description: "Creación de un sistema de gestión de relaciones con clientes (CRM) para el sector inmobiliario, automatizando el seguimiento de leads, gestión de propiedades y pipelines de ventas.",
    technologies: ["Vue.js", "Laravel", "MySQL", "Google Maps API"],
    image: "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=600",
    reverse: false
  },
  {
    title: "Plataformas E-commerce y Sistemas Kanban",
    company: "Múltiples Clientes",
    description: "Experiencia en el desarrollo de múltiples tiendas online con carritos de compra y gestión de inventario, así como en sistemas de gestión de proyectos tipo Kanban para mejorar la productividad de equipos.",
    technologies: ["Shopify API", "React", "Astro", "Firebase", "dnd-kit"],
    image: "https://images.pexels.com/photos/708440/pexels-photo-708440.jpeg?auto=compress&cs=tinysrgb&w=600",
    reverse: true
  }
];

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="experiencia" className="py-20">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experiencia Comprobada en Proyectos de Alto Impacto
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            He trabajado en proyectos diversos, desde startups hasta empresas consolidadas
          </p>
        </motion.div>
        
        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className={`grid md:grid-cols-2 gap-0 items-center ${project.reverse ? 'md:grid-cols-2' : ''}`}>
                    {/* Image */}
                    <div className={`relative h-64 md:h-96 ${project.reverse ? 'md:order-2' : ''}`}>
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    
                    {/* Content */}
                    <div className={`p-8 md:p-12 ${project.reverse ? 'md:order-1' : ''}`}>
                      <div className="mb-4">
                        <p className="text-sm text-blue-600 font-semibold mb-2">{project.company}</p>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}