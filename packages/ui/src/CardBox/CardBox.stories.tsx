import { Text } from "../Text"
import { CardBox } from "."

export default {
  title: "base/CardBox",
  component: CardBox,
  args: {
    variant: "elevated",
    padding: "medium",
  },
  argTypes: {
    variant: { control: "select", options: ["elevated", "outlined", "ghost"] },
    padding: { control: "select", options: ["small", "medium", "large"] },
  },
}

export const Default = (args: { variant: "elevated" | "outlined" | "ghost"; padding: "small" | "medium" | "large" }) => (
  <CardBox {...args}>
    <Text size="t5" bold>
      Card Title
    </Text>
    <Text size="t6" color="grey600">
      Card description text goes here.
    </Text>
  </CardBox>
)
