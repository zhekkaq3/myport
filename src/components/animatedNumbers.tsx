import { useInView, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"

export const AnimatedNumbers = ({value}:{value:number}) => {
    const ref = useRef<HTMLSpanElement>(null) 

    const motionValue = useMotionValue(0)
    const springValue = useSpring(motionValue,{ duration: 3000 })
    const isIsView = useInView(ref, {once: true})

    useEffect(()=>{
        if (isIsView) {
            motionValue.set(value)
        }
    },[isIsView, value, motionValue])

    useEffect(()=>{
        springValue.on("change",(latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    },[springValue, value])

    return (
        <span ref={ref}>

        </span>
    )
}