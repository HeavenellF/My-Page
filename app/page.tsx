import Image from "next/image";

export default function Home() {
  const name = "Heavenell";

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-2xl p-6">
        
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold">Heavenell</h1>
          <p className="text-zinc-500 mt-2">Computer Science Student</p>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            This is placeholder text.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300">
            <li>Meow 1</li>
            <li>Meow 2</li>
            <li>Meow 3</li>
          </ul>
        </section>

        <button
          type="button"
          className="px-4 py-2 rounded-lg bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition"
        >
          Click Me
        </button>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Projects</h2>
          <p className="text-zinc-700 dark:text-zinc-300">Yes</p>
        </section>

      </main>
    </div>
  );
}
