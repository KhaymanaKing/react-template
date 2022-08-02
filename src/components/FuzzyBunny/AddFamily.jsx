import { useState } from 'react';
import { useFamilyActions } from '../../state/hooks/fuzzyBunny.js';
import { InputControl, FormButton } from '../Forms/FormsControls.jsx';
import styles from './AddFamily.css';

export default function AddFamily() {
  const { add } = useFamilyActions();
  const [familyName, setName] = useState();
  const handleChange = ({ target }) => setName(target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await add({ familyName });
    setName('');
  };

  return (
    <form className={styles.AddFamily} onSubmit={handleSubmit}>
      <InputControl
        label="add family"
        name="family"
        value={familyName}
        onChange={handleChange}
      />
      <FormButton>Add Family</FormButton>
    </form>
  );
}
