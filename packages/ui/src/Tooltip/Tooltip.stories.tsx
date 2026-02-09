import { Tooltip } from "."
import { Button } from "../Button"

export default {
  title: "base/Tooltip",
  component: Tooltip,
  args: {
    content: "툴팁 내용",
    placement: "top",
  },
  argTypes: {
    content: { control: "text" },
    placement: { control: "select", options: ["top", "bottom", "left", "right"] },
  },
}

export const Default = (args: { content: string; placement: "top" | "bottom" | "left" | "right" }) => (
  <Tooltip {...args}>
    <Button>Hover me</Button>
  </Tooltip>
)
