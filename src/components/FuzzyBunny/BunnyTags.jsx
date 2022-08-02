import DeleteButton from '../Forms/DeleteButton';
import { InputControl, FormButton } from '../Forms/FormsControls';
import styles from './BunnyTags.css';

export default function BunnyTags({ bunnies }) {
  return (
    <>
      <ul className={styles.BunnyTags}>
        {bunnies.map((bunny) => (
          <li key={bunny.id}>
            <h3>{bunny.name}</h3>
            <DeleteButton />
          </li>
        ))}
      </ul>

      <form className={styles.AddBunny}>
        <InputControl
          required
          title={`Add new bunny to the ${'King'} family`}
          placeholder ="new bunny..."/>
        <FormButton icon={true}>🐇</FormButton>
      </form>
    </>
  );
}
