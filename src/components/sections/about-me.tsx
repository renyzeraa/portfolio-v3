import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Link } from "../ui/link";

export function AboutMeSection() {
    return (
        <section id="about" className="py-16 sm:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-3xl sm:text-4xl mb-12 text-center">About Me</h2>
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        <div className="space-y-6">
                            <p className="text-base sm:text-lg">
                                Frontend Developer with extensive experience in building scalable and high-performance web applications. Skilled in JavaScript, TypeScript, and CSS, and proficient with modern frameworks such as React.js, Next.js, and Tailwind CSS.
                            </p>
                            <p className="text-base sm:text-lg">
                                Also experienced in backend technologies including Node.js and PHP, with a strong focus on microservices, serverless architecture, and RESTful APIs. Committed to delivering clean, efficient code and robust solutions that enhance user experience and business value.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="https://github.com/renyzeraa">
                                    <Github className="mr-2 h-4 w-4" /> GitHub
                                </Link>
                                <Link href="https://www.linkedin.com/in/renyzeraa">
                                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                                </Link>
                            </div>
                        </div>
                        <div className="mt-8 lg:mt-0">
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <Mail className="h-5 w-5 text-muted-foreground shrink-0" />
                                            <span className="break-all">renansilvaytb@gmail.com</span>
                                        </div>
                                        <div className="items-center gap-3 hidden">
                                            <Phone className="h-5 w-5 text-muted-foreground shrink-0" />
                                            <span>+55 (47) 92000-3040</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <MapPin className="h-5 w-5 text-muted-foreground shrink-0" />
                                            <span>Rio do Sul, SC - Brazil</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}