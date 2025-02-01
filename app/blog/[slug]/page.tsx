// "use client"

// import { useEffect } from "react"
// import Image from "next/image"
// import Link from "next/link"
// import { useRecentlyViewedStore } from "@/lib/store"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// const blogPost = {
//   id: 1,
//   title: "The Future of AI in Everyday Life",
//   content: `
//     <p>Artificial Intelligence (AI) is rapidly evolving and integrating into our daily lives in ways we might not even realize. From smart home devices to personalized recommendations on streaming platforms, AI is quietly revolutionizing how we interact with technology and the world around us.</p>
//     <h2>1. Smart Home Automation</h2>
//     <p>AI-powered smart home systems are becoming increasingly sophisticated. They can learn your habits and preferences, adjusting lighting, temperature, and even music based on your daily routines. Imagine walking into your home after a long day, and everything is set just the way you like it, without you having to lift a finger.</p>
//     <h2>2. Healthcare Advancements</h2>
//     <p>In the medical field, AI is making significant strides. From early disease detection through image analysis to personalized treatment plans based on genetic data, AI is enhancing diagnostic accuracy and treatment efficacy. Wearable devices powered by AI can monitor vital signs and alert users and healthcare providers to potential issues before they become serious.</p>
//     <h2>3. Education and Personalized Learning</h2>
//     <p>AI is transforming education by offering personalized learning experiences. Adaptive learning platforms can assess a student's strengths and weaknesses, tailoring content and pacing to individual needs. This technology has the potential to make education more accessible and effective for learners of all ages and backgrounds.</p>
//     <p>As AI continues to advance, we can expect even more innovative applications that will enhance our daily lives in ways we can't yet imagine. The key will be to harness this technology responsibly, ensuring it benefits society as a whole while addressing concerns about privacy and ethics.</p>
//   `,
//   image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//   author: "Jane Doe",
//   date: "2023-05-15",
// }

// const relatedPosts = [
//   {
//     id: 2,
//     title: "Machine Learning: A Beginner's Guide",
//     excerpt: "Dive into the basics of machine learning and its applications.",
//     image:
//       "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//   },
//   {
//     id: 3,
//     title: "The Ethics of AI Development",
//     excerpt: "Exploring the moral implications of advanced AI systems.",
//     image:
//       "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//   },
//   {
//     id: 4,
//     title: "AI in Art: Creative Revolution",
//     excerpt: "How AI is changing the landscape of creative industries.",
//     image:
//       "https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
//   },
// ]

// export default function BlogDetails() {
//   const { recentlyViewed, addRecentlyViewed } = useRecentlyViewedStore()

//   useEffect(() => {
//     addRecentlyViewed({
//       id: blogPost.id,
//       title: blogPost.title,
//       excerpt: blogPost.content.substring(0, 100) + "...",
//       image: blogPost.image,
//     })
//   }, [])

//   return (
//     <div className="container mx-auto py-8 px-4">
//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Main content */}
//         <div className="md:w-3/4">
//           <h1 className="text-3xl font-bold mb-4">{blogPost.title}</h1>
//           <Image
//             src={blogPost.image || "/placeholder.svg"}
//             alt={blogPost.title}
//             width={1200}
//             height={600}
//             className="w-full h-auto rounded-lg mb-4"
//           />
//           <div className="mb-4 text-sm text-gray-600">
//             <span>By {blogPost.author} | </span>
//             <span>{blogPost.date}</span>
//           </div>
//           <div dangerouslySetInnerHTML={{ __html: blogPost.content }} className="prose max-w-none" />
//         </div>

//         {/* Sidebar */}
//         <div className="md:w-1/4">
//           <h2 className="text-2xl font-bold mb-4">Related Posts</h2>
//           <div className="space-y-4">
//             {relatedPosts.map((post) => (
//               <Card key={post.id}>
//                 <CardHeader>
//                   <Image
//                     src={post.image || "/placeholder.svg"}
//                     alt={post.title}
//                     width={400}
//                     height={200}
//                     className="w-full h-40 object-cover rounded-t-lg"
//                   />
//                 </CardHeader>
//                 <CardContent>
//                   <CardTitle className="text-lg mb-2">{post.title}</CardTitle>
//                   <p className="text-sm text-gray-600">{post.excerpt}</p>
//                   <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline mt-2 inline-block">
//                     Read more
//                   </Link>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Recently viewed posts */}
//       <div className="mt-12">
//         <h2 className="text-2xl font-bold mb-4">Recently Viewed</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
//           {recentlyViewed.map((post) => (
//             <Card key={post.id}>
//               <CardHeader>
//                 <Image
//                   src={post.image || "/placeholder.svg"}
//                   alt={post.title}
//                   width={400}
//                   height={200}
//                   className="w-full h-40 object-cover rounded-t-lg"
//                 />
//               </CardHeader>
//               <CardContent>
//                 <CardTitle className="text-lg mb-2">{post.title}</CardTitle>
//                 <p className="text-sm text-gray-600">{post.excerpt}</p>
//                 <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline mt-2 inline-block">
//                   Read more
//                 </Link>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

