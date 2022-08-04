import { useEffect, useRef, useState } from 'react';
import { useFamilyActions } from '../../state/hooks/fuzzyBunny.js';
import DeleteButton from '../Forms/DeleteButton.jsx';
import { InputControl } from '../Forms/FormsControls';
import BunnyTags from './BunnyTags.jsx';
import styles from './Family.css';


export default function Family({ family }){
  const { update, remove } = useFamilyActions();

  const handleEdit = async (edit) => {
    await update(family.id, edit);
  };

  const handleRemove = async () => {
    const message = `Would you like to remove the ${family.familyName} family?`;
    if (confirm(message)) {
      await remove(family.id);
    }
  };
  return(
    <li className={styles.Family}>
      <DeleteButton
        className={styles.DeleteButton}
        onClick={handleRemove}/>
      <div className={styles.ContentContainer}>
        <EditableHeader
          initialValue={family.name}
          onEdit={handleEdit} 
        />
        <BunnyTags bunnies={family.bunnies}/>
      </div>
    </li>
  );
}
//Creates the family card with a remove button and 
//the ability to update their name using doubleclick 
// or enter. The delete and edit functions are below

function EditableHeader({ initialValue, onEdit }) {
  const [editing, setEditing] = useState(false);
  const ref = useRef();
  const [name, setName] = useState(initialValue);

  const handleDoubleClick = () => {
    setEditing(true);
  };

  useEffect(() => {
    if (editing) ref.current.focus();
  }, [editing]);

  const handleChange = ({ target }) => {
    setName(target.value);
  };

  const handleEdit = async () => {
    setEditing(false);
    if (name === initialValue) return;
    await onEdit({ name });
  };

  const handleKeyUp = (e) => {
    if(e.code === 'Enter') handleEdit();
  };

  return (
    <header>
      {editing ? (
        <InputControl
          ref={ref}
          name="name"
          value={name}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          onBlur={handleEdit} />
      ) : (
        <h2 onDoubleClick={handleDoubleClick}>{name}</h2>
      )}
    </header>
  );
}

