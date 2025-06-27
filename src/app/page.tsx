import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import AnimatedPage from '@/components/ui/AnimatedPage'
// import About from '@/components/sections/About'
// import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <AnimatedPage>
      <Hero />
      <Services />
      {/* <About /> */}
      {/* <Contact /> */}
    </AnimatedPage>
  )
}
