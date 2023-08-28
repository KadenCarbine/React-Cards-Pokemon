import {useState} from "react"

const useFlip = () => {
    const [isFacingUp, setIsFacingUp] = useState(true)
    const flipCard = () => {
        setIsFacingUp(oldValue => !oldValue)
    }

    return [isFacingUp, flipCard]

}
export default useFlip