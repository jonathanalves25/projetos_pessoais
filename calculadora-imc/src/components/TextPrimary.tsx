import tw from 'tailwind-styled-components'

type TextProps = {
  text: string;
}

const Text:any = tw.h1`
  text-3xl 
  font-bold 
  text-gray-800 
  mb-8
`
const TextPrimary = ({text}:TextProps) => {
  return(
    <Text>{text}</Text>
  )
}

export default TextPrimary;