---
layout: page
title: Credit
---
#Problem
An estimated 2.5 billion people in lower and middle-income countries are unbanked and rely solely on cash-based transactions with little, or no access to credit and savings. Organizations and individuals alike are left unable to plan for unexpected expenditures, left to rely on informal mechanisms of borrowing and are unable to make investments in livelihood improvements such as business start up costs. The lack of financial options available to the unbanked leave these populations without any chance of upward mobility.
 
Mobile value transfer innovation is rapidly advancing, with Internet based, smartphone enabled, hip applications that allow banked populations to transfer money easier than ever before. Unfortunately the base of the economic pyramid is not ready for these applications. Card payments and smartphone-based payment applications exclude the very poor, as they often lack the financial resources, market access and technical literacy needed to purchase, obtain, and use the technology.

#Solution
Mobile value transfer technologies, such as mobile money, mobile airtime exchange, e-vouchers and other, value-increasing, accessible innovations, have the potential to provide a powerful and more distributed payments channel, using low-cost, inclusive technologies. They can support more efficient operations, clientele expansion, market diversification, increased profit and increased transparency and accountability for organizations in every sector.

#What we do
SIMLab engages directly with SMEs, organizations, governments, regulatory bodies and beneficiaries to explore and innovate locally accessible technology and implement solutions in cash-based societies. SIMLab has been working in the mobile value transfer market since 2009, and has in the last year alone, worked with over 40 organizations to introduce advanced mobile money management tools, allowing the organizations to increase efficiencies, cut down on unnecessary costs and risks and expand their customer base.  We aid partners on the ground to enable market expansion, disparate stakeholder coordination and appropriate uses of technology with a global-first, participatory approach. We work to offer an end-to-end solution from a multidisciplinary lens and bring advanced market insight and new solutions into the most challenging, low-resource settings.
 
We’ve seen the positive effects associated with mobile value transfer adopted by businesses and organizations, trickle down to benefit clients and end users through flexible payment options, greater market opportunities, increased financial literacy and increased trust in financial processes. This in turn gives people a tool to strengthen their financial capabilities, allowing for more equal opportunities and the ability to better absorb shocks in difficult, last mile communities. 

##People
{% for person in site.staff %}
{% for tag in person.tags %}
{% if tag == "credit" %}
<a>{{person.name}}</a>
{% endif %}
{% endfor %}
{% endfor %}
