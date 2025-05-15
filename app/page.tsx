import KitchenCodingTerms from "@/components/kitchen-coding-terms"

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-10 text-8xl opacity-5">🍳</div>
        <div className="absolute top-1/4 right-10 text-8xl opacity-5">👨‍🍳</div>
        <div className="absolute bottom-10 left-1/3 text-8xl opacity-5">🥘</div>
        <div className="absolute top-2/3 right-1/4 text-8xl opacity-5">🧑‍💻</div>
      </div>
      <KitchenCodingTerms />
    </main>
  )
}
