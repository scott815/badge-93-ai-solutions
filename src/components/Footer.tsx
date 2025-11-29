import logo from "@/assets/badge93-logo.png";

const Footer = () => {
  return (
    <footer className="bg-slate-blue-dark py-10 relative">
      {/* Texture overlay */}
      <div className="absolute inset-0 texture-overlay" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Badge 93" className="w-12 h-12" />
            <div className="text-cream">
              <p className="text-lg font-bold font-display">BADGE 93</p>
              <p className="text-sm text-cream/70">AI Solutions for Veterans</p>
            </div>
          </div>
          
          <div className="text-cream/70 text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Badge 93. All rights reserved.</p>
            <p className="mt-1">Built with honor. Powered by innovation.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
