import { ThemeProvider } from './ThemeProvider';
import Hero from './Hero';
import Services from './Services';
import Projects from './Projects';
import Contact from './Contact';

export function App() {
    return (
        <ThemeProvider>
            <main>
                <Hero />
                <Services />
                <Projects />
                <Contact />
            </main>
        </ThemeProvider>
    );
}
