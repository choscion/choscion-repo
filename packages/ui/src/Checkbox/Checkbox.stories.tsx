import { colors } from "../Colors"
import { Checkbox } from "."

const colorOptions = Object.keys(colors)

export default {
  title: "base/Checkbox",
  component: Checkbox,
  args: {
    label: "Checkbox",
    color: "grey900",
    size: "medium",
    defaultChecked: false,
  },
  argTypes: {
    label: { control: "text", description: "체크박스 라벨" },
    color: { control: "select", options: colorOptions, description: "체크 색상" },
    size: { control: "select", options: ["small", "medium", "large"], description: "체크박스 크기" },
    defaultChecked: { control: "boolean", description: "기본 체크 여부" },
    disabled: { control: "boolean", description: "비활성화" },
  },
}

export const Default = {}

export const Group = () => (
  <div style={{ display: "grid", gap: 8 }}>
    <Checkbox label="Checkbox 1" defaultChecked />
    <Checkbox label="Checkbox 2" />
    <Checkbox label="Disabled Checkbox 3" disabled />
  </div>
)
