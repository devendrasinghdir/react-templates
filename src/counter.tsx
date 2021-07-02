import { useEffect, useState } from 'react'

interface IProps {
  className: string
}

const Counter: React.FunctionComponent<IProps> = ({ className }) => {
  const [counter, setCounter] = useState(0)
  const onclick = () => {
    setCounter(counter + 1)
  }
  useEffect(() => {
    window.document.title = `Counter ${counter} Set`
  }, [counter])
  return (
    <>
      <button className={className} onClick={onclick}>
        Click {counter}
      </button>
    </>
  )
}

export default Counter
