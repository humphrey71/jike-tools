import { useReducer } from "react"

import cssText from "data-text:@/style.css"
import type { PlasmoCSConfig, PlasmoGetOverlayAnchorList } from "plasmo"
import { Button } from "@/components/ui/button"

export const getStyle = () => {
    const style = document.createElement("style")
    style.textContent = cssText
    return style
}

export const config: PlasmoCSConfig = {
    matches: ["<all_urls>"],
    all_frames: true
}

export const getOverlayAnchorList: PlasmoGetOverlayAnchorList = async () => {
    await new Promise((resolve) => window.addEventListener("load", () => setTimeout(resolve, 500)))
    return document.querySelectorAll("body")
}

const PlasmoOverlay = () => {
    const [count, increase] = useReducer((c) => c + 1, 0)

    return (
        <Button variant="default" onClick={() => increase()} >
            Count:
            <span className="inline-flex items-center justify-center w-8 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                {count}
            </span>
        </Button>
    )
}

export default PlasmoOverlay