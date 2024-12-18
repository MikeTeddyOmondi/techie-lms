export type SiteConfig = typeof siteConfig

export const siteConfig = {
    name: "Techie LMS",
    description:
        "Techie LMS.",
    mainNav: [
        {
            title: "Home",
            href: "/",
        },        
        {
            title: "Courses",
            href: "/courses",
        },
    ],
    links: {
        twitter: "https://twitter.com/shadcn",
        github: "https://github.com/shadcn/ui",
        docs: "https://ui.shadcn.com",
    },
}