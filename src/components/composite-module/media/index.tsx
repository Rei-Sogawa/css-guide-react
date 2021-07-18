import classNames from "classnames";
import styles from "./media.module.css";

const Media = () => {
  return (
    <div className={styles["media"]}>
      <figure className={styles["media__img-wrapper"]}>
        <img
          src="assets/img/persona.jpg"
          alt="写真：手に持たれたスマホ"
          className={styles["media__img"]}
        />
      </figure>
      <div className={styles["media__body"]}>
        <h3 className={styles["media__title"]}>ユーザーを考えた設計で満足な体験を</h3>
        <p className={styles["media__text"]}>
          提供するサービスやペルソナによって、web
          サイトの設計は異なります。サービスやペルソナに合わせた設計を行うことにより、訪問者のストレスのないよりよい体験を生み出し、満足を高めることとなります。
          <br />
          わたしたちはお客様のサイトに合ったユーザビリティを考えるため、分析やヒアリングをきめ細かく実施、満足を体験できるクリエイティブとテクノロジーを設計・構築し、今までにない期待を超えたユーザー体験を提供いたします。
        </p>
      </div>
    </div>
  );
};

const ReverseMedia = () => {
  return (
    <div className={classNames(styles["media"], styles["media--reverse"])}>
      <figure className={styles["media__img-wrapper"]}>
        <img
          src="assets/img/persona.jpg"
          alt="写真：手に持たれたスマホ"
          className={styles["media__img"]}
        />
      </figure>
      <div className={styles["media__body"]}>
        <h3 className={styles["media__title"]}>ユーザーを考えた設計で満足な体験を</h3>
        <p className={styles["media__text"]}>
          提供するサービスやペルソナによって、web
          サイトの設計は異なります。サービスやペルソナに合わせた設計を行うことにより、訪問者のストレスのないよりよい体験を生み出し、満足を高めることとなります。
          <br />
          わたしたちはお客様のサイトに合ったユーザビリティを考えるため、分析やヒアリングをきめ細かく実施、満足を体験できるクリエイティブとテクノロジーを設計・構築し、今までにない期待を超えたユーザー体験を提供いたします。
        </p>
      </div>
    </div>
  );
};

const HalfMedia = () => {
  return (
    <div className={styles["half-media"]}>
      <figure className={styles["half-media__img-wrapper"]}>
        <img
          src="assets/img/persona.jpg"
          alt="写真：手に持たれたスマホ"
          className={styles["half-media__img"]}
        />
      </figure>
      <div className={styles["half-media__body"]}>
        <h3 className={styles["half-media__title"]}>ユーザーを考えた設計で満足な体験を</h3>
        <p className={styles["half-media__text"]}>
          提供するサービスやペルソナによって、web
          サイトの設計は異なります。サービスやペルソナに合わせた設計を行うことにより、訪問者のストレスのないよりよい体験を生み出し、満足を高めることとなります。
          <br />
          わたしたちはお客様のサイトに合ったユーザビリティを考えるため、分析やヒアリングをきめ細かく実施、満足を体験できるクリエイティブとテクノロジーを設計・構築し、今までにない期待を超えたユーザー体験を提供いたします。
        </p>
      </div>
    </div>
  );
};

export { Media, ReverseMedia, HalfMedia };
