import Title from "./Title";
export default function ContactCard() {
  return (
    <>
      <div className="flex flex-row justify-center my-20">
        <div className="w-7/12 ">
          <Title>Contact Information</Title>

          <p>
            {" "}
            <u>
              <b>Email: </b>
            </u>{" "}
            nikhil.waghh@gmail.com
          </p>
          <p>
            {" "}
            <u>
              <b>Contact Number:</b>{" "}
            </u>
            +91 8282948677
          </p>
        </div>
      </div>
    </>
  );
}
