---
layout: page
title: BayLegal (2015) Documentation
---

###Activating SMS messages
SMS messages are activated automatically via Prime. The FrontlineSMS system provides alternate ways of automating messages, which can be configured via the FrontlineSMS documentation. This documentation will cover the systems developed for the 2015 TIG project.

###Prime Integration
We have built an integration that allows SMS-based appointment reminders and surveys to be dispatched directly from Prime.

The core of this integration is a public function, callFrontline()
This function takes ten arguments, in this order:

* **name** - Client's full name
* **cell** - Client's cell number. It must take the form of +14445556666 (no dashes or spaces, and prepended with the +1 country code)
* **isSms** - True/False value for whether phone number can accept SMS.
* **hasAppointment** - True/False value for whether client has appointment
* **apptDate** - Appointment Date, in Medium Date (mm/dd/yyyy) format. If not applicable, this should be replaced with an empty string ("").
* **apptTime** - Appointment Time, in hh:mm AM/PM format. If not applicable, this should be replaced with an empty string ("").
* **problem** - Problem code
* **office** - Office location for appointment. If not applicable, this should be replaced with an empty string ("").
* **survey** - Name of survey to be activated in FrontlineSMS. This is a lowercase word, such as "appointment" that corresponds to a preset survey.
* **surveyDelay** - Delay, in days, before survey is sent. Default is 0.

The API key and URL for the BayLegal FrontlineSMS account is hard-coded into this function.

##Appointment Reminders
If the hasAppointment flag is true, FrontlineSMS will create an appointment reminder. This reminder will fire twice: once upon creation, and once one business day before the scheduled appointment.

###Initial reminder
Client will receive the following SMS messages, immediately upon activating the appointment reminder:

>Appointment confirmed for [Appointment Date] at [Appointment Time] at our [Office Name] office.

>Our office is located at [Office Address].

>To reschedule or cancel your appointment, please call [BayLegal Office Phone].

>Text REMIND to get this information again.

###Reminder Loops
One business day before the scheduled appointment, the client will receive another reminder, with the same content as above.

###Subsequent Appointments
A client can only have one appointment at a time. So, if an appointment is rescheduled, a client will receive a new confirmation, and a one-business-day reminder for the **new** appointment only.

###Editing Office Address
Offices are edited in userData fields, with keys named in the format "[Office Name] Address" (e.g. "Oakland Address")
![office]({{site.baseurl}}/images/baylegal/office-addresses.png)

##Surveys


##Client Data
Client data can be found in the "People" menu, both for individual contacts, and aggregate filtered views.
![client data]({{site.baseurl}}/images/baylegal/client-data.png)
