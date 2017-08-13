
import {
    FETCH_SURVEY_QUESTIONS_REQUEST,
    FETCH_SURVEY_QUESTIONS_SUCCESS,
    FETCH_SURVEY_QUESTIONS_FAILURE,
    SET_QUESTION_SENTIMENT,
    SET_QUESTION_ANSWER_ID,
    GOTO_NEXT_QUESTION,
    GOTO_PREV_QUESTION,
    SET_SURVEY_FORMAT,
    FETCH_SURVEY_RESULT_SUCCESS,
    CREATE_SURVEY_RESULT_SUCCESS,
    CREATE_SURVEY_RESULT_ANSWER_SUCCESS,
    SET_ANSWER_HELP_TEXT,
    SET_SENTIMENT_HELP_TEXT
} from './../actions/survey-actions';

const initialState = {
    SurveyResultId: null,
    isFetching: false,
    questions: [],
    questionIndex: 0,
    error: '',
    multipleChoice: false,
    sentiment: false,
    answers: {},
    sentimentHelp: '',
    answerHelp: ''
};

export default function surveyReducer(state = initialState, action) {

    const obj = {};

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
        obj[action.questionId] = Object.assign(
            {},
            state.answers[action.questionId], {
                sentiment: action.sentiment
            }
        );

        return Object.assign({}, state, {
            answers: Object.assign({}, state.answers, obj),
            sentimentHelp: ''
        });

    case SET_QUESTION_ANSWER_ID:
        obj[action.questionId] = Object.assign(
            {},
            state.answers[action.questionId], {
                AnswerId: action.answerId
            }
        );

        return Object.assign({}, state, {
            answers: Object.assign({}, state.answers, obj),
            answerHelp: ''
        });

    case GOTO_NEXT_QUESTION:
        return Object.assign({}, state, {
            questionIndex: state.questionIndex + 1
        });

    case GOTO_PREV_QUESTION:
        return Object.assign({}, state, {
            questionIndex: state.questionIndex - 1
        });

    case SET_ANSWER_HELP_TEXT:
        return Object.assign({}, state, {
            answerHelp: action.answerHelp
        });

    case SET_SENTIMENT_HELP_TEXT:
        return Object.assign({}, state, {
            sentimentHelp: action.sentimentHelp
        });

    case SET_SURVEY_FORMAT:
        return Object.assign({}, state, {
            multipleChoice: action.multipleChoice,
            sentiment: action.sentiment
        });

    case CREATE_SURVEY_RESULT_SUCCESS:
        return Object.assign({}, state, {
            SurveyResultId: action.response.id,
            publicPassPhrase: action.response.publicPassPhrase
        });

    case FETCH_SURVEY_RESULT_SUCCESS:
        return Object.assign({}, state, {
            SurveyResultId: action.response.id,
            publicPassPhrase: action.response.publicPassPhrase,
            answers: action.response.SurveyResultAnswers
                .reduce((memo, value) => {
                    memo[value.QuestionId] = value;
                    return memo;
                }, {})
        });

    case CREATE_SURVEY_RESULT_ANSWER_SUCCESS:
        obj[action.response.QuestionId] = action.response;
        return Object.assign({}, state, {
            answers: Object.assign({}, state.answers, obj)
        });

    default:
        return state;
    }
}
