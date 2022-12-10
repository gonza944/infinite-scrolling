import styles from './index.module.css'

type WrapperProps = {
    children: JSX.Element;
}

const Wrapper: React.FC<WrapperProps> = ({children}) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Wrapper;
