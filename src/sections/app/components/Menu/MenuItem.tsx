import styles from './MenuItem.module.scss';

interface Props {
  icon: JSX.Element;
  name: string;
  action: () => void;
}

const MenuItem = ({ name, action, icon }: Props) => {
  return (
    <button type="button" className={styles.item} onClick={action}>
      {icon}
      <span>{name}</span>
    </button>
  );
};

export default MenuItem;
