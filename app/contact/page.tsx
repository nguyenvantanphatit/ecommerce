
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <>
      <div className="flex min-h-[70vh] w-full items-center justify-center p-6 md:p-10">
      <div className='absolute top-0 -left-96'>
          <svg className='animate-spin-slow' xmlns="http://www.w3.org/2000/svg" width="922" height="922" viewBox="0 0 922 922"><g fill="none" fillRule="evenodd"><circle cx="461" cy="461" r="389.236" stroke="#D9D9D9" opacity=".535"></circle><circle cx="461" cy="461" r="460.5" stroke="#D9D9D9" opacity=".535"></circle><circle cx="230.7" cy="149.733" r="7.2" fill="#1D4169"></circle><circle cx="10.7" cy="367.533" r="7.2" fill="#244E9D"></circle><circle cx="276.2" cy="38.533" r="7.2" fill="#00BFD6"></circle></g></svg>
        </div>
        <div className="w-full">
          <div className="w-full space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Contact Us</h1>
              <p className="text-gray-500 dark:text-gray-400">Please fill in the form below to get in touch.</p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 ">
              <div>
                <section
                  className="relative"
                  style={{
                    aspectRatio: '1213/667',
                    backgroundColor: 'tomato',
                    maskImage:
                      "url(\"data:image/svg+xml,%3Csvg width='221' height='122' viewBox='0 0 221 122' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M183 4C183 1.79086 184.791 0 187 0H217C219.209 0 221 1.79086 221 4V14V28V99C221 101.209 219.209 103 217 103H182C179.791 103 178 104.791 178 107V118C178 120.209 176.209 122 174 122H28C25.7909 122 24 120.209 24 118V103V94V46C24 43.7909 22.2091 42 20 42H4C1.79086 42 0 40.2091 0 38V18C0 15.7909 1.79086 14 4 14H24H43H179C181.209 14 183 12.2091 183 10V4Z' fill='%23D9D9D9'/%3E%3C/svg%3E%0A\")",
                    WebkitMaskImage:
                      "url(\"data:image/svg+xml,%3Csvg width='221' height='122' viewBox='0 0 221 122' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M183 4C183 1.79086 184.791 0 187 0H217C219.209 0 221 1.79086 221 4V14V28V99C221 101.209 219.209 103 217 103H182C179.791 103 178 104.791 178 107V118C178 120.209 176.209 122 174 122H28C25.7909 122 24 120.209 24 118V103V94V46C24 43.7909 22.2091 42 20 42H4C1.79086 42 0 40.2091 0 38V18C0 15.7909 1.79086 14 4 14H24H43H179C181.209 14 183 12.2091 183 10V4Z' fill='%23D9D9D9'/%3E%3C/svg%3E%0A\")",
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskSize: 'contain',
                    WebkitMaskSize: 'contain',
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?q=80&w=2070&auto=format&fit=crop"
                    alt=""
                    className="w-full  h-full object-cover  aspect-square hover:scale-105 transition-all duration-300"
                  />
                </section>
              </div>
              <div className="space-y-4 p-10 border rounded-lg border-gray-200">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" placeholder="Enter your email" type="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Enter your message" className="min-h-[100px]" />
                </div>
                <Button type="submit">Submit</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}