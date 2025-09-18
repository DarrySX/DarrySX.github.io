import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Building, Settings } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: "Software a Medida",
    description: "Desarrollo de aplicaciones web y móviles personalizadas desde cero, alineadas con tus objetivos de negocio."
  },
  {
    icon: Building,
    title: "Soluciones Empresariales",
    description: "Creación e integración de sistemas complejos para optimizar procesos, mejorar la eficiencia y potenciar a tu equipo."
  },
  {
    icon: Settings,
    title: "Consultoría y Optimización",
    description: "Análisis y mejora de rendimiento, arquitectura y escalabilidad de aplicaciones existentes."
  }
];

export default function Services() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="servicios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Soluciones de Software para Cada Necesidad
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ofrezco servicios integrales de desarrollo que cubren todo el ciclo de vida de tu proyecto
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 bg-background/80 backdrop-blur-sm">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}