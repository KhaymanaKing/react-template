import AddFamily from './AddFamily';
import styles from './Families.css';
import FamilyList from './FamilyList.jsx';

export default function Families(){
  return (
    <section className={styles.Families}>
      <AddFamily />
      <FamilyList />
    </section>

  );
}
