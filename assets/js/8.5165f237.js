(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{454:function(t,e,a){t.exports=a.p+"assets/img/email.1b5ca47a.png"},455:function(t,e,a){t.exports=a.p+"assets/img/CostsCSV.c4dbd564.png"},456:function(t,e,a){t.exports=a.p+"assets/img/7DaysHistory.eb85c7b6.png"},457:function(t,e,a){t.exports=a.p+"assets/img/CostPerCategory.81b02161.png"},458:function(t,e,a){t.exports=a.p+"assets/img/architecture.34c498b4.png"},459:function(t,e,a){t.exports=a.p+"assets/img/deploytoazure.e0e5d477.png"},460:function(t,e,a){t.exports=a.p+"assets/img/CreateRunAsAccount.7dd241c8.png"},461:function(t,e,a){t.exports=a.p+"assets/img/AAManifestations1.54fbdeb7.png"},462:function(t,e,a){t.exports=a.p+"assets/img/AAManifestations2.77ea88db.png"},463:function(t,e,a){t.exports=a.p+"assets/img/CreateTableRunbook.30e294ac.png"},464:function(t,e,a){t.exports=a.p+"assets/img/FollowRunbookOutput.aa1fc452.png"},465:function(t,e,a){t.exports=a.p+"assets/img/TableCreated.a7a204c7.png"},466:function(t,e,a){t.exports=a.p+"assets/img/RateCardCSV.94614d6d.png"},467:function(t,e,a){t.exports=a.p+"assets/img/RateCardCSVURI.5ccb22fa.png"},468:function(t,e,a){t.exports=a.p+"assets/img/UsageAggregates.ec6f276d.png"},469:function(t,e,a){t.exports=a.p+"assets/img/CostEmail.40d539d7.png"},780:function(t,e,a){"use strict";a.r(e);var r=a(42),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"challenge-12-azure-automation-send-me-yesterday-s-azure-cost"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#challenge-12-azure-automation-send-me-yesterday-s-azure-cost"}},[t._v("#")]),t._v(" Challenge 12: Azure Automation: Send me yesterday's Azure cost.")]),t._v(" "),r("p",[t._v("adapted from "),r("a",{attrs:{href:"https://github.com/bfrankMS/myAzureCost",target:"_blank",rel:"noopener noreferrer"}},[t._v("MyAzure Cost"),r("OutboundLink")],1),t._v(" this will send you an email with your daily Azure cost report.")]),t._v(" "),r("h2",{attrs:{id:"here-is-what-you-will-learn"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn"}},[t._v("#")]),t._v(" Here is what you will learn")]),t._v(" "),r("ul",[r("li",[t._v("How to use an Azure Automation account with PowerShell runbooks.")]),t._v(" "),r("li",[t._v("Get insights in your azure consumption for the day.")])]),t._v(" "),r("h2",{attrs:{id:"in-your-inbox-you-ll-get-a-report-each-day-of-the-usage-and-the-costs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#in-your-inbox-you-ll-get-a-report-each-day-of-the-usage-and-the-costs"}},[t._v("#")]),t._v(" In your inbox you'll get a report each day of the usage and the costs:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[r("img",{attrs:{src:a(454),alt:"daily email"}})]),t._v(" "),r("th",[r("img",{attrs:{src:a(455),alt:"cost report"}})])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("your "),r("strong",[t._v("daily cost email")]),t._v(" looks similar to this")]),t._v(" "),r("td",[t._v("sample "),r("strong",[t._v("cost report")]),t._v(" (as .csv)")])])])]),t._v(" "),r("p",[t._v("It'll also contain e.g.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[r("img",{attrs:{src:a(456),alt:"7days History"}})]),t._v(" "),r("th",[r("img",{attrs:{src:a(457),alt:"Costs Per Category"}})])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("strong",[t._v("historic data")]),t._v(" (using an Azure table)")]),t._v(" "),r("td",[t._v("Cost Per Category")])])])]),t._v(" "),r("h2",{attrs:{id:"a-look-behind-the-curtain"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#a-look-behind-the-curtain"}},[t._v("#")]),t._v(" A look behind the curtain:")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Architecture")]),t._v(" "),r("th")])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("img",{attrs:{src:a(458),alt:"Architecture"}})]),t._v(" "),r("td",[r("ul",[r("li",[t._v("ARM template for setup")]),r("li",[t._v("azure automation for daily tasks")]),r("li",[t._v(".net code to send email and analysis")]),r("li",[t._v("a storage account to hold data")])])])])])]),t._v(" "),r("h2",{attrs:{id:"table-of-contents"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#table-of-contents"}},[t._v("#")]),t._v(" Table Of Contents")]),t._v(" "),r("ol",[r("li",[r("a",{attrs:{href:"#Deploy-the-ARM-Template"}},[t._v("Deploy the ARM Template")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#Create-an-Azure-Run-As-Account"}},[t._v("Create an Azure Run As Account")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#Create-a-Table-and-see-AA-Variables-Section"}},[t._v("Create a Table and see AA Variables Section")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#Upload-a-price-sheet"}},[t._v("Upload a price sheet")])]),t._v(" "),r("li",[r("a",{attrs:{href:"#Run-a-report"}},[t._v("Run a report")])])]),t._v(" "),r("h1",{attrs:{id:"deploy-the-arm-template"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deploy-the-arm-template"}},[t._v("#")]),t._v(" Deploy the ARM Template")]),t._v(" "),r("p",[r("strong",[t._v("Click")]),t._v(" on the\n"),r("a",{attrs:{href:"https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fazuredevcollege%2Ftrainingdays%2Fmaster%2Fday1%2Fchallenge-12%2Fchallengestart%2Fchallengestart.json"}},[r("img",{attrs:{src:a(459)}})]),t._v("\nbutton.")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Values")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("em",[t._v("Region")])]),t._v(" "),r("td",[r("strong",[t._v("West Europe")])])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("Resource group")])]),t._v(" "),r("td",[t._v("rg-myAzureCost")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("O_my Azure Cost Smtp Recipient")])]),t._v(" "),r("td",[r("em",[t._v("%the destination email address%")])])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("O_my Azure Cost Smtp Sender")])]),t._v(" "),r("td",[r("em",[t._v("%the source email / sender address%")])])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("O_my Azure Cost Smtp Sender Password")])]),t._v(" "),r("td",[r("em",[t._v("%the email sender's smtp pwd%")])])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("O_my Azure Cost Smtp Server")])]),t._v(" "),r("td",[t._v("%the senders smtp server% e.g. "),r("em",[t._v("smtp.office365.com")])])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("O_my Azure Cost Smtp Server SSL Port")])]),t._v(" "),r("td",[t._v("e.g. 587 for smtp.office365.com")])]),t._v(" "),r("tr",[r("td",[r("em",[t._v("O_base Time")])]),t._v(" "),r("td",[r("strong",[r("em",[t._v("don't touch")])])])])])]),t._v(" "),r("p",[r("strong",[t._v("Deployment should take < 10mins.")])]),t._v(" "),r("h1",{attrs:{id:"create-an-azure-run-as-account"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-an-azure-run-as-account"}},[t._v("#")]),t._v(" Create an Azure Run As Account")]),t._v(" "),r("p",[t._v("For Azure Automation (AA) to perform tasks in the current subscription (e.g. gather usage information) needs an account a so called Run As Account. This account is a so called service principal (SP) which has permissions in the current subscription. To create this SP and connect it to AA please do the following:")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("[Azure Portal] -> Resource Groups -> \"rg-AzureCost\" -> 'aaazurecost...' (Your Automation Account) -> Account Settings -> Run as accounts\n")])])]),r("p",[t._v("Hit "),r("strong",[t._v("Create")]),t._v(", "),r("strong",[t._v("wait")]),t._v(" and "),r("strong",[t._v("watch")]),t._v(" the account being created:"),r("br"),t._v(" "),r("img",{attrs:{src:a(460),alt:"Create AA Run as account"}}),r("br"),t._v("\nNote that "),r("strong",[t._v("this account has an "),r("em",[t._v("'expiration date'")])]),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"optional-see-how-the-aa-run-as-account-manifests-itself-throughout-aad-and-your-subscription"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#optional-see-how-the-aa-run-as-account-manifests-itself-throughout-aad-and-your-subscription"}},[t._v("#")]),t._v(" [Optional] - See how the AA Run As account manifests itself throughout AAD and your subscription")]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[r("img",{attrs:{src:a(461),alt:"AA Run As is an Azure AD - Application Registration"}})]),t._v(" "),r("th",[r("img",{attrs:{src:a(462),alt:"...and has contributor rights to your subscription"}})])])]),t._v(" "),r("tbody",[r("tr",[r("td",[r("code",[t._v("[Azure Portal] -> Azure Active Directory -> App registrations")])]),t._v(" "),r("td",[r("code",[t._v("[Azure Portal] -> Subscriptions -> Access Control (IAM) -> View role assignments -> 'View'")])])])])]),t._v(" "),r("h1",{attrs:{id:"create-a-table-and-see-aa-variables-section"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#create-a-table-and-see-aa-variables-section"}},[t._v("#")]),t._v(" Create a Table and see AA Variables Section")]),t._v(" "),r("p",[t._v("Storing settings for Azure Automation (AA) e.g. account information, locale settings,... AA credentials and AA variables can be used.\nIn our myAzureCost sample we use:")]),t._v(" "),r("ul",[r("li",[r("strong",[t._v("AA Credentials")]),t._v(" to store the "),r("strong",[t._v("sender's account")]),t._v(" details:")]),t._v(" "),r("li",[r("strong",[t._v("AA Variables")]),t._v(" to hold "),r("strong",[t._v("settings")]),t._v(" "),r("strong",[t._v("needed")]),t._v(" for the AA "),r("strong",[t._v("Runbooks")]),t._v(" that do the usage & cost calculation")]),t._v(" "),r("li",[r("strong",[t._v("one Azure table")]),t._v(" to "),r("strong",[t._v("store")]),t._v(" processed data e.g. "),r("strong",[t._v("daily cost history")]),t._v(".")])]),t._v(" "),r("h2",{attrs:{id:"_1-inspect-the-variables"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-inspect-the-variables"}},[t._v("#")]),t._v(" 1. Inspect the variables")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("[Azure Portal] -> Resource Groups -> \"rg-AzureCost\" -> 'aaazurecost...' (Your Automation Account) -> Variables\n")])])]),r("table",[r("thead",[r("tr",[r("th",[t._v("Variable "),r("strong",[t._v("Name")])]),t._v(" "),r("th",[r("strong",[t._v("Description")])])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("myAzureCostAzureSubscriptionId")]),t._v(" "),r("td",[r("em",[r("strong",[t._v("GUID of your subscription")]),t._v(" to calculate the usage for")])])]),t._v(" "),r("tr",[r("td",[t._v("myAzureCostCultureInfo")]),t._v(" "),r("td",[r("em",[t._v("e.g. "),r("strong",[t._v("de-DE")]),t._v(" for reports (CSVs) to come with numbers, date formatted for Germans")])])]),t._v(" "),r("tr",[r("td",[t._v("myAzureCostPriceSheetURI")]),t._v(" "),r("td",[r("em",[t._v("a URI pointing to a CSV with pricing information about azure resources - we'll take care of this soon")])])]),t._v(" "),r("tr",[r("td",[t._v("myAzureCostSAContainer")]),t._v(" "),r("td",[r("em",[t._v("where your daily reports are stored - pls don't change")])])]),t._v(" "),r("tr",[r("td",[t._v("myAzureCostSATable")]),t._v(" "),r("td",[r("em",[t._v("table name to hold your daily usage costs for 'history view'")])])]),t._v(" "),r("tr",[r("td",[t._v("myAzureCostSmtpRecipient")]),t._v(" "),r("td",[r("em",[t._v("email recipient of the report")])])]),t._v(" "),r("tr",[r("td",[t._v("myAzureCostStorageAccountName")]),t._v(" "),r("td",[r("em",[t._v("where your daily reports are stored")])])])])]),t._v(" "),r("h2",{attrs:{id:"_2-create-the-azure-table-to-hold-your-daily-usage-costs-for-history-view"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-create-the-azure-table-to-hold-your-daily-usage-costs-for-history-view"}},[t._v("#")]),t._v(" 2. Create the azure table to hold your daily usage costs for 'history view'")]),t._v(" "),r("p",[t._v("There is a "),r("strong",[t._v("AA Runbook that will create an azure table for us - we only need to start it")]),t._v(":")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('[Azure Portal] -> Resource Groups -> "rg-AzureCost" -> \'aaazurecost...\' (Your Automation Account) -> "Process Automation" Runbooks -> RunBk_CreateTable -> Start\n')])])]),r("p",[r("img",{attrs:{src:a(463),alt:"Trigger Runbook Create Table"}})]),t._v(" "),r("p",[t._v("This runbook will execute PowerShell code that creates an Azure table using the AA Runas Account."),r("br"),t._v("\nA runbook is a piece of code (here PowerShell) that is being executed in an Azure runtime environment. It'll login to your subscription as the Run as Account and perform tasks against your subscription. You can follow the execution by:"),r("br"),t._v(" "),r("img",{attrs:{src:a(464),alt:"Follow runbook output"}}),r("br"),t._v("\nOnce completed you should have a new table in:")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("[Azure Portal] -> Resource Groups -> \"rg-AzureCost\" -> 'azconsumption...' (Your Storage Account) -> Tables\n")])])]),r("p",[r("img",{attrs:{src:a(465),alt:"History costs table created"}})]),t._v(" "),r("h1",{attrs:{id:"upload-a-price-sheet"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#upload-a-price-sheet"}},[t._v("#")]),t._v(" Upload a price sheet")]),t._v(" "),r("p",[r("strong",[t._v("myAzureCost")]),t._v(" can gather your daily consumption data. Additionally it "),r("strong",[t._v("can")]),t._v(" also "),r("strong",[t._v("estimate")]),t._v(" the "),r("strong",[t._v("costs")]),t._v(" that "),r("strong",[t._v("your consumption will pose")]),t._v(". To do this "),r("strong",[t._v("you need to upload a price sheet")]),t._v(" with your specific azure rates. The price sheet needs to be "),r("strong",[t._v("formatted as CSV")]),t._v(" (en-us) and contain at least 2 columns: "),r("strong",[t._v("MeterID")]),t._v(" and "),r("strong",[t._v("MeterRates")]),t._v(".")]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Annotation")]),t._v(": "),r("strong",[t._v("Every azure resource in each region has a MeterID")]),t._v(" (GUID) that uniquely identifies it. When you query the usage of an azure resource the MeterID is delivered with it. "),r("strong",[t._v("The MeterID translates to a price")]),t._v(" -> MeterRates - e.g.:")])]),t._v(" "),r("table",[r("thead",[r("tr",[r("th",[t._v("MeterId")]),t._v(" "),r("th",[t._v("MeterName")]),t._v(" "),r("th",[t._v("MeterRates")]),t._v(" "),r("th",[t._v("MeterRegion")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("793843d0-d081-4934-9782-ee92505c56cb")]),t._v(" "),r("td",[t._v("D2 v3")]),t._v(" "),r("td",[t._v("0.1011..")]),t._v(" "),r("td",[t._v("EU West")])])])]),t._v(" "),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(": "),r("strong",[t._v("Price information for Azure resources")]),t._v(" is accessible through the "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/cost-management-billing/manage/usage-rate-card-overview#azure-resource-ratecard-api-preview",target:"_blank",rel:"noopener noreferrer"}},[r("strong",[t._v("RateCard API")]),r("OutboundLink")],1),t._v("."),r("br"),t._v("\n[optional] If you want to dig into some details go "),r("a",{attrs:{href:"https://github.com/bfrankMS/myAzureCost/tree/master/SetupChallenges/GenerateAPriceSheet",target:"_blank",rel:"noopener noreferrer"}},[t._v("here for a sample"),r("OutboundLink")],1)])]),t._v(" "),r("p",[r("strong",[t._v("I'll provide a sample price list for you")]),t._v(".  "),r("a",{attrs:{href:"./challengestart/Sample_PriceSheet_EN.csv"}},[t._v("day1\\challenge-12\\challengestart\\Sample_PriceSheet_EN.csv")])]),t._v(" "),r("p",[t._v("Upload this to your storage account:")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("[Azure Portal] -> Resource Groups -> \"rg-AzureCost\" -> 'azconsumption...' (Your Storage Account) -> Containers -> 'consumption'\n")])])]),r("p",[r("img",{attrs:{src:a(466),alt:"Pricelist on storage account"}})]),t._v(" "),r("p",[r("strong",[t._v("Generate a URI with a Read only SAS token (e.g. expiry +2 years) for this file")]),t._v(" (when you have done "),r("RouterLink",{attrs:{to:"/day1/challenge-06/"}},[t._v("challenge 6")]),t._v(" you know how to do this 😉)")],1),t._v(" "),r("p",[r("strong",[t._v("Copy & paste the URI (with the SAS token)")]),t._v(" into the "),r("strong",[t._v("AA variable 'myAzureCostPriceSheetURI'")]),t._v(" so that runbooks can download the pricesheet:")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("[Azure Portal] -> Resource Groups -> \"rg-AzureCost\" -> 'aaazurecost...' (Your Automation Account) -> Variables\n")])])]),r("p",[r("img",{attrs:{src:a(467),alt:"pricelist URI in AA variables"}})]),t._v(" "),r("h1",{attrs:{id:"run-a-report"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#run-a-report"}},[t._v("#")]),t._v(" Run a report")]),t._v(" "),r("p",[t._v("Here you'll "),r("strong",[t._v("kick off the runbooks to test your myAzureCost implementation")]),t._v(". You'll also might "),r("strong",[t._v("want")]),t._v(" to "),r("strong",[t._v("link")]),t._v(" the "),r("strong",[t._v("runbook")]),t._v(" to a "),r("strong",[t._v("schedule")]),t._v(" to receive a "),r("strong",[t._v("daily report")]),t._v(".")]),t._v(" "),r("h2",{attrs:{id:"gather-your-daily-usage-runbook"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#gather-your-daily-usage-runbook"}},[t._v("#")]),t._v(" Gather your daily usage Runbook")]),t._v(" "),r("p",[t._v("Start the "),r("strong",[t._v("AA Runbook")]),t._v(" that will "),r("strong",[t._v("gather")]),t._v(" the azure "),r("strong",[t._v("usage for the previous day")]),t._v(" it'll "),r("strong",[t._v("save")]),t._v(" it as "),r("strong",[t._v("CSV")]),t._v(" (en-us) in the "),r("strong",[t._v("storage account")]),t._v(" - "),r("strong",[t._v("Leave the MYDATE parameter empty.")]),t._v(":")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('[Azure Portal] -> Resource Groups -> "rg-AzureCost" -> \'aaazurecost...\' (Your Automation Account) -> "Process Automation" Runbooks -> RunBk_GetUsageAggregates -> Start\n')])])]),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(": The "),r("strong",[t._v("optional")]),t._v(" MYDATE parameter takes a short en-us formatted time string MM/dd/yyyy -> e.g. '07/13/2020'")])]),t._v(" "),r("p",[t._v("Once the "),r("strong",[t._v("runbooks is completed")]),t._v(" you should find a "),r("strong",[t._v("result report in your storage account")]),t._v(":")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("[Azure Portal] -> Resource Groups -> \"rg-AzureCost\" -> 'azconsumption...' (Your Storage Account) -> Containers -> 'consumption'\n")])])]),r("p",[r("img",{attrs:{src:a(468),alt:"Usage aggregates of previous day in sa"}})]),t._v(" "),r("h2",{attrs:{id:"send-cost-report-email"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#send-cost-report-email"}},[t._v("#")]),t._v(" Send cost report email")]),t._v(" "),r("p",[t._v("As the previous runbook has calculated the azure consumpution for a day and stored it on our storage account. We can now start the "),r("strong",[t._v("AA Runbook")]),t._v(" that will do a "),r("strong",[t._v("cost estimation")]),t._v(" and "),r("strong",[t._v("send")]),t._v(" it as email the recipient - "),r("strong",[t._v("Leave the MYDATE parameter empty.")]),t._v(":")]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v('[Azure Portal] -> Resource Groups -> "rg-AzureCost" -> \'aaazurecost...\' (Your Automation Account) -> "Process Automation" Runbooks -> RunBk_SendCostEmail -> Start\n')])])]),r("blockquote",[r("p",[r("strong",[t._v("Note")]),t._v(": The "),r("strong",[t._v("optional")]),t._v(" MYDATE parameter takes a short en-us formatted time string MM/dd/yyyy -> e.g. '07/13/2020'")])]),t._v(" "),r("p",[t._v("Once the "),r("strong",[t._v("runbooks is completed")]),t._v(" you should receive an "),r("strong",[t._v("email")]),t._v(" with the "),r("strong",[t._v("costs & graphs")]),t._v(" calculated and some reports attached as CSV:"),r("br"),t._v(" "),r("img",{attrs:{src:a(469),alt:"Cost email"}})]),t._v(" "),r("p",[r("strong",[t._v("Congratulations!")]),t._v(" "),r("strong",[t._v("and wait for tomorrows email 😃")])])])}),[],!1,null,null,null);e.default=s.exports}}]);