import { Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

export function WorkExperienceSection() {
    return (
        <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-muted/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-5xl">
                    <h2 className="text-3xl sm:text-4xl mb-12 text-center">Work Experience</h2>
                    <div className="space-y-6 sm:space-y-8">
                        <Card>
                            <CardHeader>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                                    <div className="flex-1">
                                        <CardTitle className="text-lg sm:text-xl">Mid Frontend Developer</CardTitle>
                                        <CardDescription className="text-base">DB1 Group</CardDescription>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Calendar className="h-4 w-4" />
                                        <span>nov 2025 - Present</span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm sm:text-base mb-4">
                                    <li>• Led frontend development team</li>
                                    <li>• Architected and implemented React-based dashboard used by 1M+ users</li>
                                    <li>• Mentored junior developers and conducted code reviews</li>
                                </ul>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="outline">React</Badge>
                                    <Badge variant="outline">TypeScript</Badge>
                                    <Badge variant="outline">Next.js</Badge>
                                    <Badge variant="outline">Tailwind CSS</Badge>
                                    <Badge variant="outline">.Net</Badge>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                                    <div className="flex-1">
                                        <CardTitle className="text-lg sm:text-xl">Mid Frontend Developer</CardTitle>
                                        <CardDescription className="text-base">Magazord Digital Commerce</CardDescription>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Calendar className="h-4 w-4" />
                                        <span>apr 2024 - nov 2025</span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm sm:text-base mb-4">
                                    <li>• Reduced JavaScript bundle sizes by over 50% through advanced optimization techniques, significantly cutting CDN costs and decreasing page load times for the end-user</li>
                                    <li>• Elevated Web Vitals performance metrics to the green/excellent zone across all company e-commerce websites, positively impacting SEO and user experience</li>
                                    <li>• Migration of queries from Ext to scalable and high-performance React components</li>
                                    <li>• Implementation of automated tests using Jest and Vitest</li>
                                    <li>• Development of the Zordon widget, an AI-powered chat for registering top-selling products</li>
                                </ul>
                            </CardContent>
                            <CardHeader>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                                    <div className="flex-1">
                                        <CardTitle className="text-lg sm:text-xl">Jr Frontend Developer</CardTitle>
                                        <CardDescription className="text-base">Magazord Digital Commerce</CardDescription>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Calendar className="h-4 w-4" />
                                        <span>dec 2023 - apr 2024</span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm sm:text-base mb-4">
                                    <li>• Led the migration of legacy components to a modern architecture using React.js, Next.js, and TypeScript, achieving a 30% improvement in rendering performance and enhancing code maintainability</li>
                                    <li>• Architected and developed micro frontends to promote product team autonomy, accelerating the CI/CD cycle and the delivery of new features</li>
                                    <li>• Drove application performance optimization by resolving bottlenecks and ensuring a fluid user experience, focusing on e-commerce conversion metrics and usability</li>
                                    <li>• Established a culture of quality by implementing automated frontend testing, ensuring system stability and preventing production errors</li>
                                </ul>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="outline">Typescript</Badge>
                                    <Badge variant="outline">React</Badge>
                                    <Badge variant="outline">Next.js</Badge>
                                    <Badge variant="outline">Micro Frontends</Badge>
                                    <Badge variant="outline">Git</Badge>
                                    <Badge variant="outline">Tailwindcss</Badge>
                                    <Badge variant="outline">SASS</Badge>
                                    <Badge variant="outline">AWS</Badge>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                                    <div className="flex-1">
                                        <CardTitle className="text-lg sm:text-xl">Jr Frontend Developer</CardTitle>
                                        <CardDescription className="text-base">IPM Sistemas</CardDescription>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Calendar className="h-4 w-4" />
                                        <span>jan 2022 - dec 2023</span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm sm:text-base mb-4">
                                    <li>• Architected and developed new modules for the Atende.net system, using modern JavaScript (ES6+), HTML5, and CSS3 to create scalable and high-performance solutions</li>
                                    <li>• Led accessibility initiatives (WAI-ARIA), optimizing navigation and usability to ensure an inclusive experience in compliance with market best practices</li>
                                    <li>• Refactored and maintained legacy code, applying Clean Code principles to increase system stability, eliminate bugs, and reduce technical debt</li>
                                    <li>• Responsible for optimizing the performance of critical modules, resulting in a significant reduction in loading time and directly improving user satisfaction</li>
                                    <li>• Ensured a consistent and fluid user experience across multiple devices (desktop, tablet, and mobile) by implementing responsive interfaces and components</li>
                                </ul>
                            </CardContent>
                            <CardHeader>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                                    <div className="flex-1">
                                        <CardTitle className="text-lg sm:text-xl">Trainee Frontend Developer</CardTitle>
                                        <CardDescription className="text-base">IPM Sistemas</CardDescription>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <Calendar className="h-4 w-4" />
                                        <span>aug 2021 - jan 2022</span>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm sm:text-base mb-4">
                                    <li>• Acted in Full Stack development, creating end-to-end solutions with PHP on the backend and Vanilla JavaScript on the frontend, ensuring the application's cohesion and efficiency</li>
                                    <li>• Developed dynamic and interactive interfaces with JavaScript, consuming RESTful APIs and styling with SASS for greater CSS maintainability and scalability</li>
                                    <li>• Applied Object-Oriented and SOLID concepts to ensure clear integration and efficient communication between the frontend and the backend</li>
                                </ul>
                                <div className="flex flex-wrap gap-2">
                                    <Badge variant="outline">HTML</Badge>
                                    <Badge variant="outline">CSS</Badge>
                                    <Badge variant="outline">JavaScript</Badge>
                                    <Badge variant="outline">jQuery</Badge>
                                    <Badge variant="outline">SASS</Badge>
                                    <Badge variant="outline">PHP</Badge>
                                    <Badge variant="outline">PostgreSQL</Badge>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}