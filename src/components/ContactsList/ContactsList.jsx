import { ContactItem } from 'components/ContactItem/ContactItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { fetchContacts } from 'redux/contacts/contactsThunk';


export const ContactsList = () => {
    const contacts = useSelector(state => state.contacts.contacts.items)
    const dispatch = useDispatch();
   
 

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
    

    
  

  return (
   <>
        <ul>
          {contacts?.length > 0 ? (
            contacts.map(({ id, name, number }) => (
              <ContactItem key={id} id={id} name={name} number={number} />
            ))
          ) : (
            <p>
              Contacts not found
            </p>
          )}
        </ul>
     </>
  );
};

