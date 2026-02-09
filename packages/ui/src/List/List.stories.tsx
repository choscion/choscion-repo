import { List, ListItem } from "."
import { Text } from "../Text"

export default {
  title: "base/List",
  component: List,
}

export const Default = () => (
  <List>
    <ListItem>
      <Text size="t5" bold>
        List Item 1
      </Text>
    </ListItem>
    <ListItem>
      <Text size="t5">List Item 2</Text>
    </ListItem>
    <ListItem>
      <Text size="t5">List Item 3</Text>
    </ListItem>
  </List>
)
