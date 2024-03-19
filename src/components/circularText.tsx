import { CircularText } from "./Icons"

export const CircularTextComponent: React.FC = () => {
    return (
        <div className="flex items-center justify-center overflow-hidden fixed left-4 bottom-14">
           <div className="w-32 h-auto flex items-center justify-center relative">
                <CircularText className={"!w-40 fill-white animate-spin-slow"} />
                <div className="flex items-center justify-center absolute
                left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-300
                text-black shadow-md border border-solid border-zinc-500 w-16 h-16
                f rounded-full font-semibold hover:bg-zinc-300 hover:text-zinc-300"></div>
           </div>
        </div>
    )
}       