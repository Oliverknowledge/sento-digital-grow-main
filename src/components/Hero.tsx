import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero.jpeg";
import { motion } from "framer-motion";
import logo from "/public/logo.png";

const Hero = () => {
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-accent">
      {/* Logo in top left */}
      <div className="absolute top-8 left-8 z-20">
        <span className="text-2xl md:text-4xl font-bold text-primary ">Sento Digital</span>
      </div>
      <div className="container mx-auto px-6 py-20">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hero Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
               Stop Relying on Word-of-Mouth. 

              <br></br>
                <span className="text-primary">
                  Start Getting More Solar Leads Online.
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                We help solar companies and installers build a powerful digital presence and run ads that bring consistent, high-quality solar leads through one service.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="hero" 
                  size="xl" 
                  className="group"
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) {
                      const y = el.getBoundingClientRect().top + window.pageYOffset + 40;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}
                >
                  Book a Free Call
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>  
            </motion.div>
          
            
        
          
          {/* Hero Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-elegant"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={heroImage} 
                alt="Digital marketing workspace showing Google Ads dashboard" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </motion.div>
            
            {/* Floating Cards */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-card p-4 rounded-lg shadow-glow border"
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-sm font-medium text-card-foreground">Lead Generated!</div>
              <div className="text-xs text-muted-foreground">Solar Company Lead Inquiry</div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -left-4 bg-card p-4 rounded-lg shadow-glow border"
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-sm font-medium text-card-foreground">Campaign Active</div>
              <div className="text-xs text-muted-foreground">Cost per solar lead: £45</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
