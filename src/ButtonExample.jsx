import { Button } from '@carbon/react';
import { Add } from '@carbon/icons-react';

// Issue 1: 'extra-large' is not a valid Carbon Button size
const SubmitButton = () => (
  <Button size="extra-large">Submit</Button>
);

// Issue 2: iconDescription is required when hasIconOnly is true
const AddButton = () => (
  <Button hasIconOnly renderIcon={Add} />
);

export { SubmitButton, AddButton };
