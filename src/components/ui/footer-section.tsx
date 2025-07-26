"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Moon, Send, Sun } from "lucide-react"

function Footerdemo() {
  const [isDarkMode, setIsDarkMode] = React.useState(true)

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <div className="mb-4">
              <picture>
                <source media="(prefers-color-scheme: dark)" srcSet="https://media.discordapp.net/attachments/996663635860525057/1398332562811785286/Accreditry-W.png?ex=6885a2ee&is=6884516e&hm=7121f681a2d189a6f687bcce9545089bbec116bc4cb61bf40bb622883ab5ed9c&=&format=webp&quality=lossless&width=1938&height=432" />
                <img src="https://media.discordapp.net/attachments/996663635860525057/1398332562530893845/Accreditry.png?ex=6885a2ee&is=6884516e&hm=cd0ef0dab9cf6865090b54b80e269d62412adc708d43e83b1571cd7739084157&=&format=webp&quality=lossless&width=1938&height=432" alt="Accreditry Logo" className="h-8 w-auto" />
              </picture>
            </div>
            <p className="mb-6 text-muted-foreground">
              Transform your online reputation with genuine reviews from real local Americans. No fake accounts, no bots - just authentic voices that drive real results.
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <nav className="space-y-2 text-sm">
              <a href="#services" className="block transition-colors hover:text-primary">
                How It Works
              </a>
              <a href="#pricing" className="block transition-colors hover:text-primary">
                Pricing
              </a>
              <a href="#faq" className="block transition-colors hover:text-primary">
                FAQ
              </a>
              <a href="#free-trial" className="block transition-colors hover:text-primary">
                Free Trial
              </a>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="space-y-2 text-sm not-italic">
              <p>Transform your business</p>
              <p>with authentic reviews</p>
              <p>Phone: (310) 736-1406</p>
              <p>Email: support@accreditry.com</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Theme</h3>
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
              <Moon className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2025 Accreditry. All rights reserved. Executed by Webtic Studio
          </p>
          <nav className="flex gap-4 text-sm">
            <a href="#" className="transition-colors hover:text-primary">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Terms of Service
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Cookie Settings
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export { Footerdemo }
