import tw from 'tailwind-styled-components'

type TextProps = {
  text:string;
}

const Text:any = tw.p`
  text-base 
  mb-10 
  text-gray-400
`

const TextSecondary = ({text}:TextProps) => {
  return(
    <Text>{text}</Text>
  )
}

export default TextSecondary;
