import css from './Section.module.css';

const Section = ({ title, children }) => {
    return (
        <section className={css.section}>
            <h1 className={css.title}>{title}</h1>
            {children}
        </section>
    );
};

export { Section };