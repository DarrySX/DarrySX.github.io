import { ThemeProvider } from './ThemeProvider';

interface ClientWrapperProps {
    children: React.ReactNode;
}

export function ClientWrapper({ children }: ClientWrapperProps) {
    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
}
