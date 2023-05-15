import FeedbackForm from "../components/FeedbackForm";

const Contact = () => {
    return (
        <div className="contact-page bg-gray-100 w-[50vw] px-7 py-5 rounded-[2vw] dark:text-gray-700">
            <h1>Contact us!</h1>
            <FeedbackForm />
        </div>
    );
}
 
export default Contact;