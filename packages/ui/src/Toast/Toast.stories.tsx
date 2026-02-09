import { Toast } from "."

export default {
  title: "base/Toast",
  component: Toast,
  args: {
    tone: "info",
    title: "알림",
    description: "작업이 완료되었습니다.",
  },
  argTypes: {
    tone: { control: "select", options: ["info", "success", "warning", "error"] },
  },
}

export const Default = {}
