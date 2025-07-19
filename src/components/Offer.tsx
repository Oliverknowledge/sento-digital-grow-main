import { Button } from "@/components/ui/button";
import { Gift, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Offer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const benefits = [
    "Complete campaign setup",
    "Keyword research & strategy",
    "Ad copy creation",
    "Landing page optimization",
    "Weekly performance reports"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/10"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Offer Badge */}
          <motion.div 
            className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full border border-primary/20 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <Gift className="w-5 h-5" />
            <span className="font-medium">Limited Time Offer</span>
          </motion.div>
          
          {/* Main Offer */}
          <div className="space-y-8">
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              First 30 Days{" "}
              <motion.span 
                className="text-primary"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Free
              </motion.span>
            </motion.h2>
            
            <motion.div 
              className="bg-gradient-to-r from-primary to-primary-light text-primary-foreground p-2 rounded-lg inline-block"
              initial={{ opacity: 0, rotateX: -90 }}
              animate={isInView ? { opacity: 1, rotateX: 0 } : { opacity: 0, rotateX: -90 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-xl md:text-2xl font-bold">
                Our Grand Slam Offer
              </span>
            </motion.div>
            
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Get your Google Ads campaigns set up and running completely free for the first month. 
              You only pay our management fee after you see results.
            </motion.p>
          </div>
          
          {/* What's Included */}
          <motion.div 
            className="bg-card rounded-2xl p-8 md:p-12 shadow-elegant border mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.h3 
              className="text-2xl font-semibold text-card-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              What You Get (Worth $2,500)
            </motion.h3>
            
            <motion.div 
              className="grid md:grid-cols-2 gap-4 mb-8"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center space-x-3 text-left"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, x: 10 }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-card-foreground">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="bg-accent rounded-xl p-6 mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-lg font-medium text-accent-foreground mb-2">
                Risk-Free Guarantee
              </p>
              <p className="text-muted-foreground">
                If we don't generate qualified leads within 30 days, 
                you don't pay a penny. That's how confident we are in our process.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="cta" 
                size="xl" 
                className="group text-lg"
              >
                Claim Your Free Month
                <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
            
            <motion.p 
              className="text-sm text-muted-foreground mt-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              * Offer valid for new clients only. Ad spend not included.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Offer;