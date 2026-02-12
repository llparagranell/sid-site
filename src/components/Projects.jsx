export default function Projects() {
    return (
        <section id="projects" className="bg-primary py-24">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="mb-12 text-3xl font-bold text-main-text">
                    Recent Projects
                </h2>
                <div className="grid gap-8 md:grid-cols-3">
                    {[1, 2, 3].map((i) => (
                        <img
                            key={i}
                            src={`https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop`}
                            className="rounded-xl border border-secondary/30 shadow-sm shadow-[#4da3ff]/10"
                            alt="Project"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}



