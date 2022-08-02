import {
  InputControl,
  SelectControl,
  TextAreaControl,
  CheckboxControl,
  FormButton,
  Fieldset,
} from '../Forms/FormsControls.jsx';

import styles from './About.css';

export default function About() {
  return (
    <section className={styles.About}>
      <form>
        <Fieldset legend="Credentials">
          <InputControl 
            label="email"
            name="email"
            placeholder="email goes here"
            type="email"
            required />
          <InputControl
            className={styles.PasswordControl}
            label="password"
            name="password"
            placeholder="enter password"
            type="password"
            required/>
            
          <SelectControl label="type">
            <option>1</option>
            <option>2</option>
            <option>3</option>
          </SelectControl>
        </Fieldset>
        <CheckboxControl label="Are you a bot?" text="Yes"/>
        <TextAreaControl 
          label="misc text area"
          placeholder="blah blah blah blah"/>
        <FormButton> Submit </FormButton>
      </form>
    </section>
  );
}
