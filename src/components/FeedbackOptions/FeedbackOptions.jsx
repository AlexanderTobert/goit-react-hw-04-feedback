import css from './FeedbackOptions.module.css';
import { nanoid } from 'nanoid'

const FeedbackOptions = ({ options, handleFeedback }) => {
    return (
        <>
            <ul className={css.list}>
                {options.map(btnName => {
                    const id = nanoid();
                    return (
                        <li key={id}>
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