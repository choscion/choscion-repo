import { colors } from "../Colors"
import { Switch } from "."

const colorOptions = Object.keys(colors)

export default {
  title: "base/Switch",
  component: Switch,
  args: {
    label: "Switch",
    color: "blue500",
    size: "medium",
    defaultChecked: false,
  },
  argTypes: {
    label: { control: "text", description: "스위치 라벨" },
    color: { control: "select", options: colorOptions, description: "스위치 색상" },
    size: { control: "select", options: ["small", "medium", "large"], description: "스위치 크기" },
    defaultChecked: { control: "boolean", description: "기본 체크 여부" },
    disabled: { control: "boolean", description: "비활성화" },
  },
}

export const Default = {}
