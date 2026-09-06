import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[72rem] flex-col gap-2 px-6 py-8 text-sm text-ink/60 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}.</p>
        <p>{profile.location}</p>
      </div>
    </footer>
  );
}