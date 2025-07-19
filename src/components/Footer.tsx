import { Button } from "@/components/ui/button";
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Sento Digital</h3>
                <p className="text-primary-foreground/80 max-w-md">
                  Helping solar companies grow through smart digital advertising. 
                  We specialize in Google Ads that actually generate solar leads and customers.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-foreground/60" />
                  <span className="text-primary-foreground/80">hello@sentodigital.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-foreground/60" />
                  <span className="text-primary-foreground/80">+44 07485 150407</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary-foreground/60" />
                  <span className="text-primary-foreground/80">Serving businesses nationwide</span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Services</h4>
              <ul className="space-y-3 text-primary-foreground/80">
                <li>
                  <a href="#services" className="hover:text-primary-foreground transition-colors">
                    Google Ads Management
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-primary-foreground transition-colors">
                    Landing Page Design
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-primary-foreground transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-primary-foreground transition-colors">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            
            {/* CTA */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold">Ready to Get Started?</h4>
              <p className="text-primary-foreground/80 text-sm">
                Book your free consultation call today and see how we can help grow your solar business with more solar leads.
              </p>
              <Button 
                variant="secondary" 
                size="lg"
                className="hover:bg-primary-foreground/90"
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) {
                    const y = el.getBoundingClientRect().top + window.pageYOffset + 40;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
              >
                Book Free Call
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              © 2024 Sento Digital. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="#" 
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                Terms of Service
              </a>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/10"
              >
                <ArrowUp className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;