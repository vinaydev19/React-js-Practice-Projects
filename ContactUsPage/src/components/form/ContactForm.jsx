import React, { useState } from "react";
import ContactUsSvg from "../../assets/Service_24_7_pana.svg";
import Button from "../Button";
import { FaPhone } from "react-icons/fa6";
import { MdMessage } from "react-icons/md";

function ContactForm() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [massage, setMassage] = useState();

  const submitForm = (e) => {
    e.preventDefault();
    setName(e.target[0].value);
    setEmail(e.target[1].value);
    setMassage(e.target[2].value);
  };

  return (
    <>
      <div className=" flex justify-center gap-4 items-center">
        <div>
          <div className="flex gap-4">
            <Button
              className=" bg-black w-48 text-center text-white py-2 px-6 rounded-sm"
              icone={<FaPhone />}
              label={"VIA CALL"}
            />
            <Button
              className=" bg-black w-56 text-white py-2 px-5 rounded-sm"
              icone={<MdMessage />}
              label={"VIA SUPPORT CHAT"}
            />
          </div>
          <Button />
          <div>
            <form className="flex flex-col" onSubmit={submitForm}>
              <div className="">
                <label htmlFor="name" className="mr-3">
                  Name
                </label>
                <input
                  className="border-2 outline-none mb-3 border-black rounded-sm p-2"
                  type="text"
                  name="name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mr-3">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  className="border-2 outline-none mb-3 border-black rounded-sm p-2"
                />
              </div>
              <div className="flex gap-3">
                <label htmlFor="massage">Massage</label>
                <textarea
                  name="massage"
                  className="border-2 outline-none mb-3 border-black rounded-sm p-2"
                  rows={5}
                  cols={40}
                ></textarea>
              </div>
              <Button
                label={"submit"}
                className="bg-black text-white py-2 px-5 rounded-sm"
              />
            </form>
          </div>
          <p>{`${name ? name : ""}  ${email ? email : ""} ${
            massage ? massage : ""
          }`}</p>
        </div>
        <div>
          <img src={ContactUsSvg} />
        </div>
      </div>
    </>
  );
}

export default ContactForm;
