import React from "react";
import Homepage from "./Homepage";
import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";

export default function Content() {
  return (
    <>
      <div>
        <Homepage />
        <Stack gap={3}>
          <div className="p-2">First item</div>
          <div className="p-2">Second item</div>
          <div className="p-2">Third item</div>
        </Stack>
        <Stack gap={2} className="col-md-5 mx-auto">
          <Button variant="secondary">Save changes</Button>
          <Button variant="outline-secondary">Cancel</Button>
        </Stack>
      </div>
    </>
  );
}
