export default function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden justify-items-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Experience Precision</h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Join professional esports athletes and gaming enthusiasts who trust Navi R3 for competitive performance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-12 py-4 bg-accent text-accent-foreground rounded font-bold text-lg hover:opacity-90 transition">
            Pre-Order Now
          </button>
          <button className="px-12 py-4 border-2 border-accent text-accent rounded font-bold text-lg hover:bg-accent/10 transition">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  )
}
