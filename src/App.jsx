import React from 'react'
import { Benefits, CTA, Footer, Hero, Nav, SocialProof } from "./components"

function App() {

  return(

    <main>

      <header>

        <Nav />
        <Hero />

      </header>

      <section>

        <SocialProof />
        <Benefits />
        <CTA />

      </section>

      <footer>

        <Footer />

      </footer>
      
    </main>

  )
}

export default App;