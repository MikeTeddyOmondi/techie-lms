import Link from "next/link";
import {
  ArrowRight,
  Code,
  Zap,
  Package,
  Layers,
  LucideFileCog,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Contact } from "@/components/contact";
import { Stats } from "@/components/stats";
import { Case } from "@/components/cases";
import { BlogSection } from "@/components/blog-section";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <section className="flex min-h-screen w-full flex-col items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="mx-auto flex max-w-[800px] flex-grow flex-col items-center justify-center px-4 md:px-6">
          <div className="flex flex-col items-center space-y-5 text-center sm:space-y-6">
            <h1 className="text-5xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Techie LMS
            </h1>
            <p className="mx-auto max-w-prose text-base text-muted-foreground md:text-xl">
              Your web platform for learning on the go.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Button asChild>
                <Link href="/login">
                  Get Started <ArrowRight className="ml-2 size-5" />
                </Link>
              </Button>
              <Button variant={"outline"} asChild>
                <Link href="/courses">
                  Courses <LucideFileCog className="ml-2 size-5" />
                </Link>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 rounded-full bg-secondary px-3 py-1 text-sm">
                <Code size={16} />
                <span>Next.js</span>
              </div>
              <div className="flex items-center space-x-2 rounded-full bg-secondary px-3 py-1 text-sm">
                <Code size={16} />
                <span>TypeScript</span>
              </div>
              <div className="flex items-center space-x-2 rounded-full bg-secondary px-3 py-1 text-sm">
                <Package size={16} />
                <span>TailwindCSS</span>
              </div>
              <div className="flex items-center space-x-2 rounded-full bg-secondary px-3 py-1 text-sm">
                <Layers size={16} />
                <span>Shadcn/ui</span>
              </div>
              <div className="flex items-center space-x-2 rounded-full bg-secondary px-3 py-1 text-sm">
                <Zap size={16} />
                <span>Prettier</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 text-center text-sm text-muted-foreground">
          Developed by{" "}
          <Link
            href="https://www.ranckosolutions.com/"
            className="transition-colors hover:text-primary"
          >
            Rancko Solutions
          </Link>
        </div>
      </section>
      <Stats />
      <Case />
      <BlogSection />
      <Contact />
      <Footer />
    </>
  );
}
