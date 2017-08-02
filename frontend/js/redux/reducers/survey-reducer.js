import {
    FETCH_SURVEY_QUESTIONS_REQUEST,
    FETCH_SURVEY_QUESTIONS_SUCCESS,
    FETCH_SURVEY_QUESTIONS_FAILURE,
    SET_QUESTION_SENTIMENT,
    SET_QUESTION_ANSWER_ID,
    GOTO_NEXT_QUESTION,
    GOTO_PREV_QUESTION,
    SET_SURVEY_FORMAT
} from './../actions/survey-actions';

const initialState = {
    isFetching: false,
    questions: [],
    questionIndex: 0,
    error: '',
    multipleChoice: false,
    sentiment: false,
    surveyResult: {
        answers: [

        ]
    }
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

    case SET_QUESTION_SENTIMENT:
        return Object.assign({}, state, {
            questions: state.questions.map(question => {
                if (question.id === action.questionId) {
                    question.sentiment = action.sentiment;
                }
                return question;
            })
        });

    case SET_QUESTION_ANSWER_ID:
        return Object.assign({}, state, {
            questions: state.questions.map(question => {
                if (question.id === action.questionId) {
                    question.answerId = action.answerId;
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

    case SET_SURVEY_FORMAT:
        return Object.assign({}, state, {
            multipleChoice: action.multipleChoice,
            sentiment: action.sentiment
        });

    default:
        return state;
    }
}
