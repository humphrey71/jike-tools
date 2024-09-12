import { useState } from "react"

import "./style.css"

function IndexOptions() {
  const [data, setData] = useState("")

  return (
    <div
      className="flex flex-col items-center justify-center h-screen">
      <h1>
        Welcome to your <a href="https://www.plasmo.com">Plasmo</a> Extension!
      </h1>
      <input onChange={(e) => setData(e.target.value)} value={data} />
      <footer>Crafted by @PlasmoHQ</footer>{" "}
    </div>
  )
}

export default IndexOptions
