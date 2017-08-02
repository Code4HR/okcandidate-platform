import fetch from 'isomorphic-fetch';
import checkStatus from './../utils/checkStatus';

export const SET_SURVEY_FORMAT = 'SET_SURVEY_FORMAT';

export function setSurveyFormat(multipleChoice, sentiment) {
    return {
        type: SET_SURVEY_FORMAT,
        multipleChoice,
        sentiment
    };
}

export const FETCH_SURVEY_QUESTIONS_REQUEST = 'FETCH_SURVEY_QUESTIONS_REQUEST';
export const FETCH_SURVEY_QUESTIONS_SUCCESS = 'FETCH_SURVEY_QUESTIONS_SUCCESS';
export const FETCH_SURVEY_QUESTIONS_FAILURE = 'FETCH_SURVEY_QUESTIONS_FAILURE';

export function fetchSurveyQuestionsRequest() {
    return {
        type: FETCH_SURVEY_QUESTIONS_REQUEST
    };
}

export function fetchSurveyQuestionsSuccess(response) {
    return {
        type: FETCH_SURVEY_QUESTIONS_SUCCESS,
        response
    };
}

export function fetchSurveyQuestionsFailure(error) {
    return {
        type: FETCH_SURVEY_QUESTIONS_FAILURE,
        error
    };
}

export function fetchSurveyQuestions(id) {
    return function(dispatch) {
        dispatch(fetchSurveyQuestionsRequest());
        return Promise.all([
            fetch(`/api/v1/question?SurveyId=${id}`),
            fetch(`/api/v1/survey/${id}?populate=QuestionType`)
        ])
            .then(responses => Promise.all(responses.map(checkStatus)))
            .then(responses => Promise.all(responses.map(response => response.json())))
            .then(([questions, survey]) => {
                dispatch(setSurveyFormat(
                    survey.QuestionType.multipleChoice,
                    survey.QuestionType.sentiment
                ));
                dispatch(fetchSurveyQuestionsSuccess(questions));
            })
            .catch(error => dispatch(fetchSurveyQuestionsFailure(error)));
    };
}

export const SET_QUESTION_SENTIMENT = 'SET_QUESTION_SENTIMENT';
export function setQuestionSentiment(sentiment, questionId) {
    return {
        type: SET_QUESTION_SENTIMENT,
        sentiment,
        questionId
    };
}

export const SET_QUESTION_ANSWER_ID = 'SET_QUESTION_ANSWER_ID';

export function setQuestionAnswerId(answerId, questionId) {
    return {
        type: SET_QUESTION_ANSWER_ID,
        answerId,
        questionId
    };
}

export const GOTO_NEXT_QUESTION = 'GOTO_NEXT_QUESTION';
export const GOTO_PREV_QUESTION = 'GOTO_PREV_QUESTION';

export function gotoNextQuestion() {
    return {
        type: GOTO_NEXT_QUESTION
    };
}

export function gotoPrevQuestion() {
    return {
        type: GOTO_PREV_QUESTION
    };
}
