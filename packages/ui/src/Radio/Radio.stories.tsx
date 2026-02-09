import { colors } from "../Colors"
import { Radio } from "."

const colorOptions = Object.keys(colors)

export default {
  title: "base/Radio",
  component: Radio,
  args: {
    label: "Radio",
    color: "grey900",
    size: "medium",
    name: "radio-group",
    defaultChecked: false,
  },
  argTypes: {
    label: { control: "text", description: "라디오 라벨" },
    color: { control: "select", options: colorOptions, description: "라디오 색상" },
    size: { control: "select", options: ["small", "medium", "large"], description: "라디오 크기" },
    defaultChecked: { control: "boolean", description: "기본 선택 여부" },
    disabled: { control: "boolean", description: "비활성화" },
  },
}

export const Default = {}

export const Group = () => (
  <div style={{ display: "grid", gap: 8 }}>
    <Radio label="옵션 1" name="radio-group" defaultChecked />
    <Radio label="옵션 2" name="radio-group" />
    <Radio label="옵션 3" name="radio-group" disabled />
  </div>
)
