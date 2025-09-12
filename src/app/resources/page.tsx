import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { resources } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export default function ResourcesPage() {
  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-3xl font-bold font-headline tracking-tight">
          Resource Library
        </h1>
        <p className="text-muted-foreground">
          Explore articles, videos, and more to deepen your understanding.
        </p>
      </header>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => {
          const placeholder = PlaceHolderImages.find(p => p.id === resource.imageId);
          return (
            <Card
              key={resource.id}
              className="group flex transform-gpu flex-col overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-xl"
            >
              <CardHeader className="p-0">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={placeholder?.imageUrl || `https://picsum.photos/seed/${resource.id}/600/400`}
                    alt={placeholder?.description || resource.title}
                    data-ai-hint={placeholder?.imageHint || 'water conservation'}
                    fill
                    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge
                    variant="default"
                    className="absolute right-3 top-3 bg-accent text-accent-foreground"
                  >
                    {resource.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col p-4">
                <CardTitle className="mb-2 text-lg font-bold leading-tight">
                  {resource.title}
                </CardTitle>
                <p className="flex-1 text-sm text-muted-foreground">
                  {resource.description}
                </p>
                <Link
                  href={resource.link}
                  target="_blank"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
