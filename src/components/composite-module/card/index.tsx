import classNames from "classnames";
import { HTMLAttributes } from "react";
import styles from "./card.module.css";

const Card = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={classNames(styles["card"], props.className)}>
      <figure className={styles["card__img-wrapper"]}>
        <img
          src="assets/img/code.jpg"
          alt="写真：HTML コードが写っている画面"
          className={styles["card__img"]}
        />
      </figure>
      <div className={styles["card__body"]}>
        <h3 className={styles["card__title"]}>web サイト制作</h3>
        <p className={styles["card__text"]}>
          ユーザーにベストな体験を提供するクリエイティブとテクノロジーを作り上げます。
        </p>
      </div>
    </div>
  );
};

const CardWithBadge = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={classNames(styles["card"], props.className)}>
      <b className={styles["card__badge"]}>
        <span className={styles["card__badge-text"]}>New</span>
      </b>
      <figure className={styles["card__img-wrapper"]}>
        <img
          src="assets/img/code.jpg"
          alt="写真：HTML コードが写っている画面"
          className={styles["card__img"]}
        />
      </figure>
      <div className={styles["card__body"]}>
        <h3 className={styles["card__title"]}>web サイト制作</h3>
        <p className={styles["card__text"]}>
          ユーザーにベストな体験を提供するクリエイティブとテクノロジーを作り上げます。
        </p>
      </div>
    </div>
  );
};

const CardLink = (props: HTMLAttributes<HTMLAnchorElement>) => {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a
      {...props}
      href="#"
      className={classNames(styles["card"], styles["card--link"], props.className)}
    >
      <figure className={styles["card__img-wrapper"]}>
        <img
          src="assets/img/code.jpg"
          alt="写真：HTML コードが写っている画面"
          className={styles["card__img"]}
        />
      </figure>
      <div className={styles["card__body"]}>
        <h3 className={styles["card__title"]}>web サイト制作</h3>
        <p className={styles["card__text"]}>
          ユーザーにベストな体験を提供するクリエイティブとテクノロジーを作り上げます。
        </p>
      </div>
    </a>
  );
};

export { Card, CardWithBadge, CardLink };
