import type { PlasmoMessaging } from "@plasmohq/messaging"

const handler: PlasmoMessaging.MessageHandler = async (req, res) => {
    const count = req.body.count
    console.log(count)
    res.send({ count })
}

export default handler