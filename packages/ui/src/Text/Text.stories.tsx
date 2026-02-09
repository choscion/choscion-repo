import { colors } from "../Colors"
import type { TextProps } from "."
import { Text } from "."

const meta = {
  title: "base/Text",
  component: Text,
  argTypes: {
    text: {
      control: { type: "text" },
    },
    color: { control: "select", options: Object.keys(colors), description: "텍스트 색상" },
    size: { control: "select", options: ["t1", "t2", "t3", "t4", "t5", "t6", "t7"] },
    bold: { control: "boolean" },
  },
}

export default meta

export const 텍스트 = ({ color, size, bold, text = "Text" }: TextProps & { text: string }) => {
  return (
    <Text color={color} size={size} bold={bold}>
      {text}
    </Text>
  )
}
