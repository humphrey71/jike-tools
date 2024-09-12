import { useReducer } from "react"

import cssText from "data-text:@/style.css"
import type { PlasmoCSConfig, PlasmoGetOverlayAnchorList } from "plasmo"

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
        <button
            onClick={() => increase()}
            type="button"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Count:
            <span className="inline-flex items-center justify-center w-8 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                {count}
            </span>
        </button>
    )
}

export default PlasmoOverlay