import { useState } from "react"
import { Button } from "../Button"
import { BottomSheet } from "."
import { Text } from "../Text"

export default {
  title: "base/BottomSheet",
  component: BottomSheet,
}

export const Default = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open BottomSheet</Button>
      <BottomSheet
        open={open}
        title="Bottom Sheet"
        onClose={() => setOpen(false)}
        footer={
          <>
            <Button shape="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </>
        }
      >
        <Text size="t5">Bottom sheet content goes here.</Text>
      </BottomSheet>
    </>
  )
}
