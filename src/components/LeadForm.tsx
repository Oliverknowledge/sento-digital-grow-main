
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, ArrowLeft, CheckCircle, User, Mail, Building, Globe, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

interface FormData {
  fullName: string;
  email: string;
  businessName: string;
  websiteUrl: string;
  helpDescription: string;
}

const LeadForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    businessName: "",
    websiteUrl: "",
    helpDescription: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { toast } = useToast();
  const totalSteps = 3;

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return formData.fullName.trim() !== "" && formData.email.trim() !== "";
      case 2:
        return formData.businessName.trim() !== "";
      case 3:
        return formData.helpDescription.trim() !== "";
      default:
        return false;
    }
  };

  const handleNext = async () => {
    if (isSubmitting || isSubmitted) return;
    if (validateStep(currentStep)) {
      if (currentStep < totalSteps) {
        setCurrentStep(prev => prev + 1);
      } else {
        setIsSubmitting(true);
        await handleSubmit();
        setIsSubmitting(false);
      }
    } else {
      toast({
        title: "Please fill in all required fields",
        description: "All fields in this step are required to continue.",
        variant: "destructive"
      });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const SERVICE_ID = 'service_i9kkfjt';
  const TEMPLATE_ID = 'template_z171f4d';
  const PUBLIC_KEY = 'GDbdwyjsbt20fbIPa';

  const handleSubmit = async () => {
    // Store form data in localStorage for potential follow-up
    localStorage.setItem('leadFormData', JSON.stringify(formData));

    // Send email via EmailJS
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, { ...formData }, PUBLIC_KEY);
      setIsSubmitted(true);
      toast({
        title: 'Form submitted!',
        description: 'We have received your details and will be in touch soon.',
      });
    } catch (error) {
      toast({
        title: 'Error sending email',
        description: 'There was a problem sending your details. Please try again later.',
        variant: 'destructive',
      });
      return; // Don't redirect if email fails
    }

    // Redirect to Calendly
    window.open('https://calendly.com/hello-sentodigital/free-strategy-call', '_blank');
  };

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            key="step1"
            variants={stepVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="text-center space-y-2">
              <User className="w-12 h-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">Let's get to know you</h3>
              <p className="text-muted-foreground">Tell us a bit about yourself</p>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  placeholder="Your full name"
                  className="h-12"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your.email@company.com"
                  className="h-12"
                />
              </div>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            key="step2"
            variants={stepVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="text-center space-y-2">
              <Building className="w-12 h-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">Tell us about your business</h3>
              <p className="text-muted-foreground">Help us understand your company</p>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="businessName">Business Name *</Label>
                <Input
                  id="businessName"
                  value={formData.businessName}
                  onChange={(e) => handleInputChange('businessName', e.target.value)}
                  placeholder="Your company name"
                  className="h-12"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="websiteUrl">Website URL (Optional)</Label>
                <Input
                  id="websiteUrl"
                  type="url"
                  value={formData.websiteUrl}
                  onChange={(e) => handleInputChange('websiteUrl', e.target.value)}
                  placeholder="https://yourwebsite.com"
                  className="h-12"
                />
              </div>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            key="step3"
            variants={stepVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            <div className="text-center space-y-2">
              <MessageSquare className="w-12 h-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">How can we help?</h3>
              <p className="text-muted-foreground">Describe your current challenges</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="helpDescription">What do you need help with? *</Label>
              <Textarea
                id="helpDescription"
                value={formData.helpDescription}
                onChange={(e) => handleInputChange('helpDescription', e.target.value)}
                placeholder="Tell us about your current marketing challenges, goals, or what you'd like to improve..."
                rows={6}
                className="resize-none"
              />
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="lead-form">
      <div className="container mx-auto px-0">
        <div className="max-w-xl mx-auto">
          {/* Prominent Subtitle */}
          <div className="text-center mb-6">
            <span className="text-lg md:text-xl font-bold text-foreground tracking-wide">Start your free consultation</span>
          </div>

          {/* Form Card */}
          <Card className="border shadow-sm">
            <CardContent className="p-6">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <CheckCircle className="w-20 h-20 text-green-500 mb-6" />
                  <h3 className="text-2xl font-bold mb-2 text-green-700">Thank you!</h3>
                  <p className="text-lg text-muted-foreground text-center max-w-md">Your details have been received. We'll be in touch soon and you can now book your free call.</p>
                </div>
              ) : (
                <>
                  {/* Progress Bar inside card */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-medium text-muted-foreground">
                        Step {currentStep} of {totalSteps}
                      </span>
                      <span className="text-xs font-medium text-primary">
                        {Math.round((currentStep / totalSteps) * 100)}% Complete
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1">
                      <motion.div 
                        className="bg-primary h-1 rounded-full"
                        initial={{ width: "33%" }}
                        animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    {renderStep()}
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-6">
                    <Button
                      variant="outline"
                      onClick={handleBack}
                      disabled={currentStep === 1 || isSubmitting || isSubmitted}
                      className="flex items-center gap-2"
                      type="button"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </Button>

                    <Button
                      onClick={handleNext}
                      className="flex items-center gap-2 bg-primary hover:bg-primary-light"
                      disabled={isSubmitting || isSubmitted}
                      type="button"
                    >
                      {currentStep === totalSteps ? (
                        <>
                          Book Free Call
                          <CheckCircle className="w-4 h-4" />
                        </>
                      ) : (
                        <>
                          Continue
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Trust Indicators further down */}
          <div className="text-center mt-8">
            <p className="text-xs text-muted-foreground">
              ✓ No spam &nbsp;&nbsp; ✓ Free consultation &nbsp;&nbsp; ✓ No long-term contracts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
