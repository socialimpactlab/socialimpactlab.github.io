---
layout: fullwidth
headerimage: "/images/header/services_header.png"
---
# Prime Documentation

## Prime Integration
We have built an integration that allows SMS-based appointment reminders and surveys to be dispatched directly from Prime.

The core of this integration is a public function, callFrontline()
This function takes one argument, an Object containing key/value pairs. These can be customized according to your particular needs. 

Some of the key/value pairs used in this integration are: 

* `name` - Client's full name
* `number` - Client's cell number. It must take the form of +14445556666 (no dashes or spaces, and prepended with the +1 country code)
* `isSms` - True/False value for whether phone number can accept SMS. Note that in Prime, this value is obtained via a checkbox, so the potential values are -1 (true) or 0 (false)
* `hasAppointment` - True/False value for whether client has appointment
* `apptDate` - Appointment Date, in Medium Date (mm/dd/yyyy) format. 
* `apptTime` - Appointment Time, in hh:mm AM/PM format. 
* `problem` - Problem code
* `office` - Office location for appointment. 
* `survey` - Name of survey to be activated in FrontlineSMS. This is a lowercase word, such as "appointment" that corresponds to a preset survey.
* `surveyDelay`- Delay, in days, before survey is sent. Default is 0.
* `extraNote` - An extra note to be sent to client.

You must pass all arguments to the function whenever it is called. To not include an argument, pass it as a blank string: "".

### Connecting Prime to FrontlineCloud
The callFrontline() function in Prime is hardcoded with the URL and FrontlineCloud API key. New API keys can be provisioned from Frontline by clicking on the gear symbol and selecting `API Web Services and Integrations`.

#### API Payload in FrontlineCloud
FrontlineCloud accepts incoming requests in JSON. It has two required fields: apiKey and payload. The variables in the above function are passed in via payload, which accepts arbitrary keys and values.

```
  {
    'apiKey': 'YOUR API KEY HERE',
    'payload':
      {
        'key': 'value',
        'foo': 'bar',
        ...
      }
  }
```

In Frontline, payload values are called with the FLang syntax `trigger.payload.key`.


