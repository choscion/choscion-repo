import { useState } from "react"

import { Button } from "../Button"
import { Text } from "../Text"
import { Modal } from "."

export default {
  title: "base/Modal",
  component: Modal,
}

export const Default = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        open={open}
        title="Modal Title"
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
        <Text size="t5">Modal content goes here.</Text>
      </Modal>
    </>
  )
}
