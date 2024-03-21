import { motion, useScroll } from "framer-motion"
import { RefObject } from "react"

export const LiIcon = ({reference}:{reference:RefObject<HTMLDivElement>}) => {
    const { scrollYProgress } = useScroll(
        {
            target: reference,
            offset: ["center end", "center center"]
        }
    )

    return (
        <figure className="absolute -left-10 stroke-slate-300">
            <svg className="-rotate-90" width={"75"} height={"75"} viewBox="0 0 100 100">
                <circle cx="75" cy="50" r="20" className="stroke-slate-100 fill-none"/>
                <motion.circle cx="75" cy="50" r="20" className="fill-black stroke-[5px]"
                style={{
                    pathLength : scrollYProgress
                }}/>
                <circle cx="75" cy="50" r="10" className="fill-slate-100 stroke-1"/>

            </svg>
        </figure>
    )
}