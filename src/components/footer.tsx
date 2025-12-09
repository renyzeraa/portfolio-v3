import { Mail, Phone } from "lucide-react";
import { Separator } from "./ui/separator";
import { Link } from "./ui/link";

export function Footer() {
    const year = new Date().getFullYear()

    return (
        <footer className="border-t py-12 sm:py-16 bg-background" id="contact">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                    <h3 className="text-xl sm:text-2xl mb-4">Let's Work Together</h3>
                    <p className="text-muted-foreground mb-6 text-sm sm:text-base">
                        I'm always open to discussing new opportunities and interesting projects.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                        <Link href="mailto:renansilvaytb@gmail.com" className="w-full sm:w-auto">
                            <Mail className="mr-2 h-4 w-4" />
                            Email Me
                        </Link>
                        <Link href="tel:+5547920003040" className="w-full sm:w-auto hidden">
                            <Phone className="mr-2 h-4 w-4" />
                            Call Me
                        </Link>
                    </div>
                    <Separator className="my-8" />
                    <p className="text-sm text-muted-foreground">
                        © {year} Renan Leandro da Silva Developer. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}