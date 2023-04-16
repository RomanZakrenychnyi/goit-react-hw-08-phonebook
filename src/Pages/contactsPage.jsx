import { ContactsList } from "../components/ContactsList/ContactsList";
import { Filter } from "components/Filter/Filter";
import { Form } from '../components/Form/Form';


export const ContactsPage = () => {
  return (
    <>
        <Form />
        <Filter />
        <ContactsList />
    </>
  );
};

