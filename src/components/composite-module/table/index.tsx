import styles from "./table.module.css";

const Table = () => {
  return (
    <div className={styles["horizontal-table"]}>
      <table className={styles["horizontal-table__inner"]}>
        <tbody className={styles["horizontal-table__body"]}>
          <tr className={styles["horizontal-table__row"]}>
            <th className={styles["horizontal-table__header"]}>名前</th>
            <td className={styles["horizontal-table__text"]}>半田 惇史</td>
          </tr>
          <tr className={styles["horizontal-table__row"]}>
            <th className={styles["horizontal-table__header"]}>所属</th>
            <td className={styles["horizontal-table__text"]}>株式会社24-7/株式会社パンセ</td>
          </tr>
          <tr className={styles["horizontal-table__row"]}>
            <th className={styles["horizontal-table__header"]}>職種</th>
            <td className={styles["horizontal-table__text"]}>
              テクニカルディレクター/シニアエンジニア
            </td>
          </tr>
          <tr className={styles["horizontal-table__row"]}>
            <th className={styles["horizontal-table__header"]}>得意分野</th>
            <td className={styles["horizontal-table__text"]}>CSS設計、HubSpot CMS</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export { Table };
