
"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Mail, Globe, CheckCircle, Phone, Sparkles, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { toast } from "@/hooks/use-toast"

interface ContactFormProps {
  onSubmit?: (data: FormData) => void
}

interface FormData {
  name: string
  email: string
  businessUrl: string
}

const EnhancedContactForm: React.FC<ContactFormProps> = ({ 
  onSubmit = () => {} 
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    businessUrl: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    toast({
      title: "Free Trial Requested!",
      description: "We'll follow up with your trial details via email within 24 hours."
    });
    
    onSubmit(formData)
    setIsSubmitting(false)
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      businessUrl: ''
    });
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const benefits = [
    "No credit card required",
    "24-hour response time", 
    "Free consultation included"
  ]

  return (
    <div className="w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6"
        >
          <Sparkles className="w-4 h-4" />
          Basic Details
        </motion.div>
        
        <h3 className="text-4xl font-bold text-foreground mb-4">Get Your Free Review Trial</h3>
        
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Ready to see the difference authentic reviews can make? Start with a free trial review today.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50 shadow-2xl rounded-3xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid gap-8 md:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-3"
              >
                <Label htmlFor="name" className="text-lg font-semibold flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Your Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="h-14 text-lg bg-background/50 border-2 focus:border-primary transition-all duration-300 rounded-xl"
                  placeholder="Enter your full name"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-3"
              >
                <Label htmlFor="email" className="text-lg font-semibold flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  Contact Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="h-14 text-lg bg-background/50 border-2 focus:border-primary transition-all duration-300 rounded-xl"
                  placeholder="your@email.com"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-3"
              >
                <Label htmlFor="businessUrl" className="text-lg font-semibold flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  Google Business Profile URL
                </Label>
                <Input
                  id="businessUrl"
                  type="url"
                  value={formData.businessUrl}
                  onChange={(e) => handleInputChange('businessUrl', e.target.value)}
                  className="h-14 text-lg bg-background/50 border-2 focus:border-primary transition-all duration-300 rounded-xl"
                  placeholder="https://business.google.com/..."
                  required
                />
                <p className="text-sm text-muted-foreground mt-2">
                  We'll analyze your current review profile to create the perfect strategy
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="pt-8"
            >
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-16 text-xl font-bold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 group rounded-xl"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <>
                    Start My Free Trial
                    <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>

              <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    {benefit}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="text-center mt-8"
              >
                <div className="flex items-center justify-center gap-2 text-lg font-semibold text-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  Call us: 
                  <a 
                    href="tel:+13107361406" 
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    +1 (310) 736-1406
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </form>
        </Card>
      </motion.div>
    </div>
  )
}

export default EnhancedContactForm
