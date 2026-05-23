import { GitHubIcon, InstagramIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="border-t p-4 text-center text-sm grid grid-cols-3 items-center">
        <div className="justify-self-start">
            a
        </div>

        <div className="self-start justify-self-center">
            © {new Date().getFullYear()} • Built with Next.js
        </div>

        <div className="justify-self-end flex items-center">
          <a
            href="https://github.com/HeavenellF"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 hover:underline"
            >
                <GitHubIcon />
            </a>

        <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 hover:underline"
        >
            <InstagramIcon />
        </a>
        </div>
    </footer>
  );
}