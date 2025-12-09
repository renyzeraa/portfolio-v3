import { Award, Calendar, GraduationCap } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function EducationSection() {
    return (
        <section id="education" className="py-16 sm:py-20 lg:py-24 bg-muted/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-6xl">
                    <h2 className="text-3xl sm:text-4xl mb-12 text-center">Education & Certificates</h2>
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                        <div>
                            <h3 className="text-xl sm:text-2xl mb-6 flex items-center gap-2">
                                <GraduationCap className="h-5 w-5" />
                                Education
                            </h3>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg sm:text-xl">Systems Analysis and Development</CardTitle>
                                    <CardDescription className="text-base">Estácio</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                                        <Calendar className="h-4 w-4" />
                                        <span>2024 - 2027</span>
                                    </div>
                                    <p className="text-sm sm:text-base">
                                        This degree program focuses on the development, analysis, and management of computer systems and software. It equips students with the technical skills necessary for designing, implementing, and maintaining software applications, databases, and IT systems. The program covers key areas such as programming, algorithms, system architecture, web development, and software engineering, with an emphasis on solving real-world technological problems. Graduates are prepared to work in various sectors, developing and supporting innovative technological solutions for businesses and organizations.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <div>
                            <h3 className="text-xl sm:text-2xl mb-6 flex items-center gap-2">
                                <Award className="h-5 w-5" />
                                Certificates
                            </h3>
                            <div className="space-y-4">
                                <Card>
                                    <CardHeader className="pb-3">
                                        <CardTitle className="text-base sm:text-lg">Explorer FullStack</CardTitle>
                                        <CardDescription>Rockeseat</CardDescription>
                                    </CardHeader>
                                    <CardContent className="pt-0">
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Calendar className="h-4 w-4" />
                                            <span>Issued: 2022</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}