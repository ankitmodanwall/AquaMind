import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { generateCommunityThreads } from "@/ai/flows/community-threads";
import { PlusCircle } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

async function CommunityThreads() {
  const data = await generateCommunityThreads();
  const threads = data.threads || [];

  return (
    <div className="overflow-hidden rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[60%]">Topic</TableHead>
            <TableHead className="text-center">Replies</TableHead>
            <TableHead className="text-right">Last Post</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {threads.map((thread) => (
            <TableRow key={thread.id} className="cursor-pointer hover:bg-muted/50">
              <TableCell>
                <div className="font-medium">{thread.title}</div>
                <div className="text-sm text-muted-foreground">
                  by {thread.author}
                </div>
              </TableCell>
              <TableCell className="text-center">{thread.replies}</TableCell>
              <TableCell className="text-right text-muted-foreground">
                {thread.lastPost}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function CommunityThreadsSkeleton() {
  return (
    <div className="overflow-hidden rounded-lg border">
       <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[60%]">Topic</TableHead>
              <TableHead className="text-center">Replies</TableHead>
              <TableHead className="text-right">Last Post</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...Array(4)].map((_, i) => (
              <TableRow key={i}>
                <TableCell>
                  <Skeleton className="h-5 w-3/4" />
                  <Skeleton className="mt-2 h-4 w-1/4" />
                </TableCell>
                <TableCell className="text-center">
                  <Skeleton className="h-5 w-1/2 mx-auto" />
                </TableCell>
                <TableCell className="text-right">
                  <Skeleton className="h-5 w-1/2 ml-auto" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </div>
  )
}

export default function CommunityPage() {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold font-headline tracking-tight">
            Community Forum
          </h1>
          <p className="text-muted-foreground">
            Connect, share insights, and discuss groundwater issues.
          </p>
        </div>
        <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
          <PlusCircle className="mr-2 h-4 w-4" />
          Start a Discussion
        </Button>
      </header>
      <Suspense fallback={<CommunityThreadsSkeleton />}>
        <CommunityThreads />
      </Suspense>
    </div>
  );
}
