import { Button, Form, Input } from "../index"

export default {
  title: "base/Form",
  component: Form,
  args: {
    layout: "stack",
    gap: "medium",
  },
  argTypes: {
    layout: { control: "select", options: ["stack", "inline"] },
    gap: { control: "select", options: ["small", "medium", "large"] },
  },
}

export const Default = (args: { layout: "stack" | "inline"; gap: "small" | "medium" | "large" }) => (
  <Form {...args}>
    <Input label="이메일" placeholder="email@example.com" />
    <Input label="비밀번호" type="password" />
    <Button>Submit</Button>
  </Form>
)
