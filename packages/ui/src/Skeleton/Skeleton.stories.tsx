import { Skeleton } from "."

export default {
  title: "base/Skeleton",
  component: Skeleton,
  args: {
    variant: "text",
    width: 200,
  },
  argTypes: {
    variant: { control: "select", options: ["text", "rect", "circle"] },
  },
}

export const Default = {}

export const Card = () => (
  <div style={{ display: "grid", gap: 8, width: 240 }}>
    <Skeleton variant="rect" height={120} />
    <Skeleton width="80%" />
    <Skeleton width="60%" />
  </div>
)
