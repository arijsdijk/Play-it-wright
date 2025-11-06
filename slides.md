# Play it (w)right 

## Automated end-to-end testing in the Power Platform


# Testing


# Why do we need to test

➡️ Ensure quality

➡️ Validating requirements

➡️ Reliability 

➡️ Performance

... and more reasons

# The balance between speed and quality

➡️ Pressure for quick delivery

➡️ Importance of quality

➡️ Effective testing processes


# CI/CD

✅ Continuous Integration

✅ Continuous Delivery

🚀 Continuous Testing




# Live monitor

## Live monitor your apps




# What’s live monitor?

✅ Live monitor your apps

✅ Automated logging of actions and errors

✅ Extend monitoring by using the Trace function

✅ Share monitor session to collect data from multiple users

💡 Application Insights



# Where to find?

➡️ Advanced tools  ➡️ Open live monitor

![Open Live Monitor](/assets/1-live-monitor-open.gif)



# How to use?

➡️ Start session ➡️ Use app ➡️ See results

![Use Live Monitor](/assets/2-live-monitor-use.gif)




# More details

➡️ Click item ➡️ Right pane opens ➡️ See details

![Use Live Monitor](/assets/3-live-monitor-details.gif)




# Invite to monitor session

➡️ Click Invite (top right) ➡️ Enter name/address ➡️ Copy link and share with user

![Use Live Monitor](/assets/4-live-monitor-invite.gif)



# Collect data from end users

➡️ Click Live monitor ➡️ Connect user **or** ➡️ Copy Live monitor link

![Use Live Monitor](/assets/5-live-monitor-collect.gif)





# Extend live monitor

## Add custom traces to your live monitor



# What's a trace


✅ Easy to use Power FX function

✅ Can be used anywhere in your app

✅ Predefined severities

✅ Add custom information to your monitor



# How to use?

![Use Live Monitor](/assets/1-trace-simple.gif)


# Custom information

Add custom information to your trace

![Use Live Monitor](/assets/2-trace-custom.gif)


# Automated testing

## We are already good at automation ... let’s automate our testing



# Why automate?

✅ Faster execution of tests

✅ Consistency & reliability

✅ Faster detection of regressions

✅ Integration into CI/CD pipelines


# Test Studio

## Testing in Power Apps Studio



# Power Apps Test Studio

✅ Low-code solution for writing, organizing and automate your tests 

✅ Record your tests or write tests in Power Fx code

✅ Integrated in Power Apps Studio

💡 Automate your tests using Test Engine




# Where to find?

➡️ Advanced tools  ➡️ Open tests

![Open Test Studio](/assets/1-teststudio-open.gif)




# Record new test

➡️ New case  ➡️ Record  ➡️ Use your app 

![Record new test in Test Studio](/assets/2-teststudio-record.gif)



# However, there is a challenge

**Modern controls** and **components** will not function if you record a test 😩

![Components & modern controls in Test Studio](/assets/3-teststudio-components.gif)



# Using Power FX

You can use **Power Fx** to write your tests (works for modern controls, still not for components)

![Components & modern controls in Test Studio](/assets/4-teststudio-powerfx.gif)



# Validate Tests

Use the **Assert()** Power FX function to validate your test

![Components & modern controls in Test Studio](/assets/5-teststudio-assert.gif)


# Output options

When a testcase or testsuite is complete

![Output options Test Studio](/assets/6-teststudio-output.gif)



# Test Studio pros & cons

### Pros

➡️ Integrated in Power Apps Studio

➡️ Easy to use

➡️ Power FX on board

➡️ ALM options with Test Engine 


### Cons

➡️ Canvas Apps only

➡️ Modern controls & components

➡️ Not much output and reporting

➡️ In development



# Test engine

## Automate your tests in the power platform


# Automate using Test Engine

✅ Power Platform CLI component

✅ Export your tests from Test Studio

✅ Add a little bit of YAML magic

✅ Add functions (like screenshots or assertions)

✅ Automate via PAC CLI in your pipelines



# Run your test

Run your Test Studio test using PAC CLI

```txt
pac test run 
    --provider canvas 
    --test-plan-file your-testplan.te.yaml 
    --tenant your-tenantid-guid-value 
    --environment-id your-environmentid-guid-value
```



# Playwright

## Automate your end-to-end tests


<div style="width:148px">

![Playwright](/assets/playwright-logo.png)

</div>





# What's Playwright?

✅ Cross-browser, Cross-platform, Cross-language

✅ Easily record your tests with Codegen

✅ Automatic page inspection (DOM)

✅ Testrun information in the Trace Viewer, UI Mode and/or report function

✅ DevOps or GitHub integration

✅ Open-source from Microsoft

✅ For all modern web applications ... **including Business Central 🚀**



# How does it work?

1️⃣ Record a test using Codegen

2️⃣ It generates a scripted test for you (live)

3️⃣ Add custom assertions (evaluate value)

4️⃣ Runs every single line of the code

5️⃣ Checks true or false (with await)




# How to start?


1️⃣ Get the Visual Studio Code Extension

2️⃣ Initialize Playwright

3️⃣ Start recording your first test

4️⃣ Choose your browser(s) and play your test

5️⃣ Get your report




# How to start?

1️⃣ Get the Visual Studio Code Extension

![Playwright - Extension](/assets/1-playwright-extension.gif)




# How to start?

2️⃣ Initialize Playwright

![Playwright - Extension](/assets/2-playwright-init.gif)





# How to start?

3️⃣ Start recording your first test

![Playwright - Recording](/assets/3-playwright-record.gif)




# How to start?

4️⃣ Choose your browser(s) and play your test

![Playwright - Run test](/assets/4-playwright-run.gif)





# How to start?

5️⃣ Get your report

![Playwright - Get report](/assets/5-playwright-report.gif)




# Assertion 

Add additional assertions to your tests

```
await expect(page.getByTestId('status')).toHaveText('Submitted');
```



# Aria snapshot

Create aria snapshots to provide a YAML representation of the accessibility tree of a page.

```txt
await expect(page.locator('#content')).toMatchAriaSnapshot(
    - navigation:
      - list:
        - listitem:
          - link "Intro":
            - /url: /emea2025
        - listitem:
          - link "Speakers":
            - /url: /conferences-and-events/directions/emea2025/speakers
    );
```



# Screenshot 

Create and save screenshots in your test 

```
await page.screenshot({ path: 'screenshot.png' });
```



# View your tests

➡️ Headed browser

➡️ Trace Viewer

➡️ Reports

➡️ UI Mode 👀



# UI Mode

Run your tests in UI mode

```
npx playwright test --ui
```


# Continuous integration

Playwright can be run on any CI provider 

✅ GitHub Actions

✅ Azure DevOps Pipelines

✅ Docker

✅ Google Cloud Built

💯 ... and many more


# GitHub Actions

During the installation of the Playwright extension, a GitHub workflow file is created. 


# There is more ...


✅ Emulation (viewports & devices)

✅ Parallelism

✅ Accessibility testing

✅ API Testing

✅ Mock API's

✅ Visual comparisons



# Playwright & AI


✅ Playwright MCP

✅ Playwright Agent




# Links

Live Monitor <br />https://learn.microsoft.com/en-us/power-apps/maker/monitor-overview

Test Studio <br />https://learn.microsoft.com/en-us/power-apps/maker/canvas-apps/test-studio

Test Engine <br />https://learn.microsoft.com/en-us/power-platform/test-engine/overview?tabs=manual

Playwright <br />https://playwright.dev/

DemoTime <br />https://demotime.show/


