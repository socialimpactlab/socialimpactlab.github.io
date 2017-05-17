---
layout: post
title: "Making complexity friendly"
date: 2016-07-19 3:24:00
categories: [blog]
author: Keith Porcaro
---
Last year, SIMLab completed a [project](http://simlab.org/blog/2015/05/21/first-resort/) with DC Public Library (DCPL) to find out how the library could deliver and maintain good information on social services in DC. Funded by the Knight Foundation’s [Prototype Fund](https://www.knightfoundation.org/grants/201450257/), this project sparked a prolonged investigation into how the American social safety net is constructed. What follows is a rundown of what we did.

Prior to the project, much of DCPL’s engagement with people seeking social services was ad hoc—the library had over two dozen branches and one recently hired social worker. So, when investigating how the library could deliver good information, we first had to investigate what good information actually looked like.

Our investigation first revealed that a single perfect referral was usually a myth. Clients instead tended to need multiple, loosely related services—and they might not know it. On top of that, a lengthy, comprehensive intake is unrealistic to conduct at a public reference desk, particularly with a librarian who isn’t (and isn’t expect to be) a trained social worker. Instead, a librarian might have five minutes to ask a few clarifying questions in response to a story, and from there, deliver as much useful information as possible. So, we had to find questions that would most efficiently deliver good information to a library patron, given a certain story.

This, ultimately, isn’t a technology problem. Rather, it’s an information architecture problem,&mdash;and when it comes to delivering the information, a process problem. SIMLab and DCPL spent much of the project period interviewing organizations across the social services space, investigating pain points with intake and referral, and trying to figure out where the library best fit into this system.

![workshop]({{site.baseurl}}/images/post_images/workshop.jpg)    
*Workshopping questions at DC Public Library (photo credit: SIMLab)*

To arrive at what these questions might be, SIMLab and DCPL mapped out all of the potential service types a given story might implicate, and then interrogated experts on what would send a person to one service or another, or what would disqualify them from a block of services. We also conducted collaborative workshops to build and refine question flows, service taxonomies, and referral paths. Those questions, filtered for redundancy, necessity, and sensitivity, formed our prototype question flows: 3-10 multiple choice questions, of which a patron might be asked up to five. Then, of course, we had to find a way to ask them.

In order to present these questions, and translate them into answers, we had to build—or find—a tool. To deliver a tool that librarians could maintain on their own, we ended up doing a mix of building and finding, wiring together a handful of open-source projects into a custom tool.

We called our tool [Friendly](http://github.com/keithporcaro/friendly), and it’s a prototype tool that enables non-programmers to build and modify question-and-answer applications without code, and deploy them without access to the internet. We were motivated to build it by the belief that non-programmers shouldn’t have to rely on programmers for building and modifying simple technical tools. Friendly is a hobby project, and it’s an early version, but we think that it could be a useful foundation for organizations looking for a simple way to build intake forms with a bit of complexity to them. 

Friendly was designed to help non-programmers build question-and-answer applications that use more complicated logic than you might find on other forms, and use those applications to build simple documents that change based on a user’s answer. It uses a rules engine to help users build questions by combining simple rules into more complex ones. The generated application can live on a website or in an offline kiosk–no server required. Finally, it can collect the data a questionnaire generates and pass it on to another technology system.

![Friendly screenshot]({{site.baseurl}}/images/post_images/friendly.jpg)    
*A sample question with rules in Friendly*

With this construction, questions common to multiple stories&mdash;such as “Are you a veteran?”&mdash;could appear in multiple questionnaires, just by adding another rule. We felt that this was not only easier to keep track of and maintain, but hewed more closely to how interviews actually take place—rather than following a flowchart, trained experts use questions to fill out a client’s story, and then evaluate from there.

Friendly is usable now, and is part of our work to help people express complexity in clearer, more accessible ways. Most recently, [Mississippi’s Access to Justice Commission](http://www.msatjc.org/) and [Justice Codes](http://justicecodes.org/) built and used a Friendly-generated application to manage intake at a walk-in expungement clinic.

Community organizations, like libraries, can be valuable assets in helping vulnerable people in cities find help. In order to do so, however, these organizations need to be empowered with expertise and tools to direct people to help. To move projects like this one from prototype into reality requires more than just a tool&mdash;we need to solve a number of related information and process problems, from building data standards and service taxonomies, to keeping information current and well-maintained. These problems are difficult, numerous, and worthwhile. At SIMLab, these challenges energize us, and we’re eager to tackle them.

If you’re interested in using or contributing to Friendly, are building systems to help connect people to services, or want to improve an existing system, [reach out](hello@simlab.org)&mdash;we’re happy to help. You can also see and use Friendly’s code, and offer your own contributions, in its Github [repo](http://github.com/keithporcaro/friendly).

Helping people find the services they need takes not just a one-time infusion of resources, but a continuing commitment, whether from government, donors, collective community efforts, or all three. We may not be able to make a complex system simple&mdash;life is complex, after all&mdash;or make everyone an expert. But we can help reduce the cost of expertise, and hopefully make this complex system just a bit more friendly. 