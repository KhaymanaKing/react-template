import {
  InputControl,
  SelectControl,
  TextAreaControl,
  CheckboxControl,
  OptionGroupControl,
  CheckboxOption,
  RadioOption,
  FormButtonControl
} from '../Forms/FormsControls.jsx';

import styles from './About.css';

export default function About() {
  return (
    <section className={styles.About}>
      <form>
        <InputControl 
          label="email"
          name="email"
          placeholder="email goes here"
          type="email"
          required 
        />

        <InputControl
          className={styles.PasswordControl}
          label="password"
          name="password"
          placeholder="enter password"
          type="password"
          required
        />
            
        <SelectControl label="type">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </SelectControl>

        <CheckboxControl label="Are you a bot?" text="Yes"/>
        
        <OptionGroupControl label="Check all that apply" size="125px">
          <CheckboxOption text="what"/>
          <CheckboxOption text="why"/>
          <CheckboxOption text ="when"/>
        </OptionGroupControl>

        <OptionGroupControl
          name="food"
          label="Favorite Food"
          size="95px"
        >
          <RadioOption value={1} text="pasta"/>
          <RadioOption value={2} text="garbage"/>
          <RadioOption value={3} text="a shoe"/>
          <RadioOption value={4} text="lettuce"/>
        </OptionGroupControl>

        <TextAreaControl 
          label="misc text area"
          placeholder="blah blah blah blah"/>
        <FormButtonControl> Submit </FormButtonControl>
      </form>
    </section>
  );
}
