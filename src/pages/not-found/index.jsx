export default function NotFound() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center">
      <div className="flex items-center gap-x-5">
        <h1 className="text-2xl font-medium text-primary">
          404
        </h1>

        <div className="h-[49px] w-[1px] bg-primary/30"/>

        <p className="text-sm text-primary">
          This page could not be found.
        </p>
      </div>
    </main>
  );
}