import { Search, Globe, BarChart3, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: Search,
      title: "Google Ads Management for Solar Companies",
      description: "Campaigns that actually bring you solar customers.",
      features: [
        "Keyword research & strategy for solar leads",
        "Ad copy that converts solar prospects", 
        "Bid optimization for solar campaigns",
        "Regular performance reports focused on solar results"
      ]
    },
    {
      icon: Globe,
      title: "Landing Page Design for Solar Installers",
      description: "Webpages built to convert solar traffic, not just look pretty.",
      features: [
        "Mobile-first design for solar customers",
        "A/B tested layouts for solar lead generation",
        "Fast loading speeds",
        "Lead capture optimization for solar businesses"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-muted/30" id="services" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center space-y-6 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We focus on what works. Two core services that drive real results for local businesses.
            </p>
          </motion.div>
          
          {/* Services Grid */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  key={index}
                  className="bg-card p-8 rounded-2xl border shadow-sm hover:shadow-elegant transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <motion.div 
                        className="w-16 h-16 flex items-center justify-center"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <span className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                          <Icon className="w-8 h-8 text-primary" />
                        </span>
                      </motion.div>
                      <div>
                        <h3 className="text-2xl font-semibold text-card-foreground">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    
                    <motion.ul 
                      className="space-y-3"
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      {service.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: 0.4 + index * 0.1 + featureIndex * 0.1 }}
                        >
                          <motion.div 
                            className="w-2 h-2 bg-primary rounded-full"
                            initial={{ scale: 0 }}
                            animate={isInView ? { scale: 1 } : { scale: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 + featureIndex * 0.1 }}
                          />
                          <span className="text-card-foreground">{feature}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          
          {/* Stats Section */}
          <motion.div 
            className="bg-primary rounded-2xl p-8 md:p-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex items-center justify-center space-x-2">
                  <BarChart3 className="w-6 h-6 text-primary-foreground" />
                  <span className="text-3xl font-bold text-primary-foreground">+£22,500</span>
                </div>
                <p className="text-primary-foreground/80">Increase in Revenue</p>
              </motion.div>
              
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex items-center justify-center space-x-2">
                  <Users className="w-6 h-6 text-primary-foreground" />
                  <span className="text-3xl font-bold text-primary-foreground">5x</span>
                </div>
                <p className="text-primary-foreground/80">Return on Ad Spend</p>
              </motion.div>
              
              <motion.div 
                className="space-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex items-center justify-center space-x-2">
                  <Search className="w-6 h-6 text-primary-foreground" />
                  <span className="text-3xl font-bold text-primary-foreground">300%</span>
                </div>
                <p className="text-primary-foreground/80">ROI</p>
              </motion.div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="secondary" 
                size="lg" 
                className="font-semibold"
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) {
                    const y = el.getBoundingClientRect().top + window.pageYOffset + 40;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
              >
                Get Started Today
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;