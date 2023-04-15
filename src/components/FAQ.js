import { useState } from "react";
const Section = ({ title, description, isVisible, setIsVisibe }) => {
  return (
    <div className="m-1 p-2 bg-white border rounded border-grey-200">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl ">{title}</h1>
        {!isVisible ? (
          <button onClick={() => setIsVisibe(true)}>➕</button>
        ) : (
          <button onClick={() => setIsVisibe(false)}>➖</button>
        )}
      </div>
      {isVisible && <p>{description}</p>}
    </div>
  );
};
const FAQ = () => {
  const [visibleSection, setVisibleSection] = useState([]);
  return (
    <div className=" py-4 mt-12 bg-slate-200">
      <h1 className="text-center justify-center font-bold text-3xl">FAQ</h1>
      <Section
        title={"I want to return my purchase! What do I do?"}
        description={`If you are not 100% satisfied with your purchase from Zappos, you can return your item(s) for a full refund within 365 days of purchase. Returns must be unworn, in the state you received them, and in the original packaging. Some items ship with an attached security tag, and merchandise returned without the original security tag attached or a damaged tag may not qualify for a refund. For more information on returns, please see the Zappos Shipping, Return, and Exchange Policies.
          Zappos offers a number of easy return options, including shipping box-free and printer-free returns to Whole Foods Market and The UPS Store, as well as UPS Pickups and more (subject to availability). Learn about all Return Options here.
          Click here to log in to your Zappos.com account for a self-service return, and then choose the item(s) you wish to return. If you have received defective, damaged or incorrect merchandise, or you need any assistance with processing your return, please contact us.`}
        isVisible={visibleSection === "about"}
        setIsVisibe={() =>
          !(visibleSection === "about")
            ? setVisibleSection("about")
            : setVisibleSection(" ")
        }
      />
      <Section
        title={
          "I would like to return a gift that was sent to me. How do I do that?"
        }
        description={
          "For assistance with returning a gift you received, please call the Zappos Customer Loyalty Team at [1-800-927-7671|tel:18009277671] for assistance returning the item. Please note that in order to assist you, our team will need the phone number, first and last name, or email address of the person who gifted you the item. Typically, a return will be refunded to the original purchaser's method of payment. However, we would be happy to assist you with a gift return, and issue you a gift card for the return."
        }
        isVisible={visibleSection === "giftcard"}
        setIsVisibe={() =>
          !(visibleSection === "giftcard")
            ? setVisibleSection("giftcard")
            : setVisibleSection(" ")
        }
      />
      <Section
        title={" How long does it take for me to get a refund?"}
        description={
          "It typically takes about 5-10 business days for your return to arrive at our fulfillment center and be processed for refund. Once we receive your qualifying return and approve your refund, Zappos will credit your original method of payment. Depending on your financial institution, please allow an additional 2–10 business days for the credit to post to your bank or credit card account. Some customers may qualify for rapid refunds through Zappos VIPor other perks."
        }
        isVisible={visibleSection === "refundtime"}
        setIsVisibe={() =>
          !(visibleSection === "refundtime")
            ? setVisibleSection("refundtime")
            : setVisibleSection(" ")
        }
      />
      <Section
        title={"Are there Zappos.com gift certificates and/or gift cards? "}
        description={
          "Till the we don't have any such gift card feature right but we are working on it"
        }
        isVisible={visibleSection === "feature"}
        setIsVisibe={() =>
          !(visibleSection === "feature")
            ? setVisibleSection("feature")
            : setVisibleSection(" ")
        }
      />
      <Section
        title={"Do you offer Live Chat support?"}
        description={
          "You can call us on 1859448595747 .We are available there 24*7 "
        }
        isVisible={visibleSection === "support"}
        setIsVisibe={() =>
          visibleSection === "support"
            ? setVisibleSection(" ")
            : setVisibleSection("support")
        }
      />
    </div>
  );
};
export default FAQ;
