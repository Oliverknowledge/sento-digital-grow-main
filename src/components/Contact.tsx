import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, Calendar, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import LeadForm from "./LeadForm";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const { toast } = useToast();

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
    <section className="py-20 bg-background" id="contact" ref={ref}>
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
              Ready to Grow Your Solar Company?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Book a free consultation call and let's discuss how we can help your solar company generate more leads with Google Ads.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">
                  Let's Talk Solar Business
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  No high-pressure sales calls. Just an honest conversation about your solar business goals and how we can help you achieve them with proven digital advertising strategies for solar companies.
                </p>
              </div>
              
              {/* Contact Methods */}
              <motion.div 
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                <motion.div 
                  className="flex items-center space-x-4 p-4 bg-card rounded-lg border"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-card-foreground">Book a Call</div>
                    <div className="text-sm text-muted-foreground">20-minute free consultation</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-4 p-4 bg-card rounded-lg border"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-card-foreground">Call Direct</div>
                    <div className="text-sm text-muted-foreground">+44 07485 150407</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center space-x-4 p-4 bg-card rounded-lg border"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium text-card-foreground">Email Us</div>
                    <div className="text-sm text-muted-foreground">hello@sentodigital.com</div>
                  </div>
                </motion.div>
              </motion.div>
              
              {/* Quick Benefits */}
              <motion.div 
                className="bg-accent rounded-xl p-6"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="font-semibold text-accent-foreground mb-4">
                  What to expect on your call:
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Free audit of your current solar marketing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Custom strategy for your solar business</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>No-obligation pricing discussion for solar companies</span>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
            {/* Lead Form Replacement */}
            <div>
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;