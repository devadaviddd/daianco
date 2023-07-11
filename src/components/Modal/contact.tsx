import { Button, Label, Modal, TextInput, Textarea } from "flowbite-react";
import { useForm, ValidationError } from "@formspree/react";
import { ContactModalSend } from "../Toast/contact-send";

type Props = {
  // eslint-disable-next-line no-unused-vars
  setOpenModal: (value: string | undefined) => void;
};

export const ContactModal = (props: Props) => {
  const [state, handleSubmit] = useForm("mrgjjvyk");
  const { result } = state;

  return (
    <>
      <Modal.Header>Contact Form</Modal.Header>
      <Modal.Body>
        <form
          onSubmit={handleSubmit}
          method="POST"
          className="flex flex-col gap-2"
        >
          <div className="mb-2 block">
            <Label htmlFor="email3" value="Your email" />
          </div>
          <TextInput
            helperText={
              <>
                We’ll never share your details. Read our
                <a
                  className="ml-1 font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                  href="/forms"
                >
                  Privacy Policy
                </a>
                .
              </>
            }
            id="email3"
            placeholder="your@mail.com"
            required
            type="email"
            name="email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <div className="mb-2 block">
            <Label htmlFor="company" value="Your Company" />
          </div>
          <TextInput
            helperText={<>Could you tell me your company name?</>}
            id="company"
            placeholder="Your Company"
            type="text"
            name="company"
          />

          <div id="textarea">
            <div className="mb-2 block">
              <Label htmlFor="comment" value="Your message" />
            </div>
            <Textarea
              id="comment"
              placeholder="Leave a comment..."
              required
              rows={4}
              name="message"
            />
          </div>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <Modal.Footer>
            <Button type="submit" disabled={state.submitting}>
              Send
            </Button>
            <Button color="gray" onClick={() => props.setOpenModal(undefined)}>
              Decline
            </Button>
          </Modal.Footer>
        </form>
      </Modal.Body>

      <ContactModalSend isSuccess={result?.body} />
    </>
  );
};
