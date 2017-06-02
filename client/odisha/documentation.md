---
title: Documentation May 2017
---

## SMS Reporting
Text message reporting has been consolidated from multiple keywords to just a single keyword: `Report`. If the person texting in is [registered in FrontlineCloud](#importing-data-into-frontline) then Frontline will automatically respond with the appropriate options.

[Demo video for SMS workflow](https://www.dropbox.com/s/aw7hr5nmzczo6fb/SIMLab%20Demo%20Video%202%20-%20SMS%20Reporting.mov?dl=0)

### Reporting Revenue Land
If a revenue inspector texts in `Report` to the enumeration number (+919439652317), FrontlineCloud will respond with the following SMS:

`What are you reporting for [circle name]? Text 1 to report pattas distributed. Text 2 to report households identified.`

The revenue inspector will then respond with `1` or `2`.

If the revenue inspector responds `1`, FrontlineCloud will respond with the following SMS:

`How many pattas distributed are you reporting for [circle name]?`

The revenue inspector will then respond with a number of pattas, representing the total number of pattas distributed (say, `100`) in the circle. FrontlineCloud will then respond with the following SMS:

`Of the [number of pattas] pattas distributed in [circle name], how many include women?`

The revenue inspector will then respond with a number of women-inclusive pattas. After that, they will receive a message from FrontlineCloud confirming the report.

#### What Happens Next
After a revenue inspector's report, FrontlineCloud updates totals for the relevant circle, stored as a contact in FrontlineCloud's database. FrontlineCloud stores the two most recent reports for each circle, and uses that (along with reporting dates) to calculate running totals for districts and tahasils, which are also stored as contacts in FrontlineCloud's database.

Finally, FrontlineCloud forwards updated reporting data (and RI contact information) to the project's Firebase database, which stores data for the web dashboard. 

#### Two-Circle Reporting
If the revenue inspector is responsible for two circles, FrontlineCloud will respond to `Report` with the following SMS:

>`Which circle are you reporting for? Text 1 for [circle one], text 2 for [circle two].`

After the revenue inspector selects a circle, the reporting proceeds as normal.

### Recurring Reports
Tahasildars and District Collectors can receive regular reports for progress on patta distribution. Tahasildars receive reports every 15 days, and District Collectors receive reports every 30 days. Each report contains data for household identification and patta distribution progress over the last 15/30 days. Tahasildars and District Collectors can opt-out by texting `cancel`.

## FrontlineCloud Structure
FrontlineCloud stores data on staff to enable automations when a revenue inspector texts in. FrontlineCloud also stores data on ongoing revenue by circle, district, and tahasil, to enable running totals and easy access to the data via SMS. (The data that powers the dashboard is stored in a [Firebase instance](#firebase-and-dashboard).)

Data on staff and revenue reporting are each stored as `People`.

### Staff
Staff have the following required fields:

* `Type: Person`
* `Role:` Should be `RI`, `Tahasildar`, `Collector`, or `Landesa`
* `District`
* `Tahasil` (For Tahasildars and RIs. Tahasildars responsible for a second tahasil may have a `Tahasil2` field.)
* `Circle` (For RIs. RIs responsible for a second circle may have a `Circle2` field.)

### Circles
Circle names are written in lowercase, in the format: `circle | tahasil | district`. Each Circle has a `Type` of `Circle`

Each Circle has a randomly generated number in the field `Mobile Number`, due to a FrontlineCloud requirement that all contacts have unique mobile numbers. We do not not use the `Mobile Number` field in any of our automations.

Circles include fields for `pattas distributed` and `households identified`, along with the date each was reported. Circles also store the previous report data for each `pattas distributed` and `households identified`, along with their report dates, which we use to calculate running tahasil and district totals.

### Tahasils and Districts
Tahasil and District names are written in lowercase, in the format: `tahasil | district` and `district`, respectively.

Each Tahasila and District has a randomly generated number in the field `Mobile Number`, due to a FrontlineCloud requirement that all contacts have unique mobile numbers. We do not not use the `Mobile Number` field in any of our automations.

Tahasils and Districts include fields for `running pattas distributed` and `running households identified`, along with a `Last Reported` date that stores when an recurring report was last sent to a Tahasildar or Collector. Every time a new recurring report is sent, the running totals reset to zero.

### Importing Data into Frontline
To import data into Frontline, use the [data entry spreadsheet](https://docs.google.com/a/simlab.org/spreadsheets/d/160vuvuWjkGlV5mB58NEy0nufCg9FAB6EdBU1GxKgb9k/edit?usp=drive_web). The spreadsheet has a series of entry sheets, for adding new Districts, Tahasils, Circles, Collectors, Tahasildars, and RIs. 

The spreadsheet also has a `Scratch` sheet, where you can format your raw data correctly before moving it to an entry sheet. 

The best way to import data is to work through one sheet at a time, formatting the data in the `Scratch` sheet before pasting it into the appropriate entry sheet. New entries should be added to the *bottom* of each sheet, and they will be automatically imported into Frontline. Updated entries can also be added by writing the new entry at the bottom of the appropriate sheet. 

The data entry spreadsheet uses Google Sheets' data validation, to guard against misspellings and other data inconsistencies. When entering data, please remember the following:

* **Enter districts first, then tahasils, then circles.** When adding a new district, add the district name into the `Districts` sheet first, then add the Tahasils into the `Tahasils` spreadsheet, making sure you select the correct district for each new entry.

* **If you copy and paste from the scratch sheet into an entry sheet, use `Edit -> paste special -> Paste Values only`**. Pasting with values only into the entry sheets will ensure that the dropdown menus for tahasils and districts are not erased, and that the data validation will continue to work. 

* **Fill out an entire row before moving on to the next one.** The data entry automations work when new rows are added, so you only have one chance to ensure that the entry is complete and correct.

* **Identify and account for staff who are responsible for more than one tahasil or circle.** Tahasildars who are responsible for more than one tahasil, and RIs who are responsible for more than one circle need to be accounted for before pasting into the entry sheet. You can do this by entering the second tahasil or circle into the `Tahasil2` or `Circle2` column, respectively. It doesn't matter which is first and which is second, but you **must** make sure this is done for each Tahasildar or RI with two areas of responsibility. If a Tahasildar with two tahasils is entered on two different rows instead of one, only one entry will be recorded in FrontlineCloud and on the dashboard.


## Firebase and the Dashboard
FrontlineCloud passes SMS reporting data into Firebase, a cloud database service owned by Google. 

**Firebase**
[Demo video for firebase and data entry spreadsheet](https://www.dropbox.com/s/ytxn4i1sg1k1f9h/SIMLab%20Demo%20Video%203%20-%20Data%20Storage.mov?dl=0)


Firebase powers our [dashboard](http://simlab.org/client/odisha/dashboard.html), which lets collectors, tahasildars, and Landesa staff view real time updates on the land titling process.

**Dashboard**
[Demo video for dashboard (uses old dashboard design)](https://www.dropbox.com/s/adjm5etb10mu2g7/SIMLab%20Demo%20Video%201%20-%20Dashboard.mov?dl=0)

##URLs
In addition to the main dashboard, individual dashboards for districts and tahasils can also be accessed directly via their URLs. 

The format for District URLs is `http://simlab.org/client/odisha/dashboard.html#!/district_name`

The format for Tahasil URLs is
`http://simlab.org/client/odisha/dashboard.html#!/district_name/tahasil_name`

**Please note** that district and tahasil names will need to be in lowercase, and special characters in district and tahasil names will need to be replaced. A `.` in a district or tahasil name should be replaced with a `*`, and a `space` in a district or tahasil name should be replaced with a `-`. 

For example, the tahasil `G. Udayagiri` in the district `Kandhamal` can be accessed via the URL `http://simlab.org/client/odisha/dashboard.html#!/kandhamal/g*-udayagiri`

