import { CheckCircle, DollarSign, Zap, Target } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: DollarSign,
      title: "Transparent Pricing",
      description: "No hidden fees. You know exactly what you're paying for."
    },
    {
      icon: Zap,
      title: "Fast Setup", 
      description: "Get your solar campaigns live within 48 hours of onboarding."
    },
    {
      icon: Target,
      title: "Solar Lead-Focused Strategies",
      description: "Every campaign is optimized for maximum solar lead generation."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-background" id="about" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          {/* Section Header */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              What We Do
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              At Sento Digital, we specialise in paid advertising strategies that generate real leads for solar companies and installers.
            </motion.p>
          </motion.div>
          
          {/* Features Grid */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div 
                  key={index}
                  className="group p-8 bg-card rounded-xl border hover:shadow-elegant transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="space-y-4">
                    <motion.div 
                      className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-primary" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-card-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
          
          {/* Bottom CTA */}
          <motion.div 
            className="bg-accent rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <CheckCircle className="w-6 h-6 text-primary" />
              <span className="text-lg font-medium text-accent-foreground">
                Ready to grow your local business?
              </span>
            </div>
            <p className="text-muted-foreground mb-6">
              Join 150+ local businesses that trust us with their digital advertising.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;