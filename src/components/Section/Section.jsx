import css from './Section.module.css';

const Section = ({ title, children }) => {
    return (
        <>
            <h1 className={css.title}>{title}</h1>
            {children}
        </>
    );
};

export { Section };