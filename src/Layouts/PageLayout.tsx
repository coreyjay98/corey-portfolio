import styles from "./PageLayout.module.scss";

const PageLayout = ({
  children,
  fullWidth,
}: {
  children: React.ReactNode;
  fullWidth?: boolean;
}) => {
  return (
    <div className={styles.baseLayout}>
      <div className={fullWidth ? styles.fullWidthLayout : styles.layout}>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
