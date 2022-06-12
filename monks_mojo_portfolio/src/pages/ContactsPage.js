import ContactForm from "../components/contact/ContactForm";
import ContactBanner from "../components/contact/ContactBanner";
function ContactsPage() {
  return (
    <div className="grid grid-cols-1 gap-8 px-8 py-16 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gradient-to-b from-indigo-800 to-gray-800">
      <ContactBanner />
      <ContactForm />
    </div>
  );
}

export default ContactsPage;
