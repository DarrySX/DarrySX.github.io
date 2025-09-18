import { useState } from 'react';
import { ThemeProvider } from './ThemeProvider';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';

export function HeaderReact() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <ThemeProvider>
            {/* Desktop buttons */}
            <div className="hidden md:flex items-center space-x-2">
                <ThemeToggle />
                <Button asChild size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <a href="#contacto">Contactar</a>
                </Button>
            </div>

            {/* Mobile buttons */}
            <div className="md:hidden flex items-center space-x-2">
                <ThemeToggle />
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="p-2"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <nav className="md:hidden pb-4 space-y-2">
                    <a href="#inicio" className="block py-2 text-muted-foreground hover:text-primary transition-colors">Inicio</a>
                    <a href="#servicios" className="block py-2 text-muted-foreground hover:text-primary transition-colors">Servicios</a>
                    <a href="#experiencia" className="block py-2 text-muted-foreground hover:text-primary transition-colors">Experiencia</a>
                    <a href="#contacto" className="block py-2 text-muted-foreground hover:text-primary transition-colors">Contacto</a>
                    <Button asChild size="sm" className="mt-2 bg-gradient-to-r from-blue-600 to-purple-600">
                        <a href="#contacto">Contactar</a>
                    </Button>
                </nav>
            )}
        </ThemeProvider>
    );
}
