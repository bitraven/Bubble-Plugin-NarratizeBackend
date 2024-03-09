async function(properties, context) {
  import { generateJSONPayload } from './generateJSONPayload.js';
  return { 
    jsonPayload: generateJSONPayload(properties, context),
    argTransformKey: properties.transformKey,
    argTransformDocUUID: properties.transformDocUUID,
    argQuestions: properties.questions,
    argAnswers: properties.answers,
    argAnswersRequired: properties.answersRequired,
    argBackendAPIType: properties.backendAPIType,
    argCallbackURL: properties.callbackURL
  };
}
