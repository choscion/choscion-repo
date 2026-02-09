import { Alert } from "."

export default {
  title: "base/Alert",
  component: Alert,
  args: {
    tone: "info",
    title: "알림",
    description: "여기에 설명을 입력하세요.",
  },
  argTypes: {
    tone: { control: "select", options: ["info", "success", "warning", "error"] },
  },
}

export const Default = {}
