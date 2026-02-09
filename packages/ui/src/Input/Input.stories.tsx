import { Input } from "."

export default {
  title: "base/Input",
  component: Input,
  args: {
    label: "Label",
    placeholder: "텍스트를 입력하세요",
    size: "medium",
    error: false,
    disabled: false,
    helperText: "도움말 텍스트",
  },
  argTypes: {
    label: { control: "text", description: "라벨 텍스트" },
    placeholder: { control: "text", description: "플레이스홀더" },
    size: { control: "select", options: ["small", "medium", "large"], description: "인풋 크기" },
    error: { control: "boolean", description: "에러 상태" },
    disabled: { control: "boolean", description: "비활성화" },
    helperText: { control: "text", description: "도움말 텍스트" },
    multiline: { control: "boolean", description: "textarea 사용" },
  },
}

export const Default = {}

export const Search = {
  args: {
    label: "Search",
    type: "search",
    placeholder: "검색어를 입력하세요",
  },
}

export const Textarea = {
  args: {
    label: "Textarea",
    multiline: true,
    rows: 4,
    placeholder: "내용을 입력하세요",
  },
}
