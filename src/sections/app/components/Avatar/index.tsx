import styles from './Avatar.module.scss';

interface Props {
  img: string;
  name: string;
}

const Avatar = ({ img, name }: Props) => {
  return (
    <div className={styles.avatar}>
      <h3>{name}</h3>
      <div className={styles.avatar__img}>
        <img src={img} alt={name} width={30} height={31} />
      </div>
    </div>
  );
};

export default Avatar;
