import styles from './CityCard.module.css';

const CityCard = () => {
  return (
    <div className={styles.cityCard}>
      <h1 className={styles.title}>Kyiv</h1>
      <p className={styles.info}>Country: Ukraine</p>
      <p className={styles.info}>Founded: 482 AD</p>
      <p className={styles.info}>Population:2mil</p>
      <p className={styles.info}>Capital of Ukraine</p>
    </div>
  );
};

export default CityCard;