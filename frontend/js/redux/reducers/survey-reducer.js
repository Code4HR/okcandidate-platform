import {
    FETCH_SURVEY_QUESTIONS_REQUEST,
    FETCH_SURVEY_QUESTIONS_SUCCESS,
    FETCH_SURVEY_QUESTIONS_FAILURE,
    SET_QUESTION_AGREEMENT,
    GOTO_NEXT_QUESTION,
    GOTO_PREV_QUESTION
} from './../actions/survey-actions';

const initialState = {
    isFetching: false,
    questions: [],
    questionIndex: 0,
    error: ''
};

export default function surveyReducer(state = initialState, action) {
    switch (action.type) {

    case FETCH_SURVEY_QUESTIONS_REQUEST:
        return Object.assign({}, state, {
            isFetching: true,
            error: initialState.error
        });

    case FETCH_SURVEY_QUESTIONS_SUCCESS:
        return Object.assign({}, state, {
            isFetching: false,
            questions: action.response,
            error: initialState.error
        });

    case FETCH_SURVEY_QUESTIONS_FAILURE:
        return Object.assign({}, state, {
            isFetching: false,
            help: action.error
        });

    case SET_QUESTION_AGREEMENT:
        return Object.assign({}, state, {
            questions: state.questions.map(question => {
                if (question.id === action.questionId) {
                    question.agreement = action.agreement;
                }
                return question;
            })
        });

    case GOTO_NEXT_QUESTION:
        return Object.assign({}, state, {
            questionIndex: state.questionIndex + 1
        });

    case GOTO_PREV_QUESTION:
        return Object.assign({}, state, {
            questionIndex: state.questionIndex - 1
        });

    default:
        return state;
    }
}
