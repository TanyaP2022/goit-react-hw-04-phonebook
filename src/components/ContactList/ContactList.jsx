import { ContactListStyle, ContactButton, ContactItemStyle } from './ContactListStyled';


export default function ContactList({ items, onDeleteContact }) {
    console.log(items)
    const elements = items.map(({ name, number, id }) => {
        return <ContactItemStyle key={id}>{name}:{number}
                    <ContactButton
                            type="button"
                            onClick={() => onDeleteContact(id)}>
                            Delete
                    </ContactButton>
                </ContactItemStyle>
    })
    return (
        <ContactListStyle>{elements}</ContactListStyle>
            )
}
