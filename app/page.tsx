import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";

export default function Home() {

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-2xl p-6">
        
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">{siteConfig.name}</h1>
          <p className="text-zinc-500 mt-2">{siteConfig.major}</p>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p className="text-zinc-700 dark:text-zinc-300">
            This is placeholder text.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-300">
            {siteConfig.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <Link href="/game" className="ml-4 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition">
          Go to Game Test using Link
        </Link>

        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-2">Projects</h2>
          <p className="text-zinc-700 dark:text-zinc-300">Yes</p>
        </section>

        {Array.from({ length: 20 }).map((_, i) => (
          <section key={i} className="mb-8">
            <h2 className="text-2xl font-semibold mb-2">
              Dummy Section {i + 1}
            </h2>
            <p className="text-zinc-700 dark:text-zinc-300">
              This is filler content to test scrolling behavior.
            </p>
          </section>
        ))}

      </main>
    </div>
  );
}
