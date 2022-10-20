import tw from 'tailwind-styled-components'

type ButtonProps = {
  text: string;
  onClick?: () => void;
}

const ButtonPrimary:any = tw.button`
  bg-blue-200 
  w-full 
  mt-4 
  p-2 
  rounded 
  text-white 
  hover:bg-opacity-80 
  hover:ease-in
`

const Button = ({text}:ButtonProps) => {
  return(
    <ButtonPrimary>{text}</ButtonPrimary>
  )
}

export default Button