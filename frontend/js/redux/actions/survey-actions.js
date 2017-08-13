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

export const SET_ANSWER_HELP_TEXT = 'SET_ANSWER_HELP_TEXT';
export const SET_SENTIMENT_HELP_TEXT = 'SET_SENTIMENT_HELP_TEXT';

export function setAnswerHelpText(answerHelp) {
    return {
        type: SET_ANSWER_HELP_TEXT,
        answerHelp
    };
}

export function setSentimentHelpText(sentimentHelp) {
    return {
        type: SET_SENTIMENT_HELP_TEXT,
        sentimentHelp
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

export const CREATE_SURVEY_RESULT_REQUEST = 'CREATE_SURVEY_RESULT_REQUEST';
export const CREATE_SURVEY_RESULT_SUCCESS = 'CREATE_SURVEY_RESULT_SUCCESS';
export const CREATE_SURVEY_RESULT_FAILURE = 'CREATE_SURVEY_RESULT_FAILURE';

export function createSurveyResultRequest() {
    return {
        type: CREATE_SURVEY_RESULT_REQUEST
    };
}

export function createSurveyResultSuccess(response) {
    return {
        type: CREATE_SURVEY_RESULT_SUCCESS,
        response
    };
}

export function createSurveyResultFailure(error) {
    return {
        type: CREATE_SURVEY_RESULT_FAILURE,
        error
    };
}

export function createSurveyResult(SurveyId, callback) {
    return (dispatch) => {
        dispatch(createSurveyResultRequest());
        return fetch('/api/v1/surveyresult', {
            credentials: 'same-origin',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                SurveyId: SurveyId
            })
        })
            .then(checkStatus)
            .then(response => response.json())
            .then(response => {
                dispatch(createSurveyResultSuccess(response));
                return callback && callback(null, response);
            })
            .catch(error => {
                dispatch(createSurveyResultFailure(error));
                return callback && callback(error);
            });
    };
}

export const FETCH_SURVEY_RESULT_REQUEST = 'FETCH_SURVEY_RESULT_REQUEST';
export const FETCH_SURVEY_RESULT_SUCCESS = 'FETCH_SURVEY_RESULT_SUCCESS';
export const FETCH_SURVEY_RESULT_FAILURE = 'FETCH_SURVEY_RESULT_FAILURE';

export function fetchSurveyResultRequest() {
    return {
        type: FETCH_SURVEY_RESULT_REQUEST
    };
}

export function fetchSurveyResultSuccess(response) {
    return {
        type: FETCH_SURVEY_RESULT_SUCCESS,
        response
    };
}

export function fetchSurveyResultFailure(error) {
    return {
        type: FETCH_SURVEY_RESULT_FAILURE,
        error
    };
}

export function fetchSurveyResult(SurveyId, callback) {
    return (dispatch) => {
        dispatch(fetchSurveyResultRequest());
        return fetch('/api/v1/surveyresult/getOne', {
            credentials: 'include'
        })
            .then(checkStatus)
            .then(response => response.json())
            .then(response => {
                if (!response.id) {
                    dispatch(createSurveyResult(SurveyId, callback));
                    return callback && callback(null, response);
                }
                dispatch(fetchSurveyResultSuccess(response));
                return callback && callback();
            })
            .catch(error => {
                dispatch(fetchSurveyResultFailure(error));
                return callback && callback();
            });
    };
}

export const CREATE_SURVEY_RESULT_ANSWER_REQUEST = 'CREATE_SURVEY_RESULT_ANSWER_REQUEST';
export const CREATE_SURVEY_RESULT_ANSWER_SUCCESS = 'CREATE_SURVEY_RESULT_ANSWER_SUCCESS';
export const CREATE_SURVEY_RESULT_ANSWER_FAILURE = 'CREATE_SURVEY_RESULT_ANSWER_FAILURE';

export function createSurveyResultAnswerRequest() {
    return {
        type: CREATE_SURVEY_RESULT_ANSWER_REQUEST
    };
}

export function createSurveyResultAnswerSuccess(response) {
    return {
        type: CREATE_SURVEY_RESULT_ANSWER_SUCCESS,
        response
    };
}

export function createSurveyResultAnswerFailure(error) {
    return {
        type: CREATE_SURVEY_RESULT_ANSWER_FAILURE,
        error
    };
}

export function createSurveyResultAnswer(question, response, SurveyResultId, callback) {
    return (dispatch) => {
        dispatch(createSurveyResultAnswerRequest());
        fetch('/api/v1/surveyresultanswer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                QuestionId: question.id,
                AnswerId: response.AnswerId,
                SurveyResultId,
                sentiment: response.sentiment
            })
        })
            .then(checkStatus)
            .then(response => response.json())
            .then(response => {
                dispatch(createSurveyResultAnswerSuccess(response));
                callback && callback(null, response);
            })
            .catch(error => {
                dispatch(createSurveyResultAnswerFailure(error));
                callback(error);
            });
    };
}

export const UPDATE_SURVEY_RESULT_ANSWER_REQUEST = 'UPDATE_SURVEY_RESULT_ANSWER_REQUEST';
export const UPDATE_SURVEY_RESULT_ANSWER_SUCCESS = 'UPDATE_SURVEY_RESULT_ANSWER_SUCCESS';
export const UPDATE_SURVEY_RESULT_ANSWER_FAILURE = 'UPDATE_SURVEY_RESULT_ANSWER_FAILURE';

export function updateSurveyResultAnswerRequest() {
    return {
        type: UPDATE_SURVEY_RESULT_ANSWER_REQUEST
    };
}

export function updateSurveyResultAnswerSuccess(QuestionId) {
    return {
        type: UPDATE_SURVEY_RESULT_ANSWER_SUCCESS,
        QuestionId
    };
}

export function updateSurveyResultAnswerFailure(error) {
    return {
        type: UPDATE_SURVEY_RESULT_ANSWER_FAILURE,
        error
    };
}

export function updateSurveyResultAnswer(response, callback) {
    return (dispatch) => {
        dispatch(updateSurveyResultAnswerRequest());
        return fetch(`/api/v1/surveyresultanswer/${response.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                AnswerId: response.AnswerId,
                sentiment: response.sentiment
            })
        })
            .then(checkStatus)
            .then(response => response.json())
            .then(response => {
                dispatch(updateSurveyResultAnswerSuccess(answer.QuestionId));
                callback(null);
            })
            .catch(error => {
                dispatch(updateSurveyResultAnswerFailure(error));
                callback(error);
            });
    };
}
