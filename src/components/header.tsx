import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { useState } from "react";

export function Header() {
    const [activeSection, setActiveSection] = useState('about');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        setActiveSection(sectionId);
        setIsMenuOpen(false);
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    const navigationItems = [
        { id: 'about', label: 'About' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'education', label: 'Education' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <h1 className="text-xl sm:text-2xl tracking-tight">Renan Leandro da Silva</h1>
                    </div>

                    <nav className="hidden md:flex items-center space-x-1">
                        {navigationItems.map((item) => (
                            <Button
                                key={item.id}
                                variant={activeSection === item.id ? 'default' : 'ghost'}
                                size="sm"
                                onClick={() => scrollToSection(item.id)}
                                className="px-4"
                            >
                                {item.label}
                            </Button>
                        ))}
                    </nav>

                    <div className="md:hidden">
                        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="sm" className="px-2">
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-64">
                                <SheetHeader>
                                    <SheetTitle className="hidden"></SheetTitle>
                                    <SheetDescription className="hidden"></SheetDescription>
                                </SheetHeader>
                                <div className="flex flex-col space-y-4 mt-2">
                                    {navigationItems.map((item) => (
                                        <Button
                                            key={item.id}
                                            variant={activeSection === item.id ? 'default' : 'ghost'}
                                            onClick={() => scrollToSection(item.id)}
                                            className="justify-start"
                                        >
                                            {item.label}
                                        </Button>
                                    ))}
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}