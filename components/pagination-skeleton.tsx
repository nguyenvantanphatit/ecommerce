import { Skeleton } from "./ui/skeleton";
export function PaginationSkeleton() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-4">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`relative overflow-hidden rounded-2xl shadow-lg ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
          >
            <Skeleton className={`w-full ${i === 0 ? "h-96" : "h-48"}`} />
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Skeleton className="h-10 w-[350px]" />
      </div>
    </>
  )
}

