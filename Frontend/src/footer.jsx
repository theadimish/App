import styles from './footer.module.css';
import Newsletter from './Newsletter';
import Links from './Links';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className={styles.footerWrapper}>
            <div className={styles.footerGrid}>
                <div className={styles.aboutUs}>
                    <h2>Welcome to Foodie.com</h2>
                    <em>Feel free to contact us.</em>
                    <p>PH: +91 9007418947</p>
                </div>

                <Newsletter />

                <div className={styles.socialMedia}>
                    <Links />
                </div>
            </div>

            <div className={styles.backToTop}>
                <button onClick={scrollToTop}><b>Back to top ↑</b></button>
            </div>

            <div className={styles.copyright}>
                <p>
                    © All Rights Reserved 2025 | Designed by <b><i>Loader Logic</i></b>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
