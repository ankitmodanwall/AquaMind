import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Droplets, GaugeCircle, BookOpen, MessagesSquare, Info, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const features = [
  {
    icon: GaugeCircle,
    title: "Personalized Dashboard",
    description: "Track your learning progress, view quiz scores, and see your achievements all in one place.",
  },
  {
    icon: BookOpen,
    title: "Interactive Quizzes",
    description: "Test your knowledge with engaging quizzes and get instant, AI-powered personalized feedback.",
  },
  {
    icon: Info,
    title: "Resource Library",
    description: "Explore a curated collection of articles, videos, and simulations to deepen your understanding.",
  },
  {
    icon: MessagesSquare,
    title: "Community Forum",
    description: "Connect with others, share ideas, and discuss important topics in the community forum.",
  },
];


export default function AboutPage() {
  return (
    <div className="flex flex-col gap-12 sm:gap-16">
      <header className="space-y-4 text-center">
        <div className="inline-block rounded-full bg-primary/10 p-4">
          <Droplets className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-4xl font-bold font-headline tracking-tight sm:text-5xl">
          About AquaMind
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
          Our mission is to empower individuals with the knowledge and tools to understand, conserve, and protect our planet's most precious hidden resource: groundwater.
        </p>
      </header>

      <div className="grid grid-cols-1 items-center gap-8 rounded-lg border bg-card p-8 md:grid-cols-2 md:gap-12">
        <div className="relative h-64 w-full md:h-full">
          <Image
            src="https://picsum.photos/seed/about1/600/400"
            alt="Illustration of a clean water spring in a lush forest"
            data-ai-hint="clean water"
            fill
            className="rounded-md object-cover"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-3xl font-bold font-headline">What is Groundwater?</h2>
          <p className="text-muted-foreground">
            Groundwater is the water found underground in the cracks and spaces in soil, sand, and rock. It is stored in and moves slowly through geologic formations called aquifers. It is a vital source of fresh water for drinking, agriculture, and ecosystems around the world.
          </p>
          <p className="text-muted-foreground">
            Unfortunately, this critical resource is facing threats from over-extraction and pollution. AquaMind was created to raise awareness and inspire action to protect it.
          </p>
        </div>
      </div>

      <div className="space-y-8 text-center">
        <h2 className="text-3xl font-bold font-headline">Our Features</h2>
        <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
          AquaMind provides a fun and interactive learning experience through a variety of features designed to educate and engage.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="text-left">
              <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-3">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="rounded-lg bg-accent/50 p-8 text-center">
        <h2 className="text-3xl font-bold font-headline text-accent-foreground">Join the Mission</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-accent-foreground/80">
          Start your journey to become a groundwater champion today. Take a quiz, explore our resources, and make a difference.
        </p>
        <div className="mt-6">
          <Button asChild size="lg">
            <Link href="/dashboard">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}