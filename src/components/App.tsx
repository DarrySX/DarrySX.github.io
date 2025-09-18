import { ThemeProvider } from './ThemeProvider';
import { Header } from './Header';
import { Hero } from './Hero';
import { Services } from './Services';
import { Projects } from './Projects';
import { Contact } from './Contact';
import { Footer } from './Footer';

export function App() {
    return (
        <ThemeProvider>
            <div className="min-h-screen">
                <Header />
                <main>
                    <Hero />
                    <Services />
                    <Projects />
                    <Contact />
                </main>
                <Footer />
            </div>
        </ThemeProvider>
    );
}
