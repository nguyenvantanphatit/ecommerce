// import { Suspense } from "react"
// import { BlogList } from "./components/blog-list"
// import { PaginationSkeleton } from "@/components/pagination-skeleton"

// export default function BlogPage({
//   searchParams,
// }: {
//   searchParams: { page?: string }
// }) {
//   const page = Number(searchParams?.page) || 1

//   return (
//     <div className="container mx-auto py-10 ">
//       <h1 className="text-4xl font-bold text-center mb-8">Tin tức</h1>
//       <Suspense fallback={<PaginationSkeleton />}>
//         <BlogList initialPage={page} />
//       </Suspense>
//     </div>
//   )
// }

