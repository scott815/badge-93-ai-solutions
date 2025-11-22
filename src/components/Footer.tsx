const Footer = () => {
  return (
    <footer className="bg-primary py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-primary-foreground">
            <p className="text-lg font-bold">BADGE 93</p>
            <p className="text-sm text-primary-foreground/70">AI Solutions for Veterans</p>
          </div>
          
          <div className="text-primary-foreground/70 text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Badge 93. All rights reserved.</p>
            <p className="mt-1">Built with honor. Powered by innovation.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
