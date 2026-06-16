import { useState } from 'react'

export default function Home() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
    setEmail('')
  }

  return (
    <main>
      <header style={{padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h1 style={{margin:0}}>The Athlete Labs</h1>
        <nav>
          <a href="#about" style={{marginRight:16}}>About</a>
          <a href="#services">Services</a>
        </nav>
      </header>

      <section style={{padding: '80px 32px', textAlign: 'center'}}>
        <h2 style={{fontSize: '2.2rem', marginBottom: 12}}>Performance coaching for serious athletes</h2>
        <p style={{maxWidth: 720, margin: '0 auto 24px'}}>Train smarter, recover faster, and reach your peak with evidence-based coaching and nutrition.</p>

        <form onSubmit={handleSubmit} style={{display:'inline-block'}}>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={{padding:'10px 12px', fontSize: '1rem', width: 280}}
            required
          />
          <button style={{padding:'10px 16px', marginLeft:8}}>Join</button>
        </form>

        {sent && <p style={{marginTop:12}}>Thanks — we'll be in touch!</p>}
      </section>

      <section id="about" style={{padding: '48px 32px', background:'#f8fafc'}}>
        <h3>About</h3>
        <p style={{maxWidth:800}}>We provide individualized performance coaching, strength programming, and nutrition planning for competitive athletes of all levels.</p>
      </section>

      <section id="services" style={{padding:'48px 32px'}}>
        <h3>Services</h3>
        <ul>
          <li>One-on-one coaching</li>
          <li>Team workshops</li>
          <li>Nutrition plans</li>
        </ul>
      </section>

      <footer style={{padding:'24px 32px', textAlign:'center', borderTop:'1px solid #eee'}}>
        © The Athlete Labs
      </footer>
    </main>
  )
}
