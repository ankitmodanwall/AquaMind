import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Droplets } from 'lucide-react';

export default function WelcomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] text-center p-4">
      <div className="relative w-48 h-48 mb-6 animate-in fade-in zoom-in-50 duration-500 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/50 rounded-full blur-2xl"></div>
        <div className="relative flex items-center justify-center w-36 h-36 bg-background/80 backdrop-blur-sm rounded-full shadow-lg">
          <Droplets className="w-20 h-20 text-primary" strokeWidth={1.5} />
        </div>
      </div>
      <h1
        className="text-5xl font-bold font-headline tracking-tight text-primary animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300"
      >
        Welcome to AquaMind
      </h1>
      <p
        className="mt-4 max-w-2xl text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-6 duration-500 delay-400"
      >
        Your adventure into the world of groundwater conservation starts here. Learn, play, and make a difference!
      </p>
      <div
        className="mt-8 flex gap-4 animate-in fade-in slide-in-from-bottom-8 duration-500 delay-500"
      >
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Link href="/dashboard">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="/quiz">
            Take a Quiz
          </Link>
        </Button>
      </div>
    </div>
  );
}
