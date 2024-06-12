"use client";

import { UploadButton } from "~/utils/uploadthing";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export function TopNav() {
  const router = useRouter();

  return (
    <nav className="flex w-full items-center justify-between border-b border-zinc-200 p-4 text-xl font-semibold">
      <div>Gallery</div>

      <div className="flow-row flex">
        <SignedOut>
          <SignInButton />
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => router.refresh()}
          />
        </SignedIn>
      </div>
    </nav>
  );
}
