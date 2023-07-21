import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.background}>
      <div className={styles.container}>
        <div className="2xl:w-4/5 max-w-7xl mx-auto w-11/12">
          <div className={styles.flexContainer}>
            <h1 className="lg:text-8xl md:text-7xl text-5xl text-center">
              Full-stack developer <br /> programing with love
            </h1>
            <a
              href="/#projects"
              className={`${styles.btnCTA} md:text-lg md:px-8 md:py-4 hover:[&:not(:disabled)]:tracking-[0.075em]`}
            >
              Discover
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
