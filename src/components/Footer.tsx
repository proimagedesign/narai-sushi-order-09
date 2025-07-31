export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border py-4 mt-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © 2025 - Desenvolvido por{' '}
          <a 
            href="https://www.proimagedesign.com.br" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
          >
            Pede no Link
          </a>
        </p>
      </div>
    </footer>
  );
}