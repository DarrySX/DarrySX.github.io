import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Copy, CheckCircle, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const [copied, setCopied] = useState(false);
  const email = "darrys@darrysdev.me";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Tienes una idea o un desafío? <span className="gradient-text">Hablemos</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estoy disponible para nuevos proyectos y colaboraciones. Envíame un correo y te responderé a la brevedad.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-md mx-auto mb-12"
        >
          <Card className="text-center border-0 shadow-lg bg-background/80 backdrop-blur-sm">
            <CardHeader>
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <CardTitle>Contacto Directo</CardTitle>
              <CardDescription>Respondo en menos de 24 horas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-lg font-semibold">{email}</p>
                <Button 
                  onClick={copyToClipboard}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  disabled={copied}
                >
                  {copied ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      ¡Copiado!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copiar al portapapeles
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6">También puedes encontrarme en:</p>
          <div className="flex justify-center space-x-6">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/brandon-valenciac/"
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/darrysx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-gray-800 text-white hover:bg-gray-900 transition-colors shadow-lg"
            >
              <Github className="w-6 h-6" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}