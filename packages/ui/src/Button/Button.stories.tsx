import { colors } from "../Colors"
import { Text } from "../Text"
//import type { ButtonProps } from "."
import { Button } from "."

const colorOptions = Object.keys(colors)

export default {
  title: "base/Button",
  component: Button,
  args: {
    children: "버튼",
    color: "blue500",
    size: "medium",
    shape: "solid",
  },
  argTypes: {
    children: {
      control: { type: "text" },
      description: "버튼 텍스트",
    },
    color: {
      control: "select",
      options: colorOptions,
      description: "버튼 색상 (variables의 모든 컬러 사용 가능)",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "버튼 크기",
    },
    shape: {
      control: "select",
      options: ["solid", "lined", "circular", "ghost"],
      description: "버튼 모양",
    },
  },
}

export const Solid = {
  args: {
    shape: "solid",
    size: "small",
    color: "blue500",
    children: (
      <Text size="t6" bold>
        Button
      </Text>
    ),
  },
}

export const Lined = {
  args: {
    shape: "lined",
    size: "small",
    color: "blue500",
    children: (
      <Text size="t6" color="blue500">
        Button
      </Text>
    ),
  },
}

export const Ghost = {
  args: {
    shape: "ghost",
    size: "small",
    color: "blue500",
    children: (
      <Text size="t6" color="blue500">
        Button
      </Text>
    ),
  },
}
