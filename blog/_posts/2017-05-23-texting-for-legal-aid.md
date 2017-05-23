---
layout: post
title: "Sharing our work on texting for legal aid"
date: 2017-05-23 13:00:00
categories: [blog, feature]
teaseimage: /images/post_images/baylegal.jpg
teaseimage-alttext: "papers"
author: Keith Porcaro
excerpt: "Last month, we concluded a project with Bay Area Legal Aid, the Bay Area's largest provider of legal support for low-income residents. This project was funded by LSC's Technology Innovation Grant program. Today, we'll share a bit of information about what the project was, how we did it, and how you can replicate it."
---
Last month, we concluded a project with [Bay Area Legal Aid](https://baylegal.org/), the Bay Area's largest provider of legal support for low-income residents. This project was funded by LSC's Technology Innovation Grant program. Today, we'll share a bit of information about what the project was, how we did it, and how you can replicate it.

## What we did
The focus of our project supported BayLegal's Legal Advice Line (LAL), a free legal hotline for low-income Bay Area residents. Using FrontlineCloud, we designed and implemented appointment reminders and client surveys. Because SIMLab wouldn't be involved in this project forever, and BayLegal's requirements would likely evolve over time, we took care to build tools that would be editable by BayLegal staff, and wrote exhaustive documentation on how to do so.

## FrontlineCloud customizations
For this project, we used FrontlineCloud (disclosure: SIMLab owned and operated FrontlineCloud until December 2014). Frontline offers a powerful interface called "recipes". Recipes enable users to build customized automations that can be triggered via text message, API calls, or on a timed schedule. Recipes can also be chained together in collections, which allows us to build complex interactions customized for individual users. Finally, and perhaps best of all, recipe collections can be exported and imported, enabling other users to take advantage of the automations we've built. 

Today, we're making those collections available for download. Below is a brief rundown of the features we developed:

## Case management integration
BayLegal's case management system (Prime) runs on an older version of Microsoft Access/SQL Server, on a server hosted in BayLegal's office, and using a Microsoft Access front-end for accessing the data..  Using Access meant that we could create new buttons and features with only a little bit of new code. So, with the help of an open source library or two, we managed to find a way to send data from the Prime case management system to FrontlineCloud. (FrontlineCloud is also capable of sending data *to* systems like this via APIs. Here, we only set up a one-way connection, because of time and quirks of the particular case management system setup.) This meant that SMS could be more easily integrated into LAL staff workflows: surveys and appointment reminders could be triggered without ever having to leave the case management system. 

Because the SMS line is not always monitored, and to redirect people to the main Legal Advice Line, we make sure that everyone is directed to a phone number where they can reach a person.

## Appointment Reminders
To trigger an appointment reminder, staff visit a special screen in their case management system, pre-filled with some information about the client. Staff fill in an appointment time and date, select an office from the dropdown menu, add an extra note if needed, and send the information on.

That information is passed to Frontline, which sends one reminder to the client right away, and a second reminder one business day before the appointment (giving the client time to reschedule if need be). The reminder includes the address and phone number of the office the client is scheduled to visit. Data about office addresses and phone numbers are stored in FrontlineCloud, where they can be easily edited by non-technical staff. 

Clients can also trigger a manual reminder at any time by texting in `remind`. In the recipes for download, we've included a feature that can remind clients of what documents they need to bring, tailored to the specific type of case. For this initial period, we haven't used the feature, but instructions to activate it are in the documentation.

Late in the project, we noticed that LAL staff were using the appointment reminders feature to create reminders for outside referrals. We thought this was a great and unexpected use of the system, so we added a twist to help: leaving the office dropdown blank would cause Frontline to automatically recognize the request as a referral rather than an appointment with BayLegal, and send appropriately tailored reminders.

Perhaps surprisingly, appointment reminders didn't appear to have much of an impact on the no-show rate, which hovered around 10%. It may be that this is about as low a no-show rate as could reasonably be expected. But the reminders help ensure that clients have all the information they need for their appointments, in a form they can reference later, instead of just being told once on a phone call.

## Client surveys
To trigger client surveys, staff visit another screen in their case management system, where they can select the type of survey to send to a client. A keyword corresponding to a particular survey is sent to Frontline, which handles the administration of the survey itself, including asking the client permission. The survey questions are stored in FrontlineCloud, where they can be easily edited by non-technical staff. Survey questions can be yes/no or multiple-choice: we prioritized structured questions to make analysis easier. Data from survey answers are stored in Frontline, where they can be exported to a spreadsheet. 

We've been running post-call surveys for about a year, and have seen about a 40% survey completion rate, which we're really happy with. We'll be keen to see the success of other SMS-based surveys, such as surveys for clients after they've completed a long-term engagement. 

## Replicating the project
To replicate the project, you'll need an account with [FrontlineCloud](http://cloud.frontlinesms.com). You can download the recipe collections we used for this project [here](url for recipes). We're working with FrontlineSMS to make access to these collections even easier: expect an announcement in the coming weeks about how to do that. In the meantime, if you'd like help setting this project up in your own organization, don't hesitate to [reach out to us](mailto:hello@simlab.org).