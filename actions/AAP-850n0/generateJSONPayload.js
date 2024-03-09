/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

import * as test from './test.js';
import { example_properties } from './exampleProperties.js';
import * as generator from './generator.js';

export function generateJSONPayload (properties, context) {
    console.log("HERE I AM!!!! (from github) : imported message: ", exportedLogMessage);
    console.log("START  :  NarratizeBackend : Narratize : Generate JSON Payload ddd");
    return "**payload string here**";
    /*
    var localProperties = properties;

    if (test.TEST_TRANSFORM_KEY != 'none') {
      console.log("\tTest Mode Active : test key: ", test.TEST_TRANSFORM_KEY);
      localProperties = example_properties[test.TEST_TRANSFORM_KEY];
    }

    console.log("\tproperties: ", localProperties);
    console.log("");

    // generate the header JSON
    let headerJSON = generator.header(localProperties.transformDocUUID, localProperties.backendAPIType, localProperties.callbackURL);
    console.log("");
    console.log("\theaderJSON:");
    console.log(JSON.stringify(headerJSON, null, 2));
    console.log("");

    //  generate the template JSON
    var templateJSON = {};
    switch (localProperties.transformKey) {
      case 'Pitch':
      case 'ImpactStatement':
      case 'SolutionStatement':
      case 'ProblemStatement':
      case 'BusinessCaseStatement':
      case 'StoryInfuserTechnical Insights':
      case 'StoryInfuserPatientStory':
      case 'StoryInfuserChallengeStory':
      case 'InnoStoryFailureStory':
        templateJSON = generator.basicQA(localProperties.questions, localProperties.answers);
        break;

      case 'BLUF':
      case 'Summarize':
      case 'Simplify':
      case 'ValueProposition':
        templateJSON = generator.transformation(localProperties.transformKey, localProperties.uploadedContent);
        break;

      case 'WhitePaper':
        templateJSON = generator.whitePaper(localProperties.questions, localProperties.answers);
        break;

      case 'ArticleFromScratch':
        templateJSON = generator.articleFromScratch(localProperties.answers);
        break;

      case 'CaseStudy':
        templateJSON = generator.caseStudy(localProperties.answers);
      break;

      case 'WFF-TRC Concept Note':
        templateJSON = generator.wfftrc(localProperties.answers);
      break;
      
      default:
        console.log("No matching transform key found for key: ", localProperties.transformKey);
      break;
    }

    console.log("");
    console.log("\ttemplateJSON:");
    console.log(JSON.stringify(templateJSON, null, 2));
    console.log("");

    // generate the full JSON payload
    var fullJSON = {};
    console.log("\tHeader:");
    for (var headerKey in headerJSON) {
        console.log("\t\tkey found: ", headerKey);
        fullJSON[headerKey] = headerJSON[headerKey];
    }

    console.log("\tTemplate:");
    for (var templateKey in templateJSON) {
        console.log("\t\tkey found: ", templateKey);
        fullJSON[templateKey] = templateJSON[templateKey];
    }

    console.log("");
    console.log("\tfullSON:");
    console.log(JSON.stringify(fullJSON, null, 2));
    console.log("");

    // convert to a string
    let fullString = JSON.stringify(fullJSON);

    console.log("fullString: ", fullString);
    console.log("");
    console.log("END  :  NarratizeBackend : Narratize : Generate JSON Payload");
    
    return fullString;*/
}