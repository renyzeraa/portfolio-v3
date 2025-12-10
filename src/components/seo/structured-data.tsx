
export function StructuredDataPerson() {
    const data = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://devrenansilva.netlify.app/#renan",
        "name": "Renan Leandro da Silva",
        "jobTitle": "Programador",
        "url": "https://devrenansilva.netlify.app",
        "image": "https://devrenansilva.netlify.app/renan.jpg",
        "sameAs": [
            "https://github.com/renyzeraa",
            "https://www.linkedin.com/in/renyzeraa",
        ],
        "worksFor": {
            "@type": "Organization",
            "name": "Freelance/Projetos",
            "url": "https://devrenansilva.netlify.app"
        }
    };
    return (
        <script type="application/ld+json">
            {JSON.stringify(data)}
        </script>
    );
}

export function StructuredDataWebSite() {
    const data = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://devrenansilva.netlify.app/#website",
        "url": "https://devrenansilva.netlify.app/",
        "name": "Renan Leandro da Silva — Portfólio",
        "inLanguage": "pt-BR",
        "publisher": {
            "@type": "Person",
            "@id": "https://devrenansilva.netlify.app/#renan"
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://devrenansilva.netlify.app/?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };
    return (
        <script type="application/ld+json">
            {JSON.stringify(data)}
        </script>
    );
}
