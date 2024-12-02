import Link from "next/link";
import { Footer } from "@/components/footer";
import { SiteHeader } from "@/components/site-header";
import CoursesCatalog from "@/components/courses-catalog";

export default function CoursePage() {
  return (
    <>
      <SiteHeader />
      <section className="flex min-h-screen w-full flex-col items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48">
        <h2 className="text-5xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Courses
        </h2>
        <CoursesCatalog />
      </section>
      <Footer />
    </>
  );
}
