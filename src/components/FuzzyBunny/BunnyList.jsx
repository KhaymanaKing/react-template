import styles from './BunnyList.css';

export function BunnyList() {
  return (
    <>
      <li>
        <h2>Barry</h2>
        <button>❌</button>
      </li>
      <li>
        <h2>Barry</h2>
        <button>❌</button>
      </li>
      <li>
        <h2>Barry</h2>
        <button>❌</button>
      </li>
      <li>
        <h2>Barry</h2>
        <button>❌</button>
      </li>
      <li>
        <h2>Barry</h2>
        <button>❌</button>
      </li>
      <form className={styles.AddBunny}>
        <input
          required
          title={`Add a new rabbit ${'King'} family`}
          placeholder= "new rabbit"
        />
        <button>+</button>
      </form>
    </>
  );
}
