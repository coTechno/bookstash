import "./Contact.css";
import book from "../../Assets/book.png";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50vh",
  left: "50vw",
  transform: "translate(-50%, -50%)",
  width: '80vw',
  hight: 'fit-content',
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: '15px',
  margin: '15px',
  boxShadow: 24,
  p: 4,
};

function Contact() {
    const [alert, setAlert] = React.useState('')
    const [msg, setMsg] = React.useState('')

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [userName, setUserName] = React.useState("");
  const [userComment, setUserComment] = React.useState("");
  const handleSubmit = () => {
      if (userName === "" && userComment === "") {
        handleOpen();
        setAlert('OOPS!');
        setMsg(`Can't save empty message!`)
      return;
    }
    handleOpen();
    setAlert('Success!');
    setMsg('Thanks for your kind words!')
    fetch(
      "https://zehra-base-default-rtdb.asia-southeast1.firebasedatabase.app/bookStash.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: userName,
          userComment: userComment,
        }),
      }
    )
      .then((res) => res.json())
      .then(() => {
        setUserName("");
        setUserComment("");
      });
  };
  return (
    <div className="contact-container">
      <svg
        id="bubble-1"
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8.59123" cy="8.32606" r="7.62901" fill="#fff" />
      </svg>
      <svg
        id="bubble-3"
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8.59123" cy="8.32606" r="7.62901" fill="#fff" />
      </svg>
      <svg
        id="bubble-4"
        width="17"
        height="16"
        viewBox="0 0 17 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8.59123" cy="8.32606" r="7.62901" fill="#fff" />
      </svg>
      <div className="contact-content">
        <div className="book-image">
          <img src={book} alt="Books" />
          <svg
            id="bubble-2"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8.59123" cy="8.32606" r="7.62901" fill="#fff" />
          </svg>
          <svg
            id="bubble-5"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8.59123" cy="8.32606" r="7.62901" fill="#fff" />
          </svg>
          <svg
            id="bubble-6"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8.59123" cy="8.32606" r="7.62901" fill="#fff" />
          </svg>
          <svg
            id="bubble-7"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="8.59123" cy="8.32606" r="7.62901" fill="#fff" />
          </svg>
        </div>
        <div className="contact-form">
          <form action="#">
          <h1>Contact Us</h1>
            <input
              type="text"
              placeholder="Type your name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Type Something..."
              value={userComment}
              onChange={(e) => setUserComment(e.target.value)}
            />
            <button className="btn" type="button" onClick={handleSubmit}>
              SUBMIT
            </button>
            <div>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    {alert}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {msg}
                  </Typography>
                </Box>
              </Modal>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
