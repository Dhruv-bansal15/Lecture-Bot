import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
} from "@material-ui/core";
import React, { useState } from "react";
import { useLocalContext } from "../../context/context";
import Form from "./Form";
import "./style.css";
const CreateClass = () => {
  const { createClassDialog, setCreateClassDialog } = useLocalContext();
  const [check, setChecked] = useState(false);
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      <Dialog
        onClose={() => setCreateClassDialog(false)}
        aria-labelledby="customized-dialog-title"
        open={createClassDialog}
        maxWidth={showForm ? "lg" : "xs"}
        className="form__dialog"
      >
        {showForm ? (
          <Form />
        ) : (
          <>
            <div className="class__title">
              Using Lecture-Bot at a college with students?
            </div>
            <DialogContent className="class__content">
              <p className="class__text">
                <a href="/learn" className="class__link2">
                  Learn More.
                </a>
              </p>
              <p>
                <a href="/privacy" className="class__link2 class__link">
                  privacy and security
                </a>
              </p>

              <div className="class__checkboxWrapper">
                <Checkbox color="primary" onChange={() => setChecked(!check)} />
                <p>
                  I've read and understand the above notice, and I'm not using
                  Lecture-bot at a college with students
                </p>
              </div>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={() => setCreateClassDialog(false)}>
                Close
              </Button>

              <Button
                autoFocus
                color="primary"
                disabled={!check}
                onClick={() => setShowForm(true)}
              >
                Continue
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default CreateClass;
