import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Comparison = () => {
  const struggles = [
    "Wasting hours on failing solar ad campaigns",
    "Constantly tweaking your solar website copy with no results",
    "Spending money on solar leads that never convert",
    "Feeling overwhelmed by all the solar marketing options",
    "Setting up funnels that just don't work",
    "Posting on social media with little engagement",
    "Trying to track ROI but getting confused by the data",
    "Staying up late trying to figure out what's wrong"
  ];

  const benefits = [
    "Strategic solar marketing planning & execution",
    "Solar lead generation systems that work 24/7",
    "Professional solar brand positioning & messaging",
    "Data-driven solar campaign optimization",
    "Expert knowledge of latest marketing trends",
    "Dedicated support & ongoing optimization",
    "ROI tracking & performance analytics",
    "Time to focus on running your business"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Choice Is Clear
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the difference between handling marketing yourself vs. partnering with experts
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Without Us Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-red-50 border border-red-200 rounded-2xl p-8"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <XCircle className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-red-800 mb-2">
                  Without Professional Help
                </h3>
                <p className="text-red-600">
                  Going it alone with marketing
                </p>
              </div>

              <motion.ul
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {struggles.slice(0, 4).map((struggle, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <XCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-red-700">
                      {struggle}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>

              <div className="mt-8 p-4 bg-red-100 rounded-lg">
                <p className="text-red-800 font-medium text-center">
                  Result: Constant frustration, wasted money, and feeling like your solar business is spinning its wheels
                </p>
              </div>
            </motion.div>

            {/* With Us Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-green-50 border border-green-200 rounded-2xl p-8 relative"
            >
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Recommended
                </span>
              </div>

              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-800 mb-2">
                  With Our Expert Team
                </h3>
                <p className="text-green-600">
                  Professional marketing partnership
                </p>
              </div>

              <motion.ul
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {benefits.slice(0, 4).map((benefit, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-green-700 font-medium">
                      {benefit}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>

              <div className="mt-8 p-4 bg-green-100 rounded-lg">
                <p className="text-green-800 font-medium text-center">
                  Result: Consistent solar lead flow, optimized ad spend, and time to focus on your solar business
                </p>
              </div>

              <div className="mt-6 text-center">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white"
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
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-lg">
            Don't let another month go by with inconsistent results.{" "}
            <span className="font-semibold text-primary">
              Book your free consultation today.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Comparison;