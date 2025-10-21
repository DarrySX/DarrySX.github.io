import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-cyan-50/30 to-blue-100/50 dark:from-blue-950/30 dark:via-cyan-950/20 dark:to-blue-900/30" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/20 dark:bg-blue-400/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-3/4 right-1/4 w-24 h-24 bg-cyan-500/20 dark:bg-cyan-400/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 right-1/3 w-16 h-16 bg-blue-600/15 dark:bg-blue-300/8 rounded-full blur-lg"
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Transformando Ideas en{' '}
            <span className="gradient-text">
              Software Robusto
            </span>{' '}
            y Escalable
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Desarrollador FullStack especializado en crear soluciones a medida que impulsan
            el crecimiento de tu negocio.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button
              asChild
              size="lg"
              className="gradient-bg hover:opacity-90 text-white px-8 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="#experiencia">Ver mis Proyectos</a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 py-3 text-lg border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <a href="#contacto">Hablemos de tu Idea</a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-6 mb-12"
          >
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/brandon-valenciac/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/darrysx"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 text-white hover:bg-gray-900 transition-colors"
            >
              <Github className="w-6 h-6" />
            </motion.a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col items-center"
          >
            <p className="text-sm text-muted-foreground mb-2">Descubre más</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5 text-muted-foreground" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}