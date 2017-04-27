---
layout: fullwidth
headerimage: "/images/header/services_header.png"
---

# Appointment Reminders Documentation

* [Overview of features](#overview-of-features)
* [Activation from Prime](#activation-from-prime)
    * [Using Prime menus](#using-prime-menus)
    * [Rescheduling and multiple appointments](#rescheduling-and-multiple-appointments)
* [What happens in Frontline](#what-happens-in-frontline)
    * [Receiving API requests](#receving-api-requests)
    * [Initial appointment reminder](#initial-appointment-reminder)
    * [Follow-up appointment reminder](#follow-up-appointment-reminder)
    * [Manual appointment reminder](#manual-appointment-reminder)
    * [Referral reminder](#referral-reminders)
    * [Editing office data](#editing-office-data)
    * [Sending client notes](#sending-client-notes)
    * [Unused but available features](#unused-but-available-features)
    * [Recipe map](#recipe-map)

## Overview of features
This feature lets BayLegal staff send appointment reminders to clients. FrontlineCloud stores data about BayLegal's offices (such as address and phone number), and passes that information to clients who have appointments at that office. Clients also receive a reminder one business day before the appointment. 

BayLegal staff can also use this feature to send custom referrals and referral reminders to clients. 

## Activation from Prime
*For more general information about the Prime integration with Frontline, see this page*

### Using Prime Menus

To send an SMS appointment reminder to a client, navigate to the "Intake page 2" tab on the Client form in Prime. There, you'll find a button on the bottom row: "SMS Reminder". Click it.

![SMS]({{site.baseurl}}/images/baylegal/baylegal_smsreminder1.jpg)

You'll then be taken to a second form; some of the fields are already populated.

![SMS]({{site.baseurl}}/images/baylegal/baylegal_smsreminder2.jpg)

To make a reminder for an appointment at a BayLegal office, fill in the rest of the fields ("Send extra SMS note to client" is optional). If you're making an external referral, leave the office dropdown blank, and write the referral information in the "Send extra SMS note to client" field.

Hit "Send SMS Reminder" when you're done. You'll get an alert that says "success", which indicates that FrontlineCloud has received the request. Please note that if the client's mobile number is not marked "Safe", FrontlineCloud will not send any text messages to that number.

### Rescheduling and multiple appointments
A client can only have one appointment and one referral at a time (a client can have both an active appointment and an active referral, but not two active appointments). Scheduling a new appointment will overwrite the old reminder.

To reschedule an appointment, use the same procedure as scheduling a new appointment. The client will receive a new notification, and a reminder one business day prior to the **new** appointment only.

## What happens in Frontline

### Receiving API requests
Frontline receives an API request from Prime with the relevant appointment data. If the `hasAppointment` flag is true, FrontlineSMS will create an appointment reminder. This reminder will fire twice: once upon creation, and once one business day before the scheduled appointment. Appointment reminders include the following variables:

```
number: '+19175551234', [must include +1]
hasSMS: true
hasAppointment: true
apptDate: mm/dd/yyyy
apptTime: hh:mm AM/PM
office: name of office
problem: [optional problem code]
extraNote [optional extra note]
```

### Initial appointment reminder
Immediately upon activating the appointment reminder, the client will receive the following SMS messages:

`Appointment confirmed for [Appointment Date] at [Appointment Time] at our [Office Name] office.`

`Our office is located at [Office Address].`

`To reschedule or cancel your appointment, please call [Office Phone].`

`Text REMIND to get this information again.`

### Follow up appointment reminder
One business day before the scheduled appointment or referral, the client will receive another reminder, with the same content as above.

### Manual appointment reminder
Clients with an appointment can text `remind` to Frontline at any time to receive information about their appointment. 

### Referral reminder
Referral reminders largely look the same as appointment reminders. Instead of the above messages, a client will receive:

`You have been given a referral from Bay Area Legal Aid. Your appointment is at [appointment date] on [appointment time].`

`Here are your referral details: [referral information from extra note]`

### Editing office data
Appointment reminders draw on data about BayLegal offices, which are stored in Frontline, under the recipe collection's `userData`. 

Editing or adding new offices can be done by modifying the `userData`. The process for doing so is a little convoluted: click on *Activities* in the main Frontline menu, then replace `/activities` in the URL with `/recipeManager` and hit Enter. Click on "Reminder Recipes", then the button marked "Manage UserData".

New offices can be created in `userData`, with keys named in the format `Address [Office Name]` (e.g. `Address Oakland`). Similarly, data about office phone numbers are stored in `userData`, with the format `Phone [Office name]`. The "office" string passed to callFrontline() must match the office prefix in the userData. Strings are case sensitive.

![office]({{site.baseurl}}/images/baylegal/office-addresses.png)

### Unused but available features
* **Document Reminders.** Clients can be reminded to bring certain documents to their appointment. To do so, add a `problem` field to the Frontline API call, which should contain a problem code. Then, in `userData`, corresponding document requirements can be filled in with the pattern `Docs [Problem Code]` (e.g. `Docs 43`)

* **DV Safety Filter.** If Frontline receives a "true" (-1) value for the `dv` field in the incoming API request, a follow-up reminder (1 business day before) will not be sent to the client. The client will still receive the immediate reminder.



