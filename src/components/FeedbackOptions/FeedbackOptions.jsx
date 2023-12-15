import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, handleFeedback }) => {
    return (
        <>
            <ul className={css.list}>
                {options.map(btnName => {
                    return (
                        <li>
                        <button
                                type="button"
                                onClick={() => handleFeedback(btnName.toLowerCase())}
                                className={css.btn}
                        >
                            {btnName}
                        </button>
                        </li>
                    );
        })}
            </ul>
    </>
    );
};

export { FeedbackOptions };