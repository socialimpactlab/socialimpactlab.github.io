---
layout: fullwidth
headerimage: "/images/header/services_header.png"
---

* [Overview of feature](#overview-of-feature)
* [Activation from Prime](#activation-from-prime)
* [What happens in Frontline](#what-happens-in-frontline)
    * [Receiving API requests](#receiving-api-requests)
    * [Asking permission](#asking-permission)
    * [Taking the survey](#taking-the-survey)
    * [Storing survey data](#storing-survey-data)
    * [Editing survey questions](#editing-survey-questions)
    * [Statistics](#statistics)

# Client Survey Documentation

## Overview of feature
This feature lets BayLegal staff send surveys to client. Surveys are triggered from Prime, which sends a keyword to Frontline that identifes the survey (e.g. "closing"). A survey is a short SMS exchange of yes/no or multiple-choice questions&mdash;usually three to five. The actual survey questions are stored in Frontline, and are user editable. Simple charts displaying survey statistics are also available.

## Activation from Prime
To send a closing survey, navigate to the "Intake Page 3" tab on the Client form, and hit "Send Closing Survey". Make sure that you have a mobile number listed for your client, and that the number has been marked safe.

![SMS]({{site.baseurl}}/client/baylegal/images/survey.jpg)

You'll see a pop-up box when the information has successfully been passed to FrontlineCloud.

## What happens in Frontline

### Receiving API requests

Frontline looks for the following keys to trigger a survey:

```
number: '+19175551234', [must include +1]
hasSMS: -1, [true]
survey: 'closing' [survey label]
```

### Asking permission
When Frontline receives a survey request, it first texts the client to ask them to participate. The template for the pre-survey question is:

`[Custom survey intro message]. Would you be willing to answer [number of questions] short questions about your experience? You can text back YES or NO.`

A `custom survey intro message` (e.g. "Thank you for calling Bay Area Legal Aid.") can be set for each survey. The `number of questions` is automatically calculated.

### Taking the survey
Clients who elect to participate in the survey will receive a series of Yes/No or multiple choice questions.

A Yes/No question will be formatted: `Were you able to speak to an advocate within an acceptable amount of time? (YES/NO)`. Clients can respond to this with `yes` or `no`. Frontline will prompt the client if they try to submit another answer.

A multiple choice question will be formatted:    
```
What is your favorite color?    
1 - red    
2 - green    
3 - blue
```
Clients can respond to this question with one of the listed numbers. Frontline will prompt the client if their answer is not a number, or if the number is outside of the stated range. 

When the client completes the survey, Frontline will send a thank-you text: `Thanks for completing the survey! Your feedback is appreciated.`

### Storing survey data
FrontlineCloud stores most data against individual contacts. This means that if you visit a contact in Frontline, you'll see their most recently scheduled appointment and their most recent answers to survey questions. Note that for multiple choice questions, the answer text  (e.g. `red`) is stored, not the number choice it corresponds to (`1`)
![client data]({{site.baseurl}}/images/baylegal/client-data.png)

### Editing survey questions
Survey questions are edited in userData. The process for doing so is a little convoluted: click on *Activities* in the main Frontline menu, then replace `/activities` in the URL with `/recipeManager` and hit Enter. Click on "BayLegal Survey Feedback v2", then the button marked "Manage UserData".
![surveyquestions]({{site.baseurl}}/baylegal/imagesRecipe_UserData.png)

Once you're there, you can create new surveys by selecting "simple single line text" in the dropdown menu, and using the key `Questions [label]` replacing `[label]` with a lowercase text label for the survey. 
You'll also need to create an intro sentence, using the key `Intro [label]`, and the same `label` used for the corresponding survey.

To write a survey, put your list of questions in the value box, with each question on a new line: 

```
Was the BayLegal advocate polite?
Were you able to speak to an advocate within an acceptable amount of time? 
Would you use BayLegal again?
```

By default, each question will be presented as a Yes/No question. To add a multiple choice question, include the answers in brackets (`[]`) separated with semicolons (`;`).

```
Was the BayLegal advocate polite?
What is your favorite color? [red; green; blue]
Would you use BayLegal again?
```

You can also modify surveys by editing their value boxes. Press `Save all` when you're done. 

### Statistics
The survey recipes (automations) store limited data about each survey, including the date a survey was requested, the date it was completed, each client's answers to each question, and the total surveys requested. You can see a brief summary of the survey statistics by clicking on `Activities` -> `BayLegal Survey Feedback v2`.

For a more robust analysis of survey responses, you can [export data from Frontline]({site.baseurl}/client/baylegal/frontlinecloud#exporting-data). 



