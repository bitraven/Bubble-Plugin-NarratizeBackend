export function header(uniqueID, type, callBackUrl) {
    console.log("\t\tSTART : generate : header");

      var result = {}

      result['unique_id'] = uniqueID
      result['type'] = type
      result['call_back_url'] = callBackUrl

    console.log("\t\t\tresult: ", result);
    console.log("\t\tEND : generate : header");

    return result
}

export function basicQA(questionList, answerList) {
    console.log("\t\tSTART : generate : basicQA");

    var result = {}

    result['question_answer_list'] = []
    for (var i = 0; i < questionList.length; i++) {
        result['question_answer_list'].push({
            question: questionList[i],
            answer: answerList[i],
        })
    }

    console.log("\t\t\tresult: ", result);
    console.log("\t\tEND : generate : basicQA");

    return result
}

export function transformation(transformationKey, content) {
    console.log("\t\tSTART : generate : transformation");

    var result = {}

    result['transformation_type'] = transformationKey.toLowerCase();
    result['content'] = content;

    console.log("\t\t\tresult: ", result);
    console.log("\t\tEND : generate : transformation");

    return result;
}

export function articleFromScratch(answerList){
    console.log("\t\tSTART : generate : articleFromScratch");

    var result = {}

    for (var i = 0; i < answerList.length; i++)
    {
        let dynamicAnswerKey = "answer" + (i + 1)
        result[dynamicAnswerKey] = answerList[i];
    }

    console.log("\t\t\tresult: ", result);
    console.log("\t\tEND : generate : articleFromScratch");

    return result;
}

export function caseStudy(answerList) {
    console.log("\t\tSTART : generate : caseStudy");

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
    console.log("\t\tEND : generate : caseStudy");

    return result;
}

export function whitePaper(questionList, answerList) {
    console.log("\t\tSTART : generate : whitePaper");

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
    console.log("\t\tEND : generate : whitePaper");

   return result
}

export function wfftrc(answerList){
    console.log("\t\tSTART : generate : wfftrc");

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
    console.log("\t\tEND : generate : wfftrc");

    return result
}
