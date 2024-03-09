async function(properties, context) {
    import { exportedLogMessage } from './test.js';
	
    console.log("HERE I AM!!!! (from github) : imported message: ", exportedLogMessage)

	function generateHeader(uniqueID, type, callBackUrl) {
  		var result = {}
        
  		result['unique_id'] = uniqueID
  		result['type'] = type
  		result['call_back_url'] = callBackUrl
  		
        return result
	}


    const BASIC_QA_TRANSFORM_KEY_LIST = ['Pitch', 'ImpactStatement', 'SolutionStatement', 'ProblemStatement', 'BusinessCaseStatement', 'StoryInfuserTechnical Insights', 'StoryInfuserPatientStory', 'StoryInfuserChallengeStory', 'InnoStoryFailureStory'];
    const TRANSFORMATION_TRANSFORM_KEY_LIST = ['BLUF', 'Summarize', 'Simplify', 'ValueProposition'];
    
  
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
    
    function generateJSONFor_ArticleFromScratch(qaCount, answerList){
        var result = {}

        for (var i =1; i<= qaCount; i++)
        {
            let dynamicAnswerKey = "answer"+i
            result[dynamicAnswerKey] = answerList[i];
        }
        return result;
    }

    function generateJSONFor_WFFTRC(answerList){
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
        return result
    }

    function generateJSONFor_CaseStudy(answerList) {
        var result = {}
        result['customer_info'] = answerList[0];
        result['challenge'] = answerList[1];
        result['solution'] = answerList[2];
        result['results'] = answerList[3];
        result['action_call'] = answerList[4];

        return result;
    }

    function generateJSONFor_WhitePaper(questionList, answerList) {
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

       return result
    }
    
    function generateJSONFor_Transformation(transformationKey, content) {
        var result = {}

        result['transformation_type'] = transformationKey.toLowerCase();
        result['content'] = content;

        return result;
    }
    
    
    
    var templateResult = {}

    if (BASIC_QA_TRANSFORM_KEY_LIST.includes(properties.transformKey.get()) ) {
      	templateResult = generateJSONFor_BasicQA(properties.questions.length, properties.questions.get(0,100), properties.answers.get(0,100))
    }
    else if (TRANSFORMATION_TRANSFORM_KEY_LIST.includes(properties.transformKey)) {
      	templateResult = generateJSONFor_Transformation(transformKey, properties.uploadedContent)
    } 
    else if (properties.transformKey == 'WhitePaper') {
      	templateResult = generateJSONFor_WhitePaper(properties.questions, properties.answers)
    } 
    else if (properties.transformKey == 'ArticleFromScratch') {
        templateResult = generateJSONFor_ArticleFromScratch(properties.answers.length, properties.answers)
    } 
    else if (properties.transformKey === 'CaseStudy') {
      	templateResult = generateJSONFor_CaseStudy(properties.answers)
    } 
    else if (properties.transformKey == 'WFF-TRC Concept Note') {
      	templateResult = generateJSONFor_WFFTRC(properties.answers)
    }


    let headerJSON = generateHeader(properties.transformDocUUID, properties.backendAPIType, properties.callbackURL)
    let templateJSON = templateResult;
    
    var fullJSON = {}
  
    for (var key in headerJSON) {
        if (headerJSON.hasOwnProperty(key)) {
            fullJSON[key] = headerJSON[key]
        }
    }
    
    for (var key in templateJSON) {
        if (templateJSON.hasOwnProperty(key)) {
            fullJSON[key] = templateJSON[key]
        }
    }
    
    let fullString = JSON.stringify(fullJSON)
    
    return { jsonPayload: fullString }
}
