/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */

async function(properties, context) {
    import { exportedLogMessage } from './test.js';
	
    console.log("HERE I AM!!!! (from github) : imported message: ", exportedLogMessage)

	console.log("START  :  NarratizeBackend : Narratize : Generate JSON Payload ddd")

    const TEST_TRANSFORM_KEY = 'Simplify';

    let example_properties = {
      Pitch: {
        transformDocUUID: "1234",
        backendAPIType: "Pitch",
        callbackURL: "https://www.google.com",
        transformKey: "Pitch",
        questions: ["What is the problem?", "What is the solution?", "What is the impact?"],
        answers: ["The problem is that there is no solution", "The solution is to create a solution", "The impact is that there is no impact"],
      },
      ImpactStatement: {
        transformDocUUID: "1234",
        backendAPIType: "ImpactStatement",
        callbackURL: "https://www.google.com",
        transformKey: "ImpactStatement",
        questions: ["What is the problem?", "What is the solution?", "What is the impact?"],
        answers: ["The problem is that there is no solution", "The solution is to create a solution", "The impact is that there is no impact"],
      },
      SolutionStatement: {
        transformDocUUID: "1234",
        backendAPIType: "SolutionStatement",
        callbackURL: "https://www.google.com",
        transformKey: "SolutionStatement",
        questions: ["What is the problem?", "What is the solution?", "What is the impact?"],
        answers: ["The problem is that there is no solution", "The solution is to create a solution", "The impact is that there is no impact"],
      },
      ProblemStatement: {
        transformDocUUID: "1234",
        backendAPIType: "ProblemStatement",
        callbackURL: "https://www.google.com",
        transformKey: "ProblemStatement",
        questions: ["What is the problem?", "What is the solution?", "What is the impact?"],
        answers: ["The problem is that there is no solution", "The solution is to create a solution", "The impact is that there is no impact"],
      },
      BusinessCaseStatement: {
        transformDocUUID: "1234",
        backendAPIType: "BusinessCaseStatement",
        callbackURL: "https://www.google.com",
        transformKey: "BusinessCaseStatement",
        questions: ["What is the problem?", "What is the solution?", "What is the impact?"],
        answers: ["The problem is that there is no solution", "The solution is to create a solution", "The impact is that there is no impact"],
      },
      "StoryInfuserTechnical Insights": {
        transformDocUUID: "1234",
        backendAPIType: "StoryInfuserTechnicalInsights",
        callbackURL: "https://www.google.com",
        transformKey: "StoryInfuserTechnical Insights",
        questions: ["What is the problem?", "What is the solution?", "What is the impact?"],
        answers: ["The problem is that there is no solution", "The solution is to create a solution", "The impact is that there is no impact"],
      },
      StoryInfuserPatientStory: {
        transformDocUUID: "1234",
        backendAPIType: "StoryInfuserPatientStory",
        callbackURL: "https://www.google.com",
        transformKey: "StoryInfuserPatientStory",
        questions: ["What is the problem?", "What is the solution?", "What is the impact?"],
        answers: ["The problem is that there is no solution", "The solution is to create a solution", "The impact is that there is no impact"],
      },
      StoryInfuserChallengeStory: {
        transformDocUUID: "1234",
        backendAPIType: "StoryInfuserChallengeStory",
        callbackURL: "https://www.google.com",
        transformKey: "StoryInfuserChallengeStory",
        questions: ["What is the problem?", "What is the solution?", "What is the impact?"],
        answers: ["The problem is that there is no solution", "The solution is to create a solution", "The impact is that there is no impact"],
      },
      InnoStoryFailureStory: {
        transformDocUUID: "1234",
        backendAPIType: "InnoStoryFailureStory",
        callbackURL: "https://www.google.com",
        transformKey: "InnoStoryFailureStory",
        questions: ["What is the problem?", "What is the solution?", "What is the impact?"],
        answers: ["The problem is that there is no solution", "The solution is to create a solution", "The impact is that there is no impact"],
      },
      BLUF: {
        transformDocUUID: "1234",
        backendAPIType: "transform BLUF",
        callbackURL: "https://www.google.com",
        transformKey: "BLUF",
        uploadedContent: "This is the content that was uploaded",
      },
      Summarize: {
        transformDocUUID: "1234",
        backendAPIType: "transform Summarize",
        callbackURL: "https://www.google.com",
        transformKey: "Summarize",
        uploadedContent: "This is the content that was uploaded",
      },
      Simplify: {
        transformDocUUID: "1234",
        backendAPIType: "transform Simplify",
        callbackURL: "https://www.google.com",
        transformKey: "Simplify",
        uploadedContent: "This is the content that was uploaded",
      },
      ValueProposition: {
        transformDocUUID: "1234",
        backendAPIType: "transform ValueProposition",
        callbackURL: "https://www.google.com",
        transformKey: "ValueProposition",
        uploadedContent: "This is the content that was uploaded",
      },
      WhitePaper: {
        transformDocUUID: "1234",
        backendAPIType: "WhitePaper",
        transformKey: "WhitePaper",
        callbackURL: "https://www.google.com",
        questions: ["q_one", "q_two", "q_three", "q_four", "q_five", "q_six", "q_seven", "q_eight", "q_nine", "q_ten", "q_1one", "q_1two", "q_1three", "q_1four", "q_1five", "q_1six", "q_1seven", "q_1eight"],
        answers: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "1one", "1two", "1three", "1four", "1five", "1six", "1seven", "1eight"],
      },
      ArticleFromScratch: {
        transformDocUUID: "1234",
        backendAPIType: "ArticleFromScratch",
        callbackURL: "https://www.google.com",
        transformKey: "ArticleFromScratch",
        questions: ["What is the problem?", "What is the solution?", "What is the impact?"],
        answers: ["The problem is that there is no solution", "The solution is to create a solution", "The impact is that there is no impact"],
        uploadedContent: "This is the content that was uploaded"
      },
      CaseStudy: {
        transformDocUUID: "1234",
        backendAPIType: "CaseStudy",
        callbackURL: "https://www.google.com",
        transformKey: "CaseStudy",
        answers: ["one", "two", "three", "four", "five"],
      },
      "WFF-TRC Concept Note": {
        transformDocUUID: "1234",
        backendAPIType: "WFF-TRC Concept Note",
        callbackURL: "https://www.google.com",
        transformKey: "WFF-TRC Concept Note",
        answers: ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine"],
      },
    }
    let properties = example_properties[TEST_TRANSFORM_KEY];

    console.log("\tTest Key: ", TEST_TRANSFORM_KEY);
    console.log("\tproperties: ", properties);

    const BASIC_QA_TRANSFORM_KEY_LIST = ['Pitch', 'ImpactStatement', 'SolutionStatement', 'ProblemStatement', 'BusinessCaseStatement', 'StoryInfuserTechnical Insights', 'StoryInfuserPatientStory', 'StoryInfuserChallengeStory', 'InnoStoryFailureStory'];
    const TRANSFORMATION_TRANSFORM_KEY_LIST = ['BLUF', 'Summarize', 'Simplify', 'ValueProposition'];


	function generateHeader(uniqueID, type, callBackUrl) {
        console.log("\t\tSTART : generateHeader");

  		var result = {}

  		result['unique_id'] = uniqueID
  		result['type'] = type
  		result['call_back_url'] = callBackUrl

        console.log("\t\t\tresult: ", result);
        console.log("\t\tEND : generateHeader");

        return result
	}


    function generateJSONFor_BasicQA(questionList, answerList) {
        console.log("\t\tSTART : generateJSONFor_BasicQA");

        var result = {}

        result['question_answer_list'] = []
        for (var i = 0; i < questionList.length; i++) {
            result['question_answer_list'].push({
                question: questionList[i],
                answer: answerList[i],
            })
        }

        console.log("\t\t\tresult: ", result);
        console.log("\t\tEND : generateJSONFor_BasicQA");

        return result
    }


    function generateJSONFor_ArticleFromScratch(answerList){
        console.log("\t\tSTART : generateJSONFor_ArticleFromScratch");

        var result = {}

        for (var i = 0; i < answerList.length; i++)
        {
            let dynamicAnswerKey = "answer" + (i + 1)
            result[dynamicAnswerKey] = answerList[i];
        }

        console.log("\t\t\tresult: ", result);
        console.log("\t\tEND : generateJSONFor_ArticleFromScratch");

        return result;
    }


    function generateJSONFor_WFFTRC(answerList){
        console.log("\t\tSTART : generateJSONFor_WFFTRC");

        if (answerList.length != 9) {
          console.log("\t\t\tError: answerList length is not valid (9)");
        }

        var result = {}
        result['title'] = answerList[0]
        result['subtitle'] = answerList[1];
        result['research_summary'] = answerList[2];
        result['problem_statement'] = answerList[3];
        result['research_objectives'] = answerList[4];
        result['research_methodology'] = answerList[5];
        result['description'] = answerList[6];
        result['prize'] = answerList[7];
        result['innovative_research'] = answerList[8];

        console.log("\t\t\tresult: ", result);
        console.log("\t\tEND : generateJSONFor_WFFTRC");

        return result
    }


    function generateJSONFor_CaseStudy(answerList) {
        console.log("\t\tSTART : generateJSONFor_CaseStudy");

        if (answerList.length != 5) {
            console.log("\t\t\tError: answerList length is not valid (5)");
        }

        var result = {}
        result['customer_info'] = answerList[0];
        result['challenge'] = answerList[1];
        result['solution'] = answerList[2];
        result['results'] = answerList[3];
        result['action_call'] = answerList[4];

        console.log("\t\t\tresult: ", result);
        console.log("\t\tEND : generateJSONFor_CaseStudy");

        return result;
    }


    function generateJSONFor_WhitePaper(questionList, answerList) {
        console.log("\t\tSTART : generateJSONFor_WhitePaper");

        if (answerList.length != 18) {
            console.log("\t\t\tError: answerList length is not valid (18)");
        }

      	var result = {}

        result['impact'] = []
        var impact_1 = {
          question: questionList[4],
          answer: answerList[4]
        }
        var impact_2 = {
          question: questionList[5],
          answer: answerList[5]
        }
        var impact_3 = {
          question: questionList[6],
          answer: answerList[6]
        }
        result['impact'].push(impact_1)
        result['impact'].push(impact_2)
        result['impact'].push(impact_3)

        result['call_to_action'] = answerList[7]

        result['opener'] = {
          opener: answerList[0],
          opener_story: answerList[2],
          opener_data_points: answerList[3],
        }

        result['background'] = {
          background: answerList[8],
          background_story: answerList[10],
          background_data_points: answerList[11],
        }

        result['solution'] = {
          detailed_solution: answerList[12],
        }

        result['case_study'] = {
          case_study_customer_info: answerList[13],
          case_study_solution: answerList[14],
          case_study_results: answerList[15],
          case_study_challenge: answerList[16],
        }

        result['about_us'] = answerList[17]

        console.log("\t\t\tresult: ", result);
        console.log("\t\tEND : generateJSONFor_WhitePaper");

       return result
    }


    function generateJSONFor_Transformation(transformationKey, content) {
        console.log("\t\tSTART : generateJSONFor_Transformation");

        var result = {}

        result['transformation_type'] = transformationKey.toLowerCase();
        result['content'] = content;

        console.log("\t\t\tresult: ", result);
        console.log("\t\tEND : generateJSONFor_Transformation");

        return result;
    }


    console.log("\tTransformKey : ", properties.transformKey);
    console.log("");


    let headerJSON = generateHeader(properties.transformDocUUID, properties.backendAPIType, properties.callbackURL)
    console.log("");
    console.log("");
    console.log("\theaderJSON: for transformKey: ", properties.transformKey);
    console.log(JSON.stringify(headerJSON, null, 2));
    console.log("");


    var templateJSON = {}

    if (BASIC_QA_TRANSFORM_KEY_LIST.includes(properties.transformKey)) {
      	templateJSON = generateJSONFor_BasicQA(properties.questions, properties.answers)
    }
    else if (TRANSFORMATION_TRANSFORM_KEY_LIST.includes(properties.transformKey)) {
      	templateJSON = generateJSONFor_Transformation(properties.transformKey, properties.uploadedContent)
    }
    else if (properties.transformKey == 'WhitePaper') {
      	templateJSON = generateJSONFor_WhitePaper(properties.questions, properties.answers)
    }
    else if (properties.transformKey == 'ArticleFromScratch') {
        templateJSON = generateJSONFor_ArticleFromScratch(properties.answers)
    }
    else if (properties.transformKey === 'CaseStudy') {
      	templateJSON = generateJSONFor_CaseStudy(properties.answers)
    }
    else if (properties.transformKey == 'WFF-TRC Concept Note') {
      	templateJSON = generateJSONFor_WFFTRC(properties.answers)
    }
    else {
        console.log("No matching transform key found");
    }


    console.log("");
    console.log("\ttemplateJSON: for transformKey: ", properties.transformKey);
    console.log(JSON.stringify(templateJSON, null, 2));
    console.log("");


    var fullJSON = {};

    console.log("\tHeader:");
    for (var headerKey in headerJSON) {
        console.log("\t\tkey found: ", headerKey);
        fullJSON[headerKey] = headerJSON[headerKey]
    }

    console.log("");

    console.log("\tTemplate:");
    for (var templateKey in templateJSON) {
        console.log("\t\tkey found: ", templateKey);
        fullJSON[templateKey] = templateJSON[templateKey]
    }

    console.log("");
    console.log("\tfullSON: for transformKey: ", properties.transformKey);
    console.log(JSON.stringify(fullJSON, null, 2));
    console.log("");

    let fullString = JSON.stringify(fullJSON)

    console.log("fullString: ", fullString);

    console.log("");

	console.log("END  :  NarratizeBackend : Narratize : Generate JSON Payload")
    
    return { jsonPayload: fullString }
}
