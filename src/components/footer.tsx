import Link from "next/link"

export const Footer: React.FC = () => {
    return (
        <footer className="w-full px-24 py-4 flex items-center justify-between
        font-medium text-sm text-zinc-500 xl:px-24 lg:px-16 md:px-12 sm:px-8">
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className="relative">
            </div>
            <div className="flex items-center">
                Build With <span className="text-fuchsia-700 text-3xl px-1">&#9825;</span>
                by&nbsp;<Link href="/" className="capitalize  underline underline-offset-2">Zhekka</Link>
            </div>
        </footer>
    )
}