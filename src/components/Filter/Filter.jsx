import { useDispatch, useSelector } from 'react-redux';


import { filterContacts } from 'redux/contacts/contactsSlice';
import css from './Filter.module.css'

export const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.contacts.filter);
     const onChangeFilter = (filter) => { 
        dispatch(filterContacts(filter));
    }
    return <>
        <label className={css.label} htmlFor="text">Find contact by name</label>
        <input
            className={css.input}
            onChange={e => onChangeFilter(e.target.value)}
            type="text"
            value={filter}
        
        />
    
    </>
}

