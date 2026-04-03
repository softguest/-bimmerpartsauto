export function CarCardSkeleton() {
  return (
    <div className="rounded-2xl overflow-hidden glass-card animate-pulse">
      <div className="h-52 sm:h-56 bg-white/5" />
      <div className="p-5 sm:p-6 space-y-3">
        <div className="h-5 w-3/4 rounded-lg bg-white/5" />
        <div className="space-y-2">
          <div className="h-3 w-full rounded-lg bg-white/5" />
          <div className="h-3 w-2/3 rounded-lg bg-white/5" />
        </div>
        <div className="flex justify-between items-end pt-2">
          <div className="space-y-1">
            <div className="h-3 w-16 rounded-lg bg-white/5" />
            <div className="h-6 w-24 rounded-lg bg-white/5" />
          </div>
          <div className="h-5 w-12 rounded-md bg-white/5" />
        </div>
      </div>
    </div>
  );
}

export function CarGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 9 }).map((_, i) => (
        <CarCardSkeleton key={i} />
      ))}
    </div>
  );
}

export function DetailSkeleton() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 max-w-7xl mx-auto animate-pulse">
      <div className="h-8 w-24 rounded-lg bg-white/5 mb-8" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        <div>
          <div className="aspect-[4/3] rounded-2xl bg-white/5 mb-4" />
          <div className="grid grid-cols-6 gap-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-square rounded-xl bg-white/5" />
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="h-6 w-20 rounded-full bg-white/5" />
          <div className="h-10 w-3/4 rounded-lg bg-white/5" />
          <div className="h-4 w-full rounded-lg bg-white/5" />
          <div className="h-4 w-2/3 rounded-lg bg-white/5" />
          <div className="h-12 w-48 rounded-lg bg-white/5 mt-6" />
          <div className="h-14 w-full rounded-2xl bg-white/5 mt-8" />
        </div>
      </div>
    </div>
  );
}