import { useState, useCallback } from "react"
import {PopupContainer, PopupContent} from "./style"
import {AiOutlineClose} from 'react-icons/ai'

const Popup = ({content}) => {
  const [display, setDisplay] = useState('true')
  const handleOnClick = useCallback(()=> {
    setDisplay('false')
  }, [])
  return (
    <PopupContainer display={display}>
      <PopupContent>
        <button onClick={handleOnClick}>
          <AiOutlineClose/>
        </button>
        <p>{content}</p>
      </PopupContent>
    </PopupContainer>
  )
}

export default Popup
