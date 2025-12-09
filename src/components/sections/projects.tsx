import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Link } from "../ui/link";

export function ProjectsSection() {
    return (
        <section id="projects" className="py-16 sm:py-20 lg:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <h2 className="text-3xl sm:text-4xl mb-12 text-center">Projects</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="h-full flex flex-col">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    Ignite Timer
                                    <ExternalLink className="h-4 w-4" />
                                </CardTitle>
                                <CardDescription>
                                    Timer app for task management
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col">
                                <p className="text-sm text-muted-foreground mb-4 flex-1">
                                    A timer application for managing time in a specific project under development.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <Badge variant="secondary">React</Badge>
                                    <Badge variant="secondary">TypeScript</Badge>
                                    <Badge variant="secondary">Tailwind</Badge>
                                    <Badge variant="secondary">Zustand</Badge>
                                    <Badge variant="secondary">Shadcn-ui</Badge>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <Link href="https://github.com/renyzeraa/ignite-timer" className="flex-1">
                                        <Github className="mr-2 h-4 w-4" />
                                        Code
                                    </Link>
                                    <Link href="https://ignite-timer-blond-two.vercel.app/" className="flex-1">
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Demo
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="h-full flex flex-col">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    Work Time Calculator
                                    <ExternalLink className="h-4 w-4" />
                                </CardTitle>
                                <CardDescription>
                                    An app that calculates the exact time you can leave work.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col">
                                <p className="text-sm text-muted-foreground mb-4 flex-1">
                                    A fun and simple app to calculate when you can leave work! 🎉 If you complete your full shift, you'll get a confetti animation to celebrate. Perfect for adding some excitement to your workday!
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <Badge variant="secondary">React</Badge>
                                    <Badge variant="secondary">TypeScript</Badge>
                                    <Badge variant="secondary">Tailwind</Badge>
                                    <Badge variant="secondary">Zustand</Badge>
                                    <Badge variant="secondary">Shadcn-ui</Badge>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <Link href="https://github.com/renyzeraa/work-time-calculator" className="flex-1">
                                        <Github className="mr-2 h-4 w-4" />
                                        Code
                                    </Link>
                                    <Link href="https://work-time-calculator-seven.vercel.app/" className="flex-1">
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Demo
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="h-full flex flex-col">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-lg">
                                    Work Time Calculator
                                    <ExternalLink className="h-4 w-4" />
                                </CardTitle>
                                <CardDescription>
                                    Game app.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col">
                                <p className="text-sm text-muted-foreground mb-4 flex-1">
                                    This app combines the Pomodoro Technique with physical exercise for those who spend a lot of time in front of the computer.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <Badge variant="secondary">TypeScript</Badge>
                                    <Badge variant="secondary">Next.js</Badge>
                                    <Badge variant="secondary">Tailwind</Badge>
                                    <Badge variant="secondary">Zustand</Badge>
                                    <Badge variant="secondary">Shadcn-ui</Badge>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <Link href="https://github.com/renyzeraa/move-it" className="flex-1">
                                        <Github className="mr-2 h-4 w-4" />
                                        Code
                                    </Link>
                                    <Link href="https://app-move-it-kohl.vercel.app/" className="flex-1">
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Demo
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}