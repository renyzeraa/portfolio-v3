import { Mail } from "lucide-react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export function HeroSection() {
    function scrollToSection(sectionId: string) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <section className="py-16 sm:py-20 lg:py-24 text-center bg-linear-to-br from-background to-muted">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-3xl">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6">FrontEnd Developer</h1>
                    <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Passionate about creating beautiful, functional web applications with modern technologies
                    </p>
                    <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
                        <Badge variant="secondary" className="text-sm">React</Badge>
                        <Badge variant="secondary" className="text-sm">TypeScript</Badge>
                        <Badge variant="secondary" className="text-sm">Next.js</Badge>
                        <Badge variant="secondary" className="text-sm">React Native</Badge>
                        <Badge variant="secondary" className="text-sm">Node.js</Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" className="w-full sm:w-auto" onClick={() => scrollToSection('about')}>
                            Learn More
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto hidden" onClick={() => scrollToSection('contact')}>
                            <Mail className="mr-2 h-4 w-4" />
                            Contact Me
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}